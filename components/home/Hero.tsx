'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n/context'
import { fadeUp, stagger } from '@/lib/motion'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section data-nav-theme="cream" className="relative overflow-hidden bg-[#2746a0] pt-16 lg:min-h-[85vh]">

      {/* Halftone dot grid — right side decoration behind circle */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none">
        <svg width="100%" height="100%" className="opacity-20">
          <defs>
            <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="11" cy="11" r="2.2" fill="#3b5bdb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid items-center lg:grid-cols-2 lg:min-h-[calc(85vh-4rem)]">

          {/* Left — copy (no initial="hidden" so content is always visible on iOS Safari) */}
          <div className="z-10 pt-12 pb-6 text-center lg:py-20 lg:text-left">
            <h1 className="font-display text-5xl md:text-6xl lg:text-[5rem] font-black text-white leading-[1.1] mb-0 lg:mb-8">
              {h.headline1}<br />
              <span className="font-display italic text-[#ffd200] relative inline-block">
                {h.headline2}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 160 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <motion.path
                    d="M2 6 Q20 1 40 6 Q60 11 80 6 Q100 1 120 6 Q140 11 158 6"
                    stroke="#ffd200"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                  />
                </svg>
              </span>
              <br />
              {h.headline3}
            </h1>

            <div className="hidden flex-wrap gap-4 lg:flex">
              <Link
                href="/apply"
                className="vk-action-light vk-arrow-nudge flex min-h-14 items-center gap-2 rounded-full bg-[#ffd200] px-9 py-4 text-base font-black tracking-wide text-[#0b1f5e] shadow-[0_0_0_4px_rgba(255,210,0,0.22),0_18px_36px_rgba(255,210,0,0.28)] transition-all hover:bg-[#ffe05c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
              >
                {h.cta1} →
              </Link>
              <Link
                href="/services"
                className="vk-action-light flex min-h-14 items-center rounded-full border-2 border-white bg-white px-9 py-4 text-base font-black text-[#0b1f5e] shadow-[0_14px_32px_rgba(5,16,57,0.22)] transition-all hover:bg-[#f7fbff] hover:border-[#ffd200] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
              >
                {h.cta2}
              </Link>
            </div>
          </div>

          {/* Right — relaxed mobile/tablet crop */}
          <div className="z-10 pb-6 lg:hidden">
            <div
              className="vk-visual-frame vk-visual-lift relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden shadow-xl"
              style={{ borderRadius: '38% 62% 45% 55% / 48% 42% 58% 52%' }}
            >
              <Image
                src="/hero-classroom-v2.jpg"
                alt="Kids learning and exploring at Vanguard Kids Academy"
                fill
                className="vk-visual-image object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="z-10 flex flex-wrap justify-center gap-4 pb-12 lg:hidden">
            <Link
              href="/apply"
              className="vk-action-light vk-arrow-nudge flex min-h-14 items-center gap-2 rounded-full bg-[#ffd200] px-8 py-4 text-base font-black tracking-wide text-[#0b1f5e] shadow-[0_0_0_4px_rgba(255,210,0,0.22),0_18px_36px_rgba(255,210,0,0.28)] transition-all hover:bg-[#ffe05c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              {h.cta1} →
            </Link>
            <Link
              href="/services"
              className="vk-action-light flex min-h-14 items-center rounded-full border-2 border-white bg-white px-8 py-4 text-base font-black text-[#0b1f5e] shadow-[0_14px_32px_rgba(5,16,57,0.22)] transition-all hover:bg-[#f7fbff] hover:border-[#ffd200] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              {h.cta2}
            </Link>
          </div>

          {/* Right — stable Canva-style circular image treatment */}
          <div className="relative z-10 hidden min-h-[680px] items-center justify-center overflow-visible lg:flex 2xl:hidden">
            <div className="relative aspect-square w-[min(55vw,800px)] min-w-[590px] translate-x-8 xl:translate-x-10">
              <Image
                src="/assets/canva/brushstroke-circle-navy.png"
                alt=""
                width={970}
                height={970}
                aria-hidden="true"
                className="pointer-events-none absolute -right-[13%] -bottom-[14%] z-0 h-[114%] w-[114%] object-contain"
                priority
              />
              <div className="vk-visual-frame absolute inset-[5%] z-10 overflow-hidden rounded-full shadow-2xl">
                <Image
                  src="/hero-classroom-v2.jpg"
                  alt="Kids learning and exploring at Vanguard Kids Academy"
                  width={900}
                  height={900}
                  className="vk-visual-image h-full w-full object-cover object-center"
                  priority
                  sizes="(max-width: 1536px) 58vw, 800px"
                />
              </div>
            </div>
          </div>

          {/* Right — extra-large art direction keeps the same circle, only scales position */}
          <div className="absolute right-[-180px] top-1/2 z-10 hidden -translate-y-1/2 2xl:block">
            <div className="relative aspect-square w-[900px]">
              <Image
                src="/assets/canva/brushstroke-circle-navy.png"
                alt=""
                width={1080}
                height={1080}
                aria-hidden="true"
                className="absolute -right-[13%] -bottom-[14%] z-0 h-[114%] w-[114%] object-contain"
                priority
              />
              <div className="vk-visual-frame absolute inset-[5%] z-10 overflow-hidden rounded-full shadow-2xl">
              <Image
                src="/hero-classroom-v2.jpg"
                alt="Kids learning and exploring at Vanguard Kids Academy"
                width={900}
                height={900}
                className="vk-visual-image h-full w-full object-cover object-center"
                priority
                sizes="900px"
              />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
