'use client'

import { useState } from 'react'

const serviceDetails: Record<string, string[]> = {
  'Company Setup': [
    'Registration of Wholly Foreign Owned Enterprise (including HK/Macau/Taiwan)',
    'Registration of Joint Venture',
    'Registration of Foreign Representative Office',
    'Hong Kong Company Registration',
    'Registration of Branch Office',
  ],
  'Change Information': [
    'Change Company Name',
    'Change Legal Representative (chief representative)',
    'Increase General Representative (R.O.)',
    'Change Business Scope',
    'Change Registration Capital',
    'Change Shareholder',
    'Change Address',
    'Extend Business License',
  ],
  'License & Certificate': [
    'Import & Export license',
    'Change information of Import & Export License',
    'Food Operation License',
    'Hygienic License (beauty salon, gymnasium, etc)',
    'China Trademark Application',
    'Labor Dispatch Permit',
  ],
  'Tax': [
    'Tax Return Service',
    'Individual income tax remittance',
    'Company Annual Inspection',
    'Tax planning consulting (VAT, EIT, PIT)',
  ],
  'Accounting': [
    'Account solutions',
    'Software and automation',
  ],
  'Legal Advice': [
    'Advice on China law',
    'How to legally do business',
    'What not to do in China',
  ],
}

type Service = {
  icon: string
  title: keyof typeof serviceDetails
  description: string
  gradient: string
}

const services: Service[] = [
  {
    icon: '🏢',
    title: 'Company Setup',
    description: 'Complete business registration and incorporation services for foreign companies in China.',
    gradient: 'from-blue-500 to-blue-400',
  },
  {
    icon: '🔄',
    title: 'Change Information',
    description: 'Update company details, legal representatives, shareholders, and more.',
    gradient: 'from-green-500 to-green-400',
  },
  {
    icon: '📄',
    title: 'License & Certificate',
    description: 'Obtain and manage all necessary business licenses and certificates.',
    gradient: 'from-purple-500 to-purple-400',
  },
  {
    icon: '💰',
    title: 'Tax',
    description: 'Comprehensive tax consulting, compliance, and optimization strategies.',
    gradient: 'from-pink-500 to-pink-400',
  },
  {
    icon: '📊',
    title: 'Accounting',
    description: 'Professional bookkeeping, financial reporting, and automation solutions.',
    gradient: 'from-yellow-500 to-yellow-400',
  },
  {
    icon: '⚖️',
    title: 'Legal Advice',
    description: 'Expert legal advice on doing business in China, compliance, and risk management.',
    gradient: 'from-cyan-500 to-cyan-400',
  },
]

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive business solutions tailored to your needs, from startup to expansion.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden relative"
            >
              <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white text-center`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button
                  className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`service-details-${idx}`}
                >
                  {openIndex === idx ? 'Hide Details' : 'Learn More →'}
                </button>
                {/* Details Section */}
                {openIndex === idx && (
                  <div
                    id={`service-details-${idx}`}
                    className="mt-4 bg-blue-50 rounded-lg p-4 text-sm text-left animate-fade-in"
                  >
                    <ul className="list-disc pl-5 space-y-1">
                      {serviceDetails[service.title].map((item: string, i: number) => (
                        <li
                          key={i}
                          className={i % 2 === 1 ? 'text-blue-700 font-semibold' : 'text-gray-700'}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let us help you navigate the complexities of doing business in China with our expert consulting services.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 