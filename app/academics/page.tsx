import { getPageWithSections, getFooter } from '@/lib/dal';
import SectionRenderer from '../components/sections/SectionRenderer';
import FooterSection from '../components/sections/FooterSection';
import type { FooterContent } from '@/lib/types';
import FallbackAcademicsClient from './FallbackAcademicsClient';

export const revalidate = 3600;

export default async function AcademicsPage() {
  const result = await getPageWithSections('academics');
  const footer = await getFooter();

  if (result && result.sections.length > 0) {
    return (
      <div className="min-h-screen bg-white">
        <SectionRenderer sections={result.sections} />
        <FooterSection content={footer as FooterContent | null} />
      </div>
    );
  }

  return (
    <>
      <FallbackAcademicsClient />
      <FooterSection content={footer as FooterContent | null} />
    </>
  );
}
