import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import ProgramsSection from '@/components/home/ProgramsSection'
import LocationCards from '@/components/home/LocationCards'
import VirtualTourCarousel from '@/components/home/VirtualTourCarousel'
import ContactQuiz from '@/components/home/ContactQuiz'
import TourCTA from '@/components/home/TourCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProgramsSection />
      <LocationCards />
      <VirtualTourCarousel />
      <ContactQuiz />
      <TourCTA />
    </>
  )
}
