# cc-switch

Switch Claude Code between different AI providers.

## Install

```bash
npm install -g cc-switch
```

## Usage

```bash
cc-switch --help
cc-switch providers
cc-switch status

cc-switch auth copilot
cc-switch use copilot
cc-switch copilot

cc-switch auth openrouter
cc-switch use openrouter anthropic/claude-sonnet-4

cc-switch default
```

## Commands

- `cc-switch use <provider> [model]`
- `cc-switch auth <provider>`
- `cc-switch default`
- `cc-switch status`
- `cc-switch models [provider]`
- `cc-switch providers`
- `cc-switch proxy <start|stop|status>`

## Providers

- **Copilot** — via `copilot-api` subprocess + local proxy
- **OpenRouter** — direct API
- **OpenAI** — coming soon
- **Ollama** — coming soon

## Config

Stored at `~/.config/cc-switch/config.json`.

## Notes

- Backward compatible alias: `cc-switch copilot [model]`
- `output.ts` respects `NO_COLOR` and TTY detection.
- `copilot-api` is used only as a spawned subprocess.
