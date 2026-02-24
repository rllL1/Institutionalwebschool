export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8" style={{ color: '#2a9d5f' }}>
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Get in touch with us for any queries or information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#2a9d5f' }}>Contact Information</h2>
            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-2" style={{ color: '#2a9d5f' }}>📍 Address</p>
                <p className="text-gray-600">St. Dominic Savio College<br/>123 Education Street<br/>College City, State 12345</p>
              </div>
              <div>
                <p className="font-semibold mb-2" style={{ color: '#2a9d5f' }}>📞 Phone</p>
                <p className="text-gray-600">Main: +1 (555) 123-4567<br/>Admission: +1 (555) 123-4568<br/>Admin: +1 (555) 123-4569</p>
              </div>
              <div>
                <p className="font-semibold mb-2" style={{ color: '#2a9d5f' }}>📧 Email</p>
                <p className="text-gray-600">info@sdsc.edu<br/>admission@sdsc.edu<br/>support@sdsc.edu</p>
              </div>
              <div>
                <p className="font-semibold mb-2" style={{ color: '#2a9d5f' }}>🕐 Working Hours</p>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM<br/>Saturday: 10:00 AM - 2:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#2a9d5f' }}>Send us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ focusRingColor: '#2a9d5f' }}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ focusRingColor: '#2a9d5f' }}
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ focusRingColor: '#2a9d5f' }}
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              ></textarea>
              <button 
                type="submit"
                className="w-full py-2 rounded-lg font-semibold transition-all transform hover:scale-105"
                style={{ backgroundColor: '#2a9d5f', color: 'white' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <section className="mt-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#2a9d5f' }}>Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
              <h3 className="font-bold text-lg mb-2">Admissions Office</h3>
              <p className="text-gray-600 mb-2">For admission process and enrollment queries</p>
              <p className="text-gray-600">📧 admission@sdsc.edu | 📞 +1 (555) 123-4568</p>
            </div>
            <div className="p-6 border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
              <h3 className="font-bold text-lg mb-2">Academic Affairs</h3>
              <p className="text-gray-600 mb-2">For curriculum and academic program information</p>
              <p className="text-gray-600">📧 academics@sdsc.edu | 📞 +1 (555) 123-4570</p>
            </div>
            <div className="p-6 border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
              <h3 className="font-bold text-lg mb-2">Student Services</h3>
              <p className="text-gray-600 mb-2">For student welfare and support services</p>
              <p className="text-gray-600">📧 students@sdsc.edu | 📞 +1 (555) 123-4571</p>
            </div>
            <div className="p-6 border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
              <h3 className="font-bold text-lg mb-2">Alumni Affairs</h3>
              <p className="text-gray-600 mb-2">For alumni networks and programs</p>
              <p className="text-gray-600">📧 alumni@sdsc.edu | 📞 +1 (555) 123-4572</p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#2a9d5f' }}>Find Us On</h2>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-green-600 font-semibold transition">💙 Facebook</a>
            <a href="#" className="text-gray-600 hover:text-green-600 font-semibold transition">📷 Instagram</a>
            <a href="#" className="text-gray-600 hover:text-green-600 font-semibold transition">🐦 Twitter</a>
            <a href="#" className="text-gray-600 hover:text-green-600 font-semibold transition">💼 LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-green-600 font-semibold transition">▶️ YouTube</a>
          </div>
        </section>
      </div>
    </div>
  );
}
