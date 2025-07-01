export default function Testimonials() {
  const testimonials = [
    {
      text: `We have made great progress in our business in China after using their services. They provided a very prompt and professional branch registration service that helped us expand our business smoothly. Their support has strengthened our presence in the Chinese market and we are very satisfied with their services.`,
      author: "Nanhita Ram",
      position: "Chairman, Multiple Group",
    },
    {
      text: `With their help, we successfully obtained our import and export license, which has brought us a big step forward in our business development in China. Their professional guidance and efficient processing enabled us to conduct international trade more smoothly and we are very impressed with their services.`,
      author: "Ahmed Hassanov",
      position: "Chairman, Multiple Group",
    },
    {
      text: `Your work visa service has been a great help to our business development in China, and my wife and daughter have successfully settled in China with your help. Thanks to their support, we have been able to have smoother talent recruitment and staff management, which has boosted our business growth in the Chinese market. With your professional help, we have made remarkable progress.`,
      author: "Mohammed Harridy",
      position: "Chairman, Multiple Group",
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Easy Link.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 border border-gray-100 flex flex-col justify-between"
            >
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              
              <blockquote className="italic text-gray-700 leading-relaxed mb-6">
                “{testimonial.text}”
              </blockquote>
              
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-blue-700 font-medium">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Statistics */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '50+', label: 'Countries Served' },
            { number: '98%', label: 'Success Rate' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 