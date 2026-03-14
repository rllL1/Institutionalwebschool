'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();

  if (pathname === '/admin' || pathname.startsWith('/admin/')) return null;

  return (
    <>
      <Navbar />
      <div className="h-24" />
    </>
  );
}
