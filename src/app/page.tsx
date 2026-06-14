import AboutPreview from '@/components/AboutPreview';
import ProgramsGrid from '@/components/ProgramsGrid';
import ImpactStats from '@/components/ImpactStats';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import HeroWrapper from '@/components/HeroWrapper';

export default function Home() {
  return (
    <>
      <HeroWrapper />
      <AboutPreview />
      <ProgramsGrid />
      <ImpactStats />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
