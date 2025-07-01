export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Icon */}
          <div className="relative transform transition-all duration-500 hover:scale-105">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center shadow-2xl">
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Easy Link China</h3>
              <p className="text-blue-100">Your trusted partner in business success</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-600 rounded-2xl -z-10 transform rotate-2"></div>
          </div>
          
          {/* Right Column - Text */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Guangzhou-Based Excellence
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Easy Link is a Guangzhou-based consulting firm that empowers expatriates and Chinese businesses with registration, visa, tax, and hiring services.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">🏢</div>
                <h4 className="font-semibold text-gray-900">Company Setup</h4>
                <p className="text-sm text-gray-600">Complete business registration services</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">📋</div>
                <h4 className="font-semibold text-gray-900">Visa Services</h4>
                <p className="text-sm text-gray-600">Expert visa application assistance</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-semibold text-gray-900">Tax Services</h4>
                <p className="text-sm text-gray-600">Comprehensive tax accoounting service</p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">👥</div>
                <h4 className="font-semibold text-gray-900">Change Information</h4>
                <p className="text-sm text-gray-600">Change Company Name, Address, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 