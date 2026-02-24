export default function Academics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-4" style={{ color: '#2a9d5f' }}>
          The College Academics
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Our comprehensive academic programs are designed to nurture critical thinking, creativity, and excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#2a9d5f' }}>Science Stream</h2>
            <p className="text-gray-600 mb-4">Comprehensive science curriculum with laboratory facilities and research opportunities.</p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Physics, Chemistry, Biology</li>
              <li>✓ Advanced laboratory practicals</li>
              <li>✓ Research projects & internships</li>
              <li>✓ STEM competition participation</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#2a9d5f' }}>Commerce Stream</h2>
            <p className="text-gray-600 mb-4">Professional commerce education with emphasis on business and economic principles.</p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Accountancy & Finance</li>
              <li>✓ Business Studies & Economics</li>
              <li>✓ Computer Education</li>
              <li>✓ Entrepreneurship programs</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#2a9d5f' }}>Arts Stream</h2>
            <p className="text-gray-600 mb-4">Liberal arts education fostering critical thinking and cultural awareness.</p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ English, History, Geography</li>
              <li>✓ Social Science subjects</li>
              <li>✓ Philosophy & Psychology</li>
              <li>✓ Cultural enrichment programs</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#2a9d5f' }}>Vocational Courses</h2>
            <p className="text-gray-600 mb-4">Skill-based programs preparing students for professional careers.</p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ IT & Software Development</li>
              <li>✓ Digital Marketing</li>
              <li>✓ Healthcare & Nursing</li>
              <li>✓ Industry certifications</li>
            </ul>
          </div>
        </div>

        <section className="mt-16 bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2a9d5f' }}>Learning Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🖥️</div>
              <h3 className="font-semibold mb-2">Digital Learning</h3>
              <p className="text-gray-600">Online classrooms, virtual labs, and e-learning platforms</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Highly qualified teachers with industry experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold mb-2">Rich Library</h3>
              <p className="text-gray-600">10,000+ books and digital resources</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
