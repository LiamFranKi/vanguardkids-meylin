'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import { useLang } from '@/lib/i18n/context'
import { fadeUp, stagger } from '@/lib/motion'
import TourCTA from '@/components/home/TourCTA'

export default function VPKPage() {
  const { t } = useLang()
  const v = t.vpk
  const p = t.programs

  return (
    <>
      {/* Hero — gold */}
      <section data-nav-theme="blue" className="bg-[#ffd200] pt-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.span
              variants={fadeUp}
              className="inline-block bg-[#0b1f5e] text-white text-xs font-black px-4 py-1.5 rounded-full tracking-wide mb-5"
            >
              {v.badge}
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-black text-[#0b1f5e] leading-tight mb-5"
            >
              {v.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#0b1f5e]/70 text-lg max-w-xl leading-relaxed mb-8">
              {p.vpk.desc}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <div className="bg-white/40 rounded-2xl px-5 py-3 text-center">
                <p className="text-2xl font-black text-[#0b1f5e]">{v.free}</p>
                <p className="text-[#0b1f5e]/60 text-xs">{v.funded}</p>
              </div>
              <div className="bg-white/40 rounded-2xl px-5 py-3 text-center">
                <p className="text-2xl font-black text-[#0b1f5e]">{v.hours}</p>
                <p className="text-[#0b1f5e]/60 text-xs">{v.hoursLabel}</p>
              </div>
              <div className="bg-white/40 rounded-2xl px-5 py-3 text-center">
                <p className="text-2xl font-black text-[#0b1f5e]">{v.ratio}</p>
                <p className="text-[#0b1f5e]/60 text-xs">{v.ratioLabel}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What they learn */}
      <section data-nav-theme="blue" className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-black text-[#0b1f5e] mb-8">{v.learn}</motion.h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {v.learningItems.map(item => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 bg-[#fafaf7] rounded-xl p-4">
                  <FiCheck className="text-[#0b1f5e] mt-0.5 shrink-0" size={16} />
                  <span className="text-gray-700 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule options */}
      <section data-nav-theme="blue" className="bg-[#fafaf7] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-black text-[#0b1f5e] mb-6">{v.schedule}</motion.h2>
            <div className="flex flex-col gap-4">
              {v.scheduleItems.map(item => (
                <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 text-gray-600 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#ffd200] shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section data-nav-theme="cream" className="bg-[#0b1f5e] py-16 px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-black text-white mb-4">{v.secure}</motion.h2>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="vk-action-primary vk-arrow-nudge bg-[#ffd200] hover:bg-[#e6bd00] text-[#0b1f5e] font-black px-7 py-3.5 rounded-full text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              {v.cta}
            </Link>
            <Link
              href="/apply"
              className="vk-action-outline border-2 border-white text-white hover:bg-white hover:text-[#0b1f5e] font-bold px-7 py-3.5 rounded-full text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              {v.cta2}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <TourCTA />
    </>
  )
}
