import { useState, useEffect, useCallback, useRef } from 'react'
import './XPToast.css'

interface Toast {
  id: number
  text: string
}

let nextId = 0

/* eslint-disable react-refresh/only-export-components */
export function showToast(text: string): void {
  const fn = (window as unknown as Record<string, unknown>).__addToast as ((t: string) => void) | undefined
  if (fn) fn(text)
}

export default function XPToastStack() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const timersRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map())

  const addToast = useCallback((text: string) => {
    const id = nextId++
    setToasts(prev => [...prev.slice(-3), { id, text }])
    const timer = setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
      timersRef.current.delete(id)
    }, 2000)
    timersRef.current.set(id, timer)
  }, [])

  useEffect(() => {
    (window as unknown as Record<string, unknown>).__addToast = addToast
    return () => {
      delete (window as unknown as Record<string, unknown>).__addToast
    }
  }, [addToast])

  useEffect(() => {
    const timers = timersRef.current
    return () => {
      for (const timer of timers.values()) {
        clearTimeout(timer)
      }
    }
  }, [])

  if (toasts.length === 0) return null

  return (
    <div className="xp-toast-stack">
      {toasts.map(t => (
        <div key={t.id} className="xp-toast">
          {t.text}
        </div>
      ))}
    </div>
  )
}
