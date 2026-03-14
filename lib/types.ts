/* ---- Database row types ---- */

export interface PageRow {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface SectionRow {
  id: string;
  page_id: string;
  type: SectionType;
  title: string | null;
  content: Record<string, unknown>;
  sort_order: number;
  enabled: boolean;
  created_at: string;
  updated_at: string;
}

export interface MediaRow {
  id: string;
  file_name: string;
  storage_path: string;
  public_url: string;
  mime_type: string | null;
  size_bytes: number | null;
  alt_text: string;
  created_at: string;
}

export interface SiteSettingRow {
  id: string;
  key: string;
  value: Record<string, unknown>;
  updated_at: string;
}

/* ---- Section types ---- */

export type SectionType =
  | 'hero'
  | 'hero_video'
  | 'text_with_image'
  | 'cards_grid'
  | 'feature_list'
  | 'events_carousel'
  | 'image_cards'
  | 'leadership_hierarchy'
  | 'text_block'
  | 'two_column_cards';

/* ---- Content shapes ---- */

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}

export interface HeroVideoContent {
  videoSrc: string;
  posterImage: string;
}

export interface TextWithImageContent {
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

export interface CardsGridContent {
  heading: string;
  subtitle: string;
  cards: {
    title: string;
    description: string;
    image?: string;
    color?: string;
    badge?: string;
  }[];
}

export interface FeatureListContent {
  heading: string;
  sideImage: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface EventsCarouselContent {
  heading: string;
  events: {
    src: string;
    title: string;
    date: string;
  }[];
}

export interface ImageCardsContent {
  heading: string;
  subtitle: string;
  cards: {
    title: string;
    description: string;
    image: string;
    icon?: string;
  }[];
}

export interface LeadershipHierarchyContent {
  heading: string;
  subtitle: string;
  tiers: {
    tier: number;
    members: {
      name: string;
      role: string;
      description: string;
      photo: string;
    }[];
  }[];
}

export interface TextBlockContent {
  heading: string;
  body: string;
}

export interface TwoColumnCardsContent {
  heading: string;
  subtitle: string;
  cards: {
    title: string;
    body: string;
    color?: string;
  }[];
}

export interface FooterContent {
  about: string;
  quickLinks: { label: string; href: string }[];
  socialLinks: { label: string; href: string }[];
  contact: { email: string; phone: string; hours: string };
  copyright: string;
}

/* ---- Section type labels (for admin UI) ---- */

export const SECTION_TYPE_LABELS: Record<SectionType, string> = {
  hero: 'Hero Banner',
  hero_video: 'Hero Video',
  text_with_image: 'Text with Image',
  cards_grid: 'Cards Grid',
  feature_list: 'Feature List',
  events_carousel: 'Events Carousel',
  image_cards: 'Image Cards',
  leadership_hierarchy: 'Leadership Hierarchy',
  text_block: 'Text Block',
  two_column_cards: 'Two-Column Cards',
};
