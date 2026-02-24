export default function Events() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8" style={{ color: '#2a9d5f' }}>
          Campus Life Events
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover the vibrant campus life and exciting events at St. Dominic Savio College.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2a9d5f' }}>Annual Fest</h3>
            <p className="text-gray-600 mb-4">Celebrate with cultural performances, competitions, and festivities throughout the college over 3 days.</p>
            <p className="text-sm text-gray-500"><strong>Date:</strong> October 15-17</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2a9d5f' }}>Sports Day</h3>
            <p className="text-gray-600 mb-4">Inter-house competitions in athletics, cricket, volleyball, and other sports fostering teamwork and excellence.</p>
            <p className="text-sm text-gray-500"><strong>Date:</strong> March 5-7</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2a9d5f' }}>Seminars & Workshops</h3>
            <p className="text-gray-600 mb-4">Expert lectures and hands-on workshops on contemporary topics and professional skill development.</p>
            <p className="text-sm text-gray-500"><strong>Monthly:</strong> Every 3rd Friday</p>
          </div>
        </div>

        <section className="bg-white p-8 rounded-lg shadow mb-12">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#2a9d5f' }}>Upcoming Events</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
              <div>
                <h3 className="font-bold text-lg">Science Exhibition</h3>
                <p className="text-gray-600">Students showcase innovative projects and research</p>
              </div>
              <span className="bg-green-100 px-4 py-2 rounded" style={{ color: '#2a9d5f' }}>Feb 28 - Mar 2</span>
            </div>
            <div className="flex justify-between items-center p-4 border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
              <div>
                <h3 className="font-bold text-lg">Debate Competition</h3>
                <p className="text-gray-600">Inter-school debate tournament on current affairs</p>
              </div>
              <span className="bg-green-100 px-4 py-2 rounded" style={{ color: '#2a9d5f' }}>Mar 15</span>
            </div>
            <div className="flex justify-between items-center p-4 border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
              <div>
                <h3 className="font-bold text-lg">Cultural Night</h3>
                <p className="text-gray-600">Music, dance, and dramatic performances</p>
              </div>
              <span className="bg-green-100 px-4 py-2 rounded" style={{ color: '#2a9d5f' }}>Apr 5</span>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#2a9d5f' }}>Clubs & Associations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-bold mb-2">🎭 Drama Club</h3>
              <p className="text-gray-600">Theater, acting, and stagecraft</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-bold mb-2">⚽ Sports Club</h3>
              <p className="text-gray-600">Various sports and fitness activities</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-bold mb-2">🎨 Arts & Crafts Club</h3>
              <p className="text-gray-600">Painting, drawing, and creative projects</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-bold mb-2">💻 Tech Club</h3>
              <p className="text-gray-600">Coding, robotics, and innovation</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
