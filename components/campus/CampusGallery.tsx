'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/i18n/context'
import { fadeUp, stagger, scaleIn } from '@/lib/motion'

const GALLERY_IMAGES = [
  { src: '/img1.jpg', alt: 'Colorful classroom activities' },
  { src: '/img2.jpg', alt: 'Dover campus classroom' },
  { src: '/img3.jpg', alt: 'Teacher and kids learning' },
  { src: '/img4.jpg', alt: 'Welcome to Vanguard Kids' },
  { src: '/banner-kids.png', alt: 'Kids engaged in creative activity' },
]

export default function CampusGallery({ campusName }: { campusName: string }) {
  const { t } = useLang()
  const c = t.campus

  return (
    <section data-nav-theme="cream" className="bg-[#0b1f5e] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-10"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-black text-[#ffd200] mb-1"
          >
            {c.gallery}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/50 text-sm"
          >
            {c.gallerySub} in {campusName}
          </motion.p>
        </motion.div>

        {/* Photo grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              variants={scaleIn}
              className={`vk-gallery-frame relative rounded-2xl overflow-hidden group ${
                i === 0 ? 'col-span-2 md:col-span-2 row-span-1' : ''
              }`}
              style={{ height: i === 0 ? 260 : 200 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="vk-visual-image object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#0b1f5e]/20 group-hover:bg-[#0b1f5e]/10 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
