'use client'

import Image from 'next/image'
import { RippleButton } from './ripple-button'
import { WaveDivider } from './wave-divider'

export function Hero() {
  return (
    <section
      aria-label="Mở đầu"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden"
    >
      <Image
        src="/ocean-hero.png"
        alt="Khung cảnh đại dương xanh biếc với ánh nắng xuyên qua làn nước"
        fill
        priority
        className="object-cover"
      />
      {/* layered gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-primary/10 to-background/85" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="mb-6 inline-block text-[0.7rem] font-medium uppercase tracking-[0.3em] text-foreground/60">
          Kỷ niệm một năm
        </span>
        <h1 className="text-balance font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-[1.1] text-foreground drop-shadow-sm">
          Thanh Bình
          <br />
          Xanh Biếc
        </h1>
        <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
          Một năm vững bước giữa biển trời mênh mông — nơi từng con sóng nhẹ kể
          lại câu chuyện của chúng ta.
        </p>

        <div className="mt-10">
          <RippleButton href="#cau-chuyen">Cùng nhìn lại hành trình</RippleButton>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <WaveDivider fill="var(--secondary)" />
      </div>

      {/* scroll hint */}
      <div
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-foreground/30 p-1.5">
          <span className="h-1.5 w-1 rounded-full bg-foreground/50 animate-[float_5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
