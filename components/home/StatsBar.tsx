'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '@/lib/i18n/context'
import { fadeUp, stagger } from '@/lib/motion'

function useCounter(target: number, duration = 1.8, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])

  return count
}

const STAT_DATA = [
  { value: 10, prefix: '+', labelKey: 'years' as const },
  { value: 2, prefix: '', labelKey: 'locations' as const },
  { value: 3, prefix: '', labelKey: 'programs' as const },
  { value: 100, prefix: '+', labelKey: 'families' as const },
]

function StatItem({ value, prefix, labelKey, active }: { value: number; prefix: string; labelKey: keyof typeof import('@/lib/i18n/en').default.stats; active: boolean }) {
  const { t } = useLang()
  const count = useCounter(value, 1.8, active)

  return (
    <motion.div variants={fadeUp} className="text-center px-6 py-4">
      <p className="text-4xl md:text-5xl font-black text-[#0b1f5e] leading-none mb-1">
        {prefix}{count}
      </p>
      <p className="text-gray-500 text-sm font-medium">{t.stats[labelKey]}</p>
    </motion.div>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} data-nav-theme="blue" className="bg-white border-y border-gray-100">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100"
      >
        {STAT_DATA.map((s) => (
          <StatItem key={s.labelKey} {...s} active={inView} />
        ))}
      </motion.div>
    </section>
  )
}
