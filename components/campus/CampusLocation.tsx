'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMapPin, FiVideo } from 'react-icons/fi'
import { CLOUDPANO_BASE } from '@/lib/constants'
import { fadeUp, stagger } from '@/lib/motion'
import type { CAMPUSES } from '@/lib/constants'

type Campus = typeof CAMPUSES[keyof typeof CAMPUSES]

export default function CampusLocation({ campus }: { campus: Campus }) {
  return (
    <section data-nav-theme="blue" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-black text-[#0b1f5e] mb-6">
            Campus Location
          </motion.h2>

          {/* Address banner */}
          <motion.div
            variants={fadeUp}
            className="bg-[#0b1f5e] text-white rounded-2xl px-6 py-4 flex items-center gap-3 mb-6"
          >
            <FiMapPin className="shrink-0" size={18} />
            <p className="font-bold text-sm">{campus.address}</p>
          </motion.div>

          {/* Map embed */}
          <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-lg mb-6" style={{ height: 380 }}>
            <iframe
              src={campus.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${campus.name} location map`}
            />
          </motion.div>

          {/* Virtual tour button */}
          <motion.div variants={fadeUp}>
            <a
              href={`${CLOUDPANO_BASE}${campus.tourId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 vk-action-outline vk-arrow-nudge border-2 border-[#0b1f5e] text-[#0b1f5e] hover:bg-[#0b1f5e] hover:text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              <FiVideo size={16} />
              Explore Virtual Tour
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
