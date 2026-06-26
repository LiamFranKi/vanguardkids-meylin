'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiBookOpen, FiClock, FiMapPin, FiPhone, FiUsers } from 'react-icons/fi'
import { useLang } from '@/lib/i18n/context'
import { CAMPUSES } from '@/lib/constants'
import { fadeUp, stagger } from '@/lib/motion'

const PROGRAM_BADGES = {
  vpk: 'Free VPK',
  hs: 'Early Head Start',
  sr: 'School Readiness',
} as const

const INFO_ROWS = [
  { key: 'address', labelKey: 'address', icon: FiMapPin },
  { key: 'hours', labelKey: 'hours', icon: FiClock },
  { key: 'phone', labelKey: 'contact', icon: FiPhone },
  { key: 'ages', labelKey: 'ages', icon: FiUsers },
] as const

export default function LocationCards() {
  const { t } = useLang()
  const c = t.campusCard

  const campuses = [CAMPUSES.dover, CAMPUSES.fortMyers]

  return (
    <section id="locations" data-nav-theme="blue" className="relative overflow-hidden bg-[#ffd200] py-20 px-4">
      <Image
        src="/assets/canva/brush-ring-navy-bold.png"
        alt=""
        width={980}
        height={980}
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 -top-56 z-0 hidden h-[760px] w-[760px] select-none object-contain opacity-20 md:block lg:h-[920px] lg:w-[920px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 text-center"
        >
          <motion.p variants={fadeUp} className="text-[#0b1f5e] text-xs font-black tracking-[0.2em] uppercase mb-2">
            {t.homeLocations.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black text-[#0b1f5e]">
            {t.homeLocations.title}
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {campuses.map((campus) => {
            const learnMoreHref = `/locations/${campus.slug}`

            return (
            <motion.div
              key={campus.slug}
              variants={fadeUp}
              className="vk-soft-card overflow-hidden rounded-[2rem] border border-transparent bg-white ring-1 ring-transparent"
            >
              <div className="bg-[#0b1f5e] px-6 py-7 text-center">
                <h3 className="text-4xl font-black leading-none text-white sm:text-5xl">
                  {campus.name}
                </h3>
              </div>

              <div className="p-7 sm:p-8">
                {/* Info rows */}
                <ul className="space-y-4 mb-6">
                  {INFO_ROWS.map(({ key, labelKey, icon: Icon }) => {
                    const value = key === 'address'
                      ? campus.address
                      : key === 'hours'
                        ? campus.hours.replace('–', '-')
                        : key === 'phone'
                          ? campus.phone
                          : campus.ages.replace('6 weeks to 12 years', '6w - 12y')

                    return (
                      <li key={key} className="flex items-start gap-4 text-[#0b1f5e]">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f4f8]">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[0.7rem] font-black uppercase tracking-[0.16em] text-[#0b1f5e]/60">
                            {c[labelKey]}
                          </p>
                          {key === 'phone' ? (
                            <a href={`tel:${campus.phone}`} className="vk-subtle-link rounded text-base font-bold leading-snug hover:text-[#1a3496] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
                              {value}
                            </a>
                          ) : (
                            <p className="text-base font-bold leading-snug">{value}</p>
                          )}
                        </div>
                      </li>
                    )
                  })}

                  <li className="flex items-start gap-4 text-[#0b1f5e]">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f4f8]">
                      <FiBookOpen size={18} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.7rem] font-black uppercase tracking-[0.16em] text-[#0b1f5e]/60">
                        {t.homeLocations.programs}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {campus.programs.map((prog) => {
                          const label = PROGRAM_BADGES[prog as keyof typeof PROGRAM_BADGES]
                          return label ? (
                            <span
                              key={prog}
                              className="rounded-full border border-[#0b1f5e] bg-[#e8f4f8] px-3 py-1 text-xs font-black text-[#0b1f5e]"
                            >
                              {label}
                            </span>
                          ) : null
                        })}
                      </div>
                    </div>
                  </li>
                </ul>

                {/* Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={learnMoreHref}
                    className="vk-action-secondary flex-1 rounded-full bg-[#0b1f5e] px-5 py-3 text-center text-sm font-black text-white transition-colors hover:bg-[#1a3496] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
                  >
                    {c.learnMore}
                  </Link>
                  <Link
                    href="/apply"
                    className="vk-action-secondary flex-1 rounded-full bg-[#0b1f5e] px-5 py-3 text-center text-sm font-black text-white transition-colors hover:bg-[#1a3496] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
                  >
                    {c.scheduleTour}
                  </Link>
                </div>
              </div>
            </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
