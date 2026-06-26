'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useLang } from '@/lib/i18n/context'

type CampusPhoto = {
  src: string
  alt: string
}

export default function CampusPhotoCarousel({ photos }: { photos: CampusPhoto[] }) {
  const { lang } = useLang()
  const [active, setActive] = useState(0)
  const photo = photos[active]

  const goToPrevious = () => {
    setActive((current) => (current === 0 ? photos.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActive((current) => (current === photos.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="vk-gallery-frame overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_18px_48px_rgba(11,31,94,0.14)] sm:p-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#e8f4f8]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="vk-visual-image object-cover"
              sizes="(max-width: 1024px) 100vw, 1120px"
              priority={active === 0}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={goToPrevious}
          aria-label={lang === 'es' ? 'Foto anterior del campus' : 'Previous campus photo'}
          className="vk-icon-button absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b1f5e] text-white shadow-lg transition-colors hover:bg-[#1a3496] focus:outline-none focus:ring-2 focus:ring-[#ffd200] focus:ring-offset-2 sm:-left-5"
        >
          <FiChevronLeft size={22} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label={lang === 'es' ? 'Siguiente foto del campus' : 'Next campus photo'}
          className="vk-icon-button absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#0b1f5e] text-white shadow-lg transition-colors hover:bg-[#1a3496] focus:outline-none focus:ring-2 focus:ring-[#ffd200] focus:ring-offset-2 sm:-right-5"
        >
          <FiChevronRight size={22} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2" aria-label={lang === 'es' ? 'Paginacion de galeria del campus' : 'Campus gallery pagination'}>
        {photos.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={lang === 'es' ? `Mostrar foto del campus ${index + 1}` : `Show campus photo ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
            className={`vk-dot-button h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] ${
              index === active ? 'w-8 bg-[#0b1f5e]' : 'w-2.5 bg-[#0b1f5e]/30 hover:bg-[#0b1f5e]/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
