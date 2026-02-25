import HeroCarousel from './components/HeroCarousel';
import EventsCarousel from './components/EventsCarousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Life at SDSC Section */}
      <EventsCarousel />

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#2a9d5f' }}>
            Why Choose St. Dominic Savio College?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0 text-xl"
                style={{ backgroundColor: '#2a9d5f' }}
              >
                📚
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
                <p className="text-gray-600">Comprehensive curriculum with STEM focus, delivered by experienced faculty members with industry exposure</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0 text-xl"
                style={{ backgroundColor: '#2a9d5f' }}
              >
                🏫
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
                <p className="text-gray-600">State-of-the-art laboratories, digital classrooms, library with 10,000+ volumes, and sports infrastructure</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0 text-xl"
                style={{ backgroundColor: '#2a9d5f' }}
              >
                🎯
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Holistic Development</h3>
                <p className="text-gray-600">Focus on academic excellence, physical fitness, character building, and leadership development programs</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white flex-shrink-0 text-xl"
                style={{ backgroundColor: '#2a9d5f' }}
              >
                💼
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
                <p className="text-gray-600">Expert counseling, placement support with 85%+ placement rate, and internship opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#2a9d5f' }}>About Us</h3>
            <p className="text-gray-400">St. Dominic Savio College is committed to providing quality education and holistic development of students since 2001.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#2a9d5f' }}>Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/academics" className="hover:text-white transition">Academics</a></li>
              <li><a href="/admission" className="hover:text-white transition">Admission</a></li>
              <li><a href="/events" className="hover:text-white transition">Events</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#2a9d5f' }}>Follow Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#2a9d5f' }}>Contact Info</h3>
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
