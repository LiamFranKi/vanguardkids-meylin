import type { Metadata } from 'next'
import { CAMPUSES } from '@/lib/constants'
import CampusHero from '@/components/campus/CampusHero'
import FeatureBadges from '@/components/campus/FeatureBadges'
import CampusLocation from '@/components/campus/CampusLocation'
import CampusPrograms from '@/components/campus/CampusPrograms'
import CampusGallery from '@/components/campus/CampusGallery'
import NotSureCTA from '@/components/campus/NotSureCTA'

export const metadata: Metadata = {
  title: 'Dover Campus',
  alternates: {
    canonical: '/locations/dover',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function DoverPage() {
  const campus = CAMPUSES.dover
  return (
    <>
      <CampusHero campus={campus} />
      <FeatureBadges features={campus.features} />
      <CampusLocation campus={campus} />
      <CampusPrograms programs={campus.programs} />
      <CampusGallery campusName={campus.name} />
      <NotSureCTA />
    </>
  )
}
