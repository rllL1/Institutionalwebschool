import { getPageWithSections, getFooter } from '@/lib/dal';
import SectionRenderer from './components/sections/SectionRenderer';
import FooterSection from './components/sections/FooterSection';
import type { FooterContent } from '@/lib/types';

/* ── Hardcoded fallback data (used when DB is empty) ── */
import HeroCarousel from './components/HeroCarousel';
import EventsCarousel from './components/EventsCarousel';

export const revalidate = 3600; // ISR: revalidate every hour

export default async function Home() {
  const result = await getPageWithSections('home');
  const footer = await getFooter();

  // If database has content, render dynamically
  if (result && result.sections.length > 0) {
    return (
      <div className="relative min-h-screen">
        <SectionRenderer sections={result.sections} />
        <FooterSection content={footer as FooterContent | null} />
      </div>
    );
  }

  // Fallback: render original hardcoded page
  return <FallbackHome footer={footer as FooterContent | null} />;
}

/* ── Fallback component (original hardcoded design) ── */
function FallbackHome({ footer }: { footer: FooterContent | null }) {
  return (
    <div className="relative min-h-screen">
      <HeroCarousel />
      <div className="relative z-10">
        <EventsCarousel />
      </div>
      <div className="relative z-10 h-1 md:h-2" />
      <FooterSection content={footer} />
    </div>
  );
}
