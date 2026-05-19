interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  shape: 'rect' | 'circle'
  life: number
  maxLife: number
}

const COLORS = ['#b38b59', '#f5deb3', '#654321', '#d4a96a', '#fff8e7', '#8b6b30']

export function launchConfetti(canvas: HTMLCanvasElement, duration = 3000): void {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const W = canvas.width
  const H = canvas.height
  const particles: Particle[] = []
  const startTime = performance.now()

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: W / 2 + (Math.random() - 0.5) * W * 0.6,
      y: H * 0.3,
      vx: (Math.random() - 0.5) * 8,
      vy: -8 - Math.random() * 6,
      size: Math.random() > 0.5 ? 4 + Math.random() * 6 : 5 + Math.random() * 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: Math.random() > 0.5 ? 'rect' : 'circle',
      life: 0,
      maxLife: duration,
    })
  }

  let animId: number
  const c = ctx

  function animate() {
    const elapsed = performance.now() - startTime
    if (elapsed > duration) {
      c.clearRect(0, 0, W, H)
      cancelAnimationFrame(animId)
      return
    }

    c.clearRect(0, 0, W, H)

    const fadeStart = duration - 600
    const alpha = elapsed > fadeStart ? Math.max(0, 1 - (elapsed - fadeStart) / 600) : 1

    for (const p of particles) {
      p.x += p.vx
      p.vy += 0.35
      p.y += p.vy
      p.vx += (Math.random() - 0.5) * 0.2

      c.save()
      c.globalAlpha = alpha
      c.fillStyle = p.color

      if (p.shape === 'rect') {
        c.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size * 0.4, p.size)
      } else {
        c.beginPath()
        c.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2)
        c.fill()
      }
      c.restore()
    }

    animId = requestAnimationFrame(animate)
  }

  animId = requestAnimationFrame(animate)
}
