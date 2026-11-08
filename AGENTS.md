# AGENTS.md

## Cursor Cloud specific instructions

`chaz-mckinney` is a client-side Vite + React 19 + TypeScript personal portfolio SPA. No backend or database; theme preference uses `localStorage`.

Standard scripts are in `package.json` (`dev`, `build`, `lint`, `preview`, `deploy`). Run them with `npm`.

Non-obvious caveats:
- The Vite dev server uses `base: "/chaz-mckinney"` in `vite.config.ts`. Open `http://localhost:5173/chaz-mckinney/`, not the bare root.
- Routing uses hash routes, e.g. `http://localhost:5173/chaz-mckinney/#/projects`.
- There is no test runner configured.
