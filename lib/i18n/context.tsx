'use client'
import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import en from './en'
import es from './es'

type Lang = 'en' | 'es'
const dicts = { en, es } as const
type Ctx = { lang: Lang; t: typeof en; toggle: () => void }

const LangContext = createContext<Ctx>({ lang: 'en', t: en, toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangContext.Provider value={{ lang, t: dicts[lang], toggle: () => setLang(l => l === 'en' ? 'es' : 'en') }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
