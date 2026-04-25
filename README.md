<p align="center">
  <picture>
    <source srcset="packages/public/vibe-kanban-logo-dark.svg" media="(prefers-color-scheme: dark)">
    <source srcset="packages/public/vibe-kanban-logo.svg" media="(prefers-color-scheme: light)">
    <img src="packages/public/vibe-kanban-logo.svg" alt="new-vibe-kanban Logo">
  </picture>
</p>

<p align="center">Get 10X more out of Claude Code, Gemini CLI, Codex, Amp and other coding agents...</p>
<p align="center">
  <a href="https://www.npmjs.com/package/new-vibe-kanban"><img alt="npm" src="https://img.shields.io/npm/v/new-vibe-kanban?style=flat-square" /></a>
  <a href="https://github.com/russosalv/new-vibe-kanban/blob/main/.github/workflows/new-vibe-kanban-release.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/russosalv/new-vibe-kanban/new-vibe-kanban-release.yml" /></a>
</p>

<h2 align="center">
  Community fork of <a href="https://github.com/BloopAI/vibe-kanban">BloopAI/vibe-kanban</a>
</h2>

<p align="center">
  Upstream has been sunset and the kanban functionality replaced with an export-only page.
  This fork restores the full kanban experience and continues to ship local-only releases.
</p>

![](packages/public/vibe-kanban-screenshot-overview.png)

## Overview

In a world where software engineers spend most of their time planning and reviewing coding agents, the most impactful way to ship more is to get faster at planning and review.

new-vibe-kanban is built for this. Use kanban issues to plan work, locally on your machine. When you're ready to begin, create workspaces where coding agents can execute.

- **Plan with kanban issues** — create, prioritise, and assign issues on a kanban board
- **Run coding agents in workspaces** — each workspace gives an agent a branch, a terminal, and a dev server
- **Review diffs and leave inline comments** — send feedback directly to the agent without leaving the UI
- **Preview your app** — built-in browser with devtools, inspect mode, and device emulation
- **Switch between 10+ coding agents** — Claude Code, Codex, Gemini CLI, GitHub Copilot, Amp, Cursor, OpenCode, Droid, CCR, and Qwen Code
- **Create pull requests and merge** — open PRs with AI-generated descriptions, review on GitHub, and merge

![](packages/public/vibe-kanban-screenshot-workspace.png)

One command. Describe the work, review the diff, ship it.

```bash
npx new-vibe-kanban
```

## Installation

Make sure you have authenticated with your favourite coding agent. Then in your terminal run:

```bash
npx new-vibe-kanban
```

## Differences from upstream

- **Project / kanban routes restored** — upstream replaced these with an export-only page; this fork reverts that change.
- **Cloud-only features removed or hidden** — Bloop's hosted backend (`api.vibekanban.com`, `cloud.vibekanban.com`, relay tunnels) is no longer reachable, so login/org/remote-project flows that depended on it have been disabled in this fork. Local mode is what you get.
- **Binaries hosted on GitHub Releases** of [`russosalv/new-vibe-kanban`](https://github.com/russosalv/new-vibe-kanban/releases) instead of Bloop's R2 bucket.

## Documentation

Documentation is currently being rebuilt for this fork. In the meantime, see the upstream archived docs in this repository under [`docs/`](./docs).

## Support

Bug reports and feature requests: open an issue on [this repository](https://github.com/russosalv/new-vibe-kanban/issues).

## Development

### Prerequisites

- [Rust](https://rustup.rs/) (latest stable)
- [Node.js](https://nodejs.org/) (>=20)
- [pnpm](https://pnpm.io/) (>=10)

Additional development tools:
```bash
cargo install cargo-watch
cargo install sqlx-cli
```

Install dependencies:
```bash
pnpm i
```

### Running the dev server

```bash
pnpm run dev
```

This will start the backend and web app. A blank DB will be copied from the `dev_assets_seed` folder.

### Building the web app

To build just the web app:

```bash
cd packages/local-web
pnpm run build
```

### Build from source (macOS / Linux)

1. Run `./local-build.sh`
2. Test with `cd npx-cli && node bin/cli.js`

### Releasing

Push a tag matching `v*` to trigger the [`new-vibe-kanban-release`](.github/workflows/new-vibe-kanban-release.yml) workflow:

```bash
git tag v0.1.45
git push origin v0.1.45
```

The workflow builds binaries for 6 platforms, packs the npm tarball, and creates a GitHub Release with all assets attached. If the `NPM_TOKEN` repo secret is set, the [`new-vibe-kanban-publish-npm`](.github/workflows/new-vibe-kanban-publish-npm.yml) workflow then publishes the package to npm automatically.

### Environment Variables

The following environment variables can be configured at build time or runtime:

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `POSTHOG_API_KEY` | Build-time | Empty | PostHog analytics API key (disables analytics if empty) |
| `POSTHOG_API_ENDPOINT` | Build-time | Empty | PostHog analytics endpoint (disables analytics if empty) |
| `PORT` | Runtime | Auto-assign | **Production**: Server port. **Dev**: Frontend port (backend uses PORT+1) |
| `BACKEND_PORT` | Runtime | `0` (auto-assign) | Backend server port (dev mode only, overrides PORT+1) |
| `FRONTEND_PORT` | Runtime | `3000` | Frontend dev server port (dev mode only, overrides PORT) |
| `HOST` | Runtime | `127.0.0.1` | Backend server host |
| `MCP_HOST` | Runtime | Value of `HOST` | MCP server connection host (use `127.0.0.1` when `HOST=0.0.0.0` on Windows) |
| `MCP_PORT` | Runtime | Value of `BACKEND_PORT` | MCP server connection port |
| `DISABLE_WORKTREE_CLEANUP` | Runtime | Not set | Disable all git worktree cleanup including orphan and expired workspace cleanup (for debugging) |
| `VK_ALLOWED_ORIGINS` | Runtime | Not set | Comma-separated list of origins that are allowed to make backend API requests |

**Build-time variables** must be set when running `pnpm run build`. **Runtime variables** are read when the application starts.

#### Self-Hosting with a Reverse Proxy or Custom Domain

When running new-vibe-kanban behind a reverse proxy (e.g., nginx, Caddy, Traefik) or on a custom domain, you must set the `VK_ALLOWED_ORIGINS` environment variable. Without this, the browser's Origin header won't match the backend's expected host, and API requests will be rejected with a 403 Forbidden error.

```bash
# Single origin
VK_ALLOWED_ORIGINS=https://vk.example.com

# Multiple origins (comma-separated)
VK_ALLOWED_ORIGINS=https://vk.example.com,https://vk-staging.example.com
```

## Credits

This is a community fork of [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban). All credit for the original product, design, and code goes to BloopAI and its contributors.
