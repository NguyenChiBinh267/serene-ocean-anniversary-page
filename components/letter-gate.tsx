'use client'

import { useState, type ReactNode } from 'react'
import { Heart, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

export function LetterGate({ children }: { children: ReactNode }) {
  // 'closed' = envelope sealed, 'opening' = animating, 'open' = content shown
  const [stage, setStage] = useState<'closed' | 'opening' | 'open'>('closed')

  function handleOpen() {
    if (stage !== 'closed') return
    setStage('opening')
    // allow the fade/scale animation to play before unmounting the overlay
    window.setTimeout(() => setStage('open'), 1100)
  }

  return (
    <>
      {stage !== 'open' && (
        <div
          className={cn(
            'fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary via-background to-primary/20 px-6 transition-all duration-700 ease-out',
            stage === 'opening' && 'pointer-events-none scale-105 opacity-0',
          )}
        >
          {/* soft floating bubbles in the background */}
          <div aria-hidden="true" className="absolute inset-0">
            {[
              { left: '12%', top: '22%', size: 10, d: '7s' },
              { left: '78%', top: '18%', size: 16, d: '9s' },
              { left: '32%', top: '70%', size: 12, d: '8s' },
              { left: '66%', top: '64%', size: 8, d: '6s' },
              { left: '48%', top: '34%', size: 6, d: '10s' },
            ].map((b, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-primary/15"
                style={{
                  left: b.left,
                  top: b.top,
                  width: b.size,
                  height: b.size,
                  animation: `float ${b.d} ease-in-out infinite`,
                }}
              />
            ))}
          </div>

          <div
            className={cn(
              'relative w-full max-w-md text-center transition-all duration-700',
              stage === 'opening' && '-translate-y-6',
            )}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
              Hôm nay là một ngày đặc biệt
            </p>
            <h1 className="text-balance font-serif text-3xl font-medium leading-snug text-foreground sm:text-4xl">
              Gửi Em Yêu Của Anh
            </h1>
            <p className="mx-auto mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tròn một năm kể từ ngày mình thương nhau. Anh đã viết một lá thư
              nhỏ cho em — mở ra để cùng anh đi qua hành trình của chúng mình
              nhé.
            </p>

            {/* envelope */}
            <button
              type="button"
              onClick={handleOpen}
              aria-label="Mở thư"
              className="group relative mx-auto mt-10 block w-full max-w-xs focus-visible:outline-none"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-xl shadow-primary/15 transition-transform duration-300 group-hover:-translate-y-1.5 group-focus-visible:-translate-y-1.5">
                {/* envelope body lines */}
                <div className="absolute inset-0 bg-gradient-to-br from-card to-secondary/60" />
                {/* flap */}
                <div
                  className="absolute inset-x-0 top-0 origin-top transition-transform duration-700 ease-out group-hover:[transform:rotateX(45deg)] group-focus-visible:[transform:rotateX(45deg)]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <svg
                    viewBox="0 0 300 110"
                    className="h-auto w-full text-primary/80"
                    aria-hidden="true"
                  >
                    <path d="M0 0 L300 0 L150 100 Z" fill="currentColor" />
                  </svg>
                </div>
                {/* wax seal */}
                <span className="absolute left-1/2 top-1/2 z-10 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Heart className="size-6" fill="currentColor" aria-hidden="true" />
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-xl">
                <Mail className="size-4" aria-hidden="true" />
                Mở thư
              </span>
            </button>
          </div>
        </div>
      )}

      <div
        className={cn(
          'transition-opacity duration-700',
          stage === 'open' ? 'opacity-100' : 'opacity-0',
        )}
      >
        {children}
      </div>
    </>
  )
}
