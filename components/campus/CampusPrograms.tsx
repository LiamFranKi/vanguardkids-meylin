'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n/context'
import { fadeUp, stagger } from '@/lib/motion'

const STYLES = {
  vpk: { bg: 'bg-[#ffd200]', text: 'text-[#0b1f5e]', tag: 'bg-[#0b1f5e] text-white' },
  hs: { bg: 'bg-[#0b1f5e]', text: 'text-white', tag: 'bg-[#ffd200] text-[#0b1f5e]' },
  sr: { bg: 'bg-white', text: 'text-[#0b1f5e]', tag: 'bg-gray-100 text-gray-600' },
}

export default function CampusPrograms({ programs }: { programs: readonly string[] }) {
  const { t } = useLang()
  const p = t.programs

  const programList = programs
    .filter((prog): prog is keyof typeof STYLES => prog in STYLES)
    .map(prog => ({ key: prog, data: p[prog as keyof typeof p] as typeof p.vpk, style: STYLES[prog] }))

  return (
    <section data-nav-theme="blue" className="bg-[#e8f4f8] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-10"
        >
          <motion.p variants={fadeUp} className="text-[#0b1f5e]/50 text-xs font-black tracking-[0.2em] uppercase mb-2">
            Enrollment
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl font-black text-[#0b1f5e]">
            Programs Available
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programList.map(({ key, data, style }) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className={`${style.bg} vk-soft-card rounded-3xl border border-transparent p-7 flex flex-col min-h-[220px] shadow-sm hover:shadow-lg transition-shadow`}
            >
              <span className={`${style.tag} text-[10px] font-black px-3 py-1 rounded-full w-fit tracking-wide`}>
                {(data as typeof p.vpk).tag}
              </span>
              <h3 className={`${style.text} text-xl font-black mt-4 mb-2`}>{(data as typeof p.vpk).name}</h3>
              <p className={`${style.text} text-sm opacity-70 leading-relaxed flex-1`}>{(data as typeof p.vpk).desc}</p>
              <Link
                href="/programs/vpk"
                className={`vk-subtle-link mt-5 rounded text-sm font-bold ${style.text} hover:underline flex items-center gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]`}
              >
                {(data as typeof p.vpk).learnMore} →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
