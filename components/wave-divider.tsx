import { cn } from '@/lib/utils'

interface WaveDividerProps {
  className?: string
  flip?: boolean
  fill?: string
}

/**
 * A layered, gently animated SVG wave used to transition between sections.
 * Three stacked wave paths drift at different speeds for a soft parallax feel.
 */
export function WaveDivider({ className, flip, fill }: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none relative h-20 w-full overflow-hidden',
        className,
      )}
      style={{ transform: flip ? 'rotate(180deg)' : undefined }}
    >
      {[
        { opacity: 0.3, duration: '22s', y: 4 },
        { opacity: 0.5, duration: '16s', y: 1 },
        { opacity: 1, duration: '11s', y: 0 },
      ].map((layer, i) => (
        <svg
          key={i}
          className="absolute bottom-0 left-0 h-full"
          style={{
            width: '200%',
            opacity: layer.opacity,
            color: fill,
            animation: `wave ${layer.duration} linear infinite`,
            transform: `translateY(${layer.y}px)`,
          }}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,40 C150,90 350,0 600,40 C850,80 1050,10 1200,40 L1200,120 L0,120 Z M1200,40 C1350,90 1550,0 1800,40 C2050,80 2250,10 2400,40 L2400,120 L1200,120 Z"
          />
        </svg>
      ))}
    </div>
  )
}
