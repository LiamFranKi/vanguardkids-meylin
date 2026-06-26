import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiBookOpen,
  FiClock,
  FiCoffee,
  FiGlobe,
  FiHeart,
  FiMapPin,
  FiPhone,
  FiUsers,
  FiZap,
} from 'react-icons/fi'
import { CAMPUSES, CLOUDPANO_BASE } from '@/lib/constants'
import CampusPhotoCarousel from '@/components/locations/CampusPhotoCarousel'
import LocalizedText from '@/components/i18n/LocalizedText'

export const metadata: Metadata = {
  title: 'Fort Myers Childcare, Preschool, VPK & Before/After School',
  description:
    'Visit Vanguard Kids Academy Fort Myers for childcare, preschool, Free VPK, School Readiness, Before & After School care, free meals, and school pickup.',
}

const campus = CAMPUSES.fortMyers
const virtualTourUrl = `${CLOUDPANO_BASE}${campus.tourId}`

const programs = [
  'Free VPK',
  'School Readiness',
]

const features = [
  { label: { en: 'Bilingual Learning', es: 'Aprendizaje bilingue' }, icon: FiGlobe },
  { label: { en: 'Free Meals', es: 'Comidas gratis' }, icon: FiCoffee },
  { label: { en: 'Small Class Sizes', es: 'Grupos pequenos' }, icon: FiUsers },
  { label: { en: 'Play & Learn', es: 'Jugar y aprender' }, icon: FiBookOpen },
  { label: { en: 'STEAM Learning', es: 'Aprendizaje STEAM' }, icon: FiZap },
]

const campusServices = [
  { label: { en: 'Infant Care', es: 'Cuidado de bebés' }, detail: { en: 'Care from 6 weeks', es: 'Cuidado desde 6 semanas' }, icon: FiHeart },
  { label: { en: 'Toddler Care', es: 'Cuidado de niños pequeños' }, detail: { en: 'Active early learning', es: 'Aprendizaje temprano activo' }, icon: FiUsers },
  { label: { en: 'Preschool', es: 'Preescolar' }, detail: { en: 'Play-based school readiness', es: 'Preparación escolar con juego' }, icon: FiBookOpen },
  { label: { en: 'Before & After School', es: 'Cuidado antes y después de clases' }, detail: { en: 'School-age care before and after class', es: 'Cuidado escolar antes y después de clases' }, icon: FiClock },
  { label: { en: 'Free Meals', es: 'Comidas gratis' }, detail: { en: 'Nutritious meals and snacks', es: 'Comidas y meriendas nutritivas' }, icon: FiCoffee },
]

const pickupSchools = [
  'Manatee Elementary',
  'Orange River Elementary School',
  'Tice Elementary',
  'Oak Hammock Middle School',
  'James Stephens Elementary',
]

const programCards = [
  {
    title: 'Free VPK',
    href: '/programs#free-vpk',
    body: {
      en: 'VPK is a FREE educational program available to all Florida children who are 4 years old by September 1. Our VPK program focuses on developing the early literacy, math, social, and emotional skills children need for a successful transition to kindergarten.',
      es: 'VPK es un programa educativo GRATIS disponible para todos los ninos de Florida que cumplen 4 anos en o antes del 1 de septiembre. Nuestro programa VPK se enfoca en desarrollar lectura temprana, matematicas y habilidades sociales y emocionales para una buena transicion a kindergarten.',
    },
  },
  {
    title: 'School Readiness',
    href: '/programs#school-readiness',
    body: {
      en: 'The School Readiness Program provides childcare tuition assistance to eligible Florida families through the Early Learning Coalition. Families with approved School Readiness funding may use their benefits at Vanguard Kids to help make quality childcare more affordable.',
      es: 'El programa School Readiness ofrece ayuda para el costo del cuidado infantil a familias elegibles de Florida a traves de Early Learning Coalition. Las familias con fondos aprobados de School Readiness pueden usar sus beneficios en Vanguard Kids para hacer el cuidado de calidad mas accesible.',
    },
  },
]

