import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FiArrowRight,
  FiCheckCircle,
  FiClipboard,
  FiFileText,
  FiHeart,
  FiPhone,
  FiStar,
  FiUsers,
} from 'react-icons/fi'
import { CAMPUSES } from '@/lib/constants'
import LocalizedText from '@/components/i18n/LocalizedText'

export const metadata: Metadata = {
  title: 'Childcare Financial Assistance Resources',
  description:
    'Learn about childcare financial assistance at Vanguard Kids Academy, including School Readiness, Florida VPK, Early Head Start, eligibility support, and enrollment resources for families.',
}

const supportSteps = [
  {
    title: { en: 'Ask about eligibility', es: 'Pregunte sobre elegibilidad' },
    body: {
      en: 'Our office can help families understand program information, eligibility questions, and next steps.',
      es: 'Nuestra oficina puede ayudar a las familias a entender la informacion de los programas, preguntas de elegibilidad y los proximos pasos.',
    },
    Icon: FiClipboard,
  },
  {
    title: { en: 'Bring approved documents', es: 'Traiga documentos aprobados' },
    body: {
      en: 'Families with approved certificates or program paperwork can share those details with the campus team.',
      es: 'Las familias con certificados aprobados o documentos del programa pueden compartir esos detalles con el equipo del campus.',
    },
    Icon: FiFileText,
  },
  {
    title: { en: 'Contact your campus', es: 'Contacte su campus' },
    body: {
      en: 'Program availability can vary by campus, so the best next step is to contact the campus you prefer.',
      es: 'La disponibilidad de programas puede variar por campus, asi que el mejor proximo paso es contactar el campus que prefiere.',
    },
    Icon: FiPhone,
  },
]

const programs = [
  {
    title: 'School Readiness',
    eyebrow: { en: 'Childcare tuition assistance', es: 'Ayuda para el costo del cuidado infantil' },
    Icon: FiClipboard,
    description: {
      en: 'School Readiness provides childcare tuition assistance to eligible Florida families through the Early Learning Coalition. Families with approved School Readiness funding can use their certificate at Vanguard Kids Academy.',
      es: 'School Readiness ofrece ayuda para el costo del cuidado infantil a familias elegibles de Florida a traves de Early Learning Coalition. Las familias con fondos aprobados de School Readiness pueden usar su certificado en Vanguard Kids Academy.',
    },
    bullets: [
      {
        en: 'Helps eligible families reduce childcare tuition costs',
        es: 'Ayuda a familias elegibles a reducir el costo del cuidado infantil',
      },
      { en: 'Works through the Early Learning Coalition', es: 'Funciona a traves de Early Learning Coalition' },
      {
        en: 'Supports consistent care and early education routines',
        es: 'Apoya rutinas constantes de cuidado y educacion temprana',
      },
    ],
    links: [
      { label: { en: 'Ask About School Readiness', es: 'Preguntar sobre School Readiness' }, href: '/apply' },
      { label: { en: 'View Programs', es: 'Ver programas' }, href: '/programs' },
    ],
  },
  {
    title: 'Voluntary Prekindergarten (VPK)',
    eyebrow: { en: 'Free Florida VPK program', es: 'Programa VPK gratis de Florida' },
    Icon: FiStar,
    description: {
      en: "Florida's Voluntary Prekindergarten Education Program, or VPK, is free for Florida children who are 4 years old on or before September 1. VPK helps children build early literacy, math, social, and emotional skills while preparing them for kindergarten.",
      es: 'El programa Voluntary Prekindergarten de Florida, o VPK, es gratis para ninos de Florida que cumplen 4 anos en o antes del 1 de septiembre. VPK ayuda a los ninos a desarrollar lectura temprana, matematicas, habilidades sociales y emocionales mientras se preparan para kindergarten.',
    },
    bullets: [
      { en: 'Early literacy, math, and hands-on lessons', es: 'Lectura temprana, matematicas y lecciones practicas' },
      {
        en: 'Teacher interactions that build confidence and independence',
        es: 'Interacciones con maestros que fortalecen la confianza y la independencia',
      },
      {
        en: 'Social and emotional skills for the kindergarten transition',
        es: 'Habilidades sociales y emocionales para la transicion a kindergarten',
      },
    ],
    links: [
      { label: { en: 'Ask About VPK', es: 'Preguntar sobre VPK' }, href: '/apply' },
      { label: { en: 'Compare Programs', es: 'Comparar programas' }, href: '/programs' },
    ],
  },
  {
    title: 'Early Head Start (EHS)',
    eyebrow: { en: 'Federally funded infant and toddler support', es: 'Apoyo federal para bebes y ninos pequenos' },
    Icon: FiHeart,
    description: {
      en: 'Early Head Start is a federally funded program that helps eligible infants, toddlers, and families access high-quality early childhood education and family support at little or no cost.',
      es: 'Early Head Start es un programa con fondos federales que ayuda a bebes, ninos pequenos y familias elegibles a acceder a educacion temprana de alta calidad y apoyo familiar a bajo costo o sin costo.',
    },
    bullets: [
      { en: 'Supports healthy development and family goals', es: 'Apoya el desarrollo saludable y las metas familiares' },
      {
        en: 'Designed for eligible infants, toddlers, and families',
        es: 'Disenado para bebes, ninos pequenos y familias elegibles',
      },
      {
        en: 'May be available at little or no cost for qualifying families',
        es: 'Puede estar disponible a bajo costo o sin costo para familias que califican',
      },
    ],
    note: {
      en: 'Early Head Start availability may vary by campus. Dover offers Early Head Start; please contact Vanguard Kids Academy for current program details.',
      es: 'La disponibilidad de Early Head Start puede variar por campus. Dover ofrece Early Head Start; comuníquese con Vanguard Kids Academy para detalles actuales del programa.',
    },
    links: [
      { label: { en: 'Contact Dover', es: 'Contactar Dover' }, href: '/locations/dover' },
      { label: { en: 'Ask About Eligibility', es: 'Preguntar sobre elegibilidad' }, href: '/apply' },
    ],
  },
  {
    title: 'Office Support & Enrollment Help',
    eyebrow: { en: 'Guidance for families', es: 'Orientacion para familias' },
    Icon: FiUsers,
    description: {
      en: "Vanguard Kids Academy's office can help families understand program information, eligibility, enrollment resources, and funding opportunities before they choose a campus or complete enrollment paperwork.",
      es: 'La oficina de Vanguard Kids Academy puede ayudar a las familias a entender la informacion de programas, elegibilidad, recursos de inscripcion y oportunidades de ayuda antes de elegir un campus o completar documentos.',
    },
    bullets: [
      {
        en: 'Help understanding available program information',
        es: 'Ayuda para entender la informacion de programas disponibles',
      },
      { en: 'Enrollment packet and document guidance', es: 'Orientacion con documentos y paquete de inscripcion' },
      { en: 'Campus-specific availability and next steps', es: 'Disponibilidad por campus y proximos pasos' },
    ],
    links: [
      { label: { en: 'Schedule a Tour', es: 'Agendar una visita' }, href: '/apply' },
      { label: { en: 'Visit FAQ', es: 'Ver preguntas frecuentes' }, href: '/faq' },
    ],
  },
]

