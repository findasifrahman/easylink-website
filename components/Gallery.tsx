export default function Gallery() {
  const galleryImages = [
    { id: 1, src: '/journey/1.png', title: 'Team Meeting', category: 'Office' },
    { id: 2, src: '/journey/2.png', title: 'Client Consultation', category: 'Business' },
    { id: 3, src: '/journey/3.png', title: 'Guangzhou Office', category: 'Location' },
    { id: 4, src: '/journey/4.png', title: 'Document Processing', category: 'Services' },
    { id: 5, src: '/journey/5.png', title: 'International Team', category: 'Team' },
    { id: 6, src: '/journey/6.png', title: 'Business Success', category: 'Achievement' },
  ]

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Journey in Pictures
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a glimpse into our world and see how we help businesses succeed in China.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            >
              {/* Gallery Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover object-center rounded-xl transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gallery Navigation */}
        <div className="text-center mt-12">
          <div className="flex justify-center space-x-2">
            {[1, 2].map((page) => (
              <button
                key={page}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  page === 1 ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Follow us on social media to see more behind-the-scenes content and stay updated with our latest projects and success stories.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/company/easylink-gunagzhou"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Follow on Linkedin
              </a>
              <a
                href="https://www.youtube.com/@GZEasyLink"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Follow on YouTube
              </a>
              <a
                href="https://facebook.com/easylinkgz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 