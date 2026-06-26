import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  FiArrowRight,
  FiAward,
  FiBriefcase,
  FiCheckCircle,
  FiClipboard,
  FiHeart,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'
import { CAREERS_EMAIL } from '@/lib/constants'
import LocalizedText from '@/components/i18n/LocalizedText'

export const metadata: Metadata = {
  title: 'Childcare Careers in Dover & Fort Myers',
  description:
    'Explore childcare career opportunities at Vanguard Kids Academy. Learn about teaching and support roles, professional growth, team culture, and how to apply.',
}

const roles = [
  {
    title: { en: 'Assistant Teacher', es: 'Maestro/a Asistente' },
    summary: {
      en: 'Support classroom routines, activities, and positive child interactions.',
      es: 'Apoya rutinas del salon, actividades e interacciones positivas con los ninos.',
    },
    responsibilities: [
      { en: 'Assist lead teacher with classroom activities', es: 'Ayudar al maestro principal con actividades del salon' },
      { en: 'Supervise and engage with children', es: 'Supervisar e interactuar con los ninos' },
      { en: 'Help maintain cleanliness and organization', es: 'Ayudar a mantener limpieza y organizacion' },
      { en: 'Support meals, transitions, and nap routines', es: 'Apoyar comidas, transiciones y rutinas de descanso' },
      { en: 'Encourage positive social interactions', es: 'Fomentar interacciones sociales positivas' },
    ],
    requirements: [
      { en: 'High school diploma or working toward one', es: 'Diploma de high school o estar trabajando para obtenerlo' },
      { en: 'DCF training preferred', es: 'Entrenamiento DCF preferido' },
      { en: 'Ability to work well with children and staff', es: 'Capacidad para trabajar bien con ninos y personal' },
      { en: 'Dependable and energetic attitude', es: 'Actitud confiable y energica' },
    ],
  },
  {
    title: { en: 'Lead Teacher', es: 'Maestro/a Principal' },
    summary: {
      en: 'Guide lesson planning, classroom routines, communication, and child development.',
      es: 'Guia la planificacion de lecciones, rutinas del salon, comunicacion y desarrollo infantil.',
    },
    responsibilities: [
      { en: 'Create and implement age-appropriate lesson plans', es: 'Crear e implementar planes de lecciones apropiados para la edad' },
      { en: 'Maintain a safe, engaging, and organized classroom', es: 'Mantener un salon seguro, atractivo y organizado' },
      { en: 'Manage classroom routines and behavior positively', es: 'Manejar rutinas y comportamiento del salon de forma positiva' },
      { en: 'Communicate professionally with parents and staff', es: 'Comunicarse profesionalmente con padres y personal' },
      { en: 'Monitor developmental progress and needs', es: 'Monitorear progreso y necesidades de desarrollo' },
      { en: 'Ensure compliance with DCF licensing standards', es: 'Asegurar cumplimiento con estandares de licencia DCF' },
    ],
    requirements: [
      { en: 'High school diploma or equivalent required', es: 'Diploma de high school o equivalente requerido' },
      { en: 'CDA, FCCPC, or Early Childhood Education coursework preferred', es: 'CDA, FCCPC o cursos de Early Childhood Education preferidos' },
      { en: 'DCF 45 Hours completed or willingness to complete', es: 'DCF 45 Hours completadas o disposicion para completarlas' },
      { en: 'Experience in a licensed childcare setting preferred', es: 'Experiencia en un centro de cuidado infantil con licencia preferida' },
      { en: 'Strong classroom management and communication skills', es: 'Buenas habilidades de manejo de salon y comunicacion' },
      { en: 'Ability to lift, bend, and actively supervise children', es: 'Capacidad para levantar, agacharse y supervisar activamente a los ninos' },
    ],
    preferred: [
      { en: 'Warm and patient personality', es: 'Personalidad calida y paciente' },
      { en: 'Leadership skills', es: 'Habilidades de liderazgo' },
      { en: 'Team-oriented mindset', es: 'Mentalidad de trabajo en equipo' },
      { en: 'Reliable attendance and professionalism', es: 'Asistencia confiable y profesionalismo' },
    ],
  },
  {
    title: { en: 'VPK Teacher', es: 'Maestro/a de VPK' },
    summary: {
      en: 'Help children build kindergarten readiness through Florida VPK standards.',
      es: 'Ayuda a los ninos a prepararse para kindergarten siguiendo los estandares VPK de Florida.',
    },
    responsibilities: [
      { en: 'Implement Florida VPK standards and curriculum', es: 'Implementar estandares y curriculo VPK de Florida' },
      { en: 'Prepare children for kindergarten readiness', es: 'Preparar a los ninos para kindergarten' },
      { en: 'Conduct learning activities focused on literacy, math, and social-emotional growth', es: 'Realizar actividades enfocadas en lectura, matematicas y crecimiento socioemocional' },
      { en: 'Maintain assessment and classroom documentation', es: 'Mantener evaluaciones y documentacion del salon' },
    ],
    requirements: [
      { en: 'Florida Staff Credential required', es: 'Florida Staff Credential requerido' },
      { en: 'VPK endorsement or eligibility', es: 'Endoso VPK o elegibilidad' },
      { en: 'Classroom experience preferred', es: 'Experiencia en salon preferida' },
      { en: 'Knowledge of kindergarten readiness standards', es: 'Conocimiento de estandares de preparacion para kindergarten' },
    ],
  },
  {
    title: { en: 'Floater Teacher / Support Staff', es: 'Maestro/a Flotante / Personal de Apoyo' },
    summary: {
      en: 'Provide flexible classroom support across age groups and daily routines.',
      es: 'Brinda apoyo flexible en salones, grupos de edad y rutinas diarias.',
    },
    responsibilities: [
      { en: 'Provide classroom coverage as needed', es: 'Cubrir salones segun sea necesario' },
      { en: 'Assist multiple age groups throughout the day', es: 'Ayudar a varios grupos de edad durante el dia' },
      { en: 'Support lunch breaks, transitions, and outdoor play', es: 'Apoyar almuerzos, transiciones y juego al aire libre' },
      { en: 'Help maintain center-wide organization', es: 'Ayudar a mantener la organizacion del centro' },
    ],
    requirements: [
      { en: 'Flexible and adaptable', es: 'Flexible y adaptable' },
      { en: 'Comfortable working with different age groups', es: 'Comodo/a trabajando con diferentes edades' },
      { en: 'Team player with positive attitude', es: 'Trabajo en equipo con actitud positiva' },
    ],
  },
]

