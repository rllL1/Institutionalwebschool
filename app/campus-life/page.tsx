import { getPageWithSections, getFooter } from '@/lib/dal';
import SectionRenderer from '../components/sections/SectionRenderer';
import FooterSection from '../components/sections/FooterSection';
import type { FooterContent } from '@/lib/types';
import FallbackCampusLifeClient from './FallbackCampusLifeClient';

export const revalidate = 3600;

export default async function CampusLifePage() {
  const result = await getPageWithSections('campus-life');
  const footer = await getFooter();

  if (result && result.sections.length > 0) {
    return (
      <div className="min-h-screen">
        <SectionRenderer sections={result.sections} />
        <FooterSection content={footer as FooterContent | null} />
      </div>
    );
  }

  return (
    <>
      <FallbackCampusLifeClient />
      <FooterSection content={footer as FooterContent | null} />
    </>
  );
}
