# Automation scripts

This directory contains cross-platform Node.js automation scripts for repository setup, dev server management, branch push and PR creation.

Quick usage
- Setup environment and deps:
  npm run setup
- Start dev server (smart port detection):
  npm run dev
- Quick branch commit & push:
  npm run branch -- --branch "feature/name" --message "Commit message"
- Create PR (uses gh CLI if available):
  npm run pr -- --base portfolio/phase-2 --head feature/name --title "..." --body "..."
- Run QA checks:
  npm run check -- --full

Install runtime dev deps:
- minimist (used by branch.js and pr.js)
  npm install -D minimist

Notes
- Scripts are interactive when run manually, accept args for automation.
- The scripts are designed to be safe by default; you can use `--dry` with branch.js to preview actions.
