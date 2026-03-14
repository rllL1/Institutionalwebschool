import Link from 'next/link';
import { requireAuth } from '@/lib/auth';
import { createClient } from '@/lib/supabase/server';
import type { PageRow, SectionRow, MediaRow } from '@/lib/types';

/* ─── Page icon map ─── */
const pageIconPaths: Record<string, string> = {
  home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1',
  college: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0121 12.75c0 3-3 5.25-9 5.25s-9-2.25-9-5.25c0-.59.16-1.18.84-2.172L12 14z',
  academics: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  administration: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  'campus-life': 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  contact: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
};
const defaultIcon = 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';

const pageColorMap: Record<string, { bg: string; border: string; icon: string; hoverBg: string; hoverBorder: string; accent: string }> = {
  home: { bg: 'bg-emerald-50', border: 'border-emerald-100', icon: 'text-emerald-600', hoverBg: 'group-hover:bg-emerald-100', hoverBorder: 'group-hover:border-emerald-200', accent: 'from-emerald-400 to-teal-400' },
  college: { bg: 'bg-blue-50', border: 'border-blue-100', icon: 'text-blue-600', hoverBg: 'group-hover:bg-blue-100', hoverBorder: 'group-hover:border-blue-200', accent: 'from-blue-400 to-sky-400' },
  academics: { bg: 'bg-violet-50', border: 'border-violet-100', icon: 'text-violet-600', hoverBg: 'group-hover:bg-violet-100', hoverBorder: 'group-hover:border-violet-200', accent: 'from-violet-400 to-purple-400' },
  administration: { bg: 'bg-amber-50', border: 'border-amber-100', icon: 'text-amber-600', hoverBg: 'group-hover:bg-amber-100', hoverBorder: 'group-hover:border-amber-200', accent: 'from-amber-400 to-orange-400' },
  'campus-life': { bg: 'bg-pink-50', border: 'border-pink-100', icon: 'text-pink-600', hoverBg: 'group-hover:bg-pink-100', hoverBorder: 'group-hover:border-pink-200', accent: 'from-pink-400 to-rose-400' },
  contact: { bg: 'bg-teal-50', border: 'border-teal-100', icon: 'text-teal-600', hoverBg: 'group-hover:bg-teal-100', hoverBorder: 'group-hover:border-teal-200', accent: 'from-teal-400 to-cyan-400' },
};
const fallbackColor = { bg: 'bg-gray-50', border: 'border-gray-100', icon: 'text-gray-600', hoverBg: 'group-hover:bg-gray-100', hoverBorder: 'group-hover:border-gray-200', accent: 'from-gray-400 to-gray-500' };

