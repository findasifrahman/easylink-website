import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700', '400'] })

const heroCards = [
  {
    text: 'Company Registration in Guangzhou',
    bg: 'from-blue-500 to-blue-400',
    shadow: 'shadow-blue-300',
  },
  {
    text: 'Hong Kong, Tax and Accounting in China',
    bg: 'from-green-500 to-green-400',
    shadow: 'shadow-green-300',
  },
  {
    text: 'License & Certificate & Trademark',
    bg: 'from-purple-500 to-purple-400',
    shadow: 'shadow-purple-300',
  },
  {
    text: 'Change Legal Representative and Information',
    bg: 'from-pink-500 to-pink-400',
    shadow: 'shadow-pink-300',
  },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.7)' }}
        />
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 opacity-80 mix-blend-multiply"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Cards above main text */}
        <div className="w-full flex flex-wrap justify-center gap-4 mb-6 mt-8 px-2">
          {heroCards.slice(0, 2).map((card, i) => (
            <div
              key={i}
              className={`bg-gradient-to-r ${card.bg} ${card.shadow} rounded-2xl px-6 py-4 min-w-[220px] max-w-xs text-white font-semibold text-center text-base sm:text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in`}
              style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12)' }}
            >
              {card.text}
            </div>
          ))}
        </div>

        {/* Main Title & Subtitle - much closer to top */}
        <div className={`w-full flex flex-col items-center pt-2 sm:pt-4 md:pt-6 ${montserrat.className}`}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-2 text-center text-white drop-shadow-xl tracking-tight">
            Your Business, Our Solution
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl mb-6 text-blue-50 leading-relaxed text-center max-w-2xl mx-auto drop-shadow-lg font-medium">
            Company setup, visa services, accounting, and global expansion from the heart of China.
          </p>
        </div>

        {/* Cards below main text */}
        <div className="w-full flex flex-wrap justify-center gap-4 mb-6 px-2">
          {heroCards.slice(2).map((card, i) => (
            <div
              key={i}
              className={`bg-gradient-to-r ${card.bg} ${card.shadow} rounded-2xl px-6 py-4 min-w-[220px] max-w-xs text-white font-semibold text-center text-base sm:text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in`}
              style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12)' }}
            >
              {card.text}
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="animate-slide-up mt-2 flex flex-col items-center gap-2">
          <button className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-blue-50">
            Get a Free Consultation
          </button>
          <a
            href="tel:+8618989410063"
            className="mt-2 inline-flex items-center text-white text-lg font-semibold hover:text-blue-200 transition-colors duration-200 drop-shadow"
          >
            <svg className="w-5 h-5 mr-2 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +86 18989410063
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Logo at the right bottom corner */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-30 flex justify-end">
        <img
          src="/logo.png"
          alt="Easy Link Logo"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-2xl bg-white/80 p-2 animate-fade-in"
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-1000 z-10"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-500 z-10"></div>
    </section>
  )
} 