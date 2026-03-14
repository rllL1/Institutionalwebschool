'use client';

import type { SectionRow } from '@/lib/types';
import HeroSection from './HeroSection';
import HeroVideoSection from './HeroVideoSection';
import TextWithImageSection from './TextWithImageSection';
import CardsGridSection from './CardsGridSection';
import FeatureListSection from './FeatureListSection';
import EventsCarouselSection from './EventsCarouselSection';
import ImageCardsSection from './ImageCardsSection';
import LeadershipSection from './LeadershipSection';
import TextBlockSection from './TextBlockSection';
import TwoColumnCardsSection from './TwoColumnCardsSection';

const renderers: Record<string, React.ComponentType<{ content: Record<string, unknown> }>> = {
  hero: HeroSection,
  hero_video: HeroVideoSection,
  text_with_image: TextWithImageSection,
  cards_grid: CardsGridSection,
  feature_list: FeatureListSection,
  events_carousel: EventsCarouselSection,
  image_cards: ImageCardsSection,
  leadership_hierarchy: LeadershipSection,
  text_block: TextBlockSection,
  two_column_cards: TwoColumnCardsSection,
};

interface Props {
  sections: SectionRow[];
}

export default function SectionRenderer({ sections }: Props) {
  return (
    <>
      {sections.map((section) => {
        const Component = renderers[section.type];
        if (!Component) return null;
        return <Component key={section.id} content={section.content} />;
      })}
    </>
  );
}