const galleryImages = [
  {
    src: '/images/campuses/fort-myers/fort-myers-01.png',
    alt: 'Classroom at Vanguard Kids Academy Fort Myers Campus',
  },
  {
    src: '/images/campuses/fort-myers/fort-myers-02.png',
    alt: 'Learning space at Vanguard Kids Academy Fort Myers Campus',
  },
  {
    src: '/images/campuses/fort-myers/fort-myers-03.png',
    alt: 'Classroom learning displays at Vanguard Kids Academy Fort Myers Campus',
  },
  {
    src: '/images/campuses/fort-myers/fort-myers-04.png',
    alt: 'Learning space at Vanguard Kids Academy Fort Myers Campus',
  },
  {
    src: '/images/campuses/fort-myers/fort-myers-05.png',
    alt: 'Classroom at Vanguard Kids Academy Fort Myers Campus',
  },
  {
    src: '/images/campuses/fort-myers/fort-myers-exterior-01.png',
    alt: 'Campus exterior at Vanguard Kids Academy Fort Myers Campus',
  },
]

export default function FortMyersLocationPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section data-nav-theme="cream" className="relative overflow-hidden bg-[#2746a0] px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24">
        <div className="absolute right-0 top-0 h-full w-[55%] pointer-events-none">
          <svg width="100%" height="100%" className="opacity-20" aria-hidden="true">
            <defs>
              <pattern id="fort-myers-dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="11" cy="11" r="2.2" fill="#3b5bdb" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fort-myers-dots)" />
          </svg>
        </div>
        <Image
          src="/assets/canva/brushstroke-circle-navy.png"
          alt=""
          width={760}
          height={760}
          aria-hidden="true"
          className="pointer-events-none absolute -right-56 top-24 hidden h-[620px] w-[620px] object-contain opacity-80 lg:block"
          priority
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="vk-gallery-frame overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(5,16,57,0.28)]">
            <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#1e3fa0]">
                  Vanguard Kids Academy
                </p>
                <h1 className="font-display text-5xl font-black leading-none text-[#0b1f5e] sm:text-6xl">
                  Fort Myers Campus
                </h1>

                <div className="mt-5 flex items-start gap-3 text-[#0b1f5e]">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd200]">
                    <FiMapPin size={18} aria-hidden="true" />
                  </span>
                  <p className="text-base font-bold leading-relaxed">
                    465 Carolina Ave, Fort Myers, FL 33905
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {programs.map((program) => (
                    <span key={program} className="rounded-full border border-[#0b1f5e] bg-[#e8f4f8] px-3 py-1.5 text-xs font-black text-[#0b1f5e]">
                      {program}
                    </span>
                  ))}
                </div>

                <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                  <CampusInfo icon={FiClock} label={{ en: 'Hours', es: 'Horario' }} value={{ en: 'Mon-Fri: 6:00 am - 6:00 pm', es: 'Lun-Vie: 6:00 am - 6:00 pm' }} />
                  <CampusInfo icon={FiPhone} label={{ en: 'Contact', es: 'Contacto' }} value={{ en: '(239) 694-5912', es: '(239) 694-5912' }} href="tel:2396945912" />
                  <CampusInfo icon={FiUsers} label={{ en: 'Ages', es: 'Edades' }} value={{ en: '6 weeks - 12 years', es: '6 semanas - 12 anos' }} />
                </dl>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link href="/apply" className="vk-action-secondary vk-arrow-nudge inline-flex items-center justify-center gap-2 rounded-full bg-[#0b1f5e] px-7 py-4 text-sm font-black text-white transition-colors hover:bg-[#1e3fa0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
                    <LocalizedText en="Schedule a Tour" es="Agendar una visita" /> <FiArrowRight aria-hidden="true" />
                  </Link>
                  <Link href="/apply" className="vk-action-primary inline-flex items-center justify-center rounded-full bg-[#ffd200] px-7 py-4 text-sm font-black text-[#0b1f5e] transition-colors hover:bg-[#e6bd00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
                    <LocalizedText en="Apply Now" es="Aplicar ahora" />
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden bg-[#e8f4f8] lg:min-h-full">
                <Image
                  src="/images/campuses/fort-myers/fort-myers-01.png"
                  alt="Children learning at Vanguard Kids Academy Fort Myers Campus"
                  fill
                  className="vk-visual-image object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {features.map(({ label, icon: Icon }) => (
            <div key={label.en} className="vk-soft-card flex flex-col items-center rounded-[1.5rem] border border-transparent bg-white p-4 text-center text-[#0b1f5e] shadow-[0_10px_28px_rgba(11,31,94,0.08)] last:col-span-2 last:mx-auto last:w-[calc(50%-0.5rem)] sm:last:col-span-1 sm:last:w-auto sm:last:mx-0">
              <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffd200]">
                <Icon size={24} aria-hidden="true" />
              </span>
              <p className="text-sm font-black leading-tight">
                <LocalizedText en={label.en} es={label.es} />
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0b1f5e] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative pl-6">
            <span className="absolute bottom-1 left-0 top-1 w-1.5 rounded-full bg-[#ffd200]" aria-hidden="true" />
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#ffd200]">
              <LocalizedText en="Visit us" es="Visitenos" />
            </p>
            <h2 className="font-display text-4xl font-black leading-tight md:text-5xl">
              <LocalizedText en="Campus Location" es="Ubicacion del campus" />
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/78">
              <LocalizedText
                en="Vanguard Kids Academy Fort Myers Campus provides childcare, preschool, Free VPK, and School Readiness support for families in Fort Myers, FL and nearby Lee County communities."
                es="Vanguard Kids Academy Fort Myers Campus ofrece cuidado infantil, preescolar, Free VPK y apoyo de School Readiness para familias en Fort Myers, FL y comunidades cercanas del condado de Lee."
              />
            </p>
            <a
              href={virtualTourUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the Fort Myers Campus virtual tour"
              className="vk-action-primary vk-arrow-nudge mt-8 inline-flex items-center gap-2 rounded-full bg-[#ffd200] px-7 py-4 text-sm font-black text-[#0b1f5e] transition-colors hover:bg-[#e6bd00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              <LocalizedText en="Virtual Campus Tour" es="Tour virtual del campus" /> <FiArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="vk-gallery-frame overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
            <div className="bg-[#ffd200] px-6 py-4 text-sm font-black text-[#0b1f5e]">
              465 Carolina Ave, Fort Myers, FL 33905
            </div>
            <iframe
              title="Map to Vanguard Kids Academy Fort Myers Campus"
              src={campus.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[340px] w-full border-0"
              allowFullScreen
            />
            <div className="bg-white px-6 py-4">
              <a href={campus.mapsUrl} target="_blank" rel="noreferrer" className="vk-subtle-link inline-flex items-center gap-2 rounded text-sm font-black text-[#0b1f5e] hover:text-[#1e3fa0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
                <LocalizedText en="View on Google Maps" es="Ver en Google Maps" /> <FiArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7bf] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#1e3fa0]">
              <LocalizedText en="Fort Myers campus services" es="Servicios del campus Fort Myers" />
            </p>
            <h2 className="font-display text-4xl font-black leading-tight text-[#0b1f5e] md:text-5xl">
              <LocalizedText en="Care, meals, and school pickup for Fort Myers families" es="Cuidado, comidas y recogida escolar para familias de Fort Myers" />
            </h2>
            <p className="mt-4 max-w-2xl text-base font-bold leading-relaxed text-[#0b1f5e]/75">
              <LocalizedText
                en="Fort Myers offers before and after school care, free meals, and pickup service from nearby elementary and middle schools."
                es="Fort Myers ofrece cuidado antes y después de clases, comidas gratis y recogida desde escuelas primarias y secundarias cercanas."
              />
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {campusServices.map(({ label, detail, icon: Icon }) => (
              <article key={label.en} className="vk-soft-card flex gap-4 rounded-[1.5rem] border border-transparent bg-white p-5 shadow-[0_12px_30px_rgba(11,31,94,0.1)] sm:last:col-span-2 sm:last:mx-auto sm:last:w-[calc(50%-0.5rem)] lg:last:col-span-1 lg:last:w-auto">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffd200] text-[#0b1f5e]">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-black leading-snug text-[#0b1f5e]">
                    <LocalizedText en={label.en} es={label.es} />
                  </h3>
                  <p className="mt-1 text-sm font-bold leading-relaxed text-slate-600">
                    <LocalizedText en={detail.en} es={detail.es} />
                  </p>
                </div>
              </article>
            ))}
          </div>

          <article className="vk-soft-card mt-6 rounded-[1.5rem] border border-transparent bg-[#0b1f5e] p-6 text-white shadow-[0_14px_34px_rgba(11,31,94,0.18)]">
            <div className="grid gap-6 lg:grid-cols-[0.6fr_1fr] lg:items-start">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffd200] text-[#0b1f5e]">
                  <FiMapPin size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-black leading-tight">
                    <LocalizedText en="School pickup service" es="Recogida escolar" />
                  </h3>
                  <p className="mt-2 text-sm font-bold leading-relaxed text-white/75">
                    <LocalizedText en="Pickup is available from:" es="Recogida disponible desde:" />
                  </p>
                </div>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {pickupSchools.map((school) => (
                  <li key={school} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-black leading-snug ring-1 ring-white/10">
                    {school}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#e8f4f8] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#1e3fa0]">
              <LocalizedText en="Fort Myers childcare and preschool programs" es="Programas de cuidado infantil y preescolar en Fort Myers" />
            </p>
            <h2 className="font-display text-4xl font-black text-[#0b1f5e] md:text-5xl">
              <LocalizedText en="Programs Available" es="Programas disponibles" />
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {programCards.map((program) => (
              <article key={program.title} className="vk-soft-card flex flex-col rounded-[2rem] border border-transparent bg-white p-7 shadow-[0_14px_34px_rgba(11,31,94,0.1)]">
                <h3 className="text-2xl font-black text-[#0b1f5e]">{program.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                  <LocalizedText en={program.body.en} es={program.body.es} />
                </p>
                <Link href={program.href} className="vk-action-secondary vk-arrow-nudge mt-6 inline-flex items-center gap-2 self-start rounded-full bg-[#0b1f5e] px-5 py-3 text-sm font-black text-white transition-colors hover:bg-[#1e3fa0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
                  <LocalizedText en="Learn More" es="Conocer mas" /> <FiArrowRight aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="campus-gallery" className="bg-white">
        <div className="bg-[#ffd200] px-4 py-10 text-center sm:px-6 lg:px-8">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#0b1f5e]/70">
            Fort Myers Campus
          </p>
          <h2 className="font-display text-4xl font-black text-[#0b1f5e] md:text-5xl">
            <LocalizedText en="Campus Gallery" es="Galeria del campus" />
          </h2>
          <p className="mt-3 text-base font-bold text-[#0b1f5e]/75">
            <LocalizedText en="A peek into our daily classes in Fort Myers" es="Un vistazo a nuestras clases diarias en Fort Myers" />
          </p>
        </div>
        <CampusPhotoCarousel photos={galleryImages} />
      </section>

      <section data-nav-theme="cream" className="bg-gradient-to-br from-[#0b1f5e] via-[#14348e] to-[#2746a0] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] border border-white/15 bg-white/5 p-8 backdrop-blur md:flex-row md:items-center md:justify-between md:p-10">
          <div className="relative pl-6">
            <span className="absolute bottom-1 left-0 top-1 w-1.5 rounded-full bg-[#ffd200]" aria-hidden="true" />
            <h2 className="text-3xl font-black text-white md:text-4xl">
              <LocalizedText en="Not sure which program fits your family?" es="No sabe que programa es mejor para su familia?" />
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">
              <LocalizedText
                en="Schedule a tour and see how our Fort Myers childcare and preschool classrooms support children from 6 weeks to 12 years."
                es="Agende una visita y vea como nuestros salones de cuidado infantil y preescolar en Fort Myers apoyan a ninos desde 6 semanas hasta 12 anos."
              />
            </p>
          </div>
          <Link href="/apply" className="vk-action-primary vk-arrow-nudge inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ffd200] px-7 py-4 text-sm font-black text-[#0b1f5e] transition-colors hover:bg-[#e6bd00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
            <LocalizedText en="Schedule a Tour Now" es="Agendar una visita ahora" /> <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}

function CampusInfo({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof FiClock
  label: { en: string; es: string }
  value: { en: string; es: string }
  href?: string
}) {
  return (
    <div className="vk-soft-card rounded-2xl border border-transparent bg-[#f7fbff] p-4">
      <dt className="flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.16em] text-[#0b1f5e]/60">
        <Icon size={16} aria-hidden="true" />
        <LocalizedText en={label.en} es={label.es} />
      </dt>
      <dd className="mt-2 text-sm font-black leading-snug text-[#0b1f5e]">
        {href ? (
          <a href={href} className="vk-subtle-link rounded hover:text-[#1e3fa0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]">
            <LocalizedText en={value.en} es={value.es} />
          </a>
        ) : (
          <LocalizedText en={value.en} es={value.es} />
        )}
      </dd>
    </div>
  )
}
