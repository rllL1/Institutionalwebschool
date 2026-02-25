export default function CampusLife() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8" style={{ color: '#2a9d5f' }}>
          Campus Life
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Experience a vibrant campus life with diverse opportunities for personal and intellectual growth.
        </p>

        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#2a9d5f' }}>Student Clubs & Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
              <h3 className="text-xl font-bold mb-3">🎭 Arts & Culture Club</h3>
              <p className="text-gray-600">Explore music, dance, drama, and cultural performances. Participate in talent showcases and cultural festivals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
              <h3 className="text-xl font-bold mb-3">⚽ Sports & Fitness Club</h3>
              <p className="text-gray-600">Engage in various sports activities, fitness training, and inter-college competitions to build teamwork and discipline.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
              <h3 className="text-xl font-bold mb-3">💻 Tech & Innovation Club</h3>
              <p className="text-gray-600">Develop coding skills, work on tech projects, robotics, and participate in hackathons and tech competitions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
              <h3 className="text-xl font-bold mb-3">📚 Academic Excellence Club</h3>
              <p className="text-gray-600">Group study sessions, guest lectures, research projects, and academic competitions to enhance learning.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
              <h3 className="text-xl font-bold mb-3">🌍 Social Service Club</h3>
              <p className="text-gray-600">Community outreach programs, environmental initiatives, and volunteer activities to make a positive impact.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
              <h3 className="text-xl font-bold mb-3">🎨 Creative Arts Club</h3>
              <p className="text-gray-600">Painting, sketching, photography, and creative writing. Showcase your artistic talents and imagination.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#2a9d5f' }}>Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl">📚</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Library</h3>
                <p className="text-gray-600">Well-stocked with 10,000+ books, journals, digital resources, and quiet study areas</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🏫</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Classrooms</h3>
                <p className="text-gray-600">Modern, air-conditioned classrooms equipped with smart boards and teaching aids</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🔬</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Laboratories</h3>
                <p className="text-gray-600">Well-equipped science and computer labs for practical learning and research</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">⚽</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sports Complex</h3>
                <p className="text-gray-600">Basketball court, volleyball court, badminton court, and fitness center</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🍽️</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Cafeteria</h3>
                <p className="text-gray-600">Hygienic food with various healthy options and comfortable dining area</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🚑</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Health Center</h3>
                <p className="text-gray-600">First aid facility, regular health check-ups, and counseling services</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#2a9d5f' }}>Student Support Services</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-xl" style={{ color: '#2a9d5f' }}>✓</span>
              <span><strong>Academic Counseling:</strong> Personalized guidance for course selection and academic progress</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" style={{ color: '#2a9d5f' }}>✓</span>
              <span><strong>Career Guidance:</strong> Professional counseling for career planning and placement preparation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" style={{ color: '#2a9d5f' }}>✓</span>
              <span><strong>Mental Health Support:</strong> Counseling services for stress management and personal development</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" style={{ color: '#2a9d5f' }}>✓</span>
              <span><strong>Scholarship Assistance:</strong> Guidance on scholarship opportunities and financial aid</span>
            </li>
            <li className="flex gap-3">
              <span className="text-xl" style={{ color: '#2a9d5f' }}>✓</span>
              <span><strong>Mentorship Program:</strong> Connect with senior students and alumni for guidance</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
