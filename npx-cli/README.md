# new-vibe-kanban

> Community fork of [vibe-kanban](https://github.com/BloopAI/vibe-kanban) with full project functionality preserved (the upstream project sunset its kanban routes to an export-only page; this fork reverts that change).

## Quick Start

Run new-vibe-kanban without installation:

```bash
npx new-vibe-kanban
```

This launches the application locally and opens it in your browser.

Helpful entrypoints:

```bash
npx new-vibe-kanban --help
npx new-vibe-kanban --version
npx new-vibe-kanban review --help
npx new-vibe-kanban mcp --help
```

## How it works

The npm package is a thin CLI wrapper. On first run it downloads the appropriate platform-specific binaries (built from this fork) from the project's GitHub Releases page and caches them under `~/.new-vibe-kanban/`.

## Supported Platforms

- Linux x64
- Linux ARM64
- Windows x64
- Windows ARM64
- macOS x64 (Intel)
- macOS ARM64 (Apple Silicon)

## Environment

- `NEW_VIBE_KANBAN_LOCAL=1` — use locally built binaries from `npx-cli/dist/` (after running `./local-build.sh`)
- `NEW_VIBE_KANBAN_DEBUG=1` — verbose error output

The legacy `VIBE_KANBAN_LOCAL` and `VIBE_KANBAN_DEBUG` variables are still honored.

## Source

Source repository: https://github.com/russosalv/new-vibe-kanban
