import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiBookOpen, FiHeart, FiMapPin, FiUsers } from 'react-icons/fi'
import LocalizedText from '@/components/i18n/LocalizedText'

export const metadata: Metadata = {
  title: 'About Vanguard Kids Academy',
  description:
    'Learn about Vanguard Kids Academy, our early childhood education philosophy, family-centered community, and commitment to helping children grow with confidence, curiosity, and care.',
}

const stats = [
  { value: '+10', label: { en: 'years of experience', es: 'años de experiencia' } },
  { value: '2', label: { en: 'locations', es: 'ubicaciones' } },
  { value: '4', label: { en: 'programs available', es: 'programas disponibles' } },
  { value: '+100', label: { en: 'families served per year', es: 'familias atendidas por año' } },
]

const values = [
  {
    title: { en: 'Foundation for Lifelong Learning', es: 'Base para el aprendizaje' },
    body: {
      en: "We recognize that the early years are critical to a child's development and are dedicated to providing experiences that support growth in every area.",
      es: 'Reconocemos que los primeros años son fundamentales para el desarrollo de cada niño y ofrecemos experiencias que apoyan su crecimiento en cada área.',
    },
    Icon: FiBookOpen,
  },
  {
    title: { en: 'Strong Community', es: 'Comunidad sólida' },
    body: {
      en: 'We believe children thrive when families, teachers, and communities work together to create a supportive and inclusive environment.',
      es: 'Creemos que los niños prosperan cuando las familias, maestras y comunidades trabajan juntas para crear un ambiente de apoyo e inclusión.',
    },
    Icon: FiUsers,
  },
  {
    title: { en: 'Growing with Purpose', es: 'Creciendo con propósito' },
    body: {
      en: 'Our goal is to help every child develop the confidence, character, and skills needed to succeed in school and in life.',
      es: 'Nuestro objetivo es ayudar a cada niño a desarrollar la confianza, el carácter y las habilidades necesarias para tener éxito en la escuela y en la vida.',
    },
    Icon: FiHeart,
  },
]

