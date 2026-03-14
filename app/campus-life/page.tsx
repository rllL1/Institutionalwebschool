'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Foundation Day Celebration',
    date: 'February 14, 2026',
    category: 'Annual Event',
    description: 'A grand celebration of the founding of St. Dominic Savio College featuring cultural performances, thanksgiving Mass, and alumni reunions.',
    photo: '/images/rosary_home.jpg',
  },
  {
    title: 'Sportsfest',
    date: 'January 20-24, 2026',
    category: 'Sports',
    description: 'Inter-department sports competition showcasing basketball, volleyball, badminton, and track & field events for students of all levels.',
    photo: '/images/sportf_home.JPG',
  },
  {
    title: 'Recognition Day',
    date: 'March 15, 2026',
    category: 'Academic',
    description: 'Annual honors ceremony celebrating academic excellence, leadership, and outstanding contributions of students to the SDSC community.',
    photo: '/images/gball_home.jpg',
  },
  {
    title: 'Cultural Night',
    date: 'December 10, 2025',
    category: 'Culture',
    description: 'A night filled with music, dance, and literary arts showcasing the diverse talents and rich heritage of Batangueno students.',
    photo: '/images/mrmssdsc_home.jpg',
  },
  {
    title: 'Retreat & Recollection',
    date: 'October 5, 2025',
    category: 'Spiritual',
    description: 'A Salesian-inspired spiritual renewal program for students to deepen their faith, reflect on values, and strengthen their relationship with God.',
    photo: '/images/pres_home.jpg',
  },
  {
    title: 'Research Congress',
    date: 'November 22, 2025',
    category: 'Academic',
    description: 'Annual showcase of student and faculty research outputs promoting a culture of inquiry, innovation, and academic excellence.',
    photo: '/images/homepage2.jpg',
  },
];

const facilities = [
  {
    name: 'Library & Learning Resource Center',
    description: 'Stocked with thousands of books, journals, e-resources, and quiet study spaces designed to support academic research and independent learning.',
    photo: '/images/homapage3.png',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    name: 'Science & Computer Laboratories',
    description: 'Fully equipped laboratories for hands-on scientific experiments, IT training, nursing simulation, and engineering design projects.',
    photo: '/images/background.png',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    name: 'Sports Complex & Gym',
    description: 'Indoor and outdoor sports facilities including basketball courts, volleyball courts, badminton courts, and a fitness gym for active student life.',
    photo: '/images/sportf_home.JPG',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    name: 'Chapel',
    description: 'A serene chapel at the heart of the campus for daily Mass, prayer, and spiritual reflection in the Salesian tradition of holiness and joy.',
    photo: '/images/rosary_home.jpg',
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  {
    name: 'Cafeteria & Canteen',
    description: 'A clean and spacious dining area offering affordable, nutritious meals and snacks for students and faculty throughout the school day.',
    photo: '/images/gball_home.jpg',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    name: 'Student Health Center',
    description: 'A dedicated health clinic providing first aid, medical consultations, counseling services, and wellness programs for the SDSC community.',
    photo: '/images/pres_home.jpg',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

const categoryColors: Record<string, string> = {
  'Annual Event': 'bg-purple-100 text-purple-700',
  Sports: 'bg-orange-100 text-orange-700',
  Academic: 'bg-blue-100 text-blue-700',
  Culture: 'bg-pink-100 text-pink-700',
  Spiritual: 'bg-green-100 text-green-700',
};

export default function CampusLife() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero */}
      <section className="relative h-[520px] md:h-[560px] overflow-hidden">
        <Image
          src="/images/sportf_home.JPG"
          alt="Campus Life"
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
            St. Dominic Savio College - Ibaan
          </motion.p>
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Campus Life
          </motion.h1>
          <motion.p
            className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Experience a vibrant and faith-centered campus life through memorable events, world-class
            facilities, and a community rooted in Salesian joy.
          </motion.p>
        </div>
      </section>

      {/* Events */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">Events</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From spiritual gatherings to sporting competitions, SDSC life is filled with meaningful
            experiences that shape character and build community.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-green-500"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={fadeUp}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.photo}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[event.category] ?? 'bg-gray-100 text-gray-700'}`}>
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-green-600 font-semibold mb-1">{event.date}</p>
                <h3 className="text-base font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">Campus Facilities</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our modern campus is designed to support learning, wellness, and community life with
            facilities built for student success.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-green-500"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.name}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={fadeUp}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={facility.photo}
                  alt={facility.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={facility.icon} />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800">{facility.name}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}