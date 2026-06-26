'use client'
import { Suspense, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { FiCheck, FiArrowRight, FiExternalLink, FiMapPin } from 'react-icons/fi'
import { useLang } from '@/lib/i18n/context'

const PROGRAM_TABS = [
  { id: 'free-vpk', label: 'Free VPK' },
  { id: 'school-readiness', label: 'School Readiness' },
  { id: 'early-head-start', label: 'Early Head Start' },
]

const PROGRAM_DETAILS = [
  {
    id: 'free-vpk',
    title: 'Free VPK',
    subtitle: 'Voluntary Prekindergarten Program',
    eyebrow: 'Florida VPK',
    pills: ['FREE', 'Florida 4-year-olds', 'Dover', 'Fort Myers'],
    body: [
      'VPK is a FREE educational program available to all Florida children who are 4 years old by September 1, regardless of family income. The program helps children build the academic, social, and emotional skills needed for a successful transition to kindergarten.',
      'Our Voluntary Prekindergarten (VPK) Program uses engaging, hands-on activities and a research-based curriculum to help children develop early literacy, math, problem-solving, communication, confidence, and independence.',
    ],
    button: 'Ask About VPK',
    buttonHref: '/apply',
    officialButton: 'More Information',
    officialHref: 'https://www.fldoe.org/schools/early-learning/parents/vpk-parents.stml',
    cardHeading: 'What Your Child Builds',
    bullets: [
      'Early literacy and communication',
      'Early math and problem-solving',
      'Social and emotional confidence',
      'Kindergarten readiness skills',
      'Independence through structured routines',
    ],
    secondaryHeading: 'VPK Eligibility',
    secondaryBullets: [
      'Available to Florida children who are 4 years old by September 1',
      'Free for eligible age-qualified children',
      'Extended care may be available before and after VPK',
    ],
    stats: [
      { value: 'Free', label: 'Program' },
      { value: 'Age 4', label: 'By Sept. 1' },
      { value: 'Ready', label: 'Kindergarten readiness' },
    ],
  },
  {
    id: 'school-readiness',
    title: 'School Readiness',
    subtitle: 'Childcare Tuition Assistance',
    eyebrow: 'School Readiness (SR)',
    pills: ['FINANCIAL ASSISTANCE', 'Early Learning Coalition', 'Dover', 'Fort Myers'],
    body: [
      'The School Readiness Program helps eligible families reduce the cost of childcare through financial assistance provided by the Early Learning Coalition. Families with an approved School Readiness certificate may use their funding at Vanguard Kids Academy.',
      'This support helps families access quality childcare and early education while children build classroom routines, social skills, communication, confidence, and kindergarten readiness foundations.',
    ],
    button: 'Ask About School Readiness',
    buttonHref: '/apply',
    officialButton: 'More Information',
    officialHref: 'https://www.fldoe.org/schools/early-learning/parents/school-readiness.stml',
    cardHeading: 'What Families Receive',
    bullets: [
      'Childcare tuition assistance for eligible families',
      'Support through the Early Learning Coalition',
      'Consistent early learning routines',
      'Social and emotional development',
      'Kindergarten readiness foundations',
    ],
    secondaryHeading: 'Eligibility & Certificates',
    secondaryBullets: [
      'Families must qualify through the Early Learning Coalition',
      'Approved School Readiness certificates may be used at our center',
      'Our team can help families understand next steps',
    ],
    stats: [
      { value: 'Financial', label: 'Assistance' },
      { value: 'Approved', label: 'Certificates' },
      { value: 'ELC', label: 'Early Learning Coalition' },
    ],
  },
  {
    id: 'early-head-start',
    title: 'Early Head Start',
    subtitle: 'Early Care for Infants & Toddlers',
    eyebrow: 'Early Head Start (EHS)',
    pills: ['FEDERAL PROGRAM', 'EHS', 'Dover'],
    body: [
      'Early Head Start is a federally funded program that serves eligible children under age 3, pregnant women, and families with high-quality childcare and early learning services at little to no cost for qualifying families.',
      'Early Head Start supports healthy development, daily routines, early learning, and family support services. Vanguard Kids Academy can help families determine eligibility and apply for the program.',
    ],
    button: 'Ask About Early Head Start',
    buttonHref: '/apply',
    officialButton: 'More Information',
    officialHref: 'https://www.fldoe.org/schools/early-learning/parents/head-start.stml',
    cardHeading: 'What Children Receive',
    bullets: [
      'High-quality early care for infants and toddlers',
      'Early learning and healthy development support',
      'Safe and nurturing daily routines',
      'Family-centered support',
      'Guidance with eligibility and application steps',
    ],
    secondaryHeading: 'Eligibility & Enrollment',
    secondaryBullets: [
      'Designed for eligible children under age 3, pregnant women, and families',
      'May be available at little to no cost for qualifying families',
      'Contact your local Early Learning Coalition or our office for guidance',
    ],
    stats: [
      { value: 'Infants', label: '& toddlers' },
      { value: 'Little', label: 'To no cost' },
      { value: 'Qualifying', label: 'Families' },
    ],
  },
]

const PROGRAM_TABS_ES = [
  { id: 'free-vpk', label: 'Free VPK' },
  { id: 'school-readiness', label: 'School Readiness' },
  { id: 'early-head-start', label: 'Early Head Start' },
]

const PROGRAM_DETAILS_ES: typeof PROGRAM_DETAILS = [
  {
    id: 'free-vpk',
    title: 'Free VPK',
    subtitle: 'Programa Voluntary Prekindergarten',
    eyebrow: 'VPK de Florida',
    pills: ['GRATIS', 'Ninos de Florida de 4 anos', 'Dover', 'Fort Myers'],
    body: [
      'VPK es un programa educativo GRATIS disponible para todos los ninos de Florida que cumplen 4 anos en o antes del 1 de septiembre, sin importar el ingreso familiar. El programa ayuda a los ninos a desarrollar las habilidades academicas, sociales y emocionales necesarias para una buena transicion a kindergarten.',
      'Nuestro programa Voluntary Prekindergarten (VPK) usa actividades practicas y atractivas, junto con un curriculo basado en investigacion, para ayudar a los ninos a desarrollar lectura temprana, matematicas, resolucion de problemas, comunicacion, confianza e independencia.',
    ],
    button: 'Preguntar sobre VPK',
    buttonHref: '/apply',
    officialButton: 'Más información',
    officialHref: 'https://www.fldoe.org/schools/early-learning/parents/vpk-parents.stml',
    cardHeading: 'Lo que su hijo desarrolla',
    bullets: [
      'Lectura temprana y comunicacion',
      'Matematicas tempranas y resolucion de problemas',
      'Confianza social y emocional',
      'Habilidades para kindergarten',
      'Independencia con rutinas estructuradas',
    ],
    secondaryHeading: 'Elegibilidad para VPK',
    secondaryBullets: [
      'Disponible para ninos de Florida que cumplen 4 anos en o antes del 1 de septiembre',
      'Gratis para ninos que cumplen con la edad requerida',
      'Puede haber cuidado extendido antes y despues de VPK',
    ],
    stats: [
      { value: 'Gratis', label: 'Programa' },
      { value: 'Edad 4', label: 'Antes del 1 sept.' },
      { value: 'Listos', label: 'Para kindergarten' },
    ],
  },
  {
    id: 'school-readiness',
    title: 'School Readiness',
    subtitle: 'Ayuda para el costo del cuidado infantil',
    eyebrow: 'School Readiness (SR)',
    pills: ['AYUDA FINANCIERA', 'Early Learning Coalition', 'Dover', 'Fort Myers'],
    body: [
      'El programa School Readiness ayuda a familias elegibles a reducir el costo del cuidado infantil mediante asistencia financiera proporcionada por Early Learning Coalition. Las familias con un certificado aprobado de School Readiness pueden usar sus fondos en Vanguard Kids Academy.',
      'Este apoyo ayuda a las familias a acceder a cuidado infantil y educacion temprana de calidad mientras los ninos desarrollan rutinas de salon, habilidades sociales, comunicacion, confianza y bases para kindergarten.',
    ],
    button: 'Preguntar sobre School Readiness',
    buttonHref: '/apply',
    officialButton: 'Más información',
    officialHref: 'https://www.fldoe.org/schools/early-learning/parents/school-readiness.stml',
    cardHeading: 'Lo que reciben las familias',
    bullets: [
      'Ayuda para el costo del cuidado infantil para familias elegibles',
      'Apoyo a traves de Early Learning Coalition',
      'Rutinas constantes de aprendizaje temprano',
      'Desarrollo social y emocional',
      'Bases para kindergarten',
    ],
    secondaryHeading: 'Elegibilidad y certificados',
    secondaryBullets: [
      'Las familias deben calificar a traves de Early Learning Coalition',
      'Los certificados aprobados de School Readiness pueden usarse en nuestro centro',
      'Nuestro equipo puede ayudar a las familias a entender los proximos pasos',
    ],
    stats: [
      { value: 'Ayuda', label: 'Financiera' },
      { value: 'Aprobados', label: 'Certificados' },
      { value: 'ELC', label: 'Early Learning Coalition' },
    ],
  },
  {
    id: 'early-head-start',
    title: 'Early Head Start',
    subtitle: 'Cuidado temprano para bebes y ninos pequenos',
    eyebrow: 'Early Head Start (EHS)',
    pills: ['PROGRAMA FEDERAL', 'EHS', 'Dover'],
    body: [
      'Early Head Start es un programa con fondos federales que atiende a ninos elegibles menores de 3 anos, mujeres embarazadas y familias con cuidado infantil y servicios de aprendizaje temprano de alta calidad a bajo costo o sin costo para familias que califican.',
      'Early Head Start apoya el desarrollo saludable, rutinas diarias, aprendizaje temprano y servicios de apoyo familiar. Vanguard Kids Academy puede ayudar a las familias a entender la elegibilidad y aplicar al programa.',
    ],
    button: 'Preguntar sobre Early Head Start',
    buttonHref: '/apply',
    officialButton: 'Más información',
    officialHref: 'https://www.fldoe.org/schools/early-learning/parents/head-start.stml',
    cardHeading: 'Lo que reciben los ninos',
    bullets: [
      'Cuidado temprano de alta calidad para bebes y ninos pequenos',
      'Apoyo para aprendizaje temprano y desarrollo saludable',
      'Rutinas diarias seguras y carinosas',
      'Apoyo centrado en la familia',
      'Orientacion con elegibilidad y pasos para aplicar',
    ],
    secondaryHeading: 'Elegibilidad e inscripcion',
    secondaryBullets: [
      'Disenado para ninos elegibles menores de 3 anos, mujeres embarazadas y familias',
      'Puede estar disponible a bajo costo o sin costo para familias que califican',
      'Contacte su Early Learning Coalition local o nuestra oficina para orientacion',
    ],
    stats: [
      { value: 'Bebes', label: 'Y ninos pequenos' },
      { value: 'Bajo', label: 'O sin costo' },
      { value: 'Familias', label: 'Que califican' },
    ],
  },
]

function ProgramsPageContent() {
  const { t, lang } = useLang()
  const p = t.programs
  const programTabs = lang === 'es' ? PROGRAM_TABS_ES : PROGRAM_TABS
  const programDetails = lang === 'es' ? PROGRAM_DETAILS_ES : PROGRAM_DETAILS
  const searchParams = useSearchParams()
  const requestedProgram = searchParams.get('program')
  const initialActiveIndex = Math.max(
    0,
    programDetails.findIndex((program) => program.id === requestedProgram),
  )
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex)
  const activeProgram = programDetails[activeIndex]

  const showPreviousProgram = () => {
    setActiveIndex((current) => (current === 0 ? programDetails.length - 1 : current - 1))
  }

  const showNextProgram = () => {
    setActiveIndex((current) => (current === programDetails.length - 1 ? 0 : current + 1))
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section data-nav-theme="cream" className="relative overflow-hidden bg-[#2746a0] pt-16 lg:min-h-[72vh]">
        {/* dot grid */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none">
          <svg width="100%" height="100%" className="opacity-20">
            <defs>
              <pattern id="dots-prog" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="11" cy="11" r="2.2" fill="#3b5bdb" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-prog)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid items-center lg:grid-cols-2 lg:min-h-[calc(72vh-4rem)]">
            {/* Left — copy */}
            <div className="z-10 py-10 text-center lg:py-20 lg:text-left">
              <p className="text-[#ffd200] text-xs font-black tracking-[0.2em] uppercase mb-4">
                {lang === 'es' ? 'Nuestros programas' : 'Our Programs'}
              </p>

              <h1 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.1] mb-6">
                {lang === 'es' ? (
                  <>
                    Programas para<br />
                    cada etapa de la{' '}
                    <span className="font-display italic text-[#ffd200]">infancia</span>
                  </>
                ) : (
                  <>
                    Programs built<br />
                    for every stage of{' '}
                    <span className="font-display italic text-[#ffd200]">childhood</span>
                  </>
                )}
              </h1>

              <p className="mx-auto max-w-lg text-lg leading-relaxed text-white/75 mb-8 lg:mx-0">
                {p.sub}
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById('programs-showcase')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="vk-action-primary vk-arrow-nudge inline-flex items-center gap-2 bg-[#ffd200] hover:bg-[#e6bd00] text-[#0b1f5e] font-black px-6 py-3.5 rounded-full text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
              >
                {lang === 'es' ? 'Explorar programas' : 'Explore Our Programs'} <FiArrowRight />
              </button>
            </div>

            {/* Mobile — organic classroom image */}
            <div className="relative z-10 pb-10 lg:hidden">
              <div
                className="vk-visual-frame vk-visual-lift relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden border-[6px] border-[#1e3fa0] shadow-2xl"
                style={{ borderRadius: '36% 64% 46% 54% / 48% 40% 60% 52%' }}
              >
                <Image
                  src="/programs-hero-real-classroom.png"
                  alt="Students learning at Vanguard Kids Academy"
                  fill
                  className="vk-visual-image object-cover object-[52%_50%]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right — arched classroom image */}
            <div className="relative z-10 hidden lg:flex justify-end items-center py-12">
              <Image
                src="/assets/canva/brushstroke-circle-navy.png"
                alt=""
                width={760}
                height={760}
                aria-hidden="true"
                className="pointer-events-none absolute -right-[10%] -bottom-[5%] z-0 h-[92%] w-[92%] object-contain opacity-95"
                priority
              />
              <div
                className="vk-visual-frame vk-visual-lift relative z-10 overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] border-[8px] border-[#1e3fa0] shadow-2xl shrink-0 lg:h-[540px] lg:w-[460px] xl:h-[620px] xl:w-[530px]"
              >
                <Image
                  src="/programs-hero-real-classroom.png"
                  alt="Students learning at Vanguard Kids Academy"
                  width={720}
                  height={840}
                  className="vk-visual-image w-full h-full object-cover object-[52%_50%]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tab bar ──────────────────────────────────────────────────── */}
      <nav
        id="program-tabs"
        aria-label={lang === 'es' ? 'Secciones de programas' : 'Program sections'}
        className="sticky top-16 z-30 border-b border-[#0b1f5e]/10 bg-white/95 shadow-sm backdrop-blur"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            role="tablist"
            aria-label={lang === 'es' ? 'Programas' : 'Programs'}
            className="flex gap-3 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {programTabs.map((tab, index) => (
              <button
                key={tab.id}
                id={`${tab.id}-tab`}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls={`${tab.id}-panel`}
                onClick={() => setActiveIndex(index)}
                className={`vk-action-light relative shrink-0 rounded-full px-5 py-3 text-sm font-black transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffd200]/60 ${
                  activeIndex === index
                    ? 'bg-[#ffd200] text-[#0b1f5e]'
                    : 'bg-[#eef4ff] text-[#0b1f5e] hover:bg-[#dfe9ff]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Program content ──────────────────────────────────────────── */}
      <section id="programs-showcase" className="bg-[#ffd200] px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-6 lg:space-y-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#0b1f5e]/70">
                {lang === 'es' ? 'Opciones de cuidado infantil accesibles' : 'Affordable child care options'}
              </p>
              <h2 className="font-display text-3xl font-black leading-tight text-[#0b1f5e] md:text-5xl">
                {lang === 'es' ? 'Opciones de cuidado infantil accesibles' : 'Affordable Child Care Options'}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#0b1f5e]/80 md:mt-4 md:text-lg">
                {lang === 'es'
                  ? 'Creemos que cada nino merece acceso a experiencias de aprendizaje temprano de calidad. Vanguard Kids Academy acepta varios programas estatales y federales que ayudan a familias elegibles a reducir o eliminar el costo del cuidado infantil y la educacion temprana.'
                  : 'We believe every child deserves access to quality early learning experiences. Vanguard Kids Academy accepts several state and federally funded programs that help eligible families reduce or eliminate the cost of childcare and early education.'}
              </p>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={showPreviousProgram}
                aria-label={lang === 'es' ? 'Programa anterior' : 'Previous program'}
                className="vk-icon-button flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-black text-[#0b1f5e] shadow-[0_10px_24px_rgba(11,31,94,0.18)] transition-transform motion-safe:hover:-translate-x-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
              >
                ←
              </button>
              <span className="rounded-full bg-[#0b1f5e] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                {activeProgram.title}
              </span>
              <button
                type="button"
                onClick={showNextProgram}
                aria-label={lang === 'es' ? 'Siguiente programa' : 'Next program'}
                className="vk-icon-button flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-black text-[#0b1f5e] shadow-[0_10px_24px_rgba(11,31,94,0.18)] transition-transform motion-safe:hover:translate-x-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
              >
                →
              </button>
            </div>
          </div>

          {programDetails.map((program, index) => (
            <div
              key={program.id}
              id={`${program.id}-panel`}
              role="tabpanel"
              aria-labelledby={`${program.id}-tab`}
              className={activeIndex === index ? 'block' : 'hidden'}
              aria-hidden={activeIndex !== index}
            >
              <ProgramDetail
                program={program}
                onPrevious={showPreviousProgram}
                onNext={showNextProgram}
                activeTitle={activeProgram.title}
                lang={lang}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Secure your spot CTA ─────────────────────────────────────── */}
      <section data-nav-theme="cream" className="bg-gradient-to-br from-[#0b1f5e] via-[#14348e] to-[#2746a0] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] border border-white/15 bg-white/5 p-8 backdrop-blur md:flex-row md:items-center md:justify-between md:p-10">
          <div className="relative pl-6">
            <span className="absolute bottom-1 left-0 top-1 w-1.5 rounded-full bg-[#ffd200]" aria-hidden="true" />
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#ffd200]">
              {lang === 'es' ? 'Agendar una visita' : 'Schedule a tour'}
            </p>
            <h2 className="text-3xl font-black text-white md:text-4xl">
              {lang === 'es' ? 'Reserve el lugar de su hijo para este otoño' : "Secure your child's spot this Fall"}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">
              {lang === 'es'
                ? 'Agende una visita o comience el proceso de solicitud hoy.'
                : 'Schedule a tour or start the application process today.'}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/apply"
              className="vk-action-primary vk-arrow-nudge inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd200] px-7 py-4 text-sm font-black text-[#0b1f5e] transition-colors hover:bg-[#e6bd00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              {lang === 'es' ? 'Agendar una visita' : 'Schedule a Tour'} <FiArrowRight />
            </Link>
            <Link
              href="/apply"
              className="vk-action-outline inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-4 text-sm font-black text-white transition-colors hover:bg-white hover:text-[#0b1f5e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              {lang === 'es' ? 'Aplicar ahora' : 'Apply Now'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default function ProgramsPage() {
  return (
    <Suspense>
      <ProgramsPageContent />
    </Suspense>
  )
}

type ProgramDetailData = (typeof PROGRAM_DETAILS)[number]

function ProgramDetail({
  program,
  onPrevious,
  onNext,
  activeTitle,
  lang,
}: {
  program: ProgramDetailData
  onPrevious: () => void
  onNext: () => void
  activeTitle: string
  lang: 'en' | 'es'
}) {
  return (
    <article
      id={program.id}
      className="vk-soft-card scroll-mt-36 overflow-hidden rounded-[2rem] border border-transparent bg-white shadow-[0_18px_45px_rgba(11,31,94,0.16)]"
    >
      <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="p-6 sm:p-9 lg:p-12">
          <div className="mb-4 flex flex-wrap gap-2 lg:mb-5">
            {program.pills.map((pill) => (
              <span
                key={pill}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.64rem] font-black uppercase tracking-wide sm:text-[0.68rem] ${
                  pill === 'FREE' || pill === 'GRATIS'
                    ? 'bg-[#ffd200] text-[#0b1f5e]'
                    : pill === 'Dover' || pill === 'Fort Myers'
                      ? 'bg-[#eef4ff] text-[#0b1f5e] ring-1 ring-[#0b1f5e]/15'
                      : 'bg-[#0b1f5e] text-white'
                }`}
              >
                {(pill === 'Dover' || pill === 'Fort Myers') && <FiMapPin size={11} aria-hidden="true" />}
                {pill}
              </span>
            ))}
          </div>

          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#1e3fa0]">
            {program.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-black leading-tight text-[#0b1f5e] md:text-5xl">
            {program.title}
          </h2>
          <p className="mt-2 text-base font-black text-[#0b1f5e]/65 md:text-lg">
            {program.subtitle}
          </p>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base lg:mt-6">
            {program.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-8">
            <Link
              href={program.buttonHref}
              className="vk-action-secondary vk-arrow-nudge inline-flex items-center justify-center gap-2 rounded-full bg-[#0b1f5e] px-5 py-3.5 text-sm font-black text-white transition-colors hover:bg-[#1e3fa0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] lg:px-6"
            >
              {program.button} <FiArrowRight size={15} aria-hidden="true" />
            </Link>
            <a
              href={program.officialHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                lang === 'es'
                  ? `Mas informacion oficial sobre ${program.title}`
                  : `Official information about ${program.title}`
              }
              className="vk-action-outline inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0b1f5e] px-5 py-3.5 text-sm font-black text-[#0b1f5e] transition-colors hover:bg-[#0b1f5e] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] lg:px-6"
            >
              {program.officialButton} <FiExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-col bg-[#f7fbff] p-5 sm:p-9 lg:p-12">
          <div className="vk-soft-card rounded-[1.5rem] border border-transparent bg-white p-5 shadow-[0_12px_30px_rgba(11,31,94,0.1)] sm:p-6">
            <h3 className="text-lg font-black text-[#0b1f5e] sm:text-xl">
              {program.cardHeading}
            </h3>
            <ul className="mt-4 space-y-3 sm:mt-5">
              {program.bullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b1f5e]">
                    <FiCheck size={12} className="text-white" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="vk-soft-card mt-4 rounded-[1.5rem] border border-transparent bg-[#fff7bf] p-5 sm:mt-5 sm:p-6">
            <h3 className="text-lg font-black text-[#0b1f5e]">
              {program.secondaryHeading}
            </h3>
            <ul className="mt-4 space-y-3">
              {program.secondaryBullets.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#0b1f5e]/80">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0b1f5e]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid bg-[#0b1f5e] text-white sm:grid-cols-3">
        {program.stats.map((stat) => (
          <div key={`${stat.value}-${stat.label}`} className="border-t border-white/15 px-6 py-4 text-center sm:border-l sm:first:border-l-0 lg:py-5">
            <p className="text-xl font-black leading-none text-[#ffd200] md:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white/75">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 bg-[#071747] px-5 py-4 lg:hidden">
        <button
          type="button"
          onClick={onPrevious}
          aria-label={lang === 'es' ? 'Programa anterior' : 'Previous program'}
          className="vk-icon-button flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-black text-[#0b1f5e] shadow-[0_8px_18px_rgba(0,0,0,0.18)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffd200]/70"
        >
          ←
        </button>
        <span className="min-w-0 rounded-full bg-[#ffd200] px-4 py-2 text-center text-xs font-black uppercase tracking-wide text-[#0b1f5e]">
          {activeTitle}
        </span>
        <button
          type="button"
          onClick={onNext}
          aria-label={lang === 'es' ? 'Siguiente programa' : 'Next program'}
          className="vk-icon-button flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-black text-[#0b1f5e] shadow-[0_8px_18px_rgba(0,0,0,0.18)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#ffd200]/70"
        >
          →
        </button>
      </div>
    </article>
  )
}
