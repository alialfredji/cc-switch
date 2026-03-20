import { mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { SETTINGS_PATH } from './paths.js'
import type { ClaudeSettings } from '../types.js'

const MANAGED_ENV_KEYS = [
  'ANTHROPIC_BASE_URL',
  'ANTHROPIC_API_KEY',
  'ANTHROPIC_AUTH_TOKEN',
  'ANTHROPIC_MODEL',
  'CLAUDE_CODE_ATTRIBUTION_HEADER',
] as const

async function ensureSettingsDir(): Promise<void> {
  await mkdir(path.dirname(SETTINGS_PATH), { recursive: true })
}

export async function readSettings(): Promise<ClaudeSettings> {
  try {
    const raw = await readFile(SETTINGS_PATH, 'utf8')
    const parsed = JSON.parse(raw) as Record<string, unknown>
    const env = parsed.env
    if (typeof env === 'object' && env !== null) {
      return env as ClaudeSettings
    }
    return {}
  } catch {
    return {}
  }
}

async function writeSettings(settings: ClaudeSettings): Promise<void> {
  await ensureSettingsDir()

  let fullSettings: Record<string, unknown> = {}
  try {
    const raw = await readFile(SETTINGS_PATH, 'utf8')
    fullSettings = JSON.parse(raw) as Record<string, unknown>
  } catch {}

  for (const key of MANAGED_ENV_KEYS) {
    delete fullSettings[key]
  }

  const envEntries = Object.entries(settings).filter(([, v]) => v !== undefined)
  if (envEntries.length === 0) {
    delete fullSettings.env
  } else {
    fullSettings.env = Object.fromEntries(envEntries)
  }

  const tempFile = `${SETTINGS_PATH}.tmp`
  await writeFile(tempFile, JSON.stringify(fullSettings, null, 2), 'utf8')
  await rename(tempFile, SETTINGS_PATH)
}

export async function writeDefaultSettings(): Promise<void> {
  const current = await readSettings()
  const {
    ANTHROPIC_BASE_URL: _base,
    ANTHROPIC_API_KEY: _key,
    ANTHROPIC_AUTH_TOKEN: _auth,
    ANTHROPIC_MODEL: _model,
    CLAUDE_CODE_ATTRIBUTION_HEADER: _attr,
    ...rest
  } = current

  await writeSettings(rest)
}

export async function writeProviderSettings(settings: ClaudeSettings): Promise<void> {
  const current = await readSettings()
  const next: ClaudeSettings = {
    ...current,
    ...settings
  }
  await writeSettings(next)
}
