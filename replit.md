# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

- **`artifacts/ganesh-portfolio`** (`react-vite`, served at `/`) — Recruiter-focused single-page portfolio for Ganesh Pawar (Data Analyst / ML Engineer / AI Automation Builder). Imported from a Vercel/v0 export. Stack: React 18 + Vite + Tailwind v4 + shadcn/ui + wouter + Framer Motion. All content is client-side; portfolio data lives in `src/data/portfolio.ts`. No backend or database used.
- **`artifacts/api-server`** — Pre-existing scaffold; not used by the portfolio.
- **`artifacts/mockup-sandbox`** — Pre-existing scaffold for canvas mockups.
