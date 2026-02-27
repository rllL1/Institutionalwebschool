export default function College() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8" style={{ color: '#2a9d5f' }}>
          About The College
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          St. Dominic Savio College - Ibaan is a premier educational institution dedicated to academic excellence and holistic development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#2a9d5f' }}>Our Vision</h2>
            <p className="text-gray-600">
              To be a leading educational institution that empowers students with knowledge, skills, and values to become responsible global citizens.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#2a9d5f' }}>Our Mission</h2>
            <p className="text-gray-600">
              To provide high-quality education that develops critical thinking, fosters innovation, and builds character in our students.
            </p>
          </div>
        </div>

        <section className="mt-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#2a9d5f' }}>College Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2" style={{ color: '#2a9d5f' }}>Founded</h3>
              <p className="text-gray-600">Established in 2001, serving the community for over two decades</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2" style={{ color: '#2a9d5f' }}>Accreditation</h3>
              <p className="text-gray-600">Accredited by relevant educational boards and quality assurance agencies</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-lg mb-2" style={{ color: '#2a9d5f' }}>Location</h3>
              <p className="text-gray-600">Located in Ibaan with excellent accessibility and modern infrastructure</p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#2a9d5f' }}>Core Values</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl" style={{ color: '#2a9d5f' }}>✓</span>
              <span><strong>Excellence:</strong> Pursuit of the highest standards in all endeavors</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" style={{ color: '#2a9d5f' }}>✓</span>
              <span><strong>Integrity:</strong> Commitment to honesty, ethics, and moral principles</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" style={{ color: '#2a9d5f' }}>✓</span>
              <span><strong>Innovation:</strong> Embracing creativity and new approaches to learning</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" style={{ color: '#2a9d5f' }}>✓</span>
              <span><strong>Inclusivity:</strong> Creating a welcoming environment for all students</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" style={{ color: '#2a9d5f' }}>✓</span>
              <span><strong>Community:</strong> Building strong connections and fostering collaboration</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
