'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* ─── Arrow Icon ─── */
const ArrowRight = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* ─── Data ─── */
const collegeDepartments = [
  {
    title: 'College of Nursing / Health Sciences',
    courses: ['BS in Nursing', 'BS in Psychology'],
  },
  {
    title: 'College of Arts, Science, and Education',
    courses: ['Bachelor of Secondary Education', 'Bachelor of Elementary Education', 'BA in English'],
  },
  {
    title: 'College of Engineering & Computer Studies',
    courses: ['BS in Information Technology', 'BS in Computer Science', 'BS in Information Systems', '2-yr IT', '2-yr ACT'],
  },
  {
    title: 'College of Business Administration & Accountancy',
    courses: ['BS in Business Administration', 'BS in Accountancy', 'BS in Management Accounting'],
  },
  {
    title: 'School of Law',
    courses: ['Juris Doctor (JD)'],
  },
];

const basicEdPrograms = [
  {
    title: 'Senior High School',
    courses: ['STEM', 'ABM', 'HUMSS'],
  },
  {
    title: 'Junior High School',
    courses: ['Grades 7 – 10 Core Curriculum'],
  },
  {
    title: 'Grade School',
    courses: ['Grades 1 – 6 Foundational Program'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

/* ─── Page ─── */
export default function Academics() {
  return (
    <div className="min-h-screen bg-white">

      {/* ━━━ Hero ━━━ */}
      <section className="relative h-[520px] md:h-[560px] overflow-hidden">
        <Image
          src="/images/background.png"
          alt="SDSC Campus"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 via-black/55 to-black/75" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p
            className="text-green-300 text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            St. Dominic Savio College — Ibaan
          </motion.p>
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Academics
          </motion.h1>
          <motion.p
            className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Discover our comprehensive academic programs designed to nurture excellence,
            critical thinking, and holistic development at every level.
          </motion.p>
        </div>
      </section>

      {/* ━━━ Two Pathways ━━━ */}
      <section className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Education */}
          <Link href="/academics/basic-education">
            <motion.div
              className="relative group rounded-2xl overflow-hidden h-72 cursor-pointer shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/homepage2.jpg"
                alt="Basic Education"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="text-green-400 text-[11px] font-semibold tracking-[0.2em] uppercase">K-12 Programs</span>
                <h3 className="text-white text-2xl font-bold mt-1 mb-1">Basic Education</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-xs">
                  Grade School through Senior High School — foundational learning rooted in Savian values.
                </p>
                <span className="inline-flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          </Link>

          {/* College Programs */}
          <Link href="/academics/college-programs">
            <motion.div
              className="relative group rounded-2xl overflow-hidden h-72 cursor-pointer shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <Image
                src="/images/homapage3.png"
                alt="College Programs"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="text-green-400 text-[11px] font-semibold tracking-[0.2em] uppercase">Higher Education</span>
                <h3 className="text-white text-2xl font-bold mt-1 mb-1">College Programs</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-xs">
                  Undergraduate and professional degree programs across five academic departments.
                </p>
                <span className="inline-flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* ━━━ College Programs Directory ━━━ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">College Programs</h2>
              <div className="w-12 h-0.5 bg-green-600 mt-2 mb-3 rounded-full" />
              <p className="text-gray-500 text-sm md:text-base max-w-lg">
                Five departments offering career-focused undergraduate and professional degrees.
              </p>
            </div>
            <Link
              href="/academics/college-programs"
              className="inline-flex items-center gap-2 text-green-700 text-sm font-semibold hover:gap-3 transition-all shrink-0"
            >
              View all programs <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collegeDepartments.map((dept, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-green-500"
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">{dept.title}</h3>
                <ul className="space-y-2">
                  {dept.courses.map((course, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Basic Education Directory ━━━ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Basic Education</h2>
              <div className="w-12 h-0.5 bg-green-600 mt-2 mb-3 rounded-full" />
              <p className="text-gray-500 text-sm md:text-base max-w-lg">
                Quality K-12 programs building strong foundations rooted in Savian values.
              </p>
            </div>
            <Link
              href="/academics/basic-education"
              className="inline-flex items-center gap-2 text-green-700 text-sm font-semibold hover:gap-3 transition-all shrink-0"
            >
              View all programs <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {basicEdPrograms.map((prog, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-green-500"
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">{prog.title}</h3>
                <ul className="space-y-2">
                  {prog.courses.map((course, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer className="bg-gray-900 text-white py-14 px-4 border-t-4 border-green-600">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">About Us</h3>
            <p className="text-gray-400">St. Dominic Savio College is committed to providing quality education and holistic development of students since 2001.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/academics" className="hover:text-white transition">Academics</a></li>
              <li><a href="/admission" className="hover:text-white transition">Admission</a></li>
              <li><a href="/events" className="hover:text-white transition">Events</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Follow Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Contact Info</h3>
            <p className="text-gray-400 mb-2">📧 info@sdsc.edu</p>
            <p className="text-gray-400 mb-2">📞 +1 (555) 123-4567</p>
            <p className="text-gray-400">🕐 Mon-Fri: 9AM-5PM</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 St. Dominic Savio College. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
