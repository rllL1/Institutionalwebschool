'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/sdsclogo1.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 via-black/55 to-black/75" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.2em] text-green-300 text-sm font-medium mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            We&apos;d love to hear from you. Reach out to us anytime.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c.6-1.2 6-7.05 6-11.25A6 6 0 0 0 6 9.75C6 13.95 11.4 19.8 12 21z" />
                  <circle cx="12" cy="9.75" r="2.25" />
                </svg>
              ),
              label: 'Visit Us',
              value: '361 JP Rizal St., Ibaan, Philippines 4230',
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75 11.25 11.25 0 0 1-4.5-.938.75.75 0 0 0-.788.105l-1.948 1.59a14.252 14.252 0 0 1-6.174-6.174l1.59-1.948a.75.75 0 0 0 .105-.788 11.25 11.25 0 0 1-.937-4.5.75.75 0 0 0-.75-.75H3A.75.75 0 0 0 2.25 3v3.75z" />
                </svg>
              ),
              label: 'Call Us',
              value: '043 727 7829',
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.75 1.682l-7.5 6.075a2.25 2.25 0 0 1-2.5 0l-7.5-6.075A2.25 2.25 0 0 1 2.25 6.993V6.75" />
                </svg>
              ),
              label: 'Email Us',
              value: 'sdscibaan@sdsc.edu.ph',
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
            Find Us & Send a Message
          </h2>
          <div className="w-16 h-1 rounded-full bg-green-500 mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">
            Visit our campus or drop us a message below. We&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 min-h-[400px]"
          >
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=St.+Dominic+Savio+College,+361+JP+Rizal+St.,+Ibaan,+Batangas,+Philippines+4230&t=&z=17&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[400px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Send us a message</h3>
            <p className="text-gray-500 text-sm mb-6">Fill out the form and we&apos;ll respond within 24 hours.</p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm"
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                >
                  Send Message
                </button>
                <button
                  type="reset"
                  className="px-6 py-3 rounded-xl font-semibold border border-gray-200 text-gray-600 bg-gray-50 hover:bg-gray-100 transition-all duration-300 text-sm"
                >
                  Clear
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
