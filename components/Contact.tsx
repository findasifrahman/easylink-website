export default function Contact() {
  const address = "Room 13D, 13th Floor, Rongjian Building, No. 29, Construction Six Road, Yuexiu District, Guangzhou";
  return (
    <section id="contact" className="section-padding bg-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Talk
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your business journey in China? Get in touch with us today for a free consultation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">{address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+8618989410063" className="text-blue-600 hover:text-blue-800 transition-colors">
                      +86 18989410063
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:info@easylinkchina.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                      info@easylinkchina.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
                {/* WeChat QR Code */}
                <div className="mt-8 text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">WeChat (Weixin) QR</h4>
                  <img
                    src="/wechat-korbanali.png"
                    alt="WeChat QR for korbanali"
                    className="w-32 h-32 mx-auto rounded-lg shadow-lg border border-gray-200 bg-white"
                  />
                  <div className="mt-2 text-sm text-gray-600">Weixin ID: <span className="font-semibold">korbanali</span></div>
                  <a href="/wechat-korbanali.png" download className="text-blue-600 hover:underline text-xs mt-1 inline-block">Download QR</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map and Contact Form */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="text-gray-600 font-medium">{address}</p>
                  <p className="text-sm text-gray-500">Guangzhou, China</p>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 text-sm text-gray-600 shadow">
                  📍 Our Location
                </div>
              </div>
            </div>
            
            {/* Quick Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 