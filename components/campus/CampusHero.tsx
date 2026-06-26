'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiMapPin, FiClock, FiPhone, FiUsers, FiVideo } from 'react-icons/fi'
import { CLOUDPANO_BASE } from '@/lib/constants'
import { fadeUp, stagger } from '@/lib/motion'
import type { CAMPUSES } from '@/lib/constants'

type Campus = typeof CAMPUSES[keyof typeof CAMPUSES]

export default function CampusHero({ campus }: { campus: Campus }) {
  return (
    <section data-nav-theme="cream" className="bg-[#0b1f5e] pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left info */}
        <div>
          <motion.p
            variants={fadeUp}
            className="text-[#ffd200] text-xs font-black tracking-[0.2em] uppercase mb-3"
          >
            Our Campus
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl lg:text-6xl font-black text-white mb-2 inline-block relative"
          >
            {campus.name}
            <span className="block h-1.5 bg-[#ffd200] rounded-full mt-2 w-2/3" />
          </motion.h1>

          <ul className="mt-8 space-y-4">
            {[
              { icon: FiMapPin, text: campus.address },
              { icon: FiClock, text: `Monday – Friday · ${campus.hours}` },
              { icon: FiPhone, text: campus.phone },
              { icon: FiUsers, text: `Ages ${campus.ages}` },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-white/70 text-sm">
                <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-white" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <a
            href={`${CLOUDPANO_BASE}${campus.tourId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="vk-subtle-link inline-flex items-center gap-2 mt-6 rounded text-white/60 font-bold text-sm hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
          >
            <FiVideo size={16} />
            Explore Virtual Tour
          </a>

          <div className="mt-7 flex gap-3 flex-wrap">
            <Link
              href="/apply"
              className="vk-action-light bg-white hover:bg-gray-100 text-[#0b1f5e] font-black px-6 py-3 rounded-xl text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/apply"
              className="vk-action-primary vk-arrow-nudge bg-[#ffd200] hover:bg-[#e6bd00] text-[#0b1f5e] font-black px-6 py-3 rounded-xl text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Right photo */}
        <div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            <Image
              src={campus.heroImage}
              alt={`${campus.name} campus`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
