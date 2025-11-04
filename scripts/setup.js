#!/usr/bin/env node
const { run, fileExists } = require('./utils');
const fs = require('fs');

function safeCreate(file, content) {
  if (fileExists(file)) {
    console.log(`[setup] ${file} exists — skipping`);
    return;
  }
  fs.writeFileSync(file, content, 'utf8');
  console.log(`[setup] Created ${file}`);
}

(async function main() {
  try {
    console.log('[setup] Installing dependencies (npm install) — this can take a moment');
    run('npm', ['install']);

    // Ensure tailwind/postcss dev deps present (no-op if already in package-lock)
    console.log('[setup] Ensuring Tailwind + PostCSS are installed as devDeps');
    try { run('npm', ['install', '-D', 'tailwindcss', 'postcss', 'autoprefixer']); } catch (e) { /* ignore */ }

    // Add minimal tailwind/postcss files if missing
    safeCreate('tailwind.config.js', `module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: []
};\n`);

    safeCreate('postcss.config.js', `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
};\n`);

    console.log('[setup] Done. Run `node scripts/dev.js` or `npm run dev` to start the dev server.');
  } catch (err) {
    console.error('[setup] Error:', err.message || err);
    process.exit(1);
  }
})();