const campusContacts = [
  {
    name: 'Dover',
    phone: CAMPUSES.dover.phone,
    href: `tel:${CAMPUSES.dover.phone.replace(/\D/g, '')}`,
    details: {
      en: 'Ask about School Readiness, VPK, and Early Head Start availability.',
      es: 'Pregunte sobre la disponibilidad de School Readiness, VPK y Early Head Start.',
    },
  },
  {
    name: 'Fort Myers',
    phone: CAMPUSES.fortMyers.phone,
    href: `tel:${CAMPUSES.fortMyers.phone.replace(/\D/g, '')}`,
    details: {
      en: 'Ask about School Readiness, VPK, and current childcare openings.',
      es: 'Pregunte sobre School Readiness, VPK y cupos actuales de cuidado infantil.',
    },
  },
]

export default function ResourcesPage() {
  return (
    <>
      <section
        data-nav-theme="cream"
        className="relative overflow-hidden bg-[#2746a0] px-4 pt-24 text-white"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div aria-hidden="true" className="absolute -left-24 top-24 h-72 w-72 rounded-full border-[30px] border-[#ffd200]/18" />
        <div aria-hidden="true" className="absolute -right-20 bottom-8 h-60 w-60 rounded-full bg-[#ffd200]/10" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center py-20 text-center lg:py-28">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-white/70">
            <LocalizedText en="Family Resources" es="Recursos para familias" />
          </p>
          <h1 className="font-display text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
            <LocalizedText en="Financial Assistance &" es="Ayuda financiera y" />{' '}
            <span className="font-display italic text-[#ffd200]">
              <LocalizedText en="Subsidized Programs" es="programas subsidiados" />
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-white/80 md:text-lg">
            <LocalizedText
              en="Vanguard Kids participates in state and federally funded programs that help eligible families reduce or eliminate the cost of childcare and early education."
              es="Vanguard Kids participa en programas estatales y federales que ayudan a familias elegibles a reducir o eliminar el costo del cuidado infantil y la educacion temprana."
            />
          </p>
        </div>
      </section>

      <section data-nav-theme="blue" className="bg-[#f7fbff] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1a3496]">
                <LocalizedText en="Where to Start" es="Por donde empezar" />
              </p>
              <h2 className="mt-3 font-display text-4xl font-black leading-tight text-[#0b1f5e] md:text-5xl">
                <LocalizedText
                  en="Childcare costs matter. We can help you understand your options."
                  es="El costo del cuidado infantil importa. Podemos ayudarle a entender sus opciones."
                />
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                <LocalizedText
                  en="Our team helps families understand available programs, approved certificates, enrollment resources, and the right campus contact for their next step."
                  es="Nuestro equipo ayuda a las familias a entender programas disponibles, certificados aprobados, recursos de inscripcion y el contacto correcto del campus para su proximo paso."
                />
              </p>
            </div>

            <div className="grid gap-4">
              {supportSteps.map(({ title, body, Icon }) => (
                <div
                  key={title.en}
                  className="vk-soft-card flex gap-4 rounded-2xl border border-[#0b1f5e]/10 bg-white p-5 shadow-sm"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#e8f4f8] text-[#0b1f5e]">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <div>
                    <h3 className="font-black text-[#0b1f5e]">
                      <LocalizedText en={title.en} es={title.es} />
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      <LocalizedText en={body.en} es={body.es} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-nav-theme="blue" className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1a3496]">
              <LocalizedText en="Program Guide" es="Guia de programas" />
            </p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight text-[#0b1f5e] md:text-5xl">
              <LocalizedText
                en="Funding and early learning resources for families."
                es="Recursos de ayuda y aprendizaje temprano para familias."
              />
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {programs.map(({ title, eyebrow, Icon, description, bullets, note, links }) => (
              <article
                key={title}
                className="vk-soft-card flex h-full flex-col rounded-[2rem] border border-[#0b1f5e]/10 bg-[#fbfdff] p-6 shadow-sm md:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#0b1f5e] text-[#ffd200]">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1a3496]">
                    <LocalizedText en={eyebrow.en} es={eyebrow.es} />
                    </p>
                    <h3 className="mt-2 text-2xl font-black leading-tight text-[#0b1f5e]">
                      {title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  <LocalizedText en={description.en} es={description.es} />
                </p>

                <ul className="mt-6 space-y-3">
                  {bullets.map((bullet) => (
                    <li key={bullet.en} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <FiCheckCircle aria-hidden="true" className="mt-1 shrink-0 text-[#1a3496]" />
                      <span>
                        <LocalizedText en={bullet.en} es={bullet.es} />
                      </span>
                    </li>
                  ))}
                </ul>

                {note && (
                  <p className="mt-6 rounded-2xl bg-[#fff7cc] px-4 py-3 text-sm font-bold leading-7 text-[#0b1f5e]">
                    <LocalizedText en={note.en} es={note.es} />
                  </p>
                )}

                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  {links.map((link, index) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className={`vk-arrow-nudge inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] ${
                        index === 0
                          ? 'vk-action-secondary bg-[#0b1f5e] text-white hover:bg-[#1a3496]'
                          : 'vk-action-light bg-[#e8f4f8] text-[#0b1f5e] hover:bg-[#d7edf4]'
                      }`}
                    >
                      <LocalizedText en={link.label.en} es={link.label.es} />
                      <FiArrowRight aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="blue" className="bg-[#ffd200] px-4 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b1f5e]/70">
                <LocalizedText en="Campus Support" es="Apoyo del campus" />
              </p>
              <h2 className="mt-2 font-display text-3xl font-black leading-tight text-[#0b1f5e] md:text-5xl">
                <LocalizedText en="More questions? We're a call away." es="Mas preguntas? Estamos a una llamada." />
              </h2>
              <p className="mt-4 text-base font-medium leading-8 text-[#0b1f5e]/75">
                <LocalizedText
                  en="Contact your preferred campus to ask about eligibility, current openings, and enrollment resources."
                  es="Contacte el campus que prefiere para preguntar sobre elegibilidad, cupos actuales y recursos de inscripcion."
                />
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {campusContacts.map((campus) => (
                <div key={campus.name} className="vk-soft-card rounded-2xl border border-transparent bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-black text-[#0b1f5e]">{campus.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    <LocalizedText en={campus.details.en} es={campus.details.es} />
                  </p>
                  <a
                    href={campus.href}
                    className="vk-action-secondary vk-arrow-nudge mt-5 inline-flex items-center gap-2 rounded-full bg-[#0b1f5e] px-5 py-3 text-sm font-black text-white transition hover:bg-[#1a3496] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1f5e]"
                  >
                    {campus.phone}
                    <FiPhone aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href="/apply"
              className="vk-action-secondary vk-arrow-nudge inline-flex items-center gap-2 rounded-full bg-[#0b1f5e] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#1a3496] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1f5e]"
            >
              <LocalizedText en="Apply Now" es="Aplicar ahora" />
              <FiArrowRight aria-hidden="true" />
            </Link>
            <Link
              href="/faq"
              className="vk-action-light vk-arrow-nudge inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#0b1f5e] transition hover:bg-[#f7fbff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1f5e]"
            >
              <LocalizedText en="Read FAQ" es="Leer preguntas frecuentes" />
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
