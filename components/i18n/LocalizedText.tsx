'use client'

import { useLang } from '@/lib/i18n/context'

type LocalizedTextProps = {
  en: string
  es: string
}

export default function LocalizedText({ en, es }: LocalizedTextProps) {
  const { lang } = useLang()
  return <>{lang === 'es' ? es : en}</>
}
