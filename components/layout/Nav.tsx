'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/lib/i18n/context'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'

const NAV_LINKS = [
  { key: 'services' as const, href: '/services' },
  { key: 'programs' as const, href: '/programs' },
  { key: 'locations' as const, href: '/#locations' },
  { key: 'about' as const, href: '/about' },
  { key: 'careers' as const, href: '/careers' },
  { key: 'resources' as const, href: '/resources' },
  { key: 'faq' as const, href: '/faq' },
]

const LOCATION_LINKS = [
  { labelKey: 'dover' as const, href: '/locations/dover' },
  { labelKey: 'fortMyers' as const, href: '/locations/fort-myers' },
]

type NavTheme = 'cream' | 'blue'

function LangToggle({ isCream, lang, toggle }: { isCream: boolean; lang: string; toggle: () => void }) {
  const isEN = lang === 'en'

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
      className={`vk-action-outline relative flex items-center rounded-full text-xs font-bold overflow-hidden transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] ${
        isCream
          ? 'bg-white border border-[#0b1f5e]/20 text-[#0b1f5e]'
          : 'bg-[#1a3496] border border-white/20 text-white'
      }`}
    >
      {/* Sliding thumb */}
      <motion.div
        className={`absolute top-0 bottom-0 w-[50%] rounded-full ${
          isCream ? 'bg-[#0b1f5e]' : 'bg-white/20'
        }`}
        animate={{ x: isEN ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.8 }}
      />
      <span className={`relative z-10 px-3 py-1.5 transition-colors duration-150 ${
        isEN
          ? isCream ? 'text-white' : 'text-white'
          : 'opacity-50'
      }`}>
        EN
      </span>
      <span className={`relative z-10 px-3 py-1.5 transition-colors duration-150 ${
        !isEN
          ? isCream ? 'text-white' : 'text-white'
          : 'opacity-50'
      }`}>
        ES
      </span>
    </motion.button>
  )
}

