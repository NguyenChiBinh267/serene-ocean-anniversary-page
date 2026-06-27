'use client'

import { useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Ripple = { id: number; x: number; y: number; size: number }

interface RippleButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline'
  className?: string
  'aria-label'?: string
}

export function RippleButton({
  children,
  href,
  variant = 'primary',
  className,
  'aria-label': ariaLabel,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const nextId = useRef(0)

  function spawnRipple(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const id = nextId.current++
    setRipples((prev) => [...prev, { id, x, y, size }])
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 650)
  }

  const base =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97]'

  const variants = {
    primary:
      'bg-primary text-primary-foreground shadow-md shadow-primary/15 hover:-translate-y-px hover:shadow-lg hover:shadow-primary/20',
    outline:
      'border border-primary/30 bg-background/50 text-foreground backdrop-blur-sm hover:-translate-y-px hover:border-primary/60 hover:bg-background/80',
  }

  const Tag = (href ? 'a' : 'button') as 'a' | 'button'

  return (
    <Tag
      href={href}
      aria-label={ariaLabel}
      onClick={spawnRipple}
      className={cn(base, variants[variant], className)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full bg-background/45"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            animation: 'ripple 0.65s ease-out forwards',
          }}
        />
      ))}
    </Tag>
  )
}
