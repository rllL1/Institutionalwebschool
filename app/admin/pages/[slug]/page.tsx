import { createClient } from '@/lib/supabase/server';
import { requireAuth } from '@/lib/auth';
import type { PageRow, SectionRow } from '@/lib/types';
import SectionList from '../../components/SectionList';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function AdminPageEditor({ params }: Props) {
  await requireAuth();
  const { slug } = await params;
  const supabase = await createClient();

  const { data: page } = await supabase
    .from('pages')
    .select('*')
    .eq('slug', slug)
    .single<PageRow>();

  if (!page) {
    return (
      <div className="p-8">
        <div className="bg-white rounded-2xl border border-red-100 p-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-400 text-sm">No page with slug &ldquo;{slug}&rdquo; exists in the database.</p>
        </div>
      </div>
    );
  }

  const { data: sections } = await supabase
    .from('sections')
    .select('*')
    .eq('page_id', page.id)
    .order('sort_order', { ascending: true })
    .returns<SectionRow[]>();

  const sectionsList = sections ?? [];
  const activeCount = sectionsList.filter((s) => s.enabled).length;
  const hiddenCount = sectionsList.length - activeCount;

  return (
    <div className="p-8 max-w-5xl">
      {/* Page info header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md shadow-green-500/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{page.title}</h1>
            <p className="text-sm text-gray-400 font-mono mt-0.5">/{slug === 'home' ? '' : slug}</p>
          </div>
        </div>
        <a
          href={slug === 'home' ? '/' : `/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-green-700 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View Live
        </a>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">{sectionsList.length}</p>
            <p className="text-xs text-gray-400">Total Sections</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">{activeCount}</p>
            <p className="text-xs text-gray-400">Active</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878l4.242 4.242M15 12a3 3 0 01-3.12 2.995M21 21l-6.878-6.878" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">{hiddenCount}</p>
            <p className="text-xs text-gray-400">Hidden</p>
          </div>
        </div>
      </div>

      {/* Section list */}
      <SectionList
        pageId={page.id}
        pageSlug={slug}
        initialSections={sectionsList}
      />
    </div>
  );
}