export default function Nav() {
  const { t, lang, toggle } = useLang()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const [theme, setTheme] = useState<NavTheme>('cream')
  const intersectingRef = useRef<Map<Element, NavTheme>>(new Map())

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme]')
    if (!sections.length) return

    const pickTheme = () => {
      const map = intersectingRef.current
      if (map.size === 0) { setTheme('cream'); return }
      let chosen: NavTheme = 'cream'
      let topY = Infinity
      map.forEach((t, el) => {
        const y = el.getBoundingClientRect().top
        if (y < topY) { topY = y; chosen = t }
      })
      setTheme(chosen)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const t = entry.target.getAttribute('data-nav-theme') as NavTheme | null
          if (!t) return
          if (entry.isIntersecting) intersectingRef.current.set(entry.target, t)
          else intersectingRef.current.delete(entry.target)
        })
        pickTheme()
      },
      { rootMargin: '-64px 0px 0px 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const isCream = theme === 'cream'
  const isActive = (key: (typeof NAV_LINKS)[number]['key'], href: string) => {
    if (key === 'locations') return pathname === '/locations/dover' || pathname.startsWith('/locations/')
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isCream ? 'bg-[#fafaf7] shadow-md' : 'bg-[#0b1f5e] shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="vk-subtle-link flex items-center gap-2.5 shrink-0 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
            <Image src="/logo.png" alt="Vanguard Kids Academy" width={44} height={44} className="rounded-full" />
            <span className={`font-black text-sm leading-tight hidden sm:block transition-colors duration-300 ${
              isCream ? 'text-[#0b1f5e]' : 'text-white'
            }`}>
              VANGUARD KIDS<br />
              <span className={`font-normal text-xs tracking-wide transition-colors duration-300 ${
                isCream ? 'text-[#0b1f5e]/60' : 'text-white/60'
              }`}>ACADEMY</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map(({ key, href }) => {
              const active = isActive(key, href)
              const baseClass = `text-xs font-bold tracking-[0.12em] transition-colors duration-300 ${
                isCream
                  ? active ? 'text-[#1a3496]' : 'text-[#0b1f5e] hover:text-[#1a3496]'
                  : active ? 'text-white' : 'text-white/80 hover:text-white'
              }`

              if (key === 'locations') {
                return (
                  <div key={key} className="group relative">
                    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
                      <Link
                        href={href}
                        aria-haspopup="true"
                        className={`${baseClass} vk-subtle-link flex items-center gap-1.5 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]`}
                      >
                        {t.nav[key]}
                        <FiChevronDown
                          size={13}
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                        />
                      </Link>
                    </motion.div>
                    <div
                      className={`invisible absolute left-1/2 top-full z-50 mt-3 w-52 -translate-x-1/2 rounded-2xl p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                        isCream
                          ? 'bg-white ring-1 ring-[#0b1f5e]/10'
                          : 'bg-[#071242] ring-1 ring-white/10'
                      }`}
                    >
                      {LOCATION_LINKS.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`vk-action-light block rounded-xl px-4 py-3 text-sm font-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd200] ${
                            isCream
                              ? 'text-[#0b1f5e] hover:bg-[#e8f4f8] hover:text-[#1a3496] focus:bg-[#e8f4f8]'
                              : 'text-white/90 hover:bg-white/10 hover:text-white focus:bg-white/10'
                          }`}
                        >
                          {t.nav.locationLinks[item.labelKey]}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <motion.div key={key} whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
                  <Link href={href} className={`${baseClass} vk-subtle-link rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]`}>
                    {t.nav[key]}
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Right controls */}
          <div className="hidden lg:flex items-center gap-3">
            <LangToggle isCream={isCream} lang={lang} toggle={toggle} />
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                href="/apply"
                className={`block font-black text-xs tracking-wide px-4 py-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] ${
                  isCream
                    ? 'vk-action-secondary bg-[#0b1f5e] text-white hover:bg-[#1a3496]'
                    : 'vk-action-primary bg-[#ffd200] text-[#0b1f5e] hover:bg-[#e6bd00]'
                }`}
              >
                {t.nav.applyNow}
              </Link>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`vk-icon-button lg:hidden rounded-full p-2 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] ${
              isCream ? 'text-[#0b1f5e]' : 'text-white'
            }`}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </motion.button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-16 z-40 shadow-2xl lg:hidden transition-colors duration-300 ${
              isCream
                ? 'bg-[#fafaf7] border-t border-[#0b1f5e]/10'
                : 'bg-[#071242] border-t border-white/10'
            }`}
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {NAV_LINKS.map(({ key, href }) => {
                const active = isActive(key, href)

                if (key === 'locations') {
                  return (
                    <div key={key} className="space-y-3">
                      <button
                        type="button"
                        onClick={() => setLocationsOpen(v => !v)}
                        aria-expanded={locationsOpen}
                        className={`vk-action-light flex w-full items-center justify-between rounded-2xl px-2 py-2 text-left text-sm font-bold tracking-[0.1em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] ${
                          isCream
                            ? active ? 'text-[#1a3496]' : 'text-[#0b1f5e]/80 hover:text-[#0b1f5e]'
                            : active ? 'text-white' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {t.nav[key]}
                        <FiChevronDown
                          size={16}
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${locationsOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {locationsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.18 }}
                            className={`ml-3 flex flex-col gap-2 overflow-hidden border-l pl-4 ${
                              isCream ? 'border-[#0b1f5e]/15' : 'border-white/15'
                            }`}
                          >
                            {LOCATION_LINKS.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`vk-subtle-link rounded-lg py-1 text-sm font-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] ${
                                  isCream
                                    ? 'text-[#0b1f5e] hover:text-[#1a3496]'
                                    : 'text-white/90 hover:text-white'
                                }`}
                              >
                                {t.nav.locationLinks[item.labelKey]}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <Link
                    key={key}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`vk-subtle-link rounded-lg text-sm font-bold tracking-[0.1em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] ${
                      isCream
                        ? active ? 'text-[#1a3496]' : 'text-[#0b1f5e]/80 hover:text-[#0b1f5e]'
                        : active ? 'text-white' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {t.nav[key]}
                  </Link>
                )
              })}
              <div className={`pt-3 border-t flex items-center gap-3 ${
                isCream ? 'border-[#0b1f5e]/10' : 'border-white/10'
              }`}>
                <LangToggle isCream={isCream} lang={lang} toggle={toggle} />
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/apply"
                    onClick={() => setOpen(false)}
                    className={`block font-black text-xs px-4 py-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] ${
                      isCream
                        ? 'vk-action-secondary bg-[#0b1f5e] text-white'
                        : 'vk-action-primary bg-[#ffd200] text-[#0b1f5e]'
                    }`}
                  >
                    {t.nav.applyNow}
                  </Link>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
