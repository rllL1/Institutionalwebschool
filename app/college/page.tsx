'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function College() {
  const [isInView, setIsInView] = useState({});

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
        {/* President's Message */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
        >
          <motion.div variants={slideInLeft} className="mb-6">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Message of the President
            </h2>
          </motion.div>
          
          <div className="mb-6">
            <motion.div 
              className="float-right w-full md:w-96 ml-6 mb-4"
              variants={slideInRight}
            >
              <motion.div 
                className="relative rounded-xl overflow-hidden shadow-2xl group h-96"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden w-full h-full flex items-center justify-center shadow-lg">
                  <Image
                    src="/images/doc.jpg"
                    alt="President"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
            
            <motion.div variants={slideInLeft}>
              <motion.p 
                className="text-base text-gray-700 mb-4 leading-relaxed text-justify"
                variants={staggerItem}
              >
                Message for the 33rd Foundation Anniversary of St. Dominic Savio College (SDSC)
In celebration of the 33rd Foundation Anniversary of St. Dominic Savio College, we honor a remarkable journey marked by excellence, dedication, and unwavering commitment to quality education. Guided by the inspiring leadership of Dr. Nestor V. Dela Cruz, this year’s theme, “SDSC 33 Years of Excellence: Past, Present and Future,” reminds us to reflect on our proud heritage while boldly embracing the opportunities ahead.
For more than three decades, SDSC has remained steadfast in its mission of the Total Development of a Person—forming individuals who are not only academically competent but also morally grounded and spiritually enriched. True to the guiding principle, “Our Graduates, Our Difference,” the institution continues to shape Savian scholars who embody excellence in all aspects of life.
At the heart of this mission are the Savian Core Values: passion, compassion, integrity, and excellence. Inspired by the virtues of St. Dominic Savio, these values serve as the foundation of our community and the compass that directs our actions and aspirations.
As SDSC moves forward into a “Bagong Savio” era, we renew our commitment to resilience, innovation, and forward-thinking leadership. May this new chapter strengthen our resolve to adapt, grow, and continue providing transformative education for future generations.
Finally, this celebration underscores the unity of the Savian community. The coming together of the Main Campus and Ibaan Branch as one Savian family reflects the spirit of collaboration and shared purpose that has sustained SDSC through the years.
With gratitude for the past, confidence in the present, and hope for the future, we proudly celebrate 33 Years of Excellence—and many more to come
                </motion.p>
                <motion.p 
                  className="text-base text-gray-700 leading-relaxed text-justify"
                  variants={staggerItem}
                >
                  We believe that education extends beyond the classroom, fostering values of integrity, compassion, 
                  and service to others. Together, we are building a community of learners who will lead with purpose.
                </motion.p>
              </motion.div>
            </div>
          <div className="clear-both"></div>
        </motion.section>

        {/* SDSC History */}
        <motion.section 
          className="mb-20 bg-white p-10 rounded-xl shadow-lg border border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            SDSC History
          </motion.h2>
          <div className="mb-6">
            <motion.div 
              className="float-left w-full md:w-96 mr-6 mb-4"
              variants={slideInLeft}
            >
              <div className="bg-gray-300 rounded-lg overflow-hidden h-72 shadow-lg">
                <Image
                  src="/images/background.png"
                  alt="College History"
                  width={384}
                  height={288}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div variants={slideInRight}>
              <motion.p 
                className="text-base text-gray-700 mb-4 leading-relaxed text-justify"
                variants={staggerItem}
              >
                About Our College
THE HISTORY OF ST. DOMINIC SAVIO COLLEGE It started out as a dream. Then slowly, it becomes a reality. And through the years, the reality continues to stand amidst all the hardships and trials that has come its way. Through the great efforts of Dr. Nestor V. dela Cruz and His wife Mrs. Myra R. dela Cruz, of February 1993, St. Dominic Savio College was born. But during that time, SDSC was first known as St. Dominic Savio School that catered only to the grade school and high school levels. Armed with its vision – mission of Total Development of a Person, SDSC opened its doors to students from all walks of life. Housed in a modest two-storey residential house, SDSC welcomed twenty-three (23) students in the pre-school and grade school programs at the start of its operations in 1993. At that time Mr. Ednel S. Garcia and Ms. Virginia Maraguinot were designated as the Administrative officer and Principal, respectively. And in its second year of operation, the High School Department opened as a result of the great support provided by the community. The enrollment doubled and the Pre-School and Elementary Department were given recognition by the Department of Education, Culture and Sports (DECS). The need for expansion and improvement of its facilities were eminent, thus, SDSC embarked on a long-term development program. With this, a five storey spacious and well-ventilated building was constructed to accommodate the growing number of the enrollees. The construction of a new building was a strong indication that SDSC provides quality education and excellence. In less than three years, the dreams become a reality. St. Dominic Savio College continued its noble and humble mission of producing students that embody its vision. On June 1995, St. Dominic Savio School was renamed to St. Dominic Savio College. The change in the name signified its strong commitment of making quality education accessible to all for it signaled the entry of the institution in the realms of higher education. The opening of the College Department made the institution more accessible to the students, community and the neighboring towns, provinces, and to the foreign students as well. In response to the Vision and Mission of SDSC which is Total Development of Person, it further streamlined its personnel wherein coordinators for the elementary, high school and college departments were appointed. The appointments to these positions ensured more effective administration of the students' and the department's needs.
              </motion.p>
              <motion.p 
                className="text-base text-gray-700 mb-4 leading-relaxed text-justify"
                variants={staggerItem}
              >
                Named after the young saint known for his virtue, goodness, and pastoral care, our college embodies the values 
                of discipline, integrity, and comprehensive education.
              </motion.p>
              <motion.p 
                className="text-base text-gray-700 leading-relaxed text-justify"
                variants={staggerItem}
              >
                Our journey has been marked by continuous innovation, investment in modern infrastructure, and an unwavering 
                commitment to academic excellence and holistic student development.
              </motion.p>
            </motion.div>
          </div>
          <div className="clear-both"></div>
        </motion.section>

        {/* Vision and Mission */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-green-600 hover:shadow-2xl transition-shadow"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                As a College, SDSC seeks to uphold and communicate truth by instilling it in the Savian scholar in all his scholarly, personal, and professional pursuits. As a Filipino College, SDSC seeks to protect, preserve and promote Filipino culture. Through his healthy understanding of national identity, the Savian scholar will be the nation's spokesperson to the global community. As a Filipino College with the global perspective SDSC seeks to prepare the Savian scholar to the rigors and demands of the borderless world.
              </p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-l-4 border-green-600 hover:shadow-2xl transition-shadow"
              variants={staggerItem}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                The Founder envisions SDSC, in two decades time, as one of the country's premier institutions of higher learning in the holistic development of globally-competitive and conscientious leaders and professionals through definitive excellence in education that meets national demands and global standards, social activism for the improvement of the quality of life and general welfare of men, access and equity in scholarly opportunities, and elevation of the institution to university status.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* General Goals */}
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
            General Goals
          </motion.h2>
          
          <motion.div 
            className="mb-12 bg-white p-8 rounded-xl shadow-md"
            variants={fadeInUp}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              Within the framework of this vision, the school pursues a mission translated into attainable goals. The mission exemplifies the task of instilling in each and every student the teaching of St. Dominic Savio, the authentic tradition and values as well as the attitudes, habits and knowledge that will contribute to make him a truly Christian Filipino.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Pursuant to the vision mission and objectives of the Patron Saint of the Youth, St. Dominic Savio College commits itself to carry out the following objectives:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Produce Total Human Persons', 
                desc: 'Produce Total Human Persons with a knowledge and understanding of dynamic Christian Living by encouraging them to nourish the practice of honesty, responsibility and chivalry.' 
              },
              { 
                title: 'Development of Fine Tastes and Values', 
                desc: 'Develop students with fine tastes and manners and strengthen their commitment to preserves the tradition and values of the Filipino people. Provide a learning atmosphere that is vital to the intellectual, moral, spiritual, and socio-cultural consciousness of the students.' 
              },
              { 
                title: 'Academic Competence and Excellence', 
                desc: 'Excel in development of the basic academic competence and potentials of the students, thus, recognizing and appreciating the values of arts and science for progress and growth of an individual.' 
              },
              { 
                title: 'Preparedness for Higher Learning', 
                desc: 'Manifest preparedness for higher level of learning through a balanced and adequate instructional program for the students\'learning and mastery of fundamental knowledge, attitudes, habits and skills that recognizes the value of human and material resources.' 
              },
              { 
                title: 'Leadership and Global Competitiveness', 
                desc: 'Develop leadership potentials among individuals who are vocationally and academically efficient, whose skills and training would enable them to earn a decent living, render worthy services to the community and contribute to nation building, and above all, a globally competitive person who has a genuine love and pride for country and its heritage.' 
              }
            ].map((goal, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all border-t-4 border-green-600 cursor-pointer flex flex-col"
                variants={staggerItem}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(42,157,95,0.15)' }}
              >
                <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{goal.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify flex-grow">{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Educational Philosophy */}
        <motion.section 
          className="mb-20 bg-gradient-to-r from-green-50 to-emerald-50 p-10 rounded-xl shadow-lg border border-green-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Educational Philosophy
          </motion.h2>
          
          <motion.p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify" variants={staggerItem}>
            The educational philosophy of SDSC is exemplified in the motto of St. Dominic Savio, the Patron Saint of the Youth - <strong>CARITAS, DUCTUS, and SERVITUM</strong>.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600"
              variants={staggerItem}
            >
              <h3 className="text-2xl font-bold mb-4 text-green-600">Caritas</h3>
              <p className="text-sm font-semibold text-emerald-600 mb-3">(LOVE)</p>
              <p className="text-gray-700 text-justify leading-relaxed">
                Love is the greatest Christian virtue and the foundation of faith. It is shown not only in words and manners but above all in deeds and the purity of intension. The institution believes that education without values is mere learning. Hence, the emphasis of knowledge and skills are to be imbued with values formation, love for country and self.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-emerald-600"
              variants={staggerItem}
            >
              <h3 className="text-2xl font-bold mb-4 text-emerald-600">Ductus</h3>
              <p className="text-sm font-semibold text-green-600 mb-3">(LEADERSHIP)</p>
              <p className="text-gray-700 text-justify leading-relaxed">
                St. Dominic Savio is the shining example of the youth. His leadership capabilities, which are full of zeal and fidelity to duty, are the ingredients of total human development.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-600"
              variants={staggerItem}
            >
              <h3 className="text-2xl font-bold mb-4 text-teal-600">Servitum</h3>
              <p className="text-sm font-semibold text-emerald-600 mb-3">(SERVICE)</p>
              <p className="text-gray-700 text-justify leading-relaxed">
                The unselfish dedication in the service of mankind is the hallmark of educational philosophy that is to be instilled in the minds of the students of St Dominic Savio College.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Values */}
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
            The Core Values
          </motion.h2>
          
          <motion.p className="text-lg text-gray-700 mb-10 text-center text-justify" variants={staggerItem}>
            St. Dominic Savio College adheres to the following core values that guide our mission and inspire our community:
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 'Compassion', desc: 'A commitment to empathy, kindness, and understanding towards all members of our community' },
              { value: 'Excellence', desc: 'The pursuit of the highest standards in all academic and personal endeavors' },
              { value: 'Integrity', desc: 'Unwavering commitment to honesty, ethical conduct, and moral principles' },
              { value: 'Passion', desc: 'A fervent dedication to learning, growth, and making a positive impact on the world' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 hover:shadow-2xl transition-all"
                variants={staggerItem}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(42,157,95,0.15)' }}
              >
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{item.value}</h3>
                <p className="text-gray-600 text-sm text-justify leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SDSC Symbols */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            SDSC Symbols
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { symbol: 'Love', desc: 'Caritas - Love is the greatest Christian virtue and the foundation of faith, shown through deeds and the purity of intention', image: 'love_c.png' },
              { symbol: 'Leadership', desc: 'Ductus - St. Dominic Savio exemplifies leadership full of zeal and fidelity to duty, essential for total human development', image: 'leadership_c.png' },
              { symbol: 'Service', desc: 'Servitum - Unselfish dedication to serving mankind and making a positive impact in our community', image: 'service_c.png' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all"
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="bg-gray-300 rounded-lg overflow-hidden mb-4 aspect-square flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={`/images/${item.image}`}
                    alt={item.symbol}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{item.symbol}</h3>
                <p className="text-gray-600 text-sm text-justify">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SDSC Hymn */}
        <motion.section 
          className="mb-20 bg-white p-10 rounded-xl shadow-lg border border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            SDSC Hymn
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={slideInLeft}
          >
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed italic text-justify"
              variants={staggerItem}
            >
              [Insert School Hymn Lyrics Here]<br />
              <br />
              Our hymn represents the spirit, values, and aspirations of St. Dominic Savio College. 
              It is sung at important school events and gatherings, uniting our community in shared pride and purpose.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Prayer to St. Dominic Savio */}
        <motion.section 
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2 }}
        >
          <motion.div variants={slideInLeft} className="mb-6">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Prayer to St. Dominic Savio</h2>
          </motion.div>
          
          <div className="mb-6">
            <motion.div 
              className="float-right w-full md:w-96 ml-6 mb-4"
              variants={slideInRight}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-96">
                <div className="bg-gray-300 rounded-lg overflow-hidden w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/st-dominic-savio.jpg"
                    alt="St. Dominic Savio"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={slideInLeft}
            >
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md border-l-4 border-green-600"
                whileHover={{ boxShadow: '0 20px 25px -5px rgba(42,157,95,0.15)' }}
              >
                <motion.p 
                  className="text-base text-gray-700 leading-relaxed italic mb-4 text-justify"
                  variants={staggerItem}
                >
                  Saint Dominic Savio, young in years but rich in virtue, guide our steps along the path of righteousness. 
                </motion.p>
                <motion.p 
                  className="text-base text-gray-700 leading-relaxed italic mb-4 text-justify"
                  variants={staggerItem}
                >
                  Help us to pursue excellence in all we do, to serve with humble hearts, and to grow in knowledge and faith. 
                </motion.p>
                <motion.p 
                  className="text-base text-gray-700 leading-relaxed italic text-justify"
                  variants={staggerItem}
                >
                  May we embrace the values you embodied—goodness, integrity, and pastoral care—and become beacons of hope 
                  in our communities. Amen.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>

          <div className="clear-both"></div>
        </motion.section>

      </div>
    </div>
  );
}