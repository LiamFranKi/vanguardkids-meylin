'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiClock, FiPhone, FiCalendar, FiArrowRight } from 'react-icons/fi'
import { useLang } from '@/lib/i18n/context'
import { CAMPUSES } from '@/lib/constants'
import { fadeUp, stagger } from '@/lib/motion'

export default function ContactQuiz() {
  const { t } = useLang()
  const quiz = t.quiz
  const questions = quiz.questions
  const infoCards = [
    {
      icon: FiClock,
      title: t.cta.hours,
      lines: [`Dover: ${CAMPUSES.dover.hours.replace('–', '-')}`, `Fort Myers: ${CAMPUSES.fortMyers.hours.replace('–', '-')}`],
      tone: 'light',
    },
    {
      icon: FiPhone,
      title: t.campusCard.contact,
      lines: [
        `${t.cta.dover}: ${CAMPUSES.dover.phone}`,
        `${t.cta.fortMyers}: ${CAMPUSES.fortMyers.phone}`,
      ],
      tone: 'light',
    },
    {
      icon: FiCalendar,
      title: t.cta.toursAvailable,
      lines: [t.cta.available, t.cta.everyday],
      tone: 'gold',
    },
  ] as const
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [answers, setAnswers] = useState<string[]>([])
  const [done, setDone] = useState(false)

  const handleContinue = () => {
    if (!selected) return
    const next = [...answers, selected]
    setAnswers(next)
    setSelected(null)
    if (step < questions.length - 1) {
      setStep(s => s + 1)
    } else {
      setDone(true)
    }
  }

  return (
    <section data-nav-theme="cream" className="bg-[#2746a0] px-4 py-16 lg:py-20">
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

        {/* Left: quiz */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="overflow-hidden rounded-[2rem] bg-[#0b1f5e] shadow-2xl"
        >
          <div className="bg-[#2f5fca] px-6 py-5 sm:px-8">
            <motion.p variants={fadeUp} className="text-xs font-black uppercase tracking-[0.2em] text-[#ffd200]">
              {quiz.eyebrow}
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-1 text-3xl font-black text-white md:text-4xl">
              {quiz.headline}
            </motion.h2>
          </div>

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8"
              >
                <div className="flex items-center justify-between mb-5">
                  <p className="text-xs font-black text-white/60 tracking-widest uppercase">
                    {quiz.step} {step + 1} {quiz.of} {questions.length}
                  </p>
                  {/* Progress dots */}
                  <div className="flex gap-1.5">
                    {questions.map((_, i) => (
                      <span
                        key={i}
                        className={`h-2 w-2 rounded-full transition-colors ${i <= step ? 'bg-[#ffd200]' : 'bg-white/20'}`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white mb-5">{questions[step].q}</h3>

                <div className="flex flex-col gap-3 mb-6">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelected(opt)}
                      className={`vk-action-light text-left px-4 py-3.5 rounded-2xl border-2 text-sm font-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] ${
                        selected === opt
                          ? 'border-[#ffd200] bg-[#ffd200] text-[#0b1f5e]'
                          : 'border-white/10 bg-white text-[#0b1f5e] hover:border-[#ffd200]/70'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleContinue}
                  disabled={!selected}
                  className="vk-action-primary vk-arrow-nudge w-full flex items-center justify-center gap-2 bg-[#ffd200] hover:bg-[#e6bd00] disabled:opacity-40 disabled:cursor-not-allowed text-[#0b1f5e] font-black py-3.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
                >
                  {step < questions.length - 1 ? quiz.continue : quiz.results} <FiArrowRight />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-white text-center"
              >
                <h3 className="text-2xl font-black mb-2">{quiz.resultTitle}</h3>
                <p className="text-white/70 text-sm mb-6">{quiz.resultBody}</p>
                <a
                  href="/apply"
                  className="vk-action-primary inline-block bg-[#ffd200] text-[#0b1f5e] font-black px-6 py-3 rounded-full hover:bg-[#e6bd00] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200]"
                >
                  {t.cta.button}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right: contact info cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-5"
        >
          {infoCards.map(({ icon: Icon, title, lines, tone }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className={`vk-soft-card rounded-[1.5rem] p-6 shadow-lg transition-shadow hover:shadow-xl flex items-start gap-4 ring-1 ring-transparent ${
                tone === 'gold' ? 'bg-[#ffd200] text-[#0b1f5e]' : 'bg-white text-[#0b1f5e]'
              }`}
            >
              <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                tone === 'gold' ? 'bg-white/70' : 'bg-[#e8f4f8]'
              }`}>
                <Icon size={20} className="text-[#0b1f5e]" />
              </div>
              <div>
                <p className="font-black text-base mb-1">{title}</p>
                {lines.map((line, i) => {
                  const phoneMatch = line.match(/\(\d{3}\) \d{3}-\d{4}/)
                  const cls = `text-sm leading-relaxed ${tone === 'gold' ? 'text-[#0b1f5e]/80' : 'text-[#0b1f5e]/65'}`
                  if (phoneMatch) {
                    const digits = phoneMatch[0].replace(/\D/g, '')
                    const [before, after] = line.split(phoneMatch[0])
                    return (
                      <p key={i} className={cls}>
                        {before}
                        <a href={`tel:${digits}`} className="font-bold hover:text-[#0b1f5e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd200]">
                          {phoneMatch[0]}
                        </a>
                        {after ?? ''}
                      </p>
                    )
                  }
                  return <p key={i} className={cls}>{line}</p>
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
