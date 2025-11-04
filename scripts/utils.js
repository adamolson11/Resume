const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd, args = [], opts = {}) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', shell: true, ...opts });
  if (res.error) throw res.error;
  if (res.status !== 0) {
    const err = new Error(`Command failed: ${cmd} ${args.join(' ')}`);
    err.code = res.status;
    throw err;
  }
  return res;
}

function runSilent(cmd, args = [], opts = {}) {
  return spawnSync(cmd, args, { stdio: 'pipe', shell: true, ...opts });
}

function fileExists(...parts) {
  return fs.existsSync(path.join(...parts));
}

function readJSON(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { return null; }
}

function writeJSON(file, obj) {
  fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

module.exports = {
  run,
  runSilent,
  fileExists,
  readJSON,
  writeJSON,
};
