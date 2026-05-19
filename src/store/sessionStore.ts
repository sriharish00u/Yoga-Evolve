import type { PoseData } from '../types/yoga'

export interface SessionConfig {
  poses: PoseData[]
  holdSeconds: number
  preset?: string
}

export interface SessionResultData {
  completedPoses: number
  totalXP: number
  avgMatchScore: number
  bestCombo: number
  durationSeconds: number
  badgesUnlocked: string[]
}

let _config: SessionConfig | null = null
let _result: SessionResultData | null = null

function loadFromStorage(): void {
  try {
    const c = sessionStorage.getItem('yoga.session.config')
    const r = sessionStorage.getItem('yoga.session.result')
    if (c) _config = JSON.parse(c)
    if (r) _result = JSON.parse(r)
  } catch {
    // ignore
  }
}

function saveConfig(): void {
  try {
    if (_config) {
      sessionStorage.setItem('yoga.session.config', JSON.stringify(_config))
    } else {
      sessionStorage.removeItem('yoga.session.config')
    }
  } catch {
    // ignore
  }
}

function saveResult(): void {
  try {
    if (_result) {
      sessionStorage.setItem('yoga.session.result', JSON.stringify(_result))
    } else {
      sessionStorage.removeItem('yoga.session.result')
    }
  } catch {
    // ignore
  }
}

loadFromStorage()

export const sessionStore = {
  setConfig(config: SessionConfig): void {
    _config = config
    _result = null
    saveConfig()
    sessionStorage.removeItem('yoga.session.result')
  },

  getConfig(): SessionConfig | null {
    return _config ? { ..._config, poses: _config.poses.map(p => ({ ...p })) } : null
  },

  setResult(result: SessionResultData): void {
    _result = result
    saveResult()
  },

  getResult(): SessionResultData | null {
    return _result ? { ..._result } : null
  },

  clear(): void {
    _config = null
    _result = null
    try {
      sessionStorage.removeItem('yoga.session.config')
      sessionStorage.removeItem('yoga.session.result')
    } catch {
      // ignore
    }
  },
}
