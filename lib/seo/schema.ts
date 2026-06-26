import { BUSINESS_NAME, CAMPUSES, SITE_URL, SOCIAL } from '@/lib/constants'

const addressParts = {
  dover: {
    streetAddress: '12660 Sydney Rd',
    addressLocality: 'Dover',
    addressRegion: 'FL',
    postalCode: '33527',
  },
  fortMyers: {
    streetAddress: '465 Carolina Ave',
    addressLocality: 'Fort Myers',
    addressRegion: 'FL',
    postalCode: '33905',
  },
} as const

const areaServed = {
  dover: ['Dover, FL', 'Hillsborough County, FL'],
  fortMyers: ['Fort Myers, FL', 'Lee County, FL'],
} as const

const campusDescriptions = {
  dover: `${BUSINESS_NAME} provides childcare, preschool, daycare, Free VPK, School Readiness, Early Head Start information, After-School Care, and free meals for families near Dover, Florida.`,
  fortMyers: `${BUSINESS_NAME} provides childcare, preschool, daycare, Free VPK, School Readiness, Before & After School care, school pickup, and free meals for families near Fort Myers, Florida.`,
} as const

const openingHours = {
  dover: 'Mo-Fr 06:30-18:00',
  fortMyers: 'Mo-Fr 06:00-18:00',
} as const

function campusSchema(key: keyof typeof CAMPUSES) {
  const campus = CAMPUSES[key]
  const address = addressParts[key]
  const campusUrl = `${SITE_URL}/locations/${campus.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    '@id': `${campusUrl}#childcare`,
    name: `${BUSINESS_NAME} - ${campus.name}`,
    url: campusUrl,
    image: `${SITE_URL}${campus.heroImage}`,
    telephone: campus.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: 'US',
    },
    openingHours: openingHours[key],
    areaServed: areaServed[key],
    parentOrganization: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    description: campusDescriptions[key],
  }
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  description: 'Childcare, preschool, daycare, Free VPK, School Readiness, campus-specific school-age care, and Dover Early Head Start information for families in Dover and Fort Myers, Florida.',
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: [SOCIAL.facebook, SOCIAL.instagram],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CAMPUSES.dover.phone,
      contactType: 'Dover campus',
      areaServed: 'Dover, FL',
    },
    {
      '@type': 'ContactPoint',
      telephone: CAMPUSES.fortMyers.phone,
      contactType: 'Fort Myers campus',
      areaServed: 'Fort Myers, FL',
    },
  ],
}

export const campusSchemas = [campusSchema('dover'), campusSchema('fortMyers')]

export const siteJsonLd = [websiteSchema, organizationSchema, ...campusSchemas]
