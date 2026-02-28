'use client';

import { motion } from 'framer-motion';
import HeroCarousel from './components/HeroCarousel';
import EventsCarousel from './components/EventsCarousel';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2, ease: 'easeOut' }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  };

  const staggerItem = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Life at SDSC Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 2 }}
      >
        <EventsCarousel />
      </motion.div>

      {/* Features Section */}
      <motion.section 
        className="py-16 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            variants={staggerItem}
          >
            We offer a unique educational experience focused on academic excellence and personal growth.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="flex gap-4 p-6 rounded-lg bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-all border-l-4 border-green-600 cursor-pointer"
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(42,157,95,0.15)' }}
            >
              <motion.div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0 text-xl bg-gradient-to-br from-green-600 to-emerald-600"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                🎓
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">World-Class Education</h3>
                <p className="text-gray-600">Our university offers top-tier education with internationally recognized programs.</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex gap-4 p-6 rounded-lg bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-all border-l-4 border-green-600 cursor-pointer"
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(42,157,95,0.15)' }}
            >
              <motion.div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0 text-xl bg-gradient-to-br from-green-600 to-emerald-600"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                🔬
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">Research Opportunities</h3>
                <p className="text-gray-600">Engage in cutting-edge research with our experienced faculty members.</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex gap-4 p-6 rounded-lg bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-all border-l-4 border-green-600 cursor-pointer"
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(42,157,95,0.15)' }}
            >
              <motion.div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0 text-xl bg-gradient-to-br from-green-600 to-emerald-600"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                🎯
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">Holistic Development</h3>
                <p className="text-gray-600">Focus on academic excellence, physical fitness, character building, and leadership development programs</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex gap-4 p-6 rounded-lg bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-all border-l-4 border-green-600 cursor-pointer"
              variants={staggerItem}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(42,157,95,0.15)' }}
            >
              <motion.div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0 text-xl bg-gradient-to-br from-green-600 to-emerald-600"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                💼
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">Career Guidance</h3>
                <p className="text-gray-600">Expert counseling, placement support with 85%+ placement rate, and internship opportunities</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-800 text-white py-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div variants={staggerItem}>
            <h3 className="text-xl font-semibold mb-4 text-green-400">About Us</h3>
            <p className="text-gray-400">St. Dominic Savio College is committed to providing quality education and holistic development of students since 2001.</p>
          </motion.div>
          <motion.div variants={staggerItem}>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/academics" className="hover:text-white transition">Academics</a></li>
              <li><a href="/admission" className="hover:text-white transition">Admission</a></li>
              <li><a href="/events" className="hover:text-white transition">Events</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div variants={staggerItem}>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Follow Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </motion.div>
          <motion.div variants={staggerItem}>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Contact Info</h3>
            <p className="text-gray-400 mb-2">📧 info@sdsc.edu</p>
            <p className="text-gray-400 mb-2">📞 +1 (555) 123-4567</p>
            <p className="text-gray-400">🕐 Mon-Fri: 9AM-5PM</p>
          </motion.div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 St. Dominic Savio College. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}
