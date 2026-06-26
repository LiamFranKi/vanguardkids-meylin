'use client'

import { FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from 'react-icons/fi'
import { useLang } from '@/lib/i18n/context'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykqyree'
const POPUP_SESSION_KEY = 'vka-enrollment-popup-dismissed'
const POPUP_DELAY_MS = 4000

const copy = {
  en: {
    badge: 'Enrollment Open',
    title: 'Enrollment season is open.',
    body: 'Interested in joining Vanguard Kids Academy? Leave your information and our team will contact you about availability, tours, and current enrollment options.',
    mobileBody: 'Leave your information and our team will contact you about tours and enrollment options.',
    note: 'No obligation - our team will follow up with availability.',
    cta: 'Request Enrollment Info',
    close: 'Close enrollment information form',
    notNow: 'Not now',
    success: 'Thank you! Our team will contact you soon.',
    error: 'Something went wrong. Please try again or contact us directly.',
    notReady: 'Formspree endpoint is not configured yet. Please contact us directly for now.',
    validation: 'Please add your name, child age, preferred campus, and at least one contact method.',
    fields: {
      name: 'Parent/Guardian Name',
      phone: 'Phone Number',
      email: 'Email',
      campus: 'Preferred Campus',
      childAge: 'Child Age',
      message: 'Optional Message',
    },
    placeholders: {
      name: 'Your name',
      phone: '(555) 555-5555',
      email: 'you@example.com',
      childAge: 'Example: 3 years old',
      message: 'Tell us anything helpful for your tour or enrollment questions.',
    },
    campuses: {
      choose: 'Choose a campus',
      dover: 'Dover',
      fortMyers: 'Fort Myers',
      notSure: 'Not Sure',
    },
    requiredHint: 'Required',
    contactHint: 'Phone or email required',
    sending: 'Sending...',
  },
  es: {
    badge: 'Inscripcion abierta',
    title: 'La temporada de inscripción está abierta.',
    body: '¿Le interesa unirse a Vanguard Kids Academy? Déjenos su información y nuestro equipo se comunicará con usted sobre disponibilidad, tours y opciones de inscripción.',
    mobileBody: 'Déjenos su información y nuestro equipo se comunicará con usted sobre tours e inscripción.',
    note: 'Sin obligación - nuestro equipo dará seguimiento sobre disponibilidad.',
    cta: 'Solicitar información',
    close: 'Cerrar formulario de información de inscripción',
    notNow: 'Ahora no',
    success: '¡Gracias! Nuestro equipo se comunicará con usted pronto.',
    error: 'Algo salió mal. Inténtelo nuevamente o contáctenos directamente.',
    notReady: 'El endpoint de Formspree aún no está configurado. Por ahora, contáctenos directamente.',
    validation: 'Agregue su nombre, edad del niño/a, campus preferido y al menos un método de contacto.',
    fields: {
      name: 'Nombre del padre/madre o tutor',
      phone: 'Número de teléfono',
      email: 'Correo electrónico',
      campus: 'Campus preferido',
      childAge: 'Edad del niño/a',
      message: 'Mensaje opcional',
    },
    placeholders: {
      name: 'Su nombre',
      phone: '(555) 555-5555',
      email: 'usted@ejemplo.com',
      childAge: 'Ejemplo: 3 años',
      message: 'Cuéntenos algo útil para su tour o preguntas de inscripción.',
    },
    campuses: {
      choose: 'Elija un campus',
      dover: 'Dover',
      fortMyers: 'Fort Myers',
      notSure: 'No estoy seguro/a',
    },
    requiredHint: 'Requerido',
    contactHint: 'Teléfono o correo requerido',
    sending: 'Enviando...',
  },
} as const

type FormState = {
  name: string
  phone: string
  email: string
  preferredCampus: string
  childAge: string
  message: string
}

const initialFormState: FormState = {
  name: '',
  phone: '',
  email: '',
  preferredCampus: '',
  childAge: '',
  message: '',
}

function isEndpointConfigured() {
  return FORMSPREE_ENDPOINT.startsWith('https://formspree.io/f/')
}

export default function EnrollmentLeadPopup() {
  const { lang } = useLang()
  const t = copy[lang]
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState<FormState>(initialFormState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const firstFieldRef = useRef<HTMLInputElement>(null)

  const closePopup = useCallback(() => {
    setVisible(false)
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(POPUP_SESSION_KEY, 'true')
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.sessionStorage.getItem(POPUP_SESSION_KEY) === 'true') return

    const timer = window.setTimeout(() => setVisible(true), POPUP_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!visible) return

    const shouldAutoFocus = window.matchMedia('(min-width: 640px)').matches
    if (shouldAutoFocus) {
      firstFieldRef.current?.focus()
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePopup()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [closePopup, visible])

  useEffect(() => {
    if (!visible || typeof window === 'undefined') return

    const scrollY = window.scrollY
    const { overflow, position, top, width } = document.body.style

    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    return () => {
      document.body.style.overflow = overflow
      document.body.style.position = position
      document.body.style.top = top
      document.body.style.width = width
      window.scrollTo(0, scrollY)
    }
  }, [visible])

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    if (status !== 'loading') {
      setStatus('idle')
      setMessage('')
    }
  }

  const validateForm = () => {
    return Boolean(
      form.name.trim() &&
      form.childAge.trim() &&
      form.preferredCampus &&
      (form.phone.trim() || form.email.trim()),
    )
  }

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validateForm()) {
      setStatus('error')
      setMessage(t.validation)
      return
    }

    if (!isEndpointConfigured()) {
      setStatus('error')
      setMessage(t.notReady)
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New Vanguard Kids Academy enrollment lead',
          name: form.name,
          phone: form.phone,
          email: form.email,
          preferredCampus: form.preferredCampus,
          childAge: form.childAge,
          message: form.message,
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : '',
          language: lang,
        }),
      })

      if (!response.ok) throw new Error('Form submission failed')

      setStatus('success')
      setMessage(t.success)
      setForm(initialFormState)
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem(POPUP_SESSION_KEY, 'true')
      }
    } catch {
      setStatus('error')
      setMessage(t.error)
    }
  }

  return (
    <>
      {visible && (
        <div
          className="fixed inset-0 z-[80] flex touch-none items-center justify-center overflow-hidden bg-[#06133a]/55 px-3 py-5 backdrop-blur-sm sm:px-5 sm:py-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enrollment-popup-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePopup()
          }}
        >
          <div className="relative flex max-h-[75dvh] w-full max-w-[560px] flex-col overflow-hidden rounded-[1.25rem] bg-white shadow-[0_28px_90px_rgba(5,16,57,0.35)] ring-1 ring-white/40 [max-height:min(75dvh,680px)] sm:max-h-[calc(100vh-2rem)] sm:rounded-[1.75rem]">
            <div className="absolute inset-x-0 top-0 h-2 bg-[#ffd200]" aria-hidden="true" />

            <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between gap-3 border-b border-[#0b1f5e]/10 bg-white px-4 pb-2 pt-4 sm:px-7 sm:pb-3 sm:pt-6">
              <span className="inline-flex min-w-0 items-center gap-2 rounded-full bg-[#fff4b8] px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#0b1f5e] ring-1 ring-[#ffd200]/60 sm:px-3 sm:py-1.5 sm:text-[0.7rem] sm:tracking-[0.14em]">
                <FiInfo aria-hidden="true" size={13} />
                {t.badge}
              </span>
              <button
                type="button"
                onClick={closePopup}
                aria-label={t.close}
                className="vk-icon-button grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#0b1f5e] shadow-md ring-1 ring-[#0b1f5e]/10 transition hover:bg-[#f7fbff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd200]"
              >
                <FiX aria-hidden="true" size={21} />
              </button>
            </div>

            <div className="flex-1 touch-pan-y overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:px-7 sm:pb-7 sm:pt-5">
              <div>
                <h2 id="enrollment-popup-title" className="font-display text-[1.45rem] font-black leading-tight text-[#0b1f5e] sm:text-4xl sm:leading-tight">
                  {t.title}
                </h2>
                <p className="mt-2 hidden text-sm leading-6 text-slate-600 sm:block sm:text-base">
                  {t.body}
                </p>
                <p className="mt-1.5 text-[0.82rem] leading-5 text-slate-600 sm:hidden">
                  {t.mobileBody}
                </p>
              </div>

              <form onSubmit={submitForm} className="mt-3 grid gap-2 sm:mt-5 sm:gap-3">
                <div>
                  <label htmlFor="enrollment-name" className="mb-1 block text-[0.68rem] font-black uppercase tracking-[0.1em] text-[#0b1f5e] sm:mb-1.5 sm:text-xs sm:tracking-[0.12em]">
                    {t.fields.name} <span className="text-[#1a3496]">({t.requiredHint})</span>
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="enrollment-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    placeholder={t.placeholders.name}
                    autoComplete="name"
                    className="w-full rounded-xl border border-[#0b1f5e]/15 bg-[#f7fbff] px-3.5 py-2.5 text-base text-[#0b1f5e] outline-none transition placeholder:text-slate-400 focus:border-[#1a3496] focus:bg-white focus:ring-4 focus:ring-[#ffd200]/35 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
                  />
                </div>

                <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                  <div>
                    <label htmlFor="enrollment-phone" className="mb-1 block text-[0.68rem] font-black uppercase tracking-[0.1em] text-[#0b1f5e] sm:mb-1.5 sm:text-xs sm:tracking-[0.12em]">
                      {t.fields.phone} <span className="text-[#1a3496]">({t.contactHint})</span>
                    </label>
                    <input
                      id="enrollment-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                      placeholder={t.placeholders.phone}
                      autoComplete="tel"
                      className="w-full rounded-xl border border-[#0b1f5e]/15 bg-[#f7fbff] px-3.5 py-2.5 text-base text-[#0b1f5e] outline-none transition placeholder:text-slate-400 focus:border-[#1a3496] focus:bg-white focus:ring-4 focus:ring-[#ffd200]/35 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="enrollment-email" className="mb-1 block text-[0.68rem] font-black uppercase tracking-[0.1em] text-[#0b1f5e] sm:mb-1.5 sm:text-xs sm:tracking-[0.12em]">
                      {t.fields.email}
                    </label>
                    <input
                      id="enrollment-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      placeholder={t.placeholders.email}
                      autoComplete="email"
                      className="w-full rounded-xl border border-[#0b1f5e]/15 bg-[#f7fbff] px-3.5 py-2.5 text-base text-[#0b1f5e] outline-none transition placeholder:text-slate-400 focus:border-[#1a3496] focus:bg-white focus:ring-4 focus:ring-[#ffd200]/35 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                  <div>
                    <label htmlFor="enrollment-campus" className="mb-1 block text-[0.68rem] font-black uppercase tracking-[0.1em] text-[#0b1f5e] sm:mb-1.5 sm:text-xs sm:tracking-[0.12em]">
                      {t.fields.campus} <span className="text-[#1a3496]">({t.requiredHint})</span>
                    </label>
                    <select
                      id="enrollment-campus"
                      name="preferredCampus"
                      value={form.preferredCampus}
                      onChange={(event) => updateField('preferredCampus', event.target.value)}
                      className="w-full rounded-xl border border-[#0b1f5e]/15 bg-[#f7fbff] px-3.5 py-2.5 text-base font-bold text-[#0b1f5e] outline-none transition focus:border-[#1a3496] focus:bg-white focus:ring-4 focus:ring-[#ffd200]/35 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
                    >
                      <option value="">{t.campuses.choose}</option>
                      <option value="Dover">{t.campuses.dover}</option>
                      <option value="Fort Myers">{t.campuses.fortMyers}</option>
                      <option value="Not Sure">{t.campuses.notSure}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="enrollment-child-age" className="mb-1 block text-[0.68rem] font-black uppercase tracking-[0.1em] text-[#0b1f5e] sm:mb-1.5 sm:text-xs sm:tracking-[0.12em]">
                      {t.fields.childAge} <span className="text-[#1a3496]">({t.requiredHint})</span>
                    </label>
                    <input
                      id="enrollment-child-age"
                      name="childAge"
                      type="text"
                      value={form.childAge}
                      onChange={(event) => updateField('childAge', event.target.value)}
                      placeholder={t.placeholders.childAge}
                      className="w-full rounded-xl border border-[#0b1f5e]/15 bg-[#f7fbff] px-3.5 py-2.5 text-base text-[#0b1f5e] outline-none transition placeholder:text-slate-400 focus:border-[#1a3496] focus:bg-white focus:ring-4 focus:ring-[#ffd200]/35 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="enrollment-message" className="mb-1 block text-[0.68rem] font-black uppercase tracking-[0.1em] text-[#0b1f5e] sm:mb-1.5 sm:text-xs sm:tracking-[0.12em]">
                    {t.fields.message}
                  </label>
                  <textarea
                    id="enrollment-message"
                    name="message"
                    value={form.message}
                    onChange={(event) => updateField('message', event.target.value)}
                    placeholder={t.placeholders.message}
                    rows={2}
                    className="w-full resize-none rounded-xl border border-[#0b1f5e]/15 bg-[#f7fbff] px-3.5 py-2.5 text-base text-[#0b1f5e] outline-none transition placeholder:text-slate-400 focus:border-[#1a3496] focus:bg-white focus:ring-4 focus:ring-[#ffd200]/35 sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm"
                  />
                </div>

                {message && (
                  <div
                    className={`flex items-start gap-2 rounded-xl px-3.5 py-2.5 text-sm font-bold leading-5 sm:rounded-2xl sm:px-4 sm:py-3 sm:leading-6 ${
                      status === 'success'
                        ? 'bg-[#e8f8ee] text-[#075c2d]'
                        : 'bg-[#fff4d4] text-[#0b1f5e]'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {status === 'success' ? <FiCheckCircle className="mt-1 shrink-0" aria-hidden="true" /> : <FiAlertCircle className="mt-1 shrink-0" aria-hidden="true" />}
                    <span>{message}</span>
                  </div>
                )}

                <p className="hidden rounded-2xl bg-[#f7fbff] px-4 py-2.5 text-xs font-bold leading-5 text-[#0b1f5e]/70 sm:block sm:py-3">
                  {t.note}
                </p>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="vk-action-primary mt-1 w-full rounded-full bg-[#0b1f5e] px-5 py-3 text-sm font-black text-white shadow-[0_12px_28px_rgba(11,31,94,0.18)] transition hover:bg-[#1a3496] disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd200] sm:px-6 sm:py-4"
                >
                  {status === 'loading' ? t.sending : t.cta}
                </button>
                <button
                  type="button"
                  onClick={closePopup}
                  className="w-full rounded-full px-5 py-2.5 text-sm font-black text-[#0b1f5e] transition hover:bg-[#f7fbff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd200]"
                >
                  {t.notNow}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
