'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useState, useEffect } from 'react';

interface PageItem {
  id: string;
  slug: string;
  title: string;
}

/* ─── Menu structure ─── */
interface MenuItem {
  label: string;
  href: string;
  icon: string;
  slug?: string;
}

interface MenuGroup {
  title: string;
  collapsible?: boolean;
  items: MenuItem[];
}

const staticMenuGroups: MenuGroup[] = [
  {
    title: 'Overview',
    items: [
      {
        label: 'Dashboard',
        href: '/admin',
        icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-6 0h6',
      },
    ],
  },
  {
    title: 'Page Management',
    collapsible: true,
    items: [
      {
        label: 'Home Page',
        href: '/admin/pages/home',
        slug: 'home',
        icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1',
      },
      {
        label: 'The College',
        href: '/admin/pages/college',
        slug: 'college',
        icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0121 12.75c0 3-3 5.25-9 5.25s-9-2.25-9-5.25c0-.59.16-1.18.84-2.172L12 14z',
      },
      {
        label: 'Academics',
        href: '/admin/pages/academics',
        slug: 'academics',
        icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      },
      {
        label: 'Administration',
        href: '/admin/pages/administration',
        slug: 'administration',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
      },
      {
        label: 'Campus Life',
        href: '/admin/pages/campus-life',
        slug: 'campus-life',
        icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      },
      {
        label: 'Contact Us',
        href: '/admin/pages/contact',
        slug: 'contact',
        icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      },
    ],
  },
  {
    title: 'Content & Media',
    items: [
      {
        label: 'Media / Gallery',
        href: '/admin/media',
        icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
      },
      {
        label: 'Announcements',
        href: '/admin/announcements',
        icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
      },
    ],
  },
  {
    title: 'System',
    items: [
      {
        label: 'User Management',
        href: '/admin/users',
        icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      },
      {
        label: 'Settings',
        href: '/admin/settings',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      },
    ],
  },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function AdminSidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loggingOut, setLoggingOut] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from('pages')
      .select('id, slug, title')
      .order('title', { ascending: true })
      .then(({ data }) => {
        if (data) setPages(data);
      });
  }, []);

  async function handleLogout() {
    setLoggingOut(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  function toggleGroup(title: string) {
    setCollapsedGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  }

  const isActive = (href: string) => pathname === href;
  const isGroupActive = (group: MenuGroup) => group.items.some((item) => isActive(item.href));

  return (
    <>
      {/* Mobile overlay */}
      {!collapsed && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={onToggle} />
      )}

      <aside
        className={`fixed left-0 top-0 h-full bg-white flex flex-col z-50 border-r border-gray-200/60 shadow-sm transition-all duration-300 ease-in-out ${
          collapsed ? 'w-[68px]' : 'w-72'
        } ${collapsed ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'}`}
      >
        {/* Brand header */}
        <div className={`shrink-0 border-b border-gray-100 ${collapsed ? 'p-3' : 'p-5'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-md shadow-emerald-200/40 shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <h2 className="text-sm font-bold text-gray-800 tracking-tight leading-tight">SDSC Admin</h2>
                <p className="text-[10px] text-gray-400 font-medium leading-tight">Content Management</p>
              </div>
            )}
          </div>
        </div>

        {/* Scrollable nav */}
        <nav className={`flex-1 overflow-y-auto overflow-x-hidden py-3 ${collapsed ? 'px-2' : 'px-3'} space-y-5`}>
          {staticMenuGroups.map((group) => {
            const groupCollapsed = collapsedGroups[group.title] ?? false;
            const groupActive = isGroupActive(group);

            return (
              <div key={group.title}>
                {/* Group header */}
                {!collapsed && (
                  group.collapsible ? (
                    <button
                      onClick={() => toggleGroup(group.title)}
                      className="w-full flex items-center justify-between px-3 mb-1.5 group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400 group-hover:text-gray-500 transition-colors">
                        {group.title}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-50 rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
                          {group.items.length}
                        </span>
                        <svg
                          className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${groupCollapsed ? '-rotate-90' : ''}`}
                          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                  ) : (
                    <p className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400">
                      {group.title}
                    </p>
                  )
                )}

                {/* Collapsed group active indicator */}
                {group.collapsible && groupCollapsed && groupActive && !collapsed && (
                  <div className="px-3 mb-1">
                    <div className="h-0.5 rounded-full bg-emerald-300" />
                  </div>
                )}

                {/* Menu items */}
                {(!group.collapsible || !groupCollapsed) && (
                  <div className={collapsed ? 'space-y-1' : 'space-y-0.5'}>
                    {group.items.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          title={collapsed ? item.label : undefined}
                          className={`flex items-center gap-3 rounded-xl text-[13px] font-medium transition-all duration-200 ${
                            collapsed ? 'justify-center px-0 py-2.5' : 'px-3 py-2'
                          } ${
                            active
                              ? 'bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-100/80'
                              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50/80'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 ${
                            active ? 'bg-emerald-100/80' : 'bg-gray-100/60'
                          }`}>
                            <svg className={`w-4 h-4 transition-colors duration-200 ${active ? 'text-emerald-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                            </svg>
                          </div>
                          {!collapsed && (
                            <>
                              <span className="truncate">{item.label}</span>
                              {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />}
                            </>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}

                {/* Collapsed separator */}
                {collapsed && (
                  <div className="mx-2 my-2 h-px bg-gray-100" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className={`shrink-0 border-t border-gray-100 ${collapsed ? 'p-2' : 'p-3'}`}>
          <Link
            href="/"
            target="_blank"
            title={collapsed ? 'View Website' : undefined}
            className={`flex items-center gap-3 rounded-xl text-[13px] font-medium text-gray-400 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all duration-200 mb-1 ${
              collapsed ? 'justify-center px-0 py-2.5' : 'px-3 py-2'
            }`}
          >
            <div className="w-8 h-8 rounded-lg bg-gray-100/60 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            {!collapsed && <span>View Website</span>}
          </Link>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            title={collapsed ? 'Sign Out' : undefined}
            className={`flex items-center gap-3 w-full rounded-xl text-[13px] font-medium text-gray-400 hover:text-red-500 hover:bg-red-50/50 transition-all duration-200 disabled:opacity-50 ${
              collapsed ? 'justify-center px-0 py-2.5' : 'px-3 py-2'
            }`}
          >
            <div className="w-8 h-8 rounded-lg bg-gray-100/60 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </div>
            {!collapsed && <span>{loggingOut ? 'Signing out...' : 'Sign Out'}</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
