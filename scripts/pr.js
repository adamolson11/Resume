#!/usr/bin/env node
const { run, runSilent } = require('./utils');
const argv = require('minimist')(process.argv.slice(2), { string: ['base','head','title','body','reviewer'], alias: { b:'base', h:'head' }, default: { base: 'portfolio/phase-2' } });

(async function main() {
  try {
    const head = argv.head || (await runSilent('git', ['rev-parse', '--abbrev-ref', 'HEAD'])).stdout.toString().trim();
    const base = argv.base;
    const title = argv.title || `PR: ${head} → ${base}`;
    const body = argv.body || 'See changes.';
    const reviewer = argv.reviewer;

    // Try gh CLI first
    const ghCheck = runSilent('gh', ['--version']);
    if (!ghCheck.error && ghCheck.status === 0) {
      const args = ['pr', 'create', '--base', base, '--head', head, '--title', title, '--body', body];
      if (argv.reviewer) args.push('--reviewer', reviewer);
      console.log('[pr] Creating PR via gh CLI...');
      run('gh', args);
      return;
    }

    // Fallback: print web URL for user to open
    const repo = (await runSilent('git', ['config', '--get', 'remote.origin.url'])).stdout.toString().trim();
    let webRepo = repo;
    if (webRepo.startsWith('git@')) webRepo = webRepo.replace(':', '/').replace('git@', 'https://');
    webRepo = webRepo.replace(/\.git$/, '');
    const compareUrl = `${webRepo}/compare/${encodeURIComponent(base)}...${encodeURIComponent(head)}`;
    console.log(`[pr] gh CLI not available. Open this URL to create the PR in the browser:\n${compareUrl}`);
  } catch (err) {
    console.error('[pr] Error:', err.message || err);
    process.exit(1);
  }
})();
