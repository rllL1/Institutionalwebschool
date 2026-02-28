'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Academics() {
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

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">


      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Academic Overview */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Academic Streams Overview
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto"
            variants={staggerItem}
          >
            Our comprehensive academic programs are designed to nurture critical thinking, creativity, and excellence 
            across diverse fields of study and student levels.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { stream: 'Science', icon: '🔬', courses: 'Physics, Chemistry, Biology' },
              { stream: 'Commerce', icon: '💼', courses: 'Accountancy, Business, Economics' },
              { stream: 'Arts', icon: '📚', courses: 'English, History, Geography' },
              { stream: 'Vocational', icon: '🛠️', courses: 'IT, Digital Marketing, Healthcare' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all text-center border-t-4 border-green-600 cursor-pointer"
                variants={staggerItem}
                whileHover={{ y: -10 }}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{item.stream}</h3>
                <p className="text-sm text-gray-600">{item.courses}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* College Program */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
        >
          <motion.div 
            className="mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">College Programs</h2>
            <p className="text-lg text-gray-600">Advanced undergraduate education across multiple disciplines</p>
          </motion.div>

          {/* Science Stream */}
          <motion.div className="mb-16" variants={staggerContainer}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-3xl">🔬</span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Science Stream</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Physics', 'Chemistry', 'Biology'].map((course, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                  variants={staggerItem}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="bg-gray-300 overflow-hidden aspect-video flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={`/images/college-science-${idx + 1}.jpg`}
                      alt={`${course} Student`}
                      width={400}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{course}</h4>
                    <p className="text-gray-600 mb-4">
                      Comprehensive study of fundamental principles and practical applications.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Laboratory practicals</li>
                      <li>✓ Research projects</li>
                      <li>✓ Field experiments</li>
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Commerce Stream */}
          <motion.div className="mb-16" variants={staggerContainer}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-3xl">💼</span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Commerce Stream</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Accountancy & Finance', 'Business Studies', 'Economics'].map((course, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                  variants={staggerItem}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="bg-gray-300 overflow-hidden aspect-video flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={`/images/college-commerce-${idx + 1}.jpg`}
                      alt={`${course} Student`}
                      width={400}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{course}</h4>
                    <p className="text-gray-600 mb-4">
                      Professional education focused on business, finance, and economic principles.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Case studies</li>
                      <li>✓ Internship programs</li>
                      <li>✓ Industry exposure</li>
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arts Stream */}
          <motion.div className="mb-16" variants={staggerContainer}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-3xl">📚</span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Arts Stream</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['English & Literature', 'History & Geography', 'Philosophy & Psychology'].map((course, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                  variants={staggerItem}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="bg-gray-300 overflow-hidden aspect-video flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={`/images/college-arts-${idx + 1}.jpg`}
                      alt={`${course} Student`}
                      width={400}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{course}</h4>
                    <p className="text-gray-600 mb-4">
                      Liberal arts education fostering critical thinking and cultural awareness.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Research & analysis</li>
                      <li>✓ Seminars</li>
                      <li>✓ Cultural programs</li>
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vocational Stream */}
          <motion.div variants={staggerContainer}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-3xl">🛠️</span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Vocational Courses</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['IT & Software Development', 'Digital Marketing', 'Healthcare & Nursing'].map((course, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                  variants={staggerItem}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="bg-gray-300 overflow-hidden aspect-video flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={`/images/college-vocational-${idx + 1}.jpg`}
                      alt={`${course} Student`}
                      width={400}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{course}</h4>
                    <p className="text-gray-600 mb-4">
                      Skill-based programs preparing students for professional careers.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Industry certification</li>
                      <li>✓ Hands-on training</li>
                      <li>✓ Placement support</li>
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Senior High School */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
        >
          <motion.div className="mb-12" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Senior High School</h2>
            <p className="text-lg text-gray-600">Grade 11-12 education bridging secondary and tertiary levels</p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            whileHover={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
              <motion.div 
                className="bg-gray-300 rounded-lg overflow-hidden aspect-square flex items-center justify-center"
                variants={slideInLeft}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/images/senior-high-students.jpg"
                  alt="Senior High Students"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div variants={slideInRight}>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Our Programs</h3>
                <div className="space-y-4">
                  {[
                    { stream: 'Academic Track', desc: 'Preparation for college entrance exams and advanced studies' },
                    { stream: 'Science Specialization', desc: 'Enhanced focus on STEM subjects with laboratory work' },
                    { stream: 'Social Science Track', desc: 'Emphasis on humanities and social sciences' },
                    { stream: 'Technical Electives', desc: 'Introduction to vocational and technical skills' }
                  ].map((prog, idx) => (
                    <motion.div 
                      key={idx} 
                      className="border-l-4 border-green-600 pl-4 hover:pl-6 transition-all cursor-pointer"
                      variants={staggerItem}
                      whileHover={{ x: 5 }}
                    >
                      <h4 className="font-bold text-gray-800 mb-1">{prog.stream}</h4>
                      <p className="text-gray-600 text-sm">{prog.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Junior High School */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
        >
          <motion.div className="mb-12" variants={fadeInUp}>
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Junior High School</h2>
            <p className="text-lg text-gray-600">Grade 7-10 foundational education fostering all-round development</p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-lg overflow-hidden border border-green-200"
            whileHover={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
              <motion.div variants={slideInLeft}>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Comprehensive Curriculum</h3>
                <div className="space-y-4">
                  {[
                    { subject: 'Core Academics', desc: 'English, Mathematics, Science, Social Studies' },
                    { subject: 'Languages', desc: 'Multilingual education and communication skills' },
                    { subject: 'Physical Education', desc: 'Sports and fitness for healthy development' },
                    { subject: 'Arts & Crafts', desc: 'Creative expression and practical skills' },
                    { subject: 'Digital Literacy', desc: 'Technology and computer education' },
                    { subject: 'Life Skills', desc: 'Character building and personal development' }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      className="bg-white p-3 rounded-lg border-l-4 border-green-600 hover:shadow-md transition-all cursor-pointer"
                      variants={staggerItem}
                      whileHover={{ x: 5, boxShadow: '0 4px 12px rgba(42,157,95,0.1)' }}
                    >
                      <h4 className="font-bold text-gray-800 mb-1">{item.subject}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="bg-gray-300 rounded-lg overflow-hidden aspect-square flex items-center justify-center"
                variants={slideInRight}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/images/junior-high-students.jpg"
                  alt="Junior High Students"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Learning Features */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Learning Features & Resources
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Digital Learning', emoji: '🖥️', desc: 'Online classrooms & e-learning platforms' },
              { title: 'Expert Faculty', emoji: '👨‍🏫', desc: 'Highly qualified teachers with experience' },
              { title: 'Modern Labs', emoji: '🔬', desc: 'Well-equipped science & computer labs' },
              { title: 'Library Resources', emoji: '📚', desc: '10,000+ books and digital resources' },
              { title: 'Sports Facilities', emoji: '⚽', desc: 'Comprehensive athletic programs' },
              { title: 'Arts Studio', emoji: '🎨', desc: 'Creative spaces for artistic expression' },
              { title: 'Mentorship Program', emoji: '🤝', desc: 'Personalized guidance & counseling' },
              { title: 'International Exposure', emoji: '🌍', desc: 'Exchange programs & global partnerships' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all text-center hover:bg-gradient-to-b hover:from-green-50 hover:to-white cursor-pointer border-t-4 border-transparent hover:border-green-600"
                variants={staggerItem}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {feature.emoji}
                </motion.div>
                <h3 className="font-bold text-lg mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="bg-gradient-to-r from-green-600 via-green-600 to-emerald-600 rounded-xl p-12 text-white text-center shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
          whileHover={{ boxShadow: '0 30px 60px rgba(42,157,95,0.3)' }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            variants={fadeInUp}
          >
            Start Your Educational Journey
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 text-green-100"
            variants={staggerItem}
          >
            Join St. Dominic Savio College and experience transformative education that prepares you for success.
          </motion.p>
          <motion.button 
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-md"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More & Enroll
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
}