export default function AboutPage() {
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

        <div className="relative mx-auto grid max-w-7xl gap-12 py-16 md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-24">
          <div className="text-center lg:text-left">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-white/70">
              <LocalizedText en="Our Story" es="Nuestra historia" />
            </p>
            <h1 className="font-display text-3xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <LocalizedText en="About" es="Sobre" />{' '}
              <span className="block font-display italic text-[#ffd200] sm:inline">Vanguard Kids</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-white/80 md:text-lg lg:mx-0">
              <LocalizedText
                en="At Vanguard Kids, we believe the early years are some of the most important years in a child's life. The experiences, relationships, and opportunities children encounter during these formative years help shape their confidence, curiosity, and lifelong love of learning."
                es="En Vanguard Kids, creemos que los primeros años son algunos de los más importantes en la vida de un niño. Las experiencias, relaciones y oportunidades que viven en estos años ayudan a formar su confianza, curiosidad y amor por aprender."
              />
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/apply"
                className="vk-action-primary vk-arrow-nudge inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ffd200] px-6 py-3.5 text-sm font-black text-[#0b1f5e] transition hover:bg-[#e6bd00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] sm:w-auto"
              >
                <LocalizedText en="Schedule a Tour Now" es="Agendar una visita" />
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link
                href="/programs"
                className="vk-action-light vk-arrow-nudge inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-sm font-black text-white ring-1 ring-white/25 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] sm:w-auto"
              >
                <LocalizedText en="View Our Programs" es="Ver nuestros programas" />
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[650px] lg:mx-0">
            <Image
              src="/assets/canva/brushstroke-circle-navy.png"
              alt=""
              width={760}
              height={760}
              aria-hidden="true"
              className="pointer-events-none absolute -right-[14%] -bottom-[13%] z-0 h-[88%] w-[88%] object-contain opacity-85"
              priority
            />
            <div className="vk-visual-frame vk-visual-lift relative z-10 overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-[8px] border-[#1e3fa0] shadow-2xl">
              <Image
                src="/images/campuses/dover/dover-03.png"
                alt="A bright Vanguard Kids Academy classroom arranged for early learning and play"
                width={1200}
                height={900}
                className="vk-visual-image aspect-[4/3] h-full w-full object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section data-nav-theme="blue" className="bg-[#ffd200] px-4 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label.en} className="vk-soft-card rounded-2xl border border-transparent bg-white/45 px-4 py-5 text-center">
              <p className="font-display text-4xl font-black leading-none text-[#0b1f5e] md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.12em] text-[#0b1f5e]/65">
                <LocalizedText en={stat.label.en} es={stat.label.es} />
              </p>
            </div>
          ))}
        </div>
      </section>

      <section data-nav-theme="blue" className="bg-[#f7fbff] px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="vk-visual-frame vk-visual-lift relative overflow-hidden rounded-[2rem] shadow-sm">
            <Image
              src="/images/campuses/fort-myers/fort-myers-03.png"
              alt="A Vanguard Kids Academy classroom prepared with learning centers and child-sized materials"
              width={1200}
              height={900}
              className="vk-visual-image aspect-[4/3] h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1a3496]">
              <LocalizedText en="Family Partnership" es="Alianza con las familias" />
            </p>
              <h2 className="mt-3 font-display text-2xl font-black leading-tight text-[#0b1f5e] sm:text-3xl md:text-5xl">
                <LocalizedText en="More than a childcare center, we're a community." es="Más que un centro de cuidado infantil, somos una comunidad." />
              </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                <LocalizedText
                  en="Our center was built on the belief that every child deserves a safe, nurturing, and engaging environment where they can grow at their own pace while feeling valued, supported, and encouraged."
                  es="Nuestro centro fue creado con la creencia de que cada niño merece un ambiente seguro, cariñoso y motivador donde pueda crecer a su propio ritmo sintiéndose valorado, apoyado y animado."
                />
              </p>
              <p>
                <LocalizedText
                  en="We understand that raising children takes a partnership between families, educators, and the community around them. By fostering strong connections with parents and creating a welcoming environment for all families, we strive to build a sense of belonging where children feel secure, families feel supported, and everyone is working together toward a common goal: helping children thrive."
                  es="Entendemos que criar a los niños requiere una alianza entre familias, educadores y la comunidad. Al fomentar conexiones fuertes con los padres y crear un ambiente acogedor para todas las familias, buscamos construir un sentido de pertenencia donde los niños se sientan seguros, las familias apoyadas y todos trabajen juntos por una meta común: ayudar a los niños a prosperar."
                />
              </p>
              <p>
                <LocalizedText
                  en="At Vanguard Kids, every day is an opportunity to learn, grow, and build the skills that will carry children far beyond the classroom."
                  es="En Vanguard Kids, cada día es una oportunidad para aprender, crecer y desarrollar habilidades que acompañarán a los niños más allá del salón."
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-nav-theme="blue" className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1a3496]">
              <LocalizedText en="Why Choose Vanguard Kids?" es="¿Por qué elegir Vanguard Kids?" />
            </p>
            <h2 className="mt-3 font-display text-2xl font-black leading-tight text-[#0b1f5e] sm:text-3xl md:text-5xl">
              <LocalizedText en="A warm start with purpose behind every day." es="Un comienzo cálido con propósito cada día." />
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {values.map(({ title, body, Icon }) => (
              <article
                key={title.en}
                className="vk-soft-card flex h-full flex-col rounded-[2rem] bg-[#f7fbff] p-6 shadow-sm ring-1 ring-[#0b1f5e]/10 md:p-8"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-[#0b1f5e] text-[#ffd200]">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <h3 className="mt-6 text-xl font-black leading-tight text-[#0b1f5e] md:text-2xl">
                  <LocalizedText en={title.en} es={title.es} />
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  <LocalizedText en={body.en} es={body.es} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="blue" className="bg-[#ffd200] px-4 py-14 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[#0b1f5e]/70">
              <FiMapPin aria-hidden="true" />
              <LocalizedText en="Visit Us" es="Visítenos" />
            </p>
            <h2 className="mt-2 font-display text-2xl font-black leading-tight text-[#0b1f5e] sm:text-3xl md:text-5xl">
              <LocalizedText en="Ready to see it in person?" es="¿Listo para verlo en persona?" />
            </h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-[#0b1f5e]/75">
              <LocalizedText en="Tour a campus, meet the team, and see how Vanguard Kids supports children and families each day." es="Visite un campus, conozca al equipo y vea cómo Vanguard Kids apoya a los niños y las familias cada día." />
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="/apply"
              className="vk-action-secondary vk-arrow-nudge inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b1f5e] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#1a3496] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1f5e] sm:w-auto"
            >
              <LocalizedText en="Schedule a Tour Now" es="Agendar una visita" />
              <FiArrowRight aria-hidden="true" />
            </Link>
            <Link
              href="/programs"
              className="vk-action-light vk-arrow-nudge inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#0b1f5e] transition hover:bg-[#f7fbff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1f5e] sm:w-auto"
            >
              <LocalizedText en="View Our Programs" es="Ver nuestros programas" />
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
