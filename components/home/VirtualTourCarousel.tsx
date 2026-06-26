'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useLang } from '@/lib/i18n/context'

const SLIDES = [
  {
    titleKey: 'doverCampus',
    alt: 'Dover campus classroom at Vanguard Kids Academy',
    image: '/images/campuses/dover/dover-01.png',
  },
  {
    titleKey: 'doverClassroom',
    alt: 'Dover preschool classroom at Vanguard Kids Academy',
    image: '/images/campuses/dover/dover-02.png',
  },
  {
    titleKey: 'doverLearning',
    alt: 'Childcare learning space at Vanguard Kids Academy in Dover',
    image: '/images/campuses/dover/dover-03.png',
  },
  {
    titleKey: 'fortMyersCampus',
    alt: 'Fort Myers campus classroom at Vanguard Kids Academy',
    image: '/images/campuses/fort-myers/fort-myers-01.png',
  },
  {
    titleKey: 'fortMyersClassroom',
    alt: 'Fort Myers preschool classroom at Vanguard Kids Academy',
    image: '/images/campuses/fort-myers/fort-myers-02.png',
  },
  {
    titleKey: 'fortMyersLearning',
    alt: 'Childcare learning space at Vanguard Kids Academy in Fort Myers',
    image: '/images/campuses/fort-myers/fort-myers-03.png',
  },
] as const

export default function VirtualTourCarousel() {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const slide = SLIDES[active]
  const gallery = t.homeGallery

  const goToPrevious = () => {
    setActive((current) => (current === 0 ? SLIDES.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActive((current) => (current === SLIDES.length - 1 ? 0 : current + 1))
  }

  return (
    <section data-nav-theme="blue" className="relative overflow-hidden bg-[#e8f4f8] px-4 py-16 lg:py-20">
      <div className="pointer-events-none absolute left-[-6rem] top-12 h-40 w-40 rounded-full bg-white/60 blur-sm" />
      <div className="pointer-events-none absolute right-[-5rem] top-28 h-32 w-32 rounded-full bg-white/50 blur-sm" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#0b1f5e]/60">
            {gallery.eyebrow}
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight text-[#0b1f5e] md:text-4xl">
            {gallery.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#0b1f5e]/70 md:text-base">
            {gallery.sub}
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="vk-gallery-frame overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl sm:p-4">
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] bg-[#bfe9f5] sm:min-h-[430px] lg:min-h-[500px]">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="vk-visual-image object-cover"
                sizes="(max-width: 1024px) 100vw, 960px"
                priority={active === 0}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1f5e]/80 via-[#0b1f5e]/35 to-transparent px-5 pb-5 pt-20 sm:px-7 sm:pb-7">
                <div className="inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[#0b1f5e] shadow-lg backdrop-blur-sm">
                  {gallery.slides[slide.titleKey]}
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={goToPrevious}
            className="vk-icon-button absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b1f5e] text-white shadow-lg transition-colors hover:bg-[#1a3496] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] sm:-left-5"
            aria-label={gallery.previous}
          >
            <FiChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="vk-icon-button absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b1f5e] text-white shadow-lg transition-colors hover:bg-[#1a3496] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] sm:-right-5"
            aria-label={gallery.next}
          >
            <FiChevronRight size={22} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2" aria-label={gallery.pagination}>
          {SLIDES.map((item, index) => (
            <button
              key={item.titleKey}
              type="button"
              onClick={() => setActive(index)}
              className={`vk-dot-button h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] ${
                index === active ? 'w-8 bg-[#0b1f5e]' : 'w-2.5 bg-[#0b1f5e]/30'
              }`}
              aria-label={`${gallery.show} ${gallery.slides[item.titleKey]}`}
              aria-current={index === active ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
