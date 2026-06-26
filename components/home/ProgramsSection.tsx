'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n/context'
import { fadeUp, stagger } from '@/lib/motion'

const PROGRAMS = [
  {
    key: 'earlyHeadStart',
    href: '/programs?program=early-head-start',
  },
  {
    key: 'freeVpk',
    href: '/programs?program=free-vpk',
  },
  {
    key: 'schoolReadiness',
    href: '/programs?program=school-readiness',
  },
] as const

export default function ProgramsSection() {
  const { t } = useLang()
  const section = t.homePrograms

  return (
    <section data-nav-theme="blue" className="bg-[#e8f4f8] px-4 py-14 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-9 text-center"
        >
          <motion.p variants={fadeUp} className="text-[#0b1f5e]/60 text-xs font-black tracking-[0.2em] uppercase mb-2">
            {section.eyebrow}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl font-black text-[#0b1f5e] max-w-2xl mx-auto leading-tight md:text-4xl">
            {section.title}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#0b1f5e]/70 mt-3 max-w-2xl mx-auto text-sm leading-relaxed md:text-base">
            {section.sub}
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 md:grid-cols-3"
        >
          {PROGRAMS.map((program) => {
            const card = section.cards[program.key]

            return (
            <motion.article
              key={program.key}
              variants={fadeUp}
              className="vk-linked-card flex min-h-[240px] flex-col justify-between rounded-[1.75rem] border border-[#0b1f5e]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <span className="inline-flex rounded-full border border-[#0b1f5e]/15 bg-[#ffd200] px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.1em] text-[#0b1f5e]">
                  {card.badge}
                </span>
                <h3 className="mt-4 text-2xl font-black text-[#0b1f5e]">
                  {card.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0b1f5e]/70">
                  {card.desc}
                </p>
              </div>
              <Link
                href={program.href}
                className="vk-action-secondary vk-arrow-nudge mt-6 inline-flex w-fit items-center gap-1 rounded-full bg-[#0b1f5e] px-4 py-2 text-sm font-black text-white transition-colors hover:bg-[#1a3496] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
                aria-label={`${t.programs.hs.learnMore}: ${card.name}`}
              >
                {t.programs.hs.learnMore} →
              </Link>
            </motion.article>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
