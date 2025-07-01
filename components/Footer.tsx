export default function Footer() {
  const languages = ['EN', 'FR', 'AR', 'BN']
  const currentYear = new Date().getFullYear()
  const address = "Room 13D, 13th Floor, Rongjian Building, No. 29, Construction Six Road, Yuexiu District, Guangzhou";

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">EL</span>
              </div>
              <h3 className="text-xl font-bold">Easy Link</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner for business success in China.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <span className="font-semibold">Address:</span> {address}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          {/* Language & QR Code */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Language</h4>
            <div className="flex space-x-2 mb-6">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className={`px-3 py-1 rounded text-sm ${
                    lang === 'EN' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <div className="text-center">
              <h5 className="text-sm font-medium mb-2">WeChat QR Code</h5>
              <div className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center mx-auto">
                <span className="text-2xl">📱</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} Easy Link. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 