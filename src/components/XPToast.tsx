import { useState, useEffect, useCallback, useRef } from 'react'
import './XPToast.css'

interface Toast {
  id: number
  text: string
}

let nextId = 0
let addToastFn: ((text: string) => void) | null = null

export function showToast(text: string): void {
  if (addToastFn) {
    addToastFn(text)
  }
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
    addToastFn = addToast
    return () => {
      addToastFn = null
    }
  }, [addToast])

  useEffect(() => {
    return () => {
      for (const timer of timersRef.current.values()) {
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
