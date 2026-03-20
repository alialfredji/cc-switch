import type { ModelInfo } from '../../types.js'

export const OLLAMA_CURATED_MODELS: ModelInfo[] = [
  { id: 'llama3.2',                   displayName: 'Llama 3.2 3B',          description: '3B — fast, low RAM (~2 GB)' },
  { id: 'llama3.2:1b',                displayName: 'Llama 3.2 1B',          description: '1B — ultra-fast, minimal RAM (~1 GB)' },
  { id: 'llama3.1:8b',                displayName: 'Llama 3.1 8B',          description: '8B — balanced speed/quality (~5 GB)' },
  { id: 'llama3.1:70b',               displayName: 'Llama 3.1 70B',         description: '70B — high quality (~40 GB)' },
  { id: 'qwen2.5:7b',                 displayName: 'Qwen 2.5 7B',           description: '7B — strong coding + multilingual (~5 GB)' },
  { id: 'qwen2.5-coder:7b',           displayName: 'Qwen 2.5 Coder 7B',    description: '7B — code-specialised (~5 GB)' },
  { id: 'qwen2.5-coder:32b',          displayName: 'Qwen 2.5 Coder 32B',   description: '32B — best local code model (~20 GB)' },
  { id: 'mistral:7b',                 displayName: 'Mistral 7B',            description: '7B — fast European model (~4 GB)' },
  { id: 'mistral-nemo',               displayName: 'Mistral Nemo 12B',      description: '12B — 128k context (~7 GB)' },
  { id: 'gemma3:4b',                  displayName: 'Gemma 3 4B',            description: '4B — Google, vision-capable (~3 GB)' },
  { id: 'gemma3:12b',                 displayName: 'Gemma 3 12B',           description: '12B — Google, strong reasoning (~8 GB)' },
  { id: 'phi4',                       displayName: 'Phi-4 14B',             description: '14B — Microsoft, efficient reasoning (~9 GB)' },
  { id: 'phi4-mini',                  displayName: 'Phi-4 Mini 3.8B',       description: '3.8B — Microsoft, lightweight (~2 GB)' },
  { id: 'deepseek-r1:7b',             displayName: 'DeepSeek-R1 7B',        description: '7B — reasoning/CoT distill (~5 GB)' },
  { id: 'deepseek-r1:14b',            displayName: 'DeepSeek-R1 14B',       description: '14B — reasoning/CoT distill (~9 GB)' },
  { id: 'nomic-embed-text',           displayName: 'Nomic Embed Text',      description: 'Embeddings model' },
]
