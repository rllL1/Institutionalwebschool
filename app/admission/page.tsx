export default function Admission() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-8" style={{ color: '#2a9d5f' }}>
          Admission
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Join St. Dominic Savio College and embark on a journey of excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
            <div className="text-4xl font-bold mb-2" style={{ color: '#2a9d5f' }}>5000+</div>
            <p className="text-gray-600">Applications Received Annually</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
            <div className="text-4xl font-bold mb-2" style={{ color: '#2a9d5f' }}>150</div>
            <p className="text-gray-600">Seats Available</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow border-t-4" style={{ borderTopColor: '#2a9d5f' }}>
            <div className="text-4xl font-bold mb-2" style={{ color: '#2a9d5f' }}>95%</div>
            <p className="text-gray-600">Admission Success Rate</p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-lg shadow mb-8">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2a9d5f' }}>Admission Process</h2>
          <ol className="space-y-4 text-gray-700">
            <li className="flex gap-4">
              <span className="font-bold text-lg rounded-full w-8 h-8 flex items-center justify-center text-white" style={{ backgroundColor: '#2a9d5f' }}>1</span>
              <div>
                <span className="font-semibold">Submit the admission form</span>
                <p className="text-sm text-gray-600">Fill out the application with required documents (10th/12th marks, birth certificate, etc.)</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-lg rounded-full w-8 h-8 flex items-center justify-center text-white" style={{ backgroundColor: '#2a9d5f' }}>2</span>
              <div>
                <span className="font-semibold">Appear for entrance examination</span>
                <p className="text-sm text-gray-600">Competitive exam covering core subjects relevant to chosen stream</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-lg rounded-full w-8 h-8 flex items-center justify-center text-white" style={{ backgroundColor: '#2a9d5f' }}>3</span>
              <div>
                <span className="font-semibold">Merit-based selection and counseling</span>
                <p className="text-sm text-gray-600">Selected candidates invited for counseling and stream allocation</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-lg rounded-full w-8 h-8 flex items-center justify-center text-white" style={{ backgroundColor: '#2a9d5f' }}>4</span>
              <div>
                <span className="font-semibold">Document verification and enrollment</span>
                <p className="text-sm text-gray-600">Final verification and official enrollment in the college</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2a9d5f' }}>Eligibility Criteria</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ 10+2 from recognized board</li>
              <li>✓ Minimum 45% in qualifying exam</li>
              <li>✓ Age: 16-19 years (as per board guidelines)</li>
              <li>✓ No subject restrictions for any stream</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#2a9d5f' }}>Important Dates</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Form Release:</strong> May 15</li>
              <li><strong>Last Date:</strong> June 30</li>
              <li><strong>Entrance Exam:</strong> July 15-16</li>
              <li><strong>Results:</strong> July 25</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105" 
            style={{ backgroundColor: '#2a9d5f', color: 'white' }}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
