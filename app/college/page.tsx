'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

export default function College() {
  const overviewSlides = [
    {
      src: '/images/homepage2.jpg',
      alt: 'College Overview 1',
      title: 'College Overview',
      subtitle: 'A closer look at the spaces, culture, and learning environment that define the Savian experience.',
      position: 'center center',
    },
    {
      src: '/images/homapage3.png',
      alt: 'College Overview 2',
      title: 'Academic and Campus Life',
      subtitle: 'Programs and community experiences designed to help students grow with purpose and confidence.',
      position: 'center top',
    },
    {
      src: '/images/background.png',
      alt: 'College Overview 3',
      title: 'Our Graduates, Our Difference',
      subtitle: 'Since 1993, SDSC has formed competent, values-driven graduates ready to lead and serve.',
      position: 'center center',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % overviewSlides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [overviewSlides.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative w-full overflow-hidden" style={{ height: '600px' }}>
        {overviewSlides.map((slide, index) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: index === currentSlide ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: slide.position }}
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

            <div className="absolute inset-0 flex items-center px-8 md:px-20 lg:px-24">
              <div className="max-w-3xl text-white">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
                  St. Dominic Savio College
                </p>
                <h1 className="mb-6 text-4xl font-bold leading-tight drop-shadow-lg md:text-6xl">
                  {slide.title}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
          {overviewSlides.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="h-3 w-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: index === currentSlide ? '#2a9d5f' : 'rgba(255,255,255,0.6)',
                transform: index === currentSlide ? 'scale(1.25)' : 'scale(1)',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + overviewSlides.length) % overviewSlides.length)}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white transition-all hover:bg-black/70"
        >
          ‹
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % overviewSlides.length)}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white transition-all hover:bg-black/70"
        >
          ›
        </button>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-6"></div>
      {/* ── President&rsquo;s Message ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Message of the President
            </h2>
            <div className="w-12 h-0.5 bg-green-600 mt-2 rounded-full" />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              className="md:w-80 shrink-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/doc.jpg"
                  alt="President"
                  width={384}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex-1 space-y-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-green-50/60 rounded-2xl p-6 md:p-8 border border-green-100">
                <p className="text-gray-700 text-[15px] leading-relaxed mb-4 text-justify">
                  In celebration of the 33rd Foundation Anniversary of St. Dominic Savio College, we honor a remarkable journey marked by excellence, dedication, and unwavering commitment to quality education. Guided by the inspiring leadership of Dr. Nestor V. Dela Cruz, this year&apos;s theme, &ldquo;SDSC 33 Years of Excellence: Past, Present and Future,&rdquo; reminds us to reflect on our proud heritage while boldly embracing the opportunities ahead.
                </p>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-4 text-justify">
                  For more than three decades, SDSC has remained steadfast in its mission of the Total Development of a Person &mdash; forming individuals who are not only academically competent but also morally grounded and spiritually enriched. True to the guiding principle, &ldquo;Our Graduates, Our Difference,&rdquo; the institution continues to shape Savian scholars who embody excellence in all aspects of life.
                </p>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-4 text-justify">
                  At the heart of this mission are the Savian Core Values: passion, compassion, integrity, and excellence. As SDSC moves forward into a &ldquo;Bagong Savio&rdquo; era, we renew our commitment to resilience, innovation, and forward-thinking leadership.
                </p>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-4 text-justify">
                  This celebration underscores the unity of the Savian community. The coming together of the Main Campus and Ibaan Branch as one Savian family reflects the spirit of collaboration and shared purpose that has sustained SDSC through the years.
                </p>
                <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                  With gratitude for the past, confidence in the present, and hope for the future, we proudly celebrate 33 Years of Excellence &mdash; and many more to come.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── History ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our History</h2>
            <div className="w-12 h-0.5 bg-green-600 mt-2 rounded-full" />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              className="md:w-96 shrink-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-md h-72">
                <Image
                  src="/images/background.png"
                  alt="College History"
                  width={384}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex-1 space-y-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                It started out as a dream. Through the great efforts of Dr. Nestor V. dela Cruz and his wife Mrs. Myra R. dela Cruz, in February 1993, St. Dominic Savio College was born &mdash; first known as St. Dominic Savio School, catering only to grade school and high school levels.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                Armed with its vision&ndash;mission of Total Development of a Person, SDSC opened its doors to students from all walks of life. Housed in a modest two-storey residential house, SDSC welcomed twenty-three students in the pre-school and grade school programs.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                The enrollment doubled in its second year, the High School Department opened, and the Pre-School and Elementary Department were given recognition by DECS. A five-storey building was constructed to accommodate the growing enrollees.
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                On June 1995, St. Dominic Savio School was renamed to St. Dominic Savio College &mdash; signifying its strong commitment to making quality education accessible to all and its entry into higher education. Today, SDSC continues its noble mission of producing students who embody its vision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Vision &amp; Mission</h2>
            <div className="w-12 h-0.5 bg-green-600 mt-3 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-green-50/70 rounded-2xl p-8 border border-green-100"
              custom={0}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-green-700 mb-4">Vision</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                As a College, SDSC seeks to uphold and communicate truth by instilling it in the Savian scholar in all his scholarly, personal, and professional pursuits. As a Filipino College, SDSC seeks to protect, preserve and promote Filipino culture. Through his healthy understanding of national identity, the Savian scholar will be the nation&apos;s spokesperson to the global community.
              </p>
            </motion.div>
            <motion.div
              className="bg-emerald-50/70 rounded-2xl p-8 border border-emerald-100"
              custom={1}
              variants={fade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-green-700 mb-4">Mission</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                The Founder envisions SDSC as one of the country&apos;s premier institutions of higher learning in the holistic development of globally-competitive and conscientious leaders and professionals through definitive excellence in education that meets national demands and global standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── General Goals ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">General Goals</h2>
            <div className="w-12 h-0.5 bg-green-600 mt-3 mx-auto rounded-full" />
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-4">
              Within the framework of our vision, the school pursues a mission translated into attainable goals rooted in the teachings of St. Dominic Savio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Total Human Persons', desc: 'Produce Total Human Persons with knowledge and understanding of dynamic Christian Living \u2014 encouraging honesty, responsibility, and chivalry.' },
              { title: 'Fine Tastes & Values', desc: 'Develop students with fine tastes and manners, strengthening their commitment to preserving Filipino tradition and values.' },
              { title: 'Academic Excellence', desc: 'Excel in developing academic competence, recognizing and appreciating the values of arts and science for individual progress.' },
              { title: 'Higher Learning', desc: 'Manifest preparedness for higher-level learning through a balanced instructional program for mastery of fundamental knowledge and skills.' },
              { title: 'Global Competitiveness', desc: 'Develop leadership potentials among individuals who are vocationally and academically efficient, contributing to nation building.' },
            ].map((goal, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                custom={idx}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-green-700 font-bold text-sm">{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{goal.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Educational Philosophy ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Educational Philosophy</h2>
            <div className="w-12 h-0.5 bg-green-600 mt-3 mx-auto rounded-full" />
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mt-4">
              Exemplified in the motto of St. Dominic Savio &mdash; <span className="font-semibold text-gray-700">Caritas, Ductus, and Servitum</span>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { latin: 'Caritas', english: 'Love', color: 'bg-rose-50 border-rose-100', badge: 'bg-rose-100 text-rose-700', desc: 'Love is the greatest Christian virtue and the foundation of faith. The institution believes that education without values is mere learning \u2014 knowledge and skills must be imbued with values formation.' },
              { latin: 'Ductus', english: 'Leadership', color: 'bg-sky-50 border-sky-100', badge: 'bg-sky-100 text-sky-700', desc: 'St. Dominic Savio is the shining example of the youth. His leadership capabilities, full of zeal and fidelity to duty, are the ingredients of total human development.' },
              { latin: 'Servitum', english: 'Service', color: 'bg-amber-50 border-amber-100', badge: 'bg-amber-100 text-amber-700', desc: 'The unselfish dedication in the service of mankind is the hallmark of the educational philosophy to be instilled in the minds of every student.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={item.color + " rounded-2xl p-7 border hover:shadow-md transition-all duration-300"}
                custom={idx}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className={item.badge + " inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"}>
                  {item.english}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.latin}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Core Values</h2>
            <div className="w-12 h-0.5 bg-green-600 mt-3 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 'Compassion', desc: 'A commitment to empathy, kindness, and understanding towards all members of our community.', color: 'bg-teal-50 border-teal-200' },
              { value: 'Excellence', desc: 'The pursuit of the highest standards in all academic and personal endeavors.', color: 'bg-indigo-50 border-indigo-200' },
              { value: 'Integrity', desc: 'Unwavering commitment to honesty, ethical conduct, and moral principles.', color: 'bg-purple-50 border-purple-200' },
              { value: 'Passion', desc: 'A fervent dedication to learning, growth, and making a positive impact on the world.', color: 'bg-orange-50 border-orange-200' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={item.color + " rounded-2xl border p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"}
                custom={idx}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.value}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Symbols ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">SDSC Symbols</h2>
            <div className="w-12 h-0.5 bg-green-600 mt-3 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { symbol: 'Love', desc: 'Caritas \u2014 the greatest Christian virtue and the foundation of faith, shown through deeds and the purity of intention.', image: 'love_c.png' },
              { symbol: 'Leadership', desc: 'Ductus \u2014 St. Dominic Savio exemplifies leadership full of zeal and fidelity to duty, essential for total human development.', image: 'leadership_c.png' },
              { symbol: 'Service', desc: 'Servitum \u2014 unselfish dedication to serving mankind and making a positive impact in our community.', image: 'service_c.png' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                custom={idx}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-gray-50 overflow-hidden">
                  <Image
                    src={"/images/" + item.image}
                    alt={item.symbol}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.symbol}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hymn ── */}
      <section className="py-20 bg-green-50/60">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">SDSC Hymn</h2>
            <div className="w-12 h-0.5 bg-green-600 mt-2 mb-8 mx-auto rounded-full" />
            <p className="text-gray-500 text-base leading-relaxed italic">
              Our hymn represents the spirit, values, and aspirations of St. Dominic Savio College.
              It is sung at important school events and gatherings, uniting our community in shared pride and purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Prayer ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Prayer to St. Dominic Savio</h2>
            </div>
            <div className="px-6 pb-8 border-t border-green-100">
              <div className="pt-6 text-center space-y-6 text-base text-gray-700 leading-relaxed italic">
                <div className="space-y-1">
                  <p>ST. DOMINIC SAVIO who learned from the school of St. John Bosco,</p>
                  <p>who grew in holiness, help us to follow you,</p>
                  <p>in your love for Jesus and Mother Mary</p>
                  <p>in your diligence and in fulfilling your duties.</p>
                </div>
                <div className="space-y-1">
                  <p>Help us that we too,</p>
                  <p>by resolving to die rather than offending God.</p>
                  <p>May come at last to eternal joys of heaven.</p>
                </div>
                <div className="space-y-1 font-semibold not-italic text-green-700">
                  <p>Amen.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
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
            <p className="text-gray-400 mb-2">info@sdsc.edu</p>
            <p className="text-gray-400 mb-2">+1 (555) 123-4567</p>
            <p className="text-gray-400">Mon-Fri: 9AM-5PM</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 St. Dominic Savio College. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
