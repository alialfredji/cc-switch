import type { Provider } from '../provider.js'
import type { ClaudeSettings } from '../../types.js'
import { OLLAMA_CURATED_MODELS } from './models.js'

const OLLAMA_BASE_URL = 'http://localhost:11434'

interface OllamaTag {
  name?: string
  model?: string
}

interface OllamaTagsResponse {
  models?: OllamaTag[]
}

export const ollamaProvider: Provider = {
  name: 'ollama',
  displayName: 'Ollama',
  needsAuth: false,
  needsProxy: false,
  async isAuthenticated(): Promise<boolean> {
    return true
  },
  async authenticate(): Promise<void> {
    return
  },
  getSettings(model: string): ClaudeSettings {
    return {
      ANTHROPIC_BASE_URL: `${OLLAMA_BASE_URL}/v1`,
      ANTHROPIC_API_KEY: 'ollama',
      ANTHROPIC_MODEL: model
    }
  },
  getDefaultModel(): string {
    return 'llama3.2'
  },
  async listModels(): Promise<string[]> {
    let response: Response
    try {
      response = await fetch(`${OLLAMA_BASE_URL}/api/tags`, {
        signal: AbortSignal.timeout(3000)
      })
    } catch {
      throw new Error('Ollama server not reachable at localhost:11434 — is it running?')
    }

    if (!response.ok) {
      throw new Error(`Ollama returned HTTP ${response.status}`)
    }

    const body = (await response.json()) as OllamaTagsResponse
    return (body.models ?? [])
      .map((m) => m.name ?? m.model)
      .filter((id): id is string => Boolean(id))
  },
  getCuratedModels() {
    return OLLAMA_CURATED_MODELS
  }
}
