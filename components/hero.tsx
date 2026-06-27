'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { RippleButton } from './ripple-button'
import { WaveDivider } from './wave-divider'
import { cn } from '@/lib/utils'

export function Hero() {
  const [showCta, setShowCta] = useState(false)

  useEffect(() => {
    function onScroll() {
      setShowCta(window.scrollY > 80)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <Image
        src="/ocean-hero.png"
        alt="Khung cảnh đại dương xanh biếc với ánh nắng xuyên qua làn nước"
        fill
        priority
        className="object-cover"
      />
      {/* soft wash to keep text readable over the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-primary/20 to-background/80" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-foreground/70">
          Kỷ niệm một năm
        </p>
        <h1 className="text-balance font-serif text-5xl font-medium leading-tight text-foreground drop-shadow-sm sm:text-6xl md:text-7xl">
          Thanh Bình Xanh Biếc
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
          Một năm vững bước giữa biển trời mênh mông — nơi từng con sóng nhẹ kể
          lại câu chuyện của chúng ta.
        </p>

        <div
          className={cn(
            'mt-10 transition-all duration-700 ease-out',
            showCta
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-4 opacity-0',
          )}
        >
          <RippleButton href="#cau-chuyen">Cùng nhìn lại hành trình</RippleButton>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 text-secondary">
        <WaveDivider />
      </div>

      {/* gentle scroll hint */}
      <div className="absolute bottom-28 left-1/2 z-10 -translate-x-1/2 animate-[float_6s_ease-in-out_infinite]">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-foreground/40 p-1.5">
          <span className="h-2 w-1 rounded-full bg-foreground/60" />
        </div>
      </div>
    </section>
  )
}
