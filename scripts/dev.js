#!/usr/bin/env node
const net = require('net');
const { spawn } = require('child_process');

function checkPort(port, timeout = 200) {
  return new Promise((resolve) => {
    const tester = net.createServer()
      .once('error', () => resolve(false))
      .once('listening', () => tester.once('close', () => resolve(true)).close())
      .listen(port);
    setTimeout(() => {
      // fallback if listening stalls
      try { tester.close(); } catch (e) {}
      resolve(false);
    }, timeout);
  });
}

async function startDev(port) {
  console.log(`[dev] Starting: PORT=${port} npm run dev`);
  // cross-platform spawn with env
  const env = Object.assign({}, process.env, { PORT: String(port) });
  const child = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'dev'], { stdio: 'inherit', env });
  child.on('close', (code) => {
    console.log(`[dev] dev server exited with code ${code}`);
    process.exit(code);
  });
}

(async () => {
  const preferred = parseInt(process.env.PORT || '3000', 10) || 3000;
  const fallback = preferred === 3000 ? 3001 : 3000;
  const freePreferred = await checkPort(preferred);
  if (freePreferred) {
    await startDev(preferred);
  } else {
    console.log(`[dev] Port ${preferred} is in use. Trying fallback port ${fallback}...`);
    const freeFallback = await checkPort(fallback);
    if (freeFallback) {
      await startDev(fallback);
    } else {
      console.error('[dev] Both preferred ports are occupied. Please free a port or set PORT env var.');
      process.exit(1);
    }
  }
})();
