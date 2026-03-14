'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">

        {/* ── President's Message ── */}
        <motion.div
          id="president"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden scroll-mt-20"
        >
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Message of the President</h2>
          </div>
          <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6 md:flex md:gap-6">
                    <div className="md:w-64 flex-shrink-0 mb-4 md:mb-0">
                      <div className="relative rounded-xl overflow-hidden shadow-xl h-80">
                        <Image src="/images/doc.jpg" alt="President" width={256} height={320} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4 text-base text-gray-700 leading-relaxed text-justify">
                      <p>In celebration of the 33rd Foundation Anniversary of St. Dominic Savio College, we honor a remarkable journey marked by excellence, dedication, and unwavering commitment to quality education. Guided by the inspiring leadership of Dr. Nestor V. Dela Cruz, this year&apos;s theme, <em>&quot;SDSC 33 Years of Excellence: Past, Present and Future,&quot;</em> reminds us to reflect on our proud heritage while boldly embracing the opportunities ahead.</p>
                      <p>For more than three decades, SDSC has remained steadfast in its mission of the Total Development of a Person—forming individuals who are not only academically competent but also morally grounded and spiritually enriched. True to the guiding principle, <em>&quot;Our Graduates, Our Difference,&quot;</em> the institution continues to shape Savian scholars who embody excellence in all aspects of life.</p>
                      <p>At the heart of this mission are the Savian Core Values: passion, compassion, integrity, and excellence. As SDSC moves forward into a <em>&quot;Bagong Savio&quot;</em> era, we renew our commitment to resilience, innovation, and forward-thinking leadership.</p>
                      <p>The coming together of the Main Campus and Ibaan Branch as one Savian family reflects the spirit of collaboration and shared purpose that has sustained SDSC through the years. With gratitude for the past, confidence in the present, and hope for the future, we proudly celebrate 33 Years of Excellence—and many more to come.</p>
                    </div>
                  </div>
                </div>
        </motion.div>

        {/* ── SDSC History ── */}
        <motion.div
          id="history"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden scroll-mt-20"
        >
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">SDSC History</h2>
          </div>
          <div className="px-6 pb-6 border-t border-gray-100">
            <div className="pt-6 md:flex md:gap-6">
              <div className="flex-1 space-y-4 text-base text-gray-700 leading-relaxed text-justify">
                <p>It started out as a dream. Through the great efforts of Dr. Nestor V. dela Cruz and his wife Mrs. Myra R. dela Cruz, St. Dominic Savio College was born in February 1993. At that time it was known as St. Dominic Savio School, catering to grade school and high school levels. Housed in a modest two-storey residential house, SDSC welcomed twenty-three (23) students at the start of its operations.</p>
                <p>In its second year, the High School Department opened, enrollment doubled, and the Pre-School and Elementary Department received recognition from DECS. A five-storey building was constructed to accommodate the growing number of enrollees.</p>
                <p>In June 1995, St. Dominic Savio School was renamed to St. Dominic Savio College, signifying its strong commitment to making quality education accessible to all. Our journey has been marked by continuous innovation and an unwavering commitment to academic excellence and holistic student development.</p>
              </div>
              <div className="md:w-72 flex-shrink-0 mt-4 md:mt-0">
                <div className="rounded-lg overflow-hidden h-72 shadow-lg">
                  <Image src="/images/background.png" alt="College History" width={288} height={288} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Vision & Mission ── */}
        <div id="vision-mission" className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md border-l-4 border-green-600 overflow-hidden"
          >
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Vision</h3>
            </div>
            <div className="px-6 pb-6 border-t border-green-100">
              <p className="pt-4 text-base text-gray-700 leading-relaxed text-justify">As a College, SDSC seeks to uphold and communicate truth by instilling it in the Savian scholar in all his scholarly, personal, and professional pursuits. As a Filipino College, SDSC seeks to protect, preserve and promote Filipino culture. Through his healthy understanding of national identity, the Savian scholar will be the nation&apos;s spokesperson to the global community. As a Filipino College with the global perspective SDSC seeks to prepare the Savian scholar to the rigors and demands of the borderless world.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md border-l-4 border-green-600 overflow-hidden"
          >
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Mission</h3>
            </div>
            <div className="px-6 pb-6 border-t border-green-100">
              <p className="pt-4 text-base text-gray-700 leading-relaxed text-justify">The Founder envisions SDSC, in two decades time, as one of the country&apos;s premier institutions of higher learning in the holistic development of globally-competitive and conscientious leaders and professionals through definitive excellence in education that meets national demands and global standards, social activism for the improvement of the quality of life and general welfare of men, access and equity in scholarly opportunities, and elevation of the institution to university status.</p>
            </div>
          </motion.div>
        </div>

        {/* ── General Goals ── */}
        <motion.div
          id="general-goals"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden scroll-mt-20"
        >
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">General Goals</h2>
          </div>
          <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="pt-4 text-base text-gray-700 mb-6 leading-relaxed text-justify">Within the framework of this vision, the school pursues a mission translated into attainable goals—instilling in each student the authentic tradition and values that will contribute to making them truly Christian Filipinos.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: 'Produce Total Human Persons', desc: 'With a knowledge and understanding of dynamic Christian Living by encouraging them to nourish the practice of honesty, responsibility and chivalry.' },
                      { title: 'Development of Fine Tastes and Values', desc: 'Develop students with fine tastes and manners and strengthen their commitment to preserving the tradition and values of the Filipino people.' },
                      { title: 'Academic Competence and Excellence', desc: 'Excel in development of the basic academic competence and potentials of the students, recognizing the values of arts and science for individual growth.' },
                      { title: 'Preparedness for Higher Learning', desc: 'Manifest preparedness for higher learning through a balanced instructional program for mastery of fundamental knowledge, attitudes, habits and skills.' },
                      { title: 'Leadership and Global Competitiveness', desc: 'Develop leadership potentials among individuals who are vocationally and academically efficient, enabling them to contribute to nation building and be globally competitive.' },
                    ].map((goal, idx) => (
                      <div key={idx} className="bg-gray-50 p-5 rounded-lg border-t-4 border-green-600">
                        <h3 className="text-sm font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{goal.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-justify">{goal.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
        </motion.div>

        {/* ── Educational Philosophy ── */}
        <motion.div
          id="educational-philosophy"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-md border border-green-200 overflow-hidden scroll-mt-20"
        >
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Educational Philosophy</h2>
          </div>
          <div className="px-6 pb-6 border-t border-green-200">
                  <p className="pt-4 text-base text-gray-700 mb-6 leading-relaxed text-justify">The educational philosophy of SDSC is exemplified in the motto of St. Dominic Savio, the Patron Saint of the Youth — <strong>CARITAS, DUCTUS, and SERVITUM</strong>.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: 'Caritas', sub: 'LOVE', color: 'text-green-600', border: 'border-green-600', desc: 'Love is the greatest Christian virtue and the foundation of faith. It is shown not only in words and manners but above all in deeds and the purity of intention. The institution believes that education without values is mere learning. Hence, knowledge and skills are to be imbued with values formation, love for country and self.' },
                      { title: 'Ductus', sub: 'LEADERSHIP', color: 'text-emerald-600', border: 'border-emerald-600', desc: 'St. Dominic Savio is the shining example of the youth. His leadership capabilities, which are full of zeal and fidelity to duty, are the ingredients of total human development.' },
                      { title: 'Servitum', sub: 'SERVICE', color: 'text-teal-600', border: 'border-teal-600', desc: 'The unselfish dedication in the service of mankind is the hallmark of educational philosophy that is to be instilled in the minds of the students of St. Dominic Savio College.' },
                    ].map((item, idx) => (
                      <div key={idx} className={`bg-white p-5 rounded-lg shadow-sm border-t-4 ${item.border}`}>
                        <h3 className={`text-xl font-bold mb-1 ${item.color}`}>{item.title}</h3>
                        <p className={`text-xs font-semibold mb-3 ${item.color} opacity-80`}>({item.sub})</p>
                        <p className="text-gray-700 text-sm text-justify leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
        </motion.div>

        {/* ── Core Values & SDSC Symbols ── */}
        <div id="core-values" className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-20">

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
          >
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Core Values</h2>
            </div>
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { value: 'Compassion', desc: 'A commitment to empathy, kindness, and understanding towards all members of our community.' },
                  { value: 'Excellence', desc: 'The pursuit of the highest standards in all academic and personal endeavors.' },
                  { value: 'Integrity', desc: 'Unwavering commitment to honesty, ethical conduct, and moral principles.' },
                  { value: 'Passion', desc: 'A fervent dedication to learning, growth, and making a positive impact on the world.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-5 rounded-lg border-l-4 border-green-600">
                    <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{item.value}</h3>
                    <p className="text-gray-600 text-sm text-justify leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SDSC Symbols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
          >
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">SDSC Symbols</h2>
            </div>
            <div className="px-6 pb-6 border-t border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { symbol: 'Love', desc: 'Caritas — Love is the greatest Christian virtue and the foundation of faith, shown through deeds and the purity of intention.', image: 'love_c.png' },
                  { symbol: 'Leadership', desc: 'Ductus — St. Dominic Savio exemplifies leadership full of zeal and fidelity to duty, essential for total human development.', image: 'leadership_c.png' },
                  { symbol: 'Service', desc: 'Servitum — Unselfish dedication to serving mankind and making a positive impact in our community.', image: 'service_c.png' },
                ].map((item, idx) => (
                  <motion.div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm" whileHover={{ y: -4 }}>
                    <div className="rounded-lg overflow-hidden mb-3 w-16 h-16 mx-auto">
                      <Image src={`/images/${item.image}`} alt={item.symbol} width={64} height={64} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-base font-bold mb-1 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{item.symbol}</h3>
                    <p className="text-gray-600 text-xs text-justify">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── SDSC Hymn & Prayer ── */}
        <div id="hymn" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start scroll-mt-20">

          {/* SDSC Hymn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
          >
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">SDSC Hymn</h2>
            </div>
            <div className="px-6 pb-8 border-t border-gray-100">
              <div className="pt-6 text-center space-y-6 text-base text-gray-700 leading-relaxed italic">
                <div className="space-y-1">
                  <p>Beloved St. Dominic Savio College</p>
                  <p>To thee we give our hearts</p>
                  <p>Love for God, country and to self</p>
                  <p>Is the greatest, the greatest of all.</p>
                </div>
                <div className="space-y-1">
                  <p>Beloved St. Dominic Savio College</p>
                  <p>To thee we give our courage</p>
                  <p>Be a model, leader, shining guide</p>
                  <p>From thee we learn to lead.</p>
                </div>
                <div className="space-y-1 font-semibold not-italic text-green-700">
                  <p className="uppercase text-xs tracking-widest text-gray-400 mb-2">Chorus</p>
                  <p>Hail! Hail! Hail! Hail! Hail! St. Dominic Savio College</p>
                  <p>Long live! Long live in harmony</p>
                  <p>To love, to lead and to serve.</p>
                </div>
                <div className="space-y-1">
                  <p>Beloved St. Dominic Savio College</p>
                  <p>To thee we give our helping hands</p>
                  <p>Thy vision, mission be with us</p>
                  <p>In the service of mankind.</p>
                </div>
                <div className="space-y-1 font-semibold not-italic text-green-700">
                  <p className="uppercase text-xs tracking-widest text-gray-400 mb-2">Chorus</p>
                  <p>Hail! Hail! Hail! Hail! Hail! St. Dominic Savio College</p>
                  <p>Long live! Long live in harmony</p>
                  <p>To love, to lead and to serve.</p>
                </div>
                <div className="space-y-1">
                  <p>Long live! Long live in unity</p>
                  <p>To love, to lead and to serve.</p>
                </div>
                <div className="space-y-1 font-semibold">
                  <p>To love, to lead and to serve.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Prayer to St. Dominic Savio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md border-l-4 border-green-600 overflow-hidden"
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
      </div>
    </div>
  );
}
