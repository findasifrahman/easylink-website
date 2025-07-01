export default function MissionVision() {
  return (
    <section id="mission" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  To bridge the gap between international businesses and the Chinese market by providing comprehensive, reliable, and efficient consulting services that enable seamless business operations and growth.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Simplify business registration processes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Provide expert visa and immigration support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Ensure compliance with local regulations
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Vision */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl transform transition-all duration-300 hover:shadow-3xl hover:scale-105 text-white">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              </div>
              <div className="space-y-4">
                <p className="text-blue-100 leading-relaxed">
                  To become the leading consulting firm in China, recognized for excellence in facilitating international business success and fostering global partnerships that drive economic growth and cultural exchange.
                </p>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Global business expansion facilitator
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Trusted partner for international success
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Innovation in business consulting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Trust', desc: 'Building lasting relationships' },
              { icon: '⚡', title: 'Efficiency', desc: 'Streamlined processes' },
              { icon: '🎯', title: 'Excellence', desc: 'Quality in everything' },
              { icon: '🌍', title: 'Global', desc: 'Worldwide perspective' }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 