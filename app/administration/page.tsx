export default function Administration() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8" style={{ color: '#2a9d5f' }}>
          Administration
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Meet the leadership team dedicated to academic excellence and institutional development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-12">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
            <div className="text-3xl mb-2">👨‍💼</div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#2a9d5f' }}>Principal</h2>
            <p className="text-gray-600 mb-2 font-semibold">Dr. John Smith</p>
            <p className="text-gray-600 mb-4">Ph.D. in Education, 25+ years of experience</p>
            <p className="text-gray-600">Leading the institution with vision and dedication to educational excellence and student welfare.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
            <div className="text-3xl mb-2">👩‍🏫</div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#2a9d5f' }}>Vice Principal - Academics</h2>
            <p className="text-gray-600 mb-2 font-semibold">Dr. Sarah Johnson</p>
            <p className="text-gray-600 mb-4">M.Sc. Physics, M.Ed</p>
            <p className="text-gray-600">Overseeing academic programs, curriculum development, and quality assurance across all streams.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
            <div className="text-3xl mb-2">💰</div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#2a9d5f' }}>Finance Officer</h2>
            <p className="text-gray-600 mb-2 font-semibold">Mr. Robert Davis</p>
            <p className="text-gray-600 mb-4">B.Com, CA Candidate</p>
            <p className="text-gray-600">Managing institutional finances, budgeting, auditing, and resource optimization for sustainable growth.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition-shadow border-l-4" style={{ borderLeftColor: '#2a9d5f' }}>
            <div className="text-3xl mb-2">📋</div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#2a9d5f' }}>Registrar</h2>
            <p className="text-gray-600 mb-2 font-semibold">Ms. Emily Wilson</p>
            <p className="text-gray-600 mb-4">M.A. English, Diploma in Office Management</p>
            <p className="text-gray-600">Handling admissions, student records, examinations, and maintaining institutional documentation.</p>
          </div>
        </div>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#2a9d5f' }}>Departments & Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="pb-6 border-b">
              <h3 className="font-bold text-lg mb-2">Science Department</h3>
              <p className="text-gray-600">Coordinator: Dr. Rajesh Kumar</p>
            </div>
            <div className="pb-6 border-b">
              <h3 className="font-bold text-lg mb-2">Commerce Department</h3>
              <p className="text-gray-600">Coordinator: Mr. Arjun Patel</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">Arts Department</h3>
              <p className="text-gray-600">Coordinator: Ms. Priya Sharma</p>
            </div>
            <div className="pb-6">
              <h3 className="font-bold text-lg mb-2">Student Welfare</h3>
              <p className="text-gray-600">Coordinator: Mr. Vikram Singh</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
