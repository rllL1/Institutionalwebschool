'use client';

import Image from 'next/image';
import HeroCarousel from './components/HeroCarousel';
import EventsCarousel from './components/EventsCarousel';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Life at SDSC Section */}
      <div className="relative z-10">
        <EventsCarousel />
      </div>

      <div className="relative z-10 h-1 md:h-2" />

      {/* Features Section */}
      <section className="relative z-10 px-1 py-8 md:px-2">
        <div className="max-w-[100rem] mx-auto overflow-hidden rounded-[2rem] bg-white/95 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-green-800 via-emerald-700 to-green-900 px-6 py-8 md:px-10 md:py-12 text-white">
              <h2 className="mb-8 text-4xl font-bold leading-tight text-lime-300">Why Choose Us?</h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'World-Class Education',
                    description: 'Gain industry-driven knowledge and skills from dedicated faculty and modern curricula.',
                    icon: 'EDU',
                  },
                  {
                    title: 'Learn Anytime, Study Anywhere',
                    description: 'Access course materials, announcements, and academic support through digital learning tools.',
                    icon: 'APP',
                  },
                  {
                    title: 'Modern Training Facilities',
                    description: 'Develop practical skills in updated laboratories, classrooms, and simulation environments.',
                    icon: 'LAB',
                  },
                  {
                    title: 'Strong Student Support',
                    description: 'Receive guidance in academics, leadership, and career development from enrollment to graduation.',
                    icon: 'SUP',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-emerald-500/30 ring-1 ring-emerald-200/40 flex items-center justify-center text-xs font-bold tracking-wider">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                      <p className="mt-2 text-base text-emerald-100/90 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-[680px]">
              <Image
                src="/images/learn.png"
                alt="Student learning"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="relative z-10 bg-gray-800 text-white py-12 px-4"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">About Us</h3>
            <p className="text-gray-400">St. Dominic Savio College is committed to providing quality education and holistic development of students since 1993.</p>
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
