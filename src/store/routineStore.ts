import type { PoseData } from '../types/yoga'

const PENDING_KEY = 'yoga.pending.poses'

export function addPendingPose(pose: PoseData): void {
  try {
    const existing: PoseData[] = JSON.parse(localStorage.getItem(PENDING_KEY) || '[]')
    if (!existing.find(p => p.name === pose.name)) {
      existing.push(pose)
      localStorage.setItem(PENDING_KEY, JSON.stringify(existing))
    }
  } catch {
    // ignore
  }
}

export function removePendingPose(poseName: string): void {
  try {
    const existing: PoseData[] = JSON.parse(localStorage.getItem(PENDING_KEY) || '[]')
    const filtered = existing.filter(p => p.name !== poseName)
    localStorage.setItem(PENDING_KEY, JSON.stringify(filtered))
  } catch {
    // ignore
  }
}

export function getPendingPoses(): PoseData[] {
  try {
    return JSON.parse(localStorage.getItem(PENDING_KEY) || '[]')
  } catch {
    return []
  }
}

export function clearPendingPoses(): void {
  try {
    localStorage.removeItem(PENDING_KEY)
  } catch {
    // ignore
  }
}
