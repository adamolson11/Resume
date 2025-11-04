#!/usr/bin/env node
const { run, runSilent } = require('./utils');

const argv = require('minimist')(process.argv.slice(2), {
  string: ['branch', 'message'],
  boolean: ['quick', 'dry'],
  alias: { b: 'branch', m: 'message', q: 'quick', d: 'dry' },
  default: { branch: '', message: '' }
});

(async function main() {
  try {
    const branch = argv.branch || `feature/auto-${Date.now()}`;
    const message = argv.message || 'WIP: automation changes';
    const dry = argv.dry || false;
    console.log(`[branch] Branch name: ${branch}`);
    if (dry) {
      console.log('[branch] Dry-run mode — no git changes will be made.');
    }

    // create and switch branch
    if (!dry) run('git', ['checkout', '-b', branch]);
    console.log(`[branch] Staged: git add .`);
    if (!dry) run('git', ['add', '.']);
    // quick commit
    if (!dry) {
      const status = runSilent('git', ['status', '--porcelain']);
      if (status.stdout && status.stdout.toString().trim()) {
        run('git', ['commit', '-m', message]);
      } else {
        console.log('[branch] No changes to commit.');
      }
      run('git', ['push', '-u', 'origin', branch]);
      console.log(`[branch] Pushed ${branch} to origin.`);
    }
  } catch (err) {
    console.error('[branch] Error:', err.message || err);
    process.exit(1);
  }
})();
