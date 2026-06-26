'use client'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n/context'
import { fadeUp, stagger } from '@/lib/motion'

const FEATURE_ICONS: Record<string, string> = {
  bilingual: '🗣',
  meals: '🍎',
  smallClass: '👥',
  play: '🎨',
  steam: '🔬',
}

export default function FeatureBadges({ features }: { features: readonly string[] }) {
  const { t } = useLang()

  return (
    <section className="bg-[#fafaf7] py-12 px-4 border-b border-gray-100">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4"
      >
        {features.map((feat) => (
          <motion.div
            key={feat}
            variants={fadeUp}
            className="vk-soft-card flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm hover:border-[#ffd200] hover:shadow-md transition-all"
          >
            <span className="text-xl">{FEATURE_ICONS[feat] ?? '✓'}</span>
            <span className="text-sm font-bold text-[#0b1f5e]">
              {t.features[feat as keyof typeof t.features] ?? feat}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
