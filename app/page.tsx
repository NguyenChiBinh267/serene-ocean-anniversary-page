import Image from 'next/image'
import {
  Anchor,
  Shell,
  Waves,
  Sailboat,
  Heart,
  Smile,
  Sparkles,
  Coffee,
  Moon,
  Compass,
  Home,
  Plane,
} from 'lucide-react'
import { Hero } from '@/components/hero'
import { WaveDivider } from '@/components/wave-divider'
import { RippleButton } from '@/components/ripple-button'
import { LetterGate } from '@/components/letter-gate'

const thingsILove = [
  {
    icon: Smile,
    title: 'Nụ cười của em',
    text: 'Mỗi khi em cười, mọi con sóng trong lòng anh đều lặng lại. Đó là điều dịu dàng nhất anh từng biết.',
  },
  {
    icon: Sparkles,
    title: 'Cách em quan tâm',
    text: 'Những điều nhỏ bé em làm mỗi ngày khiến anh thấy mình thật may mắn khi có em bên cạnh.',
  },
  {
    icon: Coffee,
    title: 'Những buổi sáng cùng em',
    text: 'Chỉ cần một tách cà phê và em ở đó, ngày dài đến mấy cũng trở nên đáng yêu.',
  },
  {
    icon: Moon,
    title: 'Sự bình yên em mang lại',
    text: 'Bên em, anh tìm thấy bến đỗ — nơi anh có thể là chính mình mà không cần gồng gánh điều gì.',
  },
]

const futurePlans = [
  {
    icon: Plane,
    title: 'Chuyến đi đầu tiên',
    text: 'Mình sẽ cùng nhau ra biển, ngắm bình minh và để gió mặn cuốn đi mọi muộn phiền.',
  },
  {
    icon: Compass,
    title: 'Khám phá thế giới',
    text: 'Thật nhiều vùng đất mới đang chờ — và anh muốn mỗi điểm đến đều có dấu chân của hai đứa.',
  },
  {
    icon: Home,
    title: 'Một mái ấm nhỏ',
    text: 'Một nơi giản dị nhưng đầy tiếng cười, nơi mình cùng vun đắp những điều bình yên nhất.',
  },
]

const milestones = [
  {
    icon: Sailboat,
    title: 'Khởi Hành',
    text: 'Những bước đầu tiên, khi con thuyền nhỏ rời bến và hướng ra khơi xa đầy hy vọng.',
  },
  {
    icon: Waves,
    title: 'Vượt Sóng',
    text: 'Cùng nhau đi qua những con sóng lớn, học cách giữ vững tay chèo giữa muôn trùng khơi.',
  },
  {
    icon: Shell,
    title: 'Tìm Thấy Bình Yên',
    text: 'Những khoảnh khắc lặng sóng, nơi ta nhận ra giá trị của sự đồng hành và sẻ chia.',
  },
  {
    icon: Anchor,
    title: 'Neo Đậu',
    text: 'Một năm trọn vẹn — bến bờ vững chãi để tiếp tục mơ về những chuyến đi xa hơn.',
  },
]

export default function Page() {
  return (
    <LetterGate>
      <main className="bg-background">
        <Hero />

      {/* Story / intro */}
      <section
        id="cau-chuyen"
        className="mx-auto max-w-3xl scroll-mt-16 px-6 py-24 text-center"
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
          Bản giao hưởng đại dương
        </p>
        <h2 className="text-balance font-serif text-3xl font-medium leading-snug text-foreground sm:text-4xl">
          Một năm với gió biển và hoàng hôn dịu êm
        </h2>
        <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Tựa như đại dương bao la, hành trình một năm qua được dệt nên từ vô vàn
          con sóng — lúc dịu dàng, khi mạnh mẽ. Mỗi khoảnh khắc đều để lại dư âm,
          mỗi kỷ niệm là một viên ngọc trai lấp lánh dưới làn nước trong xanh.
        </p>
      </section>

      {/* Những điều anh thích ở em */}
      <section
        id="dieu-anh-thich"
        className="mx-auto max-w-6xl scroll-mt-16 px-6 pb-24 pt-4"
      >
        <div className="mb-12 text-center">
          <Heart
            className="mx-auto mb-5 size-8 text-accent"
            fill="currentColor"
            strokeWidth={1.2}
            aria-hidden="true"
          />
          <h2 className="text-balance font-serif text-3xl font-medium text-foreground sm:text-4xl">
            Những điều anh thích ở em
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Có những điều nhỏ bé thôi, nhưng đủ để anh thương em mỗi ngày một
            nhiều hơn.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {thingsILove.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group flex items-start gap-5 rounded-2xl border border-border bg-card/70 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent-foreground transition-colors duration-300 group-hover:bg-accent">
                <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-medium text-card-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="relative bg-secondary/40 py-4">
        <div className="text-secondary/40">
          <WaveDivider flip />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group rounded-2xl border border-border bg-card/70 p-7 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl font-medium text-card-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="text-secondary/40">
          <WaveDivider />
        </div>
      </section>

      {/* Quote over sunrise */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <Image
          src="/ocean-sunrise.png"
          alt="Đường chân trời đại dương lúc bình minh với bầu trời pastel và ngọn hải đăng xa xa"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/40 to-background/30" />
        <blockquote className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <p className="text-balance font-serif text-2xl font-medium italic leading-relaxed text-foreground sm:text-3xl md:text-4xl">
            “Biển cả dạy ta rằng: bình yên không phải là vắng sóng, mà là cùng
            nhau đi qua từng con sóng.”
          </p>
          <footer className="mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Gửi một năm của chúng ta
          </footer>
          <div className="mt-10">
            <RippleButton href="#loi-cam-on" variant="outline">
              Lời nhắn gửi
            </RippleButton>
          </div>
        </blockquote>
      </section>

      {/* Kế hoạch về sau */}
      <section
        id="ke-hoach"
        className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24"
      >
        <div className="mb-12 text-center">
          <Compass
            className="mx-auto mb-5 size-8 text-primary"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Chặng đường phía trước
          </p>
          <h2 className="text-balance font-serif text-3xl font-medium text-foreground sm:text-4xl">
            Kế hoạch của chúng mình
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Một năm chỉ là khởi đầu. Đây là những điều anh muốn cùng em viết tiếp
            trong những năm tháng tới.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {futurePlans.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-8 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="absolute right-5 top-4 font-serif text-5xl font-medium text-primary/10">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-medium text-card-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section
        id="loi-cam-on"
        className="mx-auto max-w-2xl scroll-mt-16 px-6 py-24 text-center"
      >
        <Anchor
          className="mx-auto mb-6 size-8 text-accent"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <h2 className="text-balance font-serif text-3xl font-medium text-foreground sm:text-4xl">
          Cảm ơn vì một năm đáng nhớ
        </h2>
        <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Cầu cho những chặng đường phía trước luôn ngập tràn ánh nắng, gió lành
          và những con sóng dịu êm. Hành trình của chúng ta vẫn còn rất dài.
        </p>
        <div className="mt-10">
          <RippleButton href="#cau-chuyen">Hướng về năm mới</RippleButton>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-primary py-10 text-center text-primary-foreground">
        <div className="rotate-180 text-primary-foreground/20">
          <WaveDivider />
        </div>
        <p className="font-serif text-lg">Thanh Bình Xanh Biếc</p>
        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
          Kỷ niệm 1 năm · {new Date().getFullYear()}
        </p>
      </footer>
      </main>
    </LetterGate>
  )
}
