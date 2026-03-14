'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import AdminSidebar from './AdminSidebar';

const pageTitles: Record<string, string> = {
  '/admin': 'Dashboard',
  '/admin/media': 'Media Library',
  '/admin/settings': 'Site Settings',
  '/admin/announcements': 'Announcements',
  '/admin/users': 'User Management',
};

function getBreadcrumbs(pathname: string) {
  const crumbs: { label: string; href?: string }[] = [{ label: 'Admin', href: '/admin' }];

  if (pathname === '/admin') return crumbs;

  if (pageTitles[pathname]) {
    crumbs.push({ label: pageTitles[pathname] });
  } else if (pathname.startsWith('/admin/pages/')) {
    const slug = pathname.replace('/admin/pages/', '');
    crumbs.push({ label: 'Pages', href: '/admin' });
    crumbs.push({ label: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ') });
  }

  return crumbs;
}

function getPageTitle(pathname: string): string {
  if (pageTitles[pathname]) return pageTitles[pathname];
  if (pathname.startsWith('/admin/pages/')) {
    const slug = pathname.replace('/admin/pages/', '');
    return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
  }
  return 'Admin';
}

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (isLoginPage) {
    return <>{children}</>;
  }

  const breadcrumbs = getBreadcrumbs(pathname);
  const pageTitle = getPageTitle(pathname);

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <AdminSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
        sidebarCollapsed ? 'ml-0 lg:ml-[68px]' : 'ml-0 lg:ml-72'
      }`}>
        {/* Top header bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-100/80">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
            <div className="flex items-center gap-3">
              {/* Sidebar toggle */}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  {sidebarCollapsed ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h16" />
                  )}
                </svg>
              </button>

              <div className="h-6 w-px bg-gray-200 hidden sm:block" />

              <div className="hidden sm:block">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-1.5 text-xs mb-0.5">
                  {breadcrumbs.map((crumb, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      {i > 0 && (
                        <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                      {crumb.href && i < breadcrumbs.length - 1 ? (
                        <a href={crumb.href} className="text-gray-400 hover:text-emerald-600 transition-colors font-medium">
                          {crumb.label}
                        </a>
                      ) : (
                        <span className="text-gray-500 font-medium">{crumb.label}</span>
                      )}
                    </span>
                  ))}
                </nav>
                {/* Page title */}
                <h1 className="text-lg font-bold text-gray-800 tracking-tight leading-tight">{pageTitle}</h1>
              </div>

              {/* Mobile title */}
              <h1 className="text-base font-bold text-gray-800 sm:hidden">{pageTitle}</h1>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Quick search placeholder */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100 text-gray-400 text-sm cursor-pointer hover:border-gray-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-xs">Search...</span>
                <kbd className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-gray-200 text-gray-400 ml-4">Ctrl K</kbd>
              </div>

              <div className="h-6 w-px bg-gray-200" />

              {/* Profile */}
              <div className="flex items-center gap-2.5 pl-1">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-sm shadow-emerald-200/40">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-semibold text-gray-700 leading-tight">Admin</p>
                  <p className="text-[10px] text-gray-400 leading-tight">SDSC CMS</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
