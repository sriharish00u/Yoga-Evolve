interface NormalizedLandmark {
  x: number
  y: number
  z: number
  visibility?: number
}

interface PoseConstructor {
  new (config: { locateFile: (f: string) => string }): PoseInstance
}

interface PoseInstance {
  setOptions(options: {
    modelComplexity: number
    smoothLandmarks: boolean
    minDetectionConfidence: number
    minTrackingConfidence: number
  }): void
  onResults(callback: (results: { poseLandmarks?: NormalizedLandmark[] }) => void): void
  send(inputs: { image: HTMLVideoElement }): Promise<void>
}

interface CameraConstructor {
  new (
    video: HTMLVideoElement,
    config: { onFrame: () => Promise<void>; width: number; height: number }
  ): CameraInstance
}

interface CameraInstance {
  start(): Promise<void>
  stop(): void
}

declare const Pose: PoseConstructor
declare const Camera: CameraConstructor
declare function drawConnectors(
  ctx: CanvasRenderingContext2D,
  landmarks: NormalizedLandmark[],
  connections: number[][],
  style: { color: string; lineWidth: number }
): void
declare function drawLandmarks(
  ctx: CanvasRenderingContext2D,
  landmarks: NormalizedLandmark[],
  style: { color: string; radius: number }
): void
declare const POSE_CONNECTIONS: number[][]