export default async function AdminDashboard() {
  await requireAuth();
  const supabase = await createClient();

  const [pagesRes, sectionsRes, mediaRes] = await Promise.all([
    supabase.from('pages').select('*').order('title', { ascending: true }).returns<PageRow[]>(),
    supabase.from('sections').select('*').returns<SectionRow[]>(),
    supabase.from('media').select('id, file_name, public_url, created_at').order('created_at', { ascending: false }).limit(50).returns<Pick<MediaRow, 'id' | 'file_name' | 'public_url' | 'created_at'>[]>(),
  ]);

  const pages = pagesRes.data ?? [];
  const sections = sectionsRes.data ?? [];
  const mediaFiles = mediaRes.data ?? [];

  const totalSections = sections.length;
  const activeSections = sections.filter((s) => s.enabled).length;
  const disabledSections = totalSections - activeSections;

  const sectionsByPage = new Map<string, number>();
  for (const s of sections) {
    sectionsByPage.set(s.page_id, (sectionsByPage.get(s.page_id) || 0) + 1);
  }

  const greeting = getGreeting();

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">{greeting}</h1>
        <p className="text-gray-400 mt-1 text-sm">
          Here&apos;s an overview of your website content and management tools.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        <StatCard
          label="Total Pages"
          value={pages.length}
          trend={`${pages.length} managed`}
          iconPath="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          color="emerald"
        />
        <StatCard
          label="Active Sections"
          value={activeSections}
          trend="Live on site"
          iconPath="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          color="blue"
        />
        <StatCard
          label="Hidden Sections"
          value={disabledSections}
          trend="Not published"
          iconPath="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878l4.242 4.242M15 12a3 3 0 01-3.12 2.995M21 21l-6.878-6.878"
          color="amber"
        />
        <StatCard
          label="Media Files"
          value={mediaFiles.length}
          trend="Images uploaded"
          iconPath="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          color="violet"
        />
      </div>

      {/* Pages grid */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Page Management</h2>
            <p className="text-xs text-gray-400 mt-0.5">Manage sections, content, and media for each page</p>
          </div>
          <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
            {pages.length} page{pages.length !== 1 ? 's' : ''}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page) => {
            const count = sectionsByPage.get(page.id) || 0;
            const colors = pageColorMap[page.slug] || fallbackColor;
            const iconPath = pageIconPaths[page.slug] || defaultIcon;
            return (
              <Link
                key={page.id}
                href={`/admin/pages/${page.slug}`}
                className="group relative bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:shadow-gray-100/80 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.hoverBg} ${colors.hoverBorder} transition-colors`}>
                    <svg className={`w-5 h-5 ${colors.icon}`} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                    </svg>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <h3 className="text-sm font-bold text-gray-800 mb-1.5">{page.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-gray-400 font-mono bg-gray-50 px-1.5 py-0.5 rounded">/{page.slug === 'home' ? '' : page.slug}</span>
                  <span className="text-[11px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded">{count} section{count !== 1 ? 's' : ''}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickActionCard
            href="/admin/media"
            label="Media / Gallery"
            description="Upload and manage images &amp; videos"
            iconPath="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            color="blue"
          />
          <QuickActionCard
            href="/admin/announcements"
            label="Announcements"
            description="Create and manage news posts"
            iconPath="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
            color="orange"
          />
          <QuickActionCard
            href="/admin/settings"
            label="Site Settings"
            description="Footer, links &amp; global config"
            iconPath="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            color="purple"
          />
        </div>
      </div>

      {/* System info footer */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">SDSC Content Management System</p>
              <p className="text-xs text-gray-400">St. Dominic Savio College &mdash; Ibaan, Batangas</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-400 font-medium">System Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Stat Card ── */
function StatCard({
  label,
  value,
  trend,
  iconPath,
  color,
}: {
  label: string;
  value: string | number;
  trend: string;
  iconPath: string;
  color: 'emerald' | 'blue' | 'amber' | 'violet' | 'orange';
}) {
  const palette: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', icon: 'text-emerald-600', badge: 'text-emerald-600 bg-emerald-50' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-100', icon: 'text-blue-600', badge: 'text-blue-600 bg-blue-50' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-100', icon: 'text-amber-600', badge: 'text-amber-600 bg-amber-50' },
    violet: { bg: 'bg-violet-50', border: 'border-violet-100', icon: 'text-violet-600', badge: 'text-violet-600 bg-violet-50' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-100', icon: 'text-orange-600', badge: 'text-orange-600 bg-orange-50' },
  };
  const p = palette[color];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 hover:shadow-md hover:shadow-gray-100/50 transition-shadow duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-10 h-10 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center`}>
          <svg className={`w-5 h-5 ${p.icon}`} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
          </svg>
        </div>
      </div>
      <p className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">{value}</p>
      <div className="flex items-center justify-between mt-1">
        <p className="text-xs text-gray-400 font-medium">{label}</p>
        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${p.badge}`}>{trend}</span>
      </div>
    </div>
  );
}

/* ── Quick Action Card ── */
function QuickActionCard({
  href,
  label,
  description,
  iconPath,
  color,
}: {
  href: string;
  label: string;
  description: string;
  iconPath: string;
  color: 'blue' | 'purple' | 'orange';
}) {
  const palette: Record<string, { bg: string; border: string; icon: string; hoverBg: string; hoverBorder: string; arrow: string }> = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-100', icon: 'text-blue-600', hoverBg: 'group-hover:bg-blue-100', hoverBorder: 'group-hover:border-blue-200', arrow: 'group-hover:text-blue-500' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-100', icon: 'text-purple-600', hoverBg: 'group-hover:bg-purple-100', hoverBorder: 'group-hover:border-purple-200', arrow: 'group-hover:text-purple-500' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-100', icon: 'text-orange-600', hoverBg: 'group-hover:bg-orange-100', hoverBorder: 'group-hover:border-orange-200', arrow: 'group-hover:text-orange-500' },
  };
  const p = palette[color];

  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:shadow-gray-100/80 hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className={`w-11 h-11 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center ${p.hoverBg} ${p.hoverBorder} transition-colors shrink-0`}>
          <svg className={`w-5 h-5 ${p.icon}`} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-gray-800 mb-0.5">{label}</h3>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
        <svg className={`w-4 h-4 text-gray-300 ${p.arrow} group-hover:translate-x-0.5 transition-all shrink-0`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}
