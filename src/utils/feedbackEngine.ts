export interface FeedbackMessage {
  severity: 'success' | 'warn' | 'error'
  text: string
}

export function generateFeedback(
  landmarks: NormalizedLandmark[] | null,
  _poseName: string,
  matchScore: number
): FeedbackMessage {
  if (landmarks && landmarks.length > 0) {
    const leftShoulder = landmarks[11]
    const rightShoulder = landmarks[12]
    const leftHip = landmarks[23]
    const rightHip = landmarks[24]
    const leftWrist = landmarks[15]
    const rightWrist = landmarks[16]

    if (leftShoulder && rightShoulder) {
      const shoulderDiff = Math.abs(leftShoulder.y - rightShoulder.y)
      if (shoulderDiff > 0.08) {
        return { severity: 'warn', text: 'Level your shoulders' }
      }
    }

    if (leftWrist && rightWrist && leftHip && rightHip) {
      const avgHipY = (leftHip.y + rightHip.y) / 2
      const avgWristY = (leftWrist.y + rightWrist.y) / 2
      if (avgWristY > avgHipY) {
        return { severity: 'warn', text: 'Raise your arms higher' }
      }
    }

    if (leftHip && rightHip) {
      const hipCenterX = (leftHip.x + rightHip.x) / 2
      if (Math.abs(hipCenterX - 0.5) > 0.15) {
        return { severity: 'warn', text: 'Center your hips' }
      }
    }
  }

  if (matchScore > 88) {
    return { severity: 'success', text: 'Excellent form! Hold steady' }
  }
  if (matchScore > 70) {
    return { severity: 'success', text: 'Great! Refine your alignment' }
  }
  if (matchScore > 50) {
    return { severity: 'warn', text: 'Getting closer — check your stance' }
  }
  if (matchScore > 30) {
    return { severity: 'warn', text: 'Adjust your position — follow the reference' }
  }
  return { severity: 'error', text: 'Resume position — hold still' }
}
