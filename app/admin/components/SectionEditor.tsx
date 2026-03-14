'use client';

import type { SectionRow, SectionType } from '@/lib/types';
import HeroEditor from './editors/HeroEditor';
import HeroVideoEditor from './editors/HeroVideoEditor';
import TextWithImageEditor from './editors/TextWithImageEditor';
import CardsGridEditor from './editors/CardsGridEditor';
import FeatureListEditor from './editors/FeatureListEditor';
import LeadershipEditor from './editors/LeadershipEditor';
import TextBlockEditor from './editors/TextBlockEditor';
import EventsCarouselEditor from './editors/EventsCarouselEditor';

type EditorComponent = React.ComponentType<{
  content: Record<string, unknown>;
  onChange: (content: Record<string, unknown>) => void;
}>;

const editorMap: Partial<Record<SectionType, EditorComponent>> = {
  hero: HeroEditor,
  hero_video: HeroVideoEditor,
  text_with_image: TextWithImageEditor,
  cards_grid: CardsGridEditor,
  feature_list: FeatureListEditor,
  events_carousel: EventsCarouselEditor,
  image_cards: CardsGridEditor,
  leadership_hierarchy: LeadershipEditor,
  text_block: TextBlockEditor,
  two_column_cards: CardsGridEditor,
};

interface Props {
  section: SectionRow;
  onChange: (content: Record<string, unknown>) => void;
}

export default function SectionEditor({ section, onChange }: Props) {
  const Editor = editorMap[section.type];

  if (!Editor) {
    return <p className="text-red-500 text-sm">No editor available for section type: {section.type}</p>;
  }

  return <Editor content={section.content} onChange={onChange} />;
}
