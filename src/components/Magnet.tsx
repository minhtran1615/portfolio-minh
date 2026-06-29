import { useRef, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    const threshold = Math.max(rect.width, rect.height) / 2 + padding

    if (dist < threshold) {
      el.style.transition = activeTransition
      el.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`
    } else {
      el.style.transition = inactiveTransition
      el.style.transform = 'translate3d(0,0,0)'
    }
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transition = inactiveTransition
    ref.current.style.transform = 'translate3d(0,0,0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  )
}
