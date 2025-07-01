export default function ChairmanVideo() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Message from Our Chairman
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative transform transition-all duration-500 hover:scale-105 hover:rotate-1">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <video
                src="/videos/chairman-message.mp4"
                controls
                autoPlay
                muted
                loop
                poster="/videos/chairman-poster.jpg"
                className="w-full aspect-video rounded-2xl shadow-lg bg-black"
              >
                Sorry, your browser does not support embedded videos.
              </video>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-600 rounded-2xl -z-10 transform rotate-2"></div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Chairman Sheikh Korban Ali shares our vision for global collaboration and the future of international business partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 