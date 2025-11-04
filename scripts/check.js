#!/usr/bin/env node
const { run, runSilent, fileExists } = require('./utils');
const argv = require('minimist')(process.argv.slice(2), { boolean: ['full'], alias: { f: 'full' } });

(async function main() {
  try {
    console.log('[check] Running preflight checks...');
    const node = runSilent('node', ['-v']).stdout.toString().trim();
    console.log(`[check] Node version: ${node}`);

    if (!fileExists('package.json')) {
      throw new Error('package.json not found');
    }

    console.log('[check] Installing dependencies (fast)');
    run('npm', ['ci'], { stdio: 'inherit' });
    console.log('[check] Running build (if present)');
    try { run('npm', ['run', 'build']); } catch (e) { console.warn('[check] build script missing or failed (non-fatal)'); }

    if (argv.full) {
      console.log('[check] Running lint (if present)');
      try { run('npm', ['run', 'lint']); } catch (e) { console.warn('[check] lint missing or failed (non-fatal)'); }
    }

    console.log('[check] All checks finished.');
  } catch (err) {
    console.error('[check] Error:', err.message || err);
    process.exit(1);
  }
})();
