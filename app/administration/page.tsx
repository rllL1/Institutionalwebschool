import { getPageWithSections, getFooter } from '@/lib/dal';
import SectionRenderer from '../components/sections/SectionRenderer';
import FooterSection from '../components/sections/FooterSection';
import type { FooterContent } from '@/lib/types';

export const revalidate = 3600;

export default async function Administration() {
  const result = await getPageWithSections('administration');
  const footer = await getFooter();

  if (result && result.sections.length > 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <SectionRenderer sections={result.sections} />
        <FooterSection content={footer as FooterContent | null} />
      </div>
    );
  }

  // Fallback: render original hardcoded page
  return <FallbackAdministration footer={footer as FooterContent | null} />;
}

function FallbackAdministration({ footer }: { footer: FooterContent | null }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="py-20 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Administration</h1>
        <p className="text-gray-500">Content is being set up. Please check back soon.</p>
      </div>
      <FooterSection content={footer} />
    </div>
  );
}
