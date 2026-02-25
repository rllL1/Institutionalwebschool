'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'The College', href: '/college' },
    { name: 'Academics', href: '/academics' },
    { name: 'Administration', href: '/administration' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg" style={{ borderBottom: '4px solid #2a9d5f' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center py-3 gap-6">
          {/* Logo and Title Section */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Logo */}
            <Image
              src="/images/sdsclogo1.png"
              alt="SDSC Logo"
              width={50}
              height={50}
              className="rounded-md object-contain flex-shrink-0"
              style={{ background: 'transparent' }}
            />
            
            {/* Title Section */}
            <div className="flex flex-col justify-center">
              <h1 
                className="text-base font-bold leading-tight" 
                style={{ color: '#2a9d5f' }}
              >
                St. Dominic Savio College - Ibaan
              </h1>
              <h2 className="text-xs text-gray-600 italic leading-tight">
                Our Graduates, Our Difference
              </h2>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-10 bg-gray-300 flex-shrink-0"></div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md transition-colors duration-200 text-gray-700 hover:bg-green-50 text-sm font-medium hover:text-green-700 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors"
              style={{ color: '#2a9d5f' }}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t bg-gray-50" style={{ borderTopColor: '#2a9d5f' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded transition-colors text-sm font-medium hover:bg-green-100"
                style={{ color: '#2a9d5f' }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