const roleAccents = [
  {
    label: { en: 'Classroom Support', es: 'Apoyo en salon' },
    tone: 'bg-[#ffd200] text-[#0b1f5e]',
  },
  {
    label: { en: 'Lead the Day', es: 'Guiar el dia' },
    tone: 'bg-white text-[#0b1f5e]',
  },
  {
    label: { en: 'Kindergarten Ready', es: 'Listos para kindergarten' },
    tone: 'bg-[#dff3fb] text-[#0b1f5e]',
  },
  {
    label: { en: 'Flexible Support', es: 'Apoyo flexible' },
    tone: 'bg-[#fff7cc] text-[#0b1f5e]',
  },
]

const growthItems = [
  { title: 'CDA Certification', body: { en: 'Child Development Associate Certification', es: 'Certificacion Child Development Associate' } },
  { title: 'FCCP Credentials', body: { en: 'Florida Child Care Professional Credentials', es: 'Credenciales Florida Child Care Professional' } },
  { title: 'DCF Training', body: { en: 'Department of Children and Families Training', es: 'Entrenamiento Department of Children and Families' } },
  { title: 'ECE Coursework', body: { en: 'Early Childhood Education coursework', es: 'Cursos de Early Childhood Education' } },
  { title: 'Director Credentials', body: { en: 'Director Credentials', es: 'Credenciales de director' } },
]

const benefits = [
  { en: 'Supportive team environment', es: 'Ambiente de equipo con apoyo' },
  { en: 'Opportunities for professional growth', es: 'Oportunidades de crecimiento profesional' },
  { en: 'Family-oriented culture', es: 'Cultura orientada a la familia' },
  { en: 'Scheduling options may vary by role and campus', es: 'Las opciones de horario pueden variar por puesto y campus' },
  { en: 'Meaningful work that impacts children', es: 'Trabajo significativo que impacta a los ninos' },
]

