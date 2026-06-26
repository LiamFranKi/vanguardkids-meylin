'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n/context'
import { fadeUp, stagger } from '@/lib/motion'

export default function NotSureCTA() {
  const { t } = useLang()
  const c = t.campus

  return (
    <section data-nav-theme="blue" className="bg-[#ffd200] py-14 px-4">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <motion.h2 variants={fadeUp} className="text-2xl font-black text-[#0b1f5e] text-center md:text-left">
          {c.notSure}
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Link
            href="/apply"
            className="inline-block vk-action-secondary vk-arrow-nudge bg-[#0b1f5e] hover:bg-[#1a3496] text-white font-black px-7 py-3.5 rounded-full text-sm transition-colors whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
          >
            {c.scheduleNow} →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
