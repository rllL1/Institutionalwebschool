export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="py-24 px-4 text-white text-center relative overflow-hidden"
        style={{ backgroundColor: '#2a9d5f' }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Welcome to St. Dominic Savio College</h1>
          <p className="text-2xl mb-8 drop-shadow-md">Empowering minds, shaping futures, building excellence</p>
          <div className="flex gap-4 justify-center">
            <button 
              className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              style={{ color: '#2a9d5f' }}
            >
              Explore More
            </button>
            <button 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white rounded-lg shadow hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold" style={{ color: '#2a9d5f' }}>2500+</div>
            <p className="text-gray-600 mt-2 font-semibold">Students</p>
            <p className="text-sm text-gray-500">Across all streams</p>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold" style={{ color: '#2a9d5f' }}>150+</div>
            <p className="text-gray-600 mt-2 font-semibold">Faculty Members</p>
            <p className="text-sm text-gray-500">Highly qualified</p>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold" style={{ color: '#2a9d5f' }}>95%</div>
            <p className="text-gray-600 mt-2 font-semibold">Pass Rate</p>
            <p className="text-sm text-gray-500">Consistently high</p>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold" style={{ color: '#2a9d5f' }}>25+</div>
            <p className="text-gray-600 mt-2 font-semibold">Years of Excellence</p>
            <p className="text-sm text-gray-500">Since establishment</p>
          </div>
        </div>
      </section>

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

      {/* Testimonials Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#f0f9f6' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#2a9d5f' }}>
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <p className="text-gray-600 mb-4">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700 italic mb-4">"The education I received here prepared me excellently for university. The faculty is supportive and caring."</p>
              <p className="font-semibold" style={{ color: '#2a9d5f' }}>- Rajesh Kumar, Class of 2024</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <p className="text-gray-600 mb-4">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700 italic mb-4">"Best decision ever. The campus environment and extracurricular activities shaped my personality."</p>
              <p className="font-semibold" style={{ color: '#2a9d5f' }}>- Priya Sharma, Class of 2023</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <p className="text-gray-600 mb-4">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700 italic mb-4">"The placement assistance helped me secure a great job. The college truly cares about student success."</p>
              <p className="font-semibold" style={{ color: '#2a9d5f' }}>- Arjun Patel, Class of 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 px-4 text-white"
        style={{ backgroundColor: '#2a9d5f' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8">Take the first step towards a brighter future with St. Dominic Savio College</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105" style={{ color: '#2a9d5f' }}>
              Apply Now
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
              Request Brochure
            </button>
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
