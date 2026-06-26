import type { Metadata } from 'next'
import Link from 'next/link'
import { FiArrowRight, FiChevronDown, FiMapPin } from 'react-icons/fi'
import LocalizedText from '@/components/i18n/LocalizedText'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Parent FAQ',
  description:
    'Find answers to common parent questions about Vanguard Kids Academy, including ages served, hours, VPK, School Readiness, enrollment, meals, Brightwheel updates, safety, curriculum, and tours.',
}

const faqs = [
  {
    question: { en: 'What ages do you accept?', es: '¿Qué edades aceptan?' },
    answer: {
      en: 'Vanguard Kids Academy serves children from infancy through school age, including VPK and before/after-school care programs.',
      es: 'Vanguard Kids Academy atiende a niños desde la infancia hasta edad escolar, incluyendo VPK y programas antes/después de la escuela.',
    },
  },
  {
    question: { en: 'What are your hours of operation?', es: '¿Cuál es su horario?' },
    answer: {
      en: 'Hours vary slightly by campus. Dover is open Monday through Friday from 6:30 am to 6:00 pm. Fort Myers is open Monday through Friday from 6:00 am to 6:00 pm. Families can visit each location page for campus-specific details.',
      es: 'El horario varía un poco por campus. Dover abre de lunes a viernes de 6:30 am a 6:00 pm. Fort Myers abre de lunes a viernes de 6:00 am a 6:00 pm. Las familias pueden visitar cada página de ubicación para ver detalles específicos.',
    },
  },
  {
    question: { en: 'Do you accept School Readiness and VPK?', es: '¿Aceptan School Readiness y VPK?' },
    answer: {
      en: "Yes. Vanguard Kids Academy accepts School Readiness funding and participates in Florida's free VPK program for eligible children.",
      es: 'Sí. Vanguard Kids Academy acepta fondos de School Readiness y participa en el programa VPK gratis de Florida para niños elegibles.',
    },
  },
  {
    question: { en: 'How do I enroll my child?', es: '¿Cómo inscribo a mi hijo/a?' },
    answer: {
      en: 'The best next step is to schedule a tour, meet the team, and receive the enrollment packet. Our staff will guide you through the documents needed for your child and your preferred campus.',
      es: 'El mejor próximo paso es agendar una visita, conocer al equipo y recibir el paquete de inscripción. Nuestro personal le guiará con los documentos necesarios para su hijo/a y el campus de su preferencia.',
    },
  },
  {
    question: { en: 'Is there currently availability?', es: '¿Hay cupos disponibles actualmente?' },
    answer: {
      en: 'Availability varies by age group and campus. Please contact your preferred campus to ask about current openings or waitlist options.',
      es: 'La disponibilidad varía por edad y campus. Comuníquese con el campus de su preferencia para preguntar sobre cupos actuales u opciones de lista de espera.',
    },
  },
  {
    question: { en: 'Do you provide meals and snacks?', es: '¿Proveen comidas y meriendas?' },
    answer: {
      en: 'Yes. Vanguard Kids Academy provides nutritious meals and snacks that meet state nutrition guidelines.',
      es: 'Sí. Vanguard Kids Academy ofrece comidas y meriendas nutritivas que cumplen con las guías estatales de nutrición.',
    },
  },
  {
    question: { en: 'How do you communicate with parents?', es: '¿Cómo se comunican con los padres?' },
    answer: {
      en: 'Families receive updates through Brightwheel, including daily reports, photos, reminders, and announcements.',
      es: 'Las familias reciben actualizaciones por Brightwheel, incluyendo reportes diarios, fotos, recordatorios y anuncios.',
    },
  },
  {
    question: { en: 'What safety measures do you have in place?', es: '¿Qué medidas de seguridad tienen?' },
    answer: {
      en: 'Vanguard Kids Academy follows state licensing requirements, uses secure check-in and check-out practices, and works to maintain a safe, nurturing environment for children.',
      es: 'Vanguard Kids Academy sigue los requisitos estatales de licencia, usa prácticas seguras de entrada y salida, y trabaja para mantener un ambiente seguro y cariñoso para los niños.',
    },
  },
  {
    question: { en: 'What curriculum do you use?', es: '¿Qué currículo usan?' },
    answer: {
      en: 'Vanguard Kids Academy uses Frog Street and Funnydaffer curriculum resources to support school readiness, literacy, math, social-emotional growth, and hands-on learning tailored by age.',
      es: 'Vanguard Kids Academy usa recursos curriculares de Frog Street y Funnydaffer para apoyar preparación escolar, lectura, matemáticas, crecimiento socioemocional y aprendizaje práctico según la edad.',
    },
  },
  {
    question: { en: 'Can I schedule a tour?', es: '¿Puedo agendar una visita?' },
    answer: {
      en: 'Yes. Families are encouraged to schedule a tour to meet teachers, see classrooms, and ask questions before enrolling.',
      es: 'Sí. Invitamos a las familias a agendar una visita para conocer a las maestras, ver los salones y hacer preguntas antes de inscribirse.',
    },
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/faq#faq`,
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question.en,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer.en,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <section
        data-nav-theme="cream"
        className="relative overflow-hidden bg-[#2746a0] px-4 pt-24 text-white"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.52) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div aria-hidden="true" className="absolute -left-20 top-20 h-64 w-64 rounded-full border-[28px] border-[#ffd200]/20" />
        <div aria-hidden="true" className="absolute -right-16 bottom-10 h-52 w-52 rounded-full bg-[#ffd200]/10" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center py-20 text-center lg:py-28">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-white/70">
            <LocalizedText en="Parent Questions" es="Preguntas de padres" />
          </p>
          <h1 className="font-display text-5xl font-black leading-tight md:text-7xl">
            <LocalizedText en="Frequently Asked" es="Preguntas" />{' '}
            <span className="font-display italic text-[#ffd200]">
              <LocalizedText en="Questions" es="Frecuentes" />
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/80 md:text-lg">
            <LocalizedText en="What parents want to know before enrolling." es="Lo que los padres quieren saber antes de inscribirse." />
          </p>
        </div>
      </section>

      <section data-nav-theme="blue" className="bg-[#f7fbff] px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1a3496]">
              <LocalizedText en="Quick Answers" es="Respuestas rápidas" />
            </p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight text-[#0b1f5e] md:text-5xl">
              <LocalizedText en="Clear answers before your first visit." es="Respuestas claras antes de su primera visita." />
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              <LocalizedText en="Compare hours by campus, learn how enrollment works, and see what to ask about on your tour." es="Compare horarios por campus, conozca cómo funciona la inscripción y vea qué preguntar durante su visita." />
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href="/locations/dover"
                className="group vk-linked-card flex items-center justify-between rounded-2xl border border-[#0b1f5e]/10 bg-white px-5 py-4 text-[#0b1f5e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#1a3496]/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
              >
                <span className="flex items-center gap-3 text-sm font-black">
                  <FiMapPin aria-hidden="true" className="text-[#1a3496]" />
                  <LocalizedText en="Dover Campus" es="Campus Dover" />
                </span>
                <FiArrowRight aria-hidden="true" className="transition motion-safe:group-hover:translate-x-1" />
              </Link>
              <Link
                href="/locations/fort-myers"
                className="group vk-linked-card flex items-center justify-between rounded-2xl border border-[#0b1f5e]/10 bg-white px-5 py-4 text-[#0b1f5e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#1a3496]/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
              >
                <span className="flex items-center gap-3 text-sm font-black">
                  <FiMapPin aria-hidden="true" className="text-[#1a3496]" />
                  <LocalizedText en="Fort Myers Campus" es="Campus Fort Myers" />
                </span>
                <FiArrowRight aria-hidden="true" className="transition motion-safe:group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <details
                key={item.question.en}
                className="group vk-faq-row rounded-2xl border border-[#0b1f5e]/10 bg-white shadow-sm transition hover:border-[#1a3496]/25"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-left marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] md:px-7 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-black leading-6 text-[#0b1f5e] md:text-lg">
                    <LocalizedText en={item.question.en} es={item.question.es} />
                  </h3>
                  <span className="vk-faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e8f4f8] text-[#0b1f5e] transition group-open:rotate-180">
                    <FiChevronDown aria-hidden="true" />
                  </span>
                </summary>
                <div className="border-t border-[#0b1f5e]/10 px-5 pb-6 pt-4 md:px-7">
                  <p className="text-sm leading-7 text-slate-600 md:text-base">
                    <LocalizedText en={item.answer.en} es={item.answer.es} />
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="blue" className="bg-[#ffd200] px-4 py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b1f5e]/70">
              <LocalizedText en="Still Wondering?" es="¿Todavía tiene preguntas?" />
            </p>
            <h2 className="mt-2 font-display text-3xl font-black text-[#0b1f5e] md:text-4xl">
              <LocalizedText en="No question is too small to visit us." es="Ninguna pregunta es demasiado pequeña para visitarnos." />
            </h2>
          </div>
          <Link
            href="/apply"
            className="vk-action-secondary vk-arrow-nudge inline-flex items-center gap-2 rounded-full bg-[#0b1f5e] px-7 py-4 text-sm font-black text-white transition hover:bg-[#1a3496] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b1f5e]"
          >
            <LocalizedText en="Schedule a Tour Now" es="Agendar una visita" />
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
