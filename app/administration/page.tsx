'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/* --- Leadership Data --- */
const leadership = [
  {
    tier: 1,
    members: [
      {
        name: 'Rev. Fr. Jose M. Santos, SDB',
        role: 'College President',
        description:
          'Provides overall leadership and vision for St. Dominic Savio College, guiding the institution in its mission of faith-based education and excellence.',
        photo: '/images/doc.jpg',
      },
    ],
  },
  {
    tier: 2,
    members: [
      {
        name: 'Dr. Maria Luisa R. Cruz',
        role: 'Vice President for Academics',
        description:
          'Oversees academic programs, curriculum development, faculty performance, and ensures instructional quality across all colleges.',
        photo: '/images/pres_home.jpg',
      },
      {
        name: 'Mr. Eduardo P. Reyes, CPA',
        role: 'Vice President for Finance & Administration',
        description:
          'Manages institutional finances, budgeting, auditing, facilities maintenance, and administrative operations.',
        photo: '/images/mrmssdsc_home.jpg',
      },
    ],
  },
  {
    tier: 3,
    members: [
      {
        name: 'Atty. Ramon G. Dela Cruz',
        role: 'Legal Counsel',
        description:
          'Provides legal advice on institutional matters, contracts, compliance, and governance.',
        photo: '/images/doc_speech.jpg',
      },
      {
        name: 'Ms. Corazon J. Mendoza',
        role: 'Registrar',
        description:
          'Handles student admissions, records management, examinations scheduling, and official institutional documentation.',
        photo: '/images/homepage2.jpg',
      },
      {
        name: 'Mr. Bonifacio L. Santos',
        role: 'Head of Student Affairs',
        description:
          'Champions student welfare, discipline, guidance programs, and co-curricular activities.',
        photo: '/images/gball_home.jpg',
      },
    ],
  },
];

/* --- Departments Data --- */
const departments = [
  {
    department: 'College of Nursing & Health Sciences',
    coordinator: 'Dr. Ana Theresa V. Bautista, RN',
    description:
      'Develops compassionate and competent healthcare professionals through rigorous clinical training and evidence-based practice.',
    photo: '/images/rosary_home.jpg',
  },
  {
    department: 'College of Arts, Science & Education',
    coordinator: 'Dr. Leonora M. Reyes, Ph.D.',
    description:
      'Fosters critical thinking and lifelong learning through quality liberal arts and teacher education programs.',
    photo: '/images/homapage3.png',
  },
  {
    department: 'College of Engineering & Computer Studies',
    coordinator: 'Engr. Patrick D. Villanueva',
    description:
      'Equips students with technical expertise in information technology, computer science, and engineering disciplines.',
    photo: '/images/background.png',
  },
  {
    department: 'College of Business Administration & Accountancy',
    coordinator: 'Prof. Gloria S. Peralta, CPA',
    description:
      'Prepares future business leaders and accountants with strong ethical foundations and professional competencies.',
    photo: '/images/sportf_home.JPG',
  },
  {
    department: 'Basic Education Department',
    coordinator: 'Ms. Divina G. Ramos',
    description:
      'Provides a holistic foundational education for Grade School, Junior High School, and Senior High School learners.',
    photo: '/images/pres_home.jpg',
  },
  {
    department: 'School of Law',
    coordinator: 'Atty. Rolando C. Fuentes',
    description:
      'Cultivates legal professionals grounded in justice, ethics, and a deep understanding of Philippine law.',
    photo: '/images/mrmssdsc_home.jpg',
  },
];

/* --- Animations --- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

/* --- Connector Line --- */
function TierConnector() {
  return (
    <div className="flex justify-center my-0">
      <div className="w-px h-8 bg-green-400"></div>
    </div>
  );
}

/* --- Page --- */
export default function Administration() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* ??? Hero ??? */}
      <section className="relative h-[520px] md:h-[560px] overflow-hidden">
        <Image
          src="/images/doc_speech.jpg"
          alt="Administration"
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
            St. Dominic Savio College  Ibaan
          </motion.p>
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Administration
          </motion.h1>
          <motion.p
            className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Meet the dedicated leaders and coordinators who guide our institution toward excellence,
            integrity, and service.
          </motion.p>
        </div>
      </section>

      {/* ??? Leadership Hierarchy ??? */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
            Organizational Structure
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our leadership team is committed to fostering an environment of academic excellence and
            Salesian values.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-green-500"></div>
        </motion.div>

        {leadership.map((tier, tierIdx) => (
          <div key={tierIdx}>
            {/* Connector between tiers */}
            {tierIdx > 0 && <TierConnector />}

            {/* Horizontal branch line for multi-member tiers */}
            {tier.members.length > 1 && (
              <div className="flex justify-center mb-0">
                <div
                  className="h-px bg-green-400"
                  style={{
                    width: tier.members.length === 2 ? '40%' : '70%',
                  }}
                ></div>
              </div>
            )}

            {/* Members row */}
            <div
              className={`flex flex-wrap justify-center gap-6 ${
                tier.members.length > 1 ? 'mt-0' : ''
              }`}
            >
              {tier.members.map((member, i) => (
                <motion.div
                  key={member.name}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col items-center text-center w-72 hover:shadow-xl transition-shadow duration-300"
                  custom={tierIdx * 3 + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={fadeUp}
                >
                  {/* Photo */}
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Role badge */}
                  <div className="-mt-4 z-10 bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md tracking-wide">
                    {member.role}
                  </div>

                  <div className="px-5 pt-4 pb-6">
                    <h3 className="text-base font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ??? Departments & Coordinators ??? */}
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
            Departments & Coordinators
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Each department is led by experienced coordinators dedicated to academic quality and
            student success.
          </p>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-green-500"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.department}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={fadeUp}
            >
              {/* Album photo */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={dept.photo}
                  alt={dept.department}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-white text-xs font-semibold bg-green-600/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {dept.department}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{dept.description}</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 uppercase tracking-wide font-medium">Coordinator</p>
                    <p className="text-sm font-semibold text-gray-700">{dept.coordinator}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
