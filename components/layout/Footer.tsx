'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FiFacebook, FiInstagram, FiMapPin, FiPhone, FiClock } from 'react-icons/fi'
import { useLang } from '@/lib/i18n/context'
import { CAMPUSES, SOCIAL } from '@/lib/constants'

const NAV_LINKS = [
  { labelKey: 'services', href: '/services' },
  { labelKey: 'programs', href: '/programs' },
  { labelKey: 'about', href: '/about' },
  { labelKey: 'apply', href: '/apply' },
  { labelKey: 'careers', href: '/careers' },
  { labelKey: 'faq', href: '/faq' },
] as const

export default function Footer() {
  const { t } = useLang()
  const f = t.footer

  return (
    <footer className="bg-[#0b1f5e] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="vk-subtle-link flex items-center gap-3 mb-5 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
              <Image src="/logo.png" alt="Vanguard Kids Academy" width={48} height={48} className="rounded-full" />
              <span className="font-black text-sm leading-tight">
                VANGUARD KIDS<br />
                <span className="font-normal text-white/50 text-xs tracking-wide">ACADEMY</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-[220px]">{f.tagline}</p>
            <div className="flex gap-3">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer"
                className="vk-icon-button w-9 h-9 bg-white/10 hover:bg-[#ffd200] hover:text-[#0b1f5e] rounded-full flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
                <FiFacebook size={15} />
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                className="vk-icon-button w-9 h-9 bg-white/10 hover:bg-[#ffd200] hover:text-[#0b1f5e] rounded-full flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
                <FiInstagram size={15} />
              </a>
            </div>
          </div>

          {/* Col 2 — Dover */}
          <div>
            <h3 className="text-[#ffd200] text-xs font-black tracking-[0.15em] uppercase mb-5">Dover</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin size={14} className="mt-0.5 shrink-0 text-white/40" />
                <p className="text-white/70 text-sm leading-relaxed">{CAMPUSES.dover.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone size={14} className="shrink-0 text-white/40" />
                <a href={`tel:${CAMPUSES.dover.phone.replace(/\D/g, '')}`}
                  className="vk-subtle-link rounded text-white/70 text-sm hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
                  {CAMPUSES.dover.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiClock size={14} className="shrink-0 text-white/40" />
                <p className="text-white/70 text-sm">{f.weekdays} · {CAMPUSES.dover.hours}</p>
              </div>
            </div>
          </div>

          {/* Col 3 — Fort Myers */}
          <div>
            <h3 className="text-[#ffd200] text-xs font-black tracking-[0.15em] uppercase mb-5">Fort Myers</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin size={14} className="mt-0.5 shrink-0 text-white/40" />
                <p className="text-white/70 text-sm leading-relaxed">{CAMPUSES.fortMyers.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone size={14} className="shrink-0 text-white/40" />
                <a href={`tel:${CAMPUSES.fortMyers.phone.replace(/\D/g, '')}`}
                  className="vk-subtle-link rounded text-white/70 text-sm hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
                  {CAMPUSES.fortMyers.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiClock size={14} className="shrink-0 text-white/40" />
                <p className="text-white/70 text-sm">{f.weekdays} · {CAMPUSES.fortMyers.hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
            {NAV_LINKS.map(({ labelKey, href }) => (
              <Link key={href} href={href}
                className="vk-subtle-link rounded text-white/40 hover:text-white text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
                {f.nav[labelKey]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>{f.rights}</span>
            <Link href="/privacy" className="vk-subtle-link rounded hover:text-white/60 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">{f.privacy}</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
