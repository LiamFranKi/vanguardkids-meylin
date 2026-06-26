export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vk-website-productcion-production.up.railway.app'
export const BUSINESS_NAME = 'Vanguard Kids Academy'
export const AGE_RANGE = '6 weeks to 12 years'
export const AGE_RANGE_SHORT = '6w - 12y'
export const CLOUDPANO_BASE = 'https://app.cloudpano.com/tours/'

export const CAMPUSES = {
  dover: {
    slug: 'dover',
    name: 'Dover',
    address: '12660 Sydney Rd, Dover, FL 33527',
    phone: '(813) 530-0032',
    hours: '6:30 am – 6:00 pm',
    ages: AGE_RANGE,
    // Note: CloudPano IDs were corrected after confirming Z-MLJYAhe opens Fort Myers.
    tourId: 'DbQ7g1FoFvMY',
    mapEmbed: 'https://maps.google.com/maps?q=12660+Sydney+Rd+Dover+FL+33527&output=embed',
    mapsUrl: 'https://maps.google.com/?q=12660+Sydney+Rd,+Dover,+FL+33527',
    programs: ['vpk', 'hs', 'sr'] as const,
    features: ['bilingual', 'meals', 'smallClass', 'play', 'steam'] as const,
    image: '/images/campuses/dover/dover-01.png',
    heroImage: '/images/campuses/dover/dover-03.png',
  },
  fortMyers: {
    slug: 'fort-myers',
    name: 'Fort Myers',
    address: '465 Carolina Ave, Fort Myers, FL 33905',
    phone: '(239) 694-5912',
    hours: '6:00 am – 6:00 pm',
    ages: AGE_RANGE,
    tourId: 'Z-MLJYAhe',
    mapEmbed: 'https://maps.google.com/maps?q=465+Carolina+Ave+Fort+Myers+FL+33905&output=embed',
    mapsUrl: 'https://maps.google.com/?q=465+Carolina+Ave,+Fort+Myers,+FL+33905',
    programs: ['vpk', 'sr'] as const,
    features: ['bilingual', 'meals', 'smallClass', 'play', 'steam'] as const,
    image: '/images/campuses/fort-myers/fort-myers-02.png',
    heroImage: '/images/campuses/fort-myers/fort-myers-03.png',
  },
} as const

export const PROGRAMS = {
  vpk: {
    key: 'vpk',
    color: 'gold',
    tagline: 'Free · State-Funded',
    hours: '540 hrs',
    ratio: '1:11',
  },
  hs: {
    key: 'hs',
    color: 'navy',
    tagline: 'Federal Program',
    hours: 'Full day',
    ratio: '1:8',
  },
  sr: {
    key: 'sr',
    color: 'sky',
    tagline: 'Financial Assistance',
    hours: 'Full day',
    ratio: '1:12',
  },
} as const

export const FEATURES = ['bilingual', 'meals', 'smallClass', 'play', 'steam'] as const

export const STATS = [
  { value: 10, suffix: '+', labelKey: 'years' },
  { value: 2, suffix: '', labelKey: 'locations' },
  { value: 3, suffix: '', labelKey: 'programs' },
  { value: 100, suffix: '+', labelKey: 'families' },
] as const

export const SOCIAL = {
  facebook: 'https://www.facebook.com/vanguardkids',
  instagram: 'https://www.instagram.com/vanguardkids',
}

export const CONTACT_EMAIL = 'vanguardkidsacademy@gmail.com'
export const CAREERS_EMAIL = 'vanguardkidsacademy@gmail.com'
