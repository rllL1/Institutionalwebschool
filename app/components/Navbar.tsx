'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

const collegeLinks = [
  { name: 'Message of the President', href: '/college#president' },
  { name: 'SDSC History', href: '/college#history' },
  { name: 'Vision & Mission', href: '/college#vision-mission' },
  { name: 'General Goals', href: '/college#general-goals' },
  { name: 'Educational Philosophy', href: '/college#educational-philosophy' },
  { name: 'Core Values & Symbols', href: '/college#core-values' },
  { name: 'SDSC Hymn & Prayer', href: '/college#hymn' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setCollegeOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setCollegeOpen(false), 150);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Academics', href: '/academics' },
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'The College', href: '/college' },
    { name: 'Academics', href: '/academics', hasDropdown: true },
    { name: 'Administration', href: '/administration' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const academicsSubItems = [
    { name: 'Overview', href: '/academics' },
    { name: 'Basic Education', href: '/academics/basic-education' },
    { name: 'College Programs', href: '/academics/college-programs' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAcademicsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg" style={{ borderBottom: '4px solid #2a9d5f' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center py-3 gap-6">
          {/* Logo and Title Section */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/sdsclogo1.png"
              alt="SDSC Logo"
              width={50}
              height={50}
              className="rounded-md object-contain flex-shrink-0"
              style={{ background: 'transparent' }}
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-base font-bold leading-tight" style={{ color: '#2a9d5f' }}>
                St. Dominic Savio College - Ibaan
              </h1>
              <h2 className="text-xs text-gray-600 italic leading-tight">Our Graduates, Our Difference</h2>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-10 bg-gray-300 flex-shrink-0"></div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 flex-1">
            <Link href="/" className="px-3 py-2 rounded-md transition-colors duration-200 text-gray-700 hover:bg-green-50 text-sm font-medium hover:text-green-700 whitespace-nowrap">
              Home
            </Link>

            {/* The College dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <Link
                href="/college"
                className="flex items-center gap-1 px-3 py-2 rounded-md transition-colors duration-200 text-gray-700 hover:bg-green-50 text-sm font-medium hover:text-green-700 whitespace-nowrap"
              >
                The College
                <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {collegeOpen && (
                <div
                  className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {collegeLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                      onClick={() => setCollegeOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md transition-colors duration-200 text-gray-700 hover:bg-green-50 text-sm font-medium hover:text-green-700 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.href} className="relative" ref={dropdownRef}>
                  <button
                    className="px-3 py-2 rounded-md transition-colors duration-200 text-gray-700 hover:bg-green-50 text-sm font-medium hover:text-green-700 whitespace-nowrap inline-flex items-center gap-1"
                    onClick={() => setAcademicsOpen(!academicsOpen)}
                    onMouseEnter={() => setAcademicsOpen(true)}
                  >
                    {item.name}
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${academicsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {academicsOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                      onMouseEnter={() => setAcademicsOpen(true)}
                      onMouseLeave={() => setAcademicsOpen(false)}
                    >
                      {academicsSubItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                          onClick={() => setAcademicsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-md transition-colors duration-200 text-gray-700 hover:bg-green-50 text-sm font-medium hover:text-green-700 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors"
              style={{ color: '#2a9d5f' }}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t bg-gray-50" style={{ borderTopColor: '#2a9d5f' }}>
            <Link href="/" className="block px-4 py-3 rounded transition-colors text-sm font-medium hover:bg-green-100" style={{ color: '#2a9d5f' }} onClick={() => setIsOpen(false)}>
              Home
            </Link>
            {/* The College + sub-items */}
            <div>
              <button
                className="w-full text-left flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-green-100"
                style={{ color: '#2a9d5f' }}
                onClick={() => setCollegeOpen(!collegeOpen)}
              >
                The College
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={collegeOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'} />
                </svg>
              </button>
              {collegeOpen && (
                <div className="bg-white border-l-2 ml-4" style={{ borderColor: '#2a9d5f' }}>
                  {collegeLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 transition-colors"
                      onClick={() => { setIsOpen(false); setCollegeOpen(false); }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navItems.slice(1).map((item) => (
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
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.href}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-green-100 transition-colors"
                    style={{ color: '#2a9d5f' }}
                    onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
                  >
                    {item.name}
                    <svg className={`w-4 h-4 transition-transform duration-200 ${mobileAcademicsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileAcademicsOpen && (
                    <div className="bg-green-50/50 border-l-4 border-green-500 ml-4">
                      {academicsSubItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-6 py-2.5 text-sm font-medium text-green-700 hover:bg-green-100 transition-colors"
                          onClick={() => { setIsOpen(false); setMobileAcademicsOpen(false); }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded transition-colors text-sm font-medium hover:bg-green-100"
                  style={{ color: '#2a9d5f' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
