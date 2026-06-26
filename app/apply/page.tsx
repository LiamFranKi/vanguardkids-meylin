'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, fadeIn } from '@/lib/motion'
import { CAMPUSES, CONTACT_EMAIL } from '@/lib/constants'
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheck, FiArrowRight } from 'react-icons/fi'
import LocalizedText from '@/components/i18n/LocalizedText'

const STEPS = [
  {
    number: '01',
    title: { en: 'Choose Your Campus', es: 'Elija su campus' },
    description: { en: 'Select the location that works well for your family. Both campuses offer caring classrooms and early learning programs.', es: 'Seleccione la ubicación que funcione mejor para su familia. Ambos campus ofrecen salones cariñosos y programas de aprendizaje temprano.' },
    Icon: FiMapPin,
    iconBg: 'bg-[#ffd200]',
    iconColor: 'text-[#0b1f5e]',
  },
  {
    number: '02',
    title: { en: 'Schedule a Tour', es: 'Agende una visita' },
    description: { en: 'Visit our facility, meet our teachers, and see our learning environment in action. Tours are free and available every week.', es: 'Visite nuestro centro, conozca a las maestras y vea nuestro ambiente de aprendizaje en acción. Las visitas son gratis y están disponibles cada semana.' },
    Icon: FiPhone,
    iconBg: 'bg-[#0b1f5e]',
    iconColor: 'text-white',
  },
  {
    number: '03',
    title: { en: 'Complete Enrollment', es: 'Complete la inscripción' },
    description: { en: "Fill out the simple enrollment forms and secure your child's spot. Our team will guide you through every step.", es: 'Complete los formularios de inscripción y asegure el cupo de su hijo/a. Nuestro equipo le guiará en cada paso.' },
    Icon: FiCheck,
    iconBg: 'bg-[#ffd200]',
    iconColor: 'text-[#0b1f5e]',
  },
]

export default function ApplyPage() {
  return (
    <>
      {/* Hero */}
      <section data-nav-theme="cream" className="bg-[#0b1f5e] pt-24 pb-24 md:pt-28 lg:pt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#ffd200] text-xs font-black tracking-[0.2em] uppercase mb-4">
            <LocalizedText en="Enrollment" es="Inscripción" />
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            <LocalizedText en="Ready to give your child a" es="¿Listo para darle a su hijo/a un" />{' '}
            <span className="font-display italic text-[#ffd200]">
              <LocalizedText en="strong start?" es="gran comienzo?" />
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
            <LocalizedText en="Enrollment is easy. Tours are free. Spots fill fast." es="Inscribirse es fácil. Las visitas son gratis. Los cupos se llenan rápido." />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#campus-select"
              className="inline-flex items-center gap-2 vk-action-primary vk-arrow-nudge bg-[#ffd200] hover:bg-[#e6bd00] text-[#0b1f5e] font-black px-8 py-4 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              <LocalizedText en="Schedule a Tour" es="Agendar visita" /> <FiArrowRight size={16} />
            </a>
            <a
              href="tel:8135300032"
              className="inline-flex items-center gap-2 vk-action-light bg-white hover:bg-gray-100 text-[#0b1f5e] font-black px-8 py-4 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              <FiPhone size={16} /> <LocalizedText en="Call Us Now" es="Llámenos ahora" />
            </a>
          </div>
        </div>
      </section>

      {/* 3 Steps */}
      <section data-nav-theme="blue" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-[#0b1f5e]">
              <LocalizedText en="3 Simple Steps" es="3 pasos sencillos" />
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {STEPS.map((step) => (
              <motion.div key={step.number} variants={fadeUp} className="relative text-center">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[7rem] font-black text-gray-100 leading-none select-none pointer-events-none">
                  {step.number}
                </div>
                <div className="relative pt-10">
                  <div className={`w-16 h-16 ${step.iconBg} ${step.iconColor} rounded-full flex items-center justify-center mx-auto mb-5`}>
                    <step.Icon size={24} />
                  </div>
                  <h3 className="text-xl font-black text-[#0b1f5e] mb-3">
                    <LocalizedText en={step.title.en} es={step.title.es} />
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    <LocalizedText en={step.description.en} es={step.description.es} />
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Campus selection */}
      <section id="campus-select" data-nav-theme="blue" className="bg-[#fafaf7] py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-[#0b1f5e] inline-block">
              <LocalizedText en="Choose Your Campus" es="Elija su campus" />
              <span className="block h-1.5 w-20 bg-[#ffd200] mx-auto mt-3 rounded-full" />
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {Object.values(CAMPUSES).map((campus) => (
              <motion.div
                key={campus.name}
                variants={fadeUp}
                className="vk-soft-card bg-white rounded-3xl p-8 border-2 border-transparent hover:border-[#ffd200] transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <h3 className="text-3xl font-black text-[#0b1f5e] mb-6">
                  {campus.name} <LocalizedText en="Campus" es="Campus" />
                </h3>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-start gap-3 text-gray-600">
                    <FiMapPin className="text-[#ffd200] mt-0.5 shrink-0" size={15} />
                    {campus.address}
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <FiClock className="text-[#ffd200] shrink-0" size={15} />
                    <LocalizedText en="Monday – Friday" es="Lunes – viernes" /> · {campus.hours}
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <span className="font-black text-[#0b1f5e] text-xs">
                      <LocalizedText en="AGES" es="EDADES" />
                    </span>
                    <LocalizedText en={campus.ages} es="6 semanas a 12 años" />
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${campus.phone.replace(/\D/g, '')}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 vk-action-primary vk-arrow-nudge bg-[#ffd200] hover:bg-[#e6bd00] text-[#0b1f5e] font-black px-5 py-3 rounded-full text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
                  >
                    <FiPhone size={14} /> {campus.phone}
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 vk-action-outline vk-arrow-nudge border-2 border-[#0b1f5e] text-[#0b1f5e] hover:bg-[#0b1f5e] hover:text-white font-bold px-5 py-3 rounded-full text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
                  >
                    <FiMail size={14} /> <LocalizedText en="Email Us" es="Escríbanos" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-gray-400 mt-8 text-sm"
          >
            <LocalizedText en="Not sure which campus is right for you? Call either location — our team is bilingual." es="¿No sabe cuál campus es mejor para su familia? Llame a cualquiera de las ubicaciones — nuestro equipo es bilingüe." />
          </motion.p>
        </div>
      </section>

      {/* Gold CTA bar */}
      <section data-nav-theme="blue" className="bg-[#ffd200] py-16 px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-[#0b1f5e] mb-8">
            <LocalizedText en="Spots are filling fast for Fall enrollment." es="Los cupos para inscripción de otoño se están llenando rápido." />
          </motion.h2>
          <motion.div variants={fadeUp}>
            <a
              href="/programs"
              className="inline-flex items-center gap-2 vk-action-secondary vk-arrow-nudge bg-[#0b1f5e] hover:bg-[#071242] text-white font-black px-10 py-4 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
            >
              <LocalizedText en="View Programs" es="Ver programas" /> <FiArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
