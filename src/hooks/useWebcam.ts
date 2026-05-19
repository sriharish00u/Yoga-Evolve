import { useEffect, useRef, useState, useCallback } from 'react'

export function useWebcam(
  videoRef: React.RefObject<HTMLVideoElement | null>
): { isReady: boolean; error: string | null; stop: () => void } {
  const [isReady, setIsReady] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const stop = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop())
      streamRef.current = null
    }
    setIsReady(false)
  }, [])

  useEffect(() => {
    let mounted = true

    async function start() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480, facingMode: 'user' },
        })

        if (!mounted) {
          stream.getTracks().forEach(t => t.stop())
          return
        }

        streamRef.current = stream
        const video = videoRef.current
        if (video) {
          video.srcObject = stream
          video.onloadedmetadata = () => {
            if (mounted) setIsReady(true)
          }
        }
      } catch (err: unknown) {
        if (!mounted) return
        if (err instanceof DOMException) {
          if (err.name === 'NotAllowedError') {
            setError('Camera permission denied. Grant access in browser settings.')
          } else if (err.name === 'NotFoundError') {
            setError('No camera detected on this device.')
          } else {
            setError(`Camera error: ${err.message}`)
          }
        } else {
          setError('Failed to access camera.')
        }
      }
    }

    start()

    return () => {
      mounted = false
      stop()
    }
  }, [videoRef, stop])

  return { isReady, error, stop }
}
