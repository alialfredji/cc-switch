# clswitch

Switch Claude Code between different AI providers.

## Install

```bash
npm install -g clswitch
```

## Usage

```bash
clswitch --help
clswitch providers
clswitch status

clswitch auth copilot
clswitch use copilot
clswitch copilot

clswitch auth openrouter
clswitch use openrouter anthropic/claude-sonnet-4

clswitch default
```

## Commands

- `clswitch use <provider> [model]`
- `clswitch auth <provider>`
- `clswitch default`
- `clswitch status`
- `clswitch models [provider]`
- `clswitch providers`
- `clswitch proxy <start|stop|status>`

## Providers

- **Copilot** — via `copilot-api` subprocess + local proxy
- **OpenRouter** — direct API
- **OpenAI** — coming soon
- **Ollama** — coming soon

## Config

Stored at `~/.config/clswitch/config.json`.

## Notes

- Backward compatible alias: `clswitch copilot [model]`
- `output.ts` respects `NO_COLOR` and TTY detection.
- `copilot-api` is used only as a spawned subprocess.
