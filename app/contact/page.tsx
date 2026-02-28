export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Hero Section */}
        <div className="w-full bg-white shadow-sm rounded-b-3xl py-16 px-4 text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-green-700">Contact Us</h1>
          <p className="text-xl text-gray-600">We’d love to hear from you. Reach out to us anytime.</p>
        </div>

        {/* Main Content: Contact Info & Map */}
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full mx-auto px-4 mb-12">
          {/* Contact Info Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-6 text-green-700">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-700 border border-green-100">
                  {/* Location Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c.6-1.2 6-7.05 6-11.25A6 6 0 0 0 6 9.75C6 13.95 11.4 19.8 12 21z" />
                    <circle cx="12" cy="9.75" r="2.25" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-green-700 mb-1">Address</p>
                  <p className="text-gray-700">361 JP Rizal St., Ibaan, Philippines 4230</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-700 border border-green-100">
                  {/* Phone Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15 .414 0 .75-.336.75-.75v-3.75a.75.75 0 0 0-.75-.75c-2.485 0-4.5-2.015-4.5-4.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-green-700 mb-1">Contact Number</p>
                  <p className="text-gray-700">043 727 7829</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-700 border border-green-100">
                  {/* Email Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.75 1.682l-7.5 6.075a2.25 2.25 0 0 1-2.5 0l-7.5-6.075A2.25 2.25 0 0 1 2.25 6.993V6.75" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-green-700 mb-1">Email</p>
                  <p className="text-gray-700">sdscibaan@sdsc.edu.ph</p>
                </div>
              </div>
            </div>
          </div>
          {/* Google Map */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg min-h-80">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=361+JP+Rizal+St.,+Ibaan,+Philippines+4230&output=embed"
              width="100%"
              height="100%"
              className="w-full h-80 md:h-full border-0"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Email Us Contact Form Section */}
      <div className="w-full flex justify-center bg-gray-50 pb-16 px-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Email Us</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name<span className="text-red-500">*</span></label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address<span className="text-red-500">*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject<span className="text-red-500">*</span></label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message<span className="text-red-500">*</span></label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 py-2 rounded-lg font-semibold bg-green-700 text-white hover:bg-green-800 transition"
              >
                Submit
              </button>
              <button
                type="reset"
                className="flex-1 py-2 rounded-lg font-semibold border border-gray-300 text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
