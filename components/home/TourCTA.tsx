'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import { useLang } from '@/lib/i18n/context'

const DOVER_EXTERIOR = '/images/campuses/dover/dover-exterior-01.png'
const FORT_MYERS_EXTERIOR = '/images/campuses/fort-myers/fort-myers-exterior-01.png'

const MOBILE_CAMPUSES = [
  { src: DOVER_EXTERIOR, alt: 'Dover campus exterior at Vanguard Kids Academy', label: 'Dover' },
  { src: FORT_MYERS_EXTERIOR, alt: 'Fort Myers campus exterior at Vanguard Kids Academy', label: 'Fort Myers' },
] as const

export default function TourCTA() {
  const { t } = useLang()
  const [pointer, setPointer] = useState({ xPercent: 50, yPercent: 50 })
  const [mobileCampus, setMobileCampus] = useState(0)

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const nextX = ((event.clientX - rect.left) / rect.width) * 100
    const nextY = ((event.clientY - rect.top) / rect.height) * 100
    setPointer({
      xPercent: Math.min(97, Math.max(3, nextX)),
      yPercent: Math.min(92, Math.max(8, nextY)),
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => setMobileCampus(c => (c + 1) % 2), 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section data-nav-theme="blue" className="bg-[#0b1f5e] px-4 py-14 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setPointer({ xPercent: 50, yPercent: 50 })}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="vk-gallery-frame relative overflow-hidden rounded-[2rem] bg-[#2746a0] px-5 py-16 text-center shadow-2xl md:min-h-[430px] md:px-8 md:py-20"
        >
          {/* Desktop: interactive split-image comparison */}
          <div className="absolute inset-0 hidden md:block">
            <Image
              src={DOVER_EXTERIOR}
              alt="Dover campus exterior at Vanguard Kids Academy"
              fill
              className="object-cover"
              sizes="1152px"
              priority
            />
            <Image
              src={FORT_MYERS_EXTERIOR}
              alt="Fort Myers campus exterior at Vanguard Kids Academy"
              fill
              className="object-cover"
              sizes="1152px"
              style={{ clipPath: `inset(0 0 0 ${pointer.xPercent}%)` }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071242]/75 via-[#0b1f5e]/50 to-[#071242]/75" />
            <div
              className="absolute bottom-0 top-0 w-12 -translate-x-1/2"
              style={{ left: `${pointer.xPercent}%` }}
              aria-hidden="true"
            >
              <div className="absolute bottom-0 left-1/2 top-0 w-1 -translate-x-1/2 bg-[#ffd200] shadow-[0_0_24px_rgba(255,210,0,0.6)]" />
              <div
                className="absolute left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#ffd200] bg-[#0b1f5e]/80"
                style={{ top: `${pointer.yPercent}%` }}
              />
            </div>
            <span className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#0b1f5e]">
              Dover
            </span>
            <span className="absolute right-6 top-6 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-[#0b1f5e]">
              Fort Myers
            </span>
          </div>

          {/* Mobile: softly rotating campus background */}
          <div className="absolute inset-0 md:hidden" aria-hidden="true">
            {MOBILE_CAMPUSES.map((campus, i) => (
              <Image
                key={campus.src}
                src={campus.src}
                alt={campus.alt}
                fill
                className={`object-cover transition-opacity duration-1000 motion-reduce:transition-none ${
                  i === mobileCampus ? 'opacity-100' : 'opacity-0'
                }`}
                sizes="100vw"
                priority={i === 0}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f5e]/40 via-[#0b1f5e]/55 to-[#071242]/88" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl">
            {/* Mobile-only campus label pill */}
            <div className="mb-4 md:hidden">
              <span className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-xs font-black text-[#0b1f5e] shadow-sm transition-opacity duration-700">
                {MOBILE_CAMPUSES[mobileCampus].label}
              </span>
            </div>
            <motion.p
              variants={fadeUp}
              className="text-[#ffd200] text-xs font-black tracking-[0.2em] uppercase mb-3"
            >
              {t.cta.toursAvailable}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
            >
              {t.cta.headline}
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-8 max-w-xl text-sm font-semibold leading-relaxed text-white/80 md:text-base">
              {t.cta.body}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/apply"
                className="vk-action-primary vk-arrow-nudge inline-block bg-[#ffd200] hover:bg-[#e6bd00] text-[#0b1f5e] font-black px-8 py-4 rounded-full text-sm tracking-wide transition-all shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
              >
                {t.cta.button} →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
