'use client'

import { useState, useCallback, type ReactNode, type KeyboardEvent } from 'react'
import { Heart, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

export function LetterGate({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<'closed' | 'opening' | 'open'>('closed')

  const handleOpen = useCallback(() => {
    if (stage !== 'closed') return
    setStage('opening')
    window.setTimeout(() => setStage('open'), 1000)
  }, [stage])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleOpen()
      }
    },
    [handleOpen],
  )

  return (
    <>
      {stage !== 'open' && (
        <div
          aria-hidden={stage === 'opening'}
          className={cn(
            'fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary via-background to-primary/15 px-6 transition-all duration-700 ease-out',
            stage === 'opening' && 'pointer-events-none scale-[1.03] opacity-0',
          )}
        >
          {/* ambient floating orbs */}
          <div aria-hidden="true" className="absolute inset-0">
            {[
              { left: '10%', top: '20%', size: 12, d: '8s', delay: '0s' },
              { left: '80%', top: '16%', size: 18, d: '10s', delay: '1s' },
              { left: '30%', top: '72%', size: 14, d: '9s', delay: '2s' },
              { left: '68%', top: '62%', size: 10, d: '7s', delay: '0.5s' },
              { left: '50%', top: '36%', size: 8, d: '11s', delay: '1.5s' },
            ].map((b, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-primary/12"
                style={{
                  left: b.left,
                  top: b.top,
                  width: b.size,
                  height: b.size,
                  animation: `float ${b.d} ease-in-out ${b.delay} infinite`,
                }}
              />
            ))}
          </div>

          <div
            className={cn(
              'relative w-full max-w-sm text-center transition-all duration-700',
              stage === 'opening' && '-translate-y-4 opacity-0',
            )}
          >
            <span className="mb-5 inline-block text-[0.7rem] font-medium uppercase tracking-[0.3em] text-primary">
              Hôm nay là một ngày đặc biệt
            </span>
            <h1 className="text-balance font-serif text-[clamp(1.75rem,5vw,2.5rem)] font-medium leading-snug text-foreground">
              Gửi Em Yêu Của Anh
            </h1>
            <p className="mx-auto mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Tròn một năm kể từ ngày mình thương nhau. Anh đã viết một lá thư
              nhỏ cho em — mở ra để cùng anh đi qua hành trình của chúng mình
              nhé.
            </p>

            {/* envelope */}
            <button
              type="button"
              onClick={handleOpen}
              onKeyDown={handleKeyDown}
              aria-label="Mở thư"
              className="group relative mx-auto mt-10 block w-full max-w-[16rem] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-primary/25 bg-card shadow-lg shadow-primary/10 transition-transform duration-300 group-hover:-translate-y-1 group-active:translate-y-0">
                {/* envelope body */}
                <div className="absolute inset-0 bg-gradient-to-br from-card to-secondary/50" />
                {/* envelope lines */}
                <div className="absolute inset-x-0 bottom-0 h-[55%] border-t border-primary/10 bg-secondary/30" />
                <div className="absolute left-0 top-0 h-full w-[50%] border-r border-primary/10 bg-secondary/20" />
                {/* flap */}
                <div
                  className="absolute inset-x-0 top-0 origin-top transition-transform duration-500 ease-out group-hover:[transform:rotateX(35deg)]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <svg
                    viewBox="0 0 300 110"
                    className="h-auto w-full text-primary/70"
                    aria-hidden="true"
                  >
                    <path d="M0 0 L300 0 L150 100 Z" fill="currentColor" />
                  </svg>
                </div>
                {/* wax seal */}
                <span className="absolute left-1/2 top-[55%] z-10 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Heart
                    className="size-5"
                    fill="currentColor"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium tracking-wide text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
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
