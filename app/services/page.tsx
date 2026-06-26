import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FiArrowRight,
  FiCheck,
  FiMapPin,
  FiHeart,
  FiStar,
  FiBookOpen,
  FiClock,
  FiCoffee,
} from 'react-icons/fi'
import LocalizedText from '@/components/i18n/LocalizedText'

export const metadata: Metadata = {
  title: 'Childcare Services in Dover & Fort Myers',
  description:
    'Explore infant care, toddler care, preschool, Dover after-school care, Fort Myers before and after school care, free meals, and school pickup at Vanguard Kids Academy.',
}

const SERVICES = [
  {
    id: 'infants',
    Icon: FiHeart,
    colorClass: 'bg-[#ffd200] text-[#0b1f5e]',
    nameEn: 'Infant Care',
    nameEs: 'Cuidado de Bebés',
    ageEn: '6 weeks – 12 months',
    ageEs: '6 semanas – 12 meses',
    campuses: ['Dover', 'Fort Myers'],
    descEn:
      'Responsive, nurturing care for the youngest learners. Safe routines, attentive caregiving, and early developmental support during the most formative stage of life.',
    descEs:
      'Cuidado atento y cariñoso para los más pequeños. Rutinas seguras, atención personalizada y apoyo al desarrollo en la etapa más formativa.',
  },
  {
    id: 'toddlers',
    Icon: FiStar,
    colorClass: 'bg-[#e8f4f8] text-[#0b1f5e]',
    nameEn: 'Toddler Care',
    nameEs: 'Cuidado de Niños Pequeños',
    ageEn: '1 – 3 years',
    ageEs: '1 – 3 años',
    campuses: ['Dover', 'Fort Myers'],
    descEn:
      'Toddlers thrive with curiosity and movement. Our program encourages language growth, social-emotional development, and hands-on discovery in a supportive setting.',
    descEs:
      'Los niños pequeños prosperan con la curiosidad y el movimiento. Nuestro programa fomenta el lenguaje, las habilidades socioemocionales y el descubrimiento activo.',
  },
  {
    id: 'preschool',
    Icon: FiBookOpen,
    colorClass: 'bg-[#eef4ff] text-[#0b1f5e]',
    nameEn: 'Preschool',
    nameEs: 'Preescolar',
    ageEn: '3 – 5 years',
    ageEs: '3 – 5 años',
    campuses: ['Dover', 'Fort Myers'],
    descEn:
      'Building a confident foundation for kindergarten through play-based learning, early academics, and social development. Includes Florida VPK for qualifying 4-year-olds.',
    descEs:
      'Construimos las bases para un kínder exitoso a través del aprendizaje lúdico, iniciación académica y desarrollo social. Incluye VPK de Florida para niños elegibles de 4 años.',
  },
  {
    id: 'before-after',
    Icon: FiClock,
    colorClass: 'bg-[#0b1f5e] text-white',
    nameEn: 'Before & After School',
    nameEs: 'Cuidado Antes y Después',
    ageEn: 'School-age children',
    ageEs: 'Niños en edad escolar',
    campuses: ['Fort Myers'],
    descEn:
      'Dependable care for school-age children before and after the school day. Structured activities, homework support, and supervised play. Available at our Fort Myers campus.',
    descEs:
      'Cuidado confiable antes y después de clases. Actividades estructuradas, apoyo con tareas y juego supervisado. Disponible en nuestro campus de Fort Myers.',
  },
  {
    id: 'after-school',
    Icon: FiClock,
    colorClass: 'bg-[#fff7bf] text-[#0b1f5e]',
    nameEn: 'After-School Care',
    nameEs: 'Cuidado después de clases',
    ageEn: 'School-age children',
    ageEs: 'Niños en edad escolar',
    campuses: ['Dover'],
    descEn:
      'A safe, supportive after-school option for Dover families, with supervised activities and pickup service from Dover Elementary.',
    descEs:
      'Una opción segura después de clases para familias de Dover, con actividades supervisadas y recogida escolar desde Dover Elementary.',
  },
  {
    id: 'free-meals',
    Icon: FiCoffee,
    colorClass: 'bg-[#ffd200] text-[#0b1f5e]',
    nameEn: 'Free Meals',
    nameEs: 'Comidas gratis',
    ageEn: 'Included daily',
    ageEs: 'Incluidas diariamente',
    campuses: ['Dover', 'Fort Myers'],
    descEn:
      'Nutritious meals and snacks are included for children at both campuses.',
    descEs:
      'Comidas y meriendas nutritivas incluidas para los niños en ambos campus.',
  },
]

