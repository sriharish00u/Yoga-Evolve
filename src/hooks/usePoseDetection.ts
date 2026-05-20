import { useEffect, useRef, useState, useCallback } from 'react'
import { scorePose, resetPoseBuffer } from '../utils/poseMatch'

export function usePoseDetection(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  isActive: boolean
): { landmarks: NormalizedLandmark[] | null; matchScore: number; fps: number } {
  const [landmarks, setLandmarks] = useState<NormalizedLandmark[] | null>(null)
  const [matchScore, setMatchScore] = useState(50)
  const [fps, setFps] = useState(0)

  const fpsRef = useRef<number[]>([])
  const animRef = useRef<number | null>(null)
  const cameraRef = useRef<CameraInstance | null>(null)

  const drawSkeleton = useCallback((landmarks: NormalizedLandmark[]) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const video = videoRef.current
    if (!video) return

    canvas.width = video.videoWidth || 640
    canvas.height = video.videoHeight || 480

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (typeof drawConnectors !== 'undefined' && typeof POSE_CONNECTIONS !== 'undefined') {
      drawConnectors(ctx, landmarks, POSE_CONNECTIONS, {
        color: 'rgba(179, 139, 89, 0.85)',
        lineWidth: 2.5,
      })
    }
    if (typeof drawLandmarks !== 'undefined') {
      drawLandmarks(ctx, landmarks, {
        color: '#f5deb3',
        radius: 4,
      })
    }
  }, [canvasRef, videoRef])

  const trackFps = useCallback(() => {
    const now = performance.now()
    fpsRef.current.push(now)
    if (fpsRef.current.length > 10) {
      fpsRef.current.shift()
    }
    if (fpsRef.current.length >= 2) {
      const avgDelta = (fpsRef.current[fpsRef.current.length - 1] - fpsRef.current[0]) / (fpsRef.current.length - 1)
      setFps(Math.round(1000 / avgDelta))
    }
  }, [])

  useEffect(() => {
    if (!isActive) {
      if (cameraRef.current) {
        cameraRef.current.stop()
        cameraRef.current = null
      }
      setLandmarks(null)
      setMatchScore(50)
      setFps(0)
      resetPoseBuffer()
      return
    }

    if (typeof Pose === 'undefined') {
      setMatchScore(50)
      return
    }

    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    const pose = new Pose({
      locateFile: (f: string) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${f}`,
    })

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    })

    pose.onResults((results) => {
      if (!results.poseLandmarks) return

      const detected = results.poseLandmarks
      setLandmarks(detected)
      drawSkeleton(detected)
      const sc = scorePose(detected)
      setMatchScore(sc)
      trackFps()
    })

    const camera = new Camera(video, {
      onFrame: async () => {
        await pose.send({ image: video })
      },
      width: 640,
      height: 480,
    })

    cameraRef.current = camera
    camera.start().catch(() => {
      // camera start failed — fallback
    })

    const cam = camera
    const anim = animRef.current
    return () => {
      if (cam) cam.stop()
      if (anim) cancelAnimationFrame(anim)
    }
  }, [isActive, videoRef, canvasRef, drawSkeleton, trackFps])

  return { landmarks, matchScore, fps }
}
