const KEY_LANDMARK_INDICES = [0, 11, 12, 13, 14, 15, 16, 23, 24, 25]

let landmarkBuffer: NormalizedLandmark[][] = []

export function resetPoseBuffer(): void {
  landmarkBuffer = []
}

export function scorePose(detected: NormalizedLandmark[]): number {
  landmarkBuffer.push(detected.map(l => ({ ...l })))

  if (landmarkBuffer.length > 8) {
    landmarkBuffer.shift()
  }

  if (landmarkBuffer.length < 3) {
    return 50
  }

  const buffer = landmarkBuffer
  let totalDisplacement = 0
  let count = 0

  for (const idx of KEY_LANDMARK_INDICES) {
    if (idx >= buffer[0].length) continue
    for (let i = 1; i < buffer.length; i++) {
      const prev = buffer[i - 1][idx]
      const curr = buffer[i][idx]
      const dx = curr.x - prev.x
      const dy = curr.y - prev.y
      totalDisplacement += Math.sqrt(dx * dx + dy * dy)
      count++
    }
  }

  const avgDisplacement = count > 0 ? totalDisplacement / count : 1
  const stability = Math.max(0, 1 - avgDisplacement / 0.04)

  let totalVisibility = 0
  let visCount = 0
  const latest = buffer[buffer.length - 1]
  for (const idx of KEY_LANDMARK_INDICES) {
    if (idx < latest.length && latest[idx].visibility !== undefined) {
      totalVisibility += latest[idx].visibility!
      visCount++
    }
  }
  const avgVisibility = visCount > 0 ? totalVisibility / visCount : 0.5
  const visibilityBonus = avgVisibility < 0.4 ? avgVisibility / 0.4 : 1.0

  const score = Math.round((stability * 0.7 + visibilityBonus * 0.3) * 100)
  return Math.max(0, Math.min(100, score))
}
