import { createClient } from '@/lib/supabase/server';
import type { PageRow, SectionRow, FooterContent } from '@/lib/types';

export async function getPageWithSections(slug: string) {
  const supabase = await createClient();

  const { data: page } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .single<PageRow>();

  if (!page) return null;

  const { data: sections } = await supabase
    .from('sections')
    .select('*')
    .eq('page_id', page.id)
    .eq('enabled', true)
    .order('sort_order', { ascending: true })
    .returns<SectionRow[]>();

  return { page, sections: sections ?? [] };
}

export async function getAllPages() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('pages')
    .select('*')
    .order('title', { ascending: true })
    .returns<PageRow[]>();
  return data ?? [];
}

export async function getFooter(): Promise<FooterContent | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('site_settings')
    .select('value')
    .eq('key', 'footer')
    .single();
  return (data?.value as unknown as FooterContent) ?? null;
}

export async function getAllSectionsForPage(pageId: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from('sections')
    .select('*')
    .eq('page_id', pageId)
    .order('sort_order', { ascending: true })
    .returns<SectionRow[]>();
  return data ?? [];
}
