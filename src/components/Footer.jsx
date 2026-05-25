export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Heiven Technologies
            </h3>
            <p className="text-sm">
              Bridging the digital gap with high quality connectivity and smart
              products.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-accent">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent">
                  Smart Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 22 Magwa Cres, Waterfall, Midrand, Johannesburg 2066</li>
              <li>📞 068 172 6171</li>
              <li>✉️ info@heiventechnologies.co.za</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Website</h4>
            <p className="text-sm">www.heiventechnologies.co.za</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Heiven Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
