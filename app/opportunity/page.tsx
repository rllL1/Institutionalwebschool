export default function Opportunity() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8" style={{ color: '#2a9d5f' }}>
          Opportunities
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore career opportunities and growth pathways for our students and alumni.
        </p>

        <div className="space-y-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
            <div className="flex gap-4">
              <div className="text-3xl">🎓</div>
              <div>
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#2a9d5f' }}>Internship Programs</h2>
                <p className="text-gray-600 mb-3">Gain practical experience with leading companies and organizations across various sectors.</p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• 6-month internships during summer break</li>
                  <li>• Stipend and certificate upon completion</li>
                  <li>• Exposure to real-world industry practices</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
            <div className="flex gap-4">
              <div className="text-3xl">💼</div>
              <div>
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#2a9d5f' }}>Campus Recruitment</h2>
                <p className="text-gray-600 mb-3">Top recruiters visit our campus for final placement opportunities with competitive packages.</p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• 85%+ placement rate</li>
                  <li>• Average package: ₹5-8 LPA</li>
                  <li>• Pre-placement training and guidance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
            <div className="flex gap-4">
              <div className="text-3xl">🏆</div>
              <div>
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#2a9d5f' }}>Scholarship Programs</h2>
                <p className="text-gray-600 mb-3">Merit-based and need-based scholarships to support deserving and underprivileged students.</p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Merit scholarships up to 50% tuition</li>
                  <li>• Need-based assistance available</li>
                  <li>• Sports and arts scholarships</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
            <div className="flex gap-4">
              <div className="text-3xl">🤝</div>
              <div>
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#2a9d5f' }}>Alumni Network</h2>
                <p className="text-gray-600 mb-3">Connect with successful alumni for mentorship, networking, and professional guidance.</p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• 5000+ alumni across industries</li>
                  <li>• Monthly networking events</li>
                  <li>• Mentorship program with seniors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
            <div className="flex gap-4">
              <div className="text-3xl">🚀</div>
              <div>
                <h2 className="text-2xl font-bold mb-3" style={{ color: '#2a9d5f' }}>Entrepreneurship support</h2>
                <p className="text-gray-600 mb-3">Incubation center supporting student-led startups with mentorship and resources.</p>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Business plan and pitch coaching</li>
                  <li>• Access to seed funding networks</li>
                  <li>• Workspace and technical support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2a9d5f' }}>Top Recruiting Companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-gray-50 rounded">Infosys</div>
            <div className="p-4 bg-gray-50 rounded">TCS</div>
            <div className="p-4 bg-gray-50 rounded">Accenture</div>
            <div className="p-4 bg-gray-50 rounded">HDFC Bank</div>
            <div className="p-4 bg-gray-50 rounded">ICICI Bank</div>
            <div className="p-4 bg-gray-50 rounded">Google</div>
            <div className="p-4 bg-gray-50 rounded">Microsoft</div>
            <div className="p-4 bg-gray-50 rounded">Amazon</div>
          </div>
        </div>
      </div>
    </div>
  );
}
