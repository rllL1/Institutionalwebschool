'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* ─── Arrow ─── */
const ArrowRight = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* ─── Data ─── */
const departments = [
  {
    title: 'College of Nursing / Health Sciences',
    accent: 'bg-rose-600',
    description: 'Recognized for Nursing, Psychology, and related health science programs.',
    courses: ['BS in Nursing', 'BS in Psychology'],
  },
  {
    title: 'College of Arts, Science, and Education',
    accent: 'bg-blue-600',
    description: 'Offers teacher education and liberal arts programs.',
    courses: ['Bachelor of Secondary Education', 'Bachelor of Elementary Education', 'BA in English'],
  },
  {
    title: 'College of Engineering & Computer Studies',
    accent: 'bg-emerald-600',
    description: 'Focuses on Information Technology and Computer Science.',
    courses: ['BS in Information Technology', 'BS in Computer Science', 'BS in Information Systems', '2-yr IT', '2-yr ACT'],
  },
  {
    title: 'College of Business Administration & Accountancy',
    accent: 'bg-amber-600',
    description: 'Covers ABM-related business and finance fields.',
    courses: ['BS in Business Administration', 'BS in Accountancy', 'BS in Management Accounting'],
  },
  {
    title: 'School of Law',
    accent: 'bg-purple-600',
    description: 'Provides professional legal education.',
    courses: ['Juris Doctor (JD)'],
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

export default function CollegePrograms() {
  return (
    <div className="min-h-screen bg-white">

      {/* ━━━ Hero ━━━ */}
      <section className="relative h-[420px] md:h-[460px] overflow-hidden">
        <Image
          src="/images/homapage3.png"
          alt="SDSC College Campus"
          fill
          className="object-cover object-top"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 via-black/55 to-black/75" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-4">
          <div className="max-w-6xl mx-auto w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
              <span>/</span>
              <span className="text-white font-medium">College Programs</span>
            </nav>
            <motion.p
              className="text-green-300 text-xs font-semibold tracking-[0.25em] uppercase mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Higher Education
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              College Programs
            </motion.h1>
            <motion.p
              className="text-gray-300 text-base md:text-lg max-w-xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Be life-ready with the necessary skills and knowledge to become an in-demand professional.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ━━━ Departments ━━━ */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Departments & Courses</h2>
          <div className="w-12 h-0.5 bg-green-600 mt-2 mb-3 rounded-full" />
          <p className="text-gray-500 text-sm md:text-base max-w-lg">
            Five academic departments offering diverse programs tailored to your career aspirations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((dept, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-green-500"
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{dept.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{dept.description}</p>

                <h4 className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase mb-3">
                  Courses Offered
                </h4>
                <ul className="space-y-2">
                  {dept.courses.map((course, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
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