const applicationChecklist = [
  { en: 'Resume', es: 'Resume' },
  { en: 'Desired Position', es: 'Puesto deseado' },
  { en: 'Availability', es: 'Disponibilidad' },
  { en: 'Relevant certifications ready', es: 'Certificaciones relevantes listas' },
]

const careersMailto = `mailto:${CAREERS_EMAIL}?subject=Vanguard%20Kids%20Academy%20Job%20Application&body=Full%20Name%3A%0APhone%3A%0APreferred%20Campus%3A%0APosition%20Interested%20In%3A%0AAvailability%3A%0AResume%20attached%3A%0AMessage%3A`

function CheckList({ items }: { items: { en: string; es: string }[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item.en} className="text-sm leading-6 text-[#15245a] marker:text-[#1a3496]">
          <LocalizedText en={item.en} es={item.es} />
        </li>
      ))}
    </ul>
  )
}

function RoleCard({
  role,
  accent,
}: {
  role: (typeof roles)[number]
  accent: (typeof roleAccents)[number]
}) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-[#fff1a6] shadow-sm ring-1 ring-[#0b1f5e]/10 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-1 hover:bg-[#fff4b8] hover:shadow-[0_18px_42px_rgba(11,31,94,0.12)] hover:ring-[#ffd200]/55 focus-within:shadow-[0_18px_42px_rgba(11,31,94,0.12)] focus-within:ring-[#ffd200]/70">
      <div className="bg-[#0b1f5e] p-5 text-white motion-safe:transition-colors motion-safe:duration-200">
        <span className={`inline-flex rounded-full px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em] ${accent.tone}`}>
          <LocalizedText en={accent.label.en} es={accent.label.es} />
        </span>
        <h3 className="mt-3 text-xl font-black leading-tight sm:text-2xl">
          <LocalizedText en={role.title.en} es={role.title.es} />
        </h3>
        <p className="mt-2 text-sm leading-6 text-white/75">
          <LocalizedText en={role.summary.en} es={role.summary.es} />
        </p>
      </div>

      <div className="grid gap-5 p-5 md:grid-cols-2">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1a3496]">
            <LocalizedText en="Responsibilities" es="Responsabilidades" />
          </p>
          <CheckList items={role.responsibilities} />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1a3496]">
            <LocalizedText en="Requirements" es="Requisitos" />
          </p>
          <CheckList items={role.requirements} />
          {role.preferred && (
            <div className="mt-5 border-t border-[#0b1f5e]/10 pt-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0b1f5e]/70">
                <LocalizedText en="Preferred Qualities" es="Cualidades preferidas" />
              </p>
              <CheckList items={role.preferred} />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default function CareersPage() {
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
        <div aria-hidden="true" className="absolute -left-24 top-24 h-72 w-72 rounded-full border-[30px] border-[#ffd200]/20" />
        <div aria-hidden="true" className="absolute -right-16 bottom-8 h-56 w-56 rounded-full bg-[#ffd200]/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 py-16 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div className="text-center lg:text-left">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-white/70">
              <LocalizedText en="Careers" es="Carreras" />
            </p>
            <h1 className="font-display text-3xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <LocalizedText en="Join the" es="Unete al" />{' '}
              <span className="block font-display italic text-[#ffd200] sm:inline">
                Vanguard Kids Team
              </span>
            </h1>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base font-medium leading-8 text-white/80 md:text-lg lg:mx-0">
              <p>
                <LocalizedText
                  en="At Vanguard Kids, we believe early childhood educators help shape confident, curious, and compassionate learners. We are always looking for caring, dependable, and passionate individuals to join our growing team."
                  es="En Vanguard Kids, creemos que los educadores de primera infancia ayudan a formar estudiantes seguros, curiosos y compasivos. Siempre buscamos personas carinosas, confiables y apasionadas para unirse a nuestro equipo."
                />
              </p>
              <p>
                <LocalizedText
                  en="Whether you are an experienced educator or beginning your journey in childcare, we value teamwork, professionalism, creativity, and a genuine love for children."
                  es="Ya sea que tenga experiencia como educador/a o este comenzando su camino en cuidado infantil, valoramos el trabajo en equipo, profesionalismo, creatividad y amor genuino por los ninos."
                />
              </p>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              {['Dover', 'Fort Myers'].map((location) => (
                <span
                  key={location}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/20 motion-safe:transition-all motion-safe:duration-200 hover:bg-white/15 hover:ring-[#ffd200]/35"
                >
                  <FiMapPin aria-hidden="true" size={14} />
                  {location}
                </span>
              ))}
            </div>

            <div className="mt-8 hidden flex-wrap justify-center gap-3 lg:flex lg:justify-start">
              <a
                href={careersMailto}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ffd200] px-6 py-3.5 text-sm font-black text-[#0b1f5e] shadow-sm shadow-[#ffd200]/20 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 hover:bg-[#ffe05c] hover:shadow-[0_0_0_4px_rgba(255,210,0,0.18),0_14px_30px_rgba(255,210,0,0.28)] active:translate-y-0 active:shadow-[0_0_0_3px_rgba(255,210,0,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] sm:w-auto"
              >
                <LocalizedText en="Start Application" es="Comenzar solicitud" />
                <FiArrowRight aria-hidden="true" className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-focus-visible:translate-x-0.5" />
              </a>
              <Link
                href="#open-roles"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-sm font-black text-white ring-1 ring-white/25 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 hover:bg-white/18 hover:ring-white/60 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.08),0_14px_30px_rgba(11,31,94,0.18)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] sm:w-auto"
              >
                <LocalizedText en="View Open Roles" es="Ver puestos disponibles" />
                <FiArrowRight aria-hidden="true" className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-focus-visible:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="group relative mx-auto aspect-[4/5] w-full max-w-[500px] lg:mx-0 lg:max-w-[610px]">
            <Image
              src="/assets/canva/crayon-arch-lines.png"
              alt=""
              width={900}
              height={900}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-contain opacity-90"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute bottom-[9%] right-[6%] z-0 h-[56%] w-[62%] rounded-t-[999px] rounded-b-[2.5rem] bg-[#ffd200]/16"
            />
            <Image
              src="/assets/canva/brushstroke-circle-navy.png"
              alt=""
              width={760}
              height={760}
              aria-hidden="true"
              className="pointer-events-none absolute -right-[4%] bottom-[2%] z-0 h-[54%] w-[54%] object-contain opacity-30"
              priority
            />
            <div className="absolute left-1/2 top-[51%] z-10 h-[70%] w-[67%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-t-[999px] rounded-b-[2.25rem] border-[8px] border-[#17347f] bg-white/10 shadow-2xl motion-safe:transition-all motion-safe:duration-300 group-hover:border-[#ffd200]/70 group-hover:shadow-[0_0_0_4px_rgba(255,210,0,0.12),0_24px_60px_rgba(11,31,94,0.35)]">
              <Image
                src="/images/campuses/dover/dover-05.png"
                alt="A bright Vanguard Kids Academy classroom prepared for early childhood learning"
                width={1200}
                height={900}
                className="h-full w-full object-cover object-center motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.015]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 lg:hidden">
            <a
              href={careersMailto}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ffd200] px-6 py-3.5 text-sm font-black text-[#0b1f5e] shadow-sm shadow-[#ffd200]/20 motion-safe:transition-all motion-safe:duration-200 hover:bg-[#ffe05c] hover:shadow-[0_0_0_4px_rgba(255,210,0,0.18),0_14px_30px_rgba(255,210,0,0.28)] motion-safe:active:scale-[0.99] active:shadow-[0_0_0_3px_rgba(255,210,0,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] sm:w-auto"
            >
              <LocalizedText en="Start Application" es="Comenzar solicitud" />
              <FiArrowRight aria-hidden="true" className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-focus-visible:translate-x-0.5" />
            </a>
            <Link
              href="#open-roles"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-sm font-black text-white ring-1 ring-white/25 motion-safe:transition-all motion-safe:duration-200 hover:bg-white/18 hover:ring-white/60 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.08),0_14px_30px_rgba(11,31,94,0.18)] motion-safe:active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] sm:w-auto"
            >
              <LocalizedText en="View Open Roles" es="Ver puestos disponibles" />
              <FiArrowRight aria-hidden="true" className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-focus-visible:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="open-roles" data-nav-theme="blue" className="bg-[#f7fbff] px-4 py-14 md:py-16">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-7 max-w-3xl lg:hidden">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1a3496]">
              <LocalizedText en="Find your Role" es="Encuentre su puesto" />
            </p>
            <div aria-hidden="true" className="mt-2 h-1 w-20 rounded-full bg-[#ffd200]" />
            <h2 className="mt-3 font-display text-2xl font-black leading-tight text-[#0b1f5e] sm:text-3xl md:text-5xl">
              <LocalizedText
                en="Teaching and support roles for caring childcare professionals."
                es="Puestos de ensenanza y apoyo para profesionales de cuidado infantil."
              />
            </h2>
          </div>

          <div className="grid gap-4 lg:hidden">
            {roles.map((role, index) => {
              const accent = roleAccents[index % roleAccents.length]

              return (
                <RoleCard key={role.title.en} role={role} accent={accent} />
              )
            })}
          </div>

          <div className="hidden items-stretch gap-5 lg:grid lg:grid-cols-2">
            <div className="grid h-full content-between gap-5">
              <div className="pb-1">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1a3496]">
                  <LocalizedText en="Find your Role" es="Encuentre su puesto" />
                </p>
                <div aria-hidden="true" className="mt-2 h-1 w-20 rounded-full bg-[#ffd200]" />
                <h2 className="mt-3 font-display text-4xl font-black leading-tight text-[#0b1f5e]">
                  <LocalizedText
                    en="Teaching and support roles for caring childcare professionals."
                    es="Puestos de ensenanza y apoyo para profesionales de cuidado infantil."
                  />
                </h2>
              </div>
              <RoleCard role={roles[0]} accent={roleAccents[0]} />
              <RoleCard role={roles[2]} accent={roleAccents[2]} />
            </div>
            <div className="grid gap-5">
              <RoleCard role={roles[1]} accent={roleAccents[1]} />
              <RoleCard role={roles[3]} accent={roleAccents[3]} />
            </div>
          </div>
        </div>
      </section>

      <section data-nav-theme="blue" className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0b1f5e] p-6 text-white shadow-sm ring-1 ring-white/0 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(11,31,94,0.18)] hover:ring-[#ffd200]/30 md:p-8">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#ffd200]/15"
            />
            <span className="grid h-14 w-14 place-items-center rounded-full bg-[#ffd200] text-[#0b1f5e]">
              <FiAward aria-hidden="true" size={22} />
            </span>
            <p className="relative mt-6 text-xs font-black uppercase tracking-[0.2em] text-[#ffd200]">
              <LocalizedText en="Growth Opportunities" es="Oportunidades de crecimiento" />
            </p>
            <h2 className="relative mt-3 font-display text-2xl font-black leading-tight sm:text-3xl md:text-5xl">
              <LocalizedText
                en="Keep growing in early childhood education."
                es="Siga creciendo en educacion temprana."
              />
            </h2>
            <p className="relative mt-5 text-base leading-8 text-white/70">
              <LocalizedText
                en="We encourage continued professional development and support team members pursuing growth opportunities connected to early childhood education."
                es="Promovemos el desarrollo profesional continuo y apoyamos a miembros del equipo que buscan oportunidades de crecimiento en educacion temprana."
              />
            </p>
            <div className="relative mt-7 grid gap-3">
              {growthItems.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10 motion-safe:transition-all motion-safe:duration-200 hover:bg-white/14 hover:ring-[#ffd200]/25">
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/65">
                    <LocalizedText en={item.body.en} es={item.body.es} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#fffdf2] p-6 shadow-sm ring-1 ring-[#0b1f5e]/10 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(11,31,94,0.12)] hover:ring-[#ffd200]/45 md:p-8">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-[#0b1f5e] text-[#ffd200]">
              <FiHeart aria-hidden="true" size={22} />
            </span>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-[#1a3496]">
              <LocalizedText en="Benefits & Culture" es="Beneficios y cultura" />
            </p>
            <h2 className="mt-3 font-display text-2xl font-black leading-tight text-[#0b1f5e] sm:text-3xl md:text-5xl">
              <LocalizedText
                en="A team culture built around meaningful work."
                es="Una cultura de equipo centrada en trabajo significativo."
              />
            </h2>
            <ul className="mt-7 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit.en} className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-slate-700 ring-1 ring-[#0b1f5e]/10 motion-safe:transition-all motion-safe:duration-200 hover:bg-[#fffdf2] hover:ring-[#1a3496]/20">
                  <FiCheckCircle aria-hidden="true" className="mt-1 shrink-0 text-[#1a3496]" />
                  <span>
                    <LocalizedText en={benefit.en} es={benefit.es} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section data-nav-theme="blue" className="relative overflow-hidden bg-[#ffd200] px-4 py-14 md:py-16">
        <div
          aria-hidden="true"
          className="absolute -left-16 top-8 h-44 w-44 rounded-full border-[24px] border-white/25"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 bottom-8 h-52 w-52 rounded-full bg-white/20"
        />
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[#0b1f5e]/70">
              <FiBriefcase aria-hidden="true" />
              <LocalizedText en="Online Application" es="Solicitud en linea" />
            </p>
            <h2 className="mt-2 font-display text-2xl font-black leading-tight text-[#0b1f5e] sm:text-3xl md:text-5xl">
              <LocalizedText en="Ready to Join Our Team?" es="Listo/a para unirse a nuestro equipo?" />
            </h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-[#0b1f5e]/75">
              <LocalizedText en="Please email your resume and optional cover letter to" es="Envie su resume y carta de presentacion opcional a" />{' '}
              <a href={careersMailto} className="font-black underline decoration-[#0b1f5e]/35 underline-offset-4">
                {CAREERS_EMAIL}
              </a>
              . <LocalizedText en="Our team will follow up with qualified applicants." es="Nuestro equipo dara seguimiento a los candidatos calificados." />
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {['Dover', 'Fort Myers'].map((location) => (
                <span
                  key={location}
                  className="rounded-full bg-[#0b1f5e] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white ring-1 ring-[#0b1f5e]/10 motion-safe:transition-all motion-safe:duration-200 hover:bg-[#17347f] hover:ring-white/35"
                >
                  {location}
                </span>
              ))}
            </div>
            <a
              href={careersMailto}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#0b1f5e] shadow-sm motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 hover:bg-[#f7fbff] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.28),0_14px_30px_rgba(11,31,94,0.12)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1f5e]"
            >
              <FiMail aria-hidden="true" />
              {CAREERS_EMAIL}
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-white/0 motion-safe:transition-all motion-safe:duration-200 hover:shadow-[0_20px_48px_rgba(11,31,94,0.12)] hover:ring-[#0b1f5e]/12">
            <div className="bg-[#0b1f5e] p-6 text-white md:p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffd200]">
                <LocalizedText en="Bring or prepare" es="Traiga o prepare" />
              </p>
              <p className="mt-2 text-sm font-medium leading-7 text-white/75">
                <LocalizedText
                  en="A quick checklist before submitting your application."
                  es="Una lista rapida antes de enviar su solicitud."
                />
              </p>
            </div>
            <div className="p-6 md:p-8">
              <ul className="grid gap-3 sm:grid-cols-2">
                {applicationChecklist.map((item) => (
                  <li key={item.en} className="flex gap-3 rounded-2xl bg-[#f7fbff] p-4 text-sm font-black text-[#0b1f5e] ring-1 ring-[#0b1f5e]/0 motion-safe:transition-all motion-safe:duration-200 hover:bg-[#fffdf2] hover:ring-[#ffd200]/45">
                    <FiClipboard aria-hidden="true" className="mt-0.5 shrink-0 text-[#1a3496]" />
                    <LocalizedText en={item.en} es={item.es} />
                  </li>
                ))}
              </ul>
              <a
                href={careersMailto}
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b1f5e] px-6 py-3.5 text-sm font-black text-white shadow-sm shadow-[#0b1f5e]/20 motion-safe:transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 hover:bg-[#17347f] hover:shadow-[0_0_0_4px_rgba(11,31,94,0.14),0_14px_30px_rgba(11,31,94,0.24)] active:translate-y-0 active:shadow-[0_0_0_3px_rgba(11,31,94,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1f5e] sm:w-auto"
              >
                <LocalizedText en="Start Application" es="Comenzar solicitud" />
                <FiArrowRight aria-hidden="true" className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-focus-visible:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
