# Kanban Revived

> Fork of [vibe-kanban](https://github.com/BloopAI/vibe-kanban) with full project functionality preserved (the upstream project sunset its kanban routes to an export-only page; this fork reverts that change).

## Quick Start

Run kanban-revived without installation:

```bash
npx kanban-revived
```

This launches the application locally and opens it in your browser.

Helpful entrypoints:

```bash
npx kanban-revived --help
npx kanban-revived --version
npx kanban-revived review --help
npx kanban-revived mcp --help
```

## How it works

The npm package is a thin CLI wrapper. On first run it downloads the appropriate platform-specific binaries (built from this fork) from the project's GitHub Releases page and caches them under `~/.kanban-revived/`.

## Supported Platforms

- Linux x64
- Linux ARM64
- Windows x64
- Windows ARM64
- macOS x64 (Intel)
- macOS ARM64 (Apple Silicon)

## Environment

- `KANBAN_REVIVED_LOCAL=1` — use locally built binaries from `npx-cli/dist/` (after running `./local-build.sh`)
- `KANBAN_REVIVED_DEBUG=1` — verbose error output

The legacy `VIBE_KANBAN_LOCAL` and `VIBE_KANBAN_DEBUG` variables are still honored.

## Source

Source repository: https://github.com/russosalv/vibe-kanban
