import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Get in touch
            </h2>
            <p className="text-gray-600 mb-8">
              Talk to our team about connectivity, infrastructure, or smart
              devices for your home, business, or community.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Visit Us</h4>
                  <p className="text-gray-600">
                    22 Magwa Cres, Waterfall, Midrand, Johannesburg 2066
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Call Us</h4>
                  <p className="text-gray-600">068 172 6171</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Email Us</h4>
                  <p className="text-gray-600">info@heiventechnologies.co.za</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Website</h4>
                  <a
                    href="https://www.heiventechnologies.co.za"
                    className="text-accent hover:underline"
                  >
                    www.heiventechnologies.co.za
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-6">
              Send us a message
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