const DOVER_SERVICES = [
  { en: 'Infant Care', es: 'Cuidado de Bebés' },
  { en: 'Toddler Care', es: 'Cuidado de Niños Pequeños' },
  { en: 'Preschool', es: 'Preescolar' },
  { en: 'After-School Care', es: 'Cuidado después de clases' },
  { en: 'Free Meals', es: 'Comidas gratis' },
  { en: 'School pickup from Dover Elementary', es: 'Recogida escolar desde Dover Elementary' },
]

const FORT_MYERS_SERVICES = [
  { en: 'Infant Care', es: 'Cuidado de Bebés' },
  { en: 'Toddler Care', es: 'Cuidado de Niños Pequeños' },
  { en: 'Preschool', es: 'Preescolar' },
  { en: 'Before & After School', es: 'Cuidado antes y después de clases' },
  { en: 'Free Meals', es: 'Comidas gratis' },
  {
    en: 'School pickup from Manatee Elementary, Orange River Elementary School, Tice Elementary, Oak Hammock Middle School, and James Stephens Elementary',
    es: 'Recogida escolar desde Manatee Elementary, Orange River Elementary School, Tice Elementary, Oak Hammock Middle School y James Stephens Elementary',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        data-nav-theme="cream"
        className="relative overflow-hidden bg-[#2746a0] px-4 pb-20 pt-28 text-center"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <svg width="100%" height="100%" className="opacity-20">
            <defs>
              <pattern id="dots-svc" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="11" cy="11" r="2.2" fill="#3b5bdb" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-svc)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#ffd200]">
            <LocalizedText en="OUR SERVICES" es="NUESTROS SERVICIOS" />
          </p>
          <h1 className="font-display text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            <LocalizedText en="Services Designed for" es="Servicios para" />{' '}
            <span className="font-display italic text-[#ffd200]">
              <LocalizedText en="Every Stage" es="Cada Etapa" />
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            <LocalizedText
              en="From newborns to school-age children, we offer nurturing, age-appropriate care at our Dover and Fort Myers campuses. Every child deserves a safe, warm place to grow."
              es="Desde recién nacidos hasta niños en edad escolar, ofrecemos cuidado cariñoso y adecuado en nuestros campus de Dover y Fort Myers. Cada niño merece un lugar seguro y cálido para crecer."
            />
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/apply"
              className="vk-action-primary vk-arrow-nudge inline-flex items-center gap-2 rounded-full bg-[#ffd200] px-7 py-4 text-sm font-black text-[#0b1f5e] shadow-[0_0_0_4px_rgba(255,210,0,0.22),0_12px_28px_rgba(255,210,0,0.28)] transition-all hover:bg-[#ffe05c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              <LocalizedText en="Schedule a Tour Now" es="Agendar una Visita" />
              <FiArrowRight aria-hidden="true" />
            </Link>
            <a
              href="#services-overview"
              className="vk-action-light inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-7 py-4 text-sm font-black text-white transition-all hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              <LocalizedText en="Explore Services" es="Ver servicios" />
              <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────────────── */}
      <section id="services-overview" className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#1a3496]">
              <LocalizedText en="WHAT WE OFFER" es="LO QUE OFRECEMOS" />
            </p>
            <h2 className="mt-3 font-display text-3xl font-black leading-tight text-[#0b1f5e] sm:text-4xl md:text-5xl">
              <LocalizedText en="Care for Every Child, Every Age" es="Cuidado para cada niño, cada etapa" />
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              <LocalizedText
                en="Our programs are thoughtfully designed to meet children where they are — nurturing development, building confidence, and preparing them for a bright future."
                es="Nuestros programas están diseñados para acompañar a los niños en cada etapa, fomentando su desarrollo y preparándolos para un futuro brillante."
              />
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ id, Icon, colorClass, nameEn, nameEs, ageEn, ageEs, campuses, descEn, descEs }) => (
              <article
                key={id}
                className="vk-soft-card flex flex-col rounded-[2rem] bg-[#f7fbff] p-6 shadow-sm ring-1 ring-[#0b1f5e]/10"
              >
                <span className={`mb-4 grid h-14 w-14 place-items-center rounded-full ${colorClass}`}>
                  <Icon aria-hidden="true" size={22} />
                </span>
                <h3 className="text-xl font-black leading-tight text-[#0b1f5e]">
                  <LocalizedText en={nameEn} es={nameEs} />
                </h3>
                <p className="mt-1 text-xs font-bold text-[#1a3496]">
                  <LocalizedText en={ageEn} es={ageEs} />
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {campuses.map((campus) => (
                    <span
                      key={campus}
                      className="inline-flex items-center gap-1 rounded-full bg-[#eef4ff] px-2.5 py-1 text-[0.65rem] font-black text-[#0b1f5e] ring-1 ring-[#0b1f5e]/15"
                    >
                      <FiMapPin size={10} aria-hidden="true" />
                      {campus}
                    </span>
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  <LocalizedText en={descEn} es={descEs} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Campus availability ───────────────────────────────────── */}
      <section className="bg-[#ffd200] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b1f5e]/60">
              <LocalizedText en="CAMPUS AVAILABILITY" es="DISPONIBILIDAD POR CAMPUS" />
            </p>
            <h2 className="mt-3 font-display text-3xl font-black leading-tight text-[#0b1f5e] sm:text-4xl">
              <LocalizedText en="Available at Your Campus" es="Disponible en su campus" />
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-medium text-[#0b1f5e]/75">
              <LocalizedText
                en="Both campuses serve children from 6 weeks to 12 years, with campus-specific school-age care and free meals included."
                es="Ambos campus atienden a niños de 6 semanas a 12 años, con cuidado para edad escolar según el campus y comidas gratis incluidas."
              />
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Dover */}
            <div className="vk-soft-card rounded-[2rem] bg-white p-8 shadow-md">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#0b1f5e]">
                  <FiMapPin size={18} className="text-[#ffd200]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#0b1f5e]/50">
                    <LocalizedText en="Campus" es="Campus" />
                  </p>
                  <h3 className="text-xl font-black text-[#0b1f5e]">Dover</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {DOVER_SERVICES.map((svc) => (
                  <li key={svc.en} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0b1f5e]">
                      <FiCheck size={13} className="text-white" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-bold text-[#0b1f5e]">
                      <LocalizedText en={svc.en} es={svc.es} />
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/locations/dover"
                  className="vk-action-secondary vk-arrow-nudge inline-flex items-center gap-2 rounded-full bg-[#0b1f5e] px-5 py-3 text-sm font-black text-white transition-colors hover:bg-[#1a3496] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1f5e]"
                >
                  <LocalizedText en="Dover Campus" es="Campus Dover" />
                  <FiArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Fort Myers */}
            <div className="vk-soft-card rounded-[2rem] bg-[#0b1f5e] p-8 shadow-md">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#ffd200]">
                  <FiMapPin size={18} className="text-[#0b1f5e]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-white/40">
                    <LocalizedText en="Campus" es="Campus" />
                  </p>
                  <h3 className="text-xl font-black text-white">Fort Myers</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {FORT_MYERS_SERVICES.map((svc) => (
                  <li key={svc.en} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ffd200]">
                      <FiCheck size={13} className="text-[#0b1f5e]" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-bold text-white">
                      <LocalizedText en={svc.en} es={svc.es} />
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/locations/fort-myers"
                  className="vk-action-primary vk-arrow-nudge inline-flex items-center gap-2 rounded-full bg-[#ffd200] px-5 py-3 text-sm font-black text-[#0b1f5e] transition-colors hover:bg-[#e6bd00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
                >
                  <LocalizedText en="Fort Myers Campus" es="Campus Fort Myers" />
                  <FiArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section
        data-nav-theme="cream"
        className="bg-gradient-to-br from-[#0b1f5e] via-[#14348e] to-[#2746a0] px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-8 rounded-[2rem] border border-white/15 bg-white/5 p-8 backdrop-blur md:flex-row md:items-center md:justify-between md:p-10">
            <div className="relative pl-6">
              <span className="absolute bottom-1 left-0 top-1 w-1.5 rounded-full bg-[#ffd200]" aria-hidden="true" />
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#ffd200]">
                <LocalizedText en="Schedule a tour" es="Agendar una visita" />
              </p>
              <h2 className="text-3xl font-black text-white md:text-4xl">
                <LocalizedText en="Ready to see it in person?" es="¿Listo para verlo en persona?" />
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">
                <LocalizedText
                  en="Visit a campus, meet the team, and discover the right fit for your family."
                  es="Visite un campus, conozca al equipo y encuentre la mejor opción para su familia."
                />
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/apply"
                className="vk-action-primary vk-arrow-nudge inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd200] px-7 py-4 text-sm font-black text-[#0b1f5e] transition-colors hover:bg-[#e6bd00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
              >
                <LocalizedText en="Schedule a Tour" es="Agendar una Visita" />
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link
                href="/apply"
                className="vk-action-outline inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-4 text-sm font-black text-white transition-colors hover:bg-white hover:text-[#0b1f5e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
              >
                <LocalizedText en="Apply Now" es="Aplicar Ahora" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
