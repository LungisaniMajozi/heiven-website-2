import { Wifi, Antenna, ShoppingBag, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Wifi className="w-8 h-8 text-accent" />,
    title: "Heiven Fiber",
    desc: "Faster, more affordable internet for every home and community.",
    link: "#",
  },
  {
    icon: <Antenna className="w-8 h-8 text-accent" />, // ✅ Changed from Tower to Antenna
    title: "Heiven TowerCo",
    desc: "Telecommunications infrastructure maintenance and installations.",
    link: "#",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-accent" />,
    title: "Heiven Stores",
    desc: "Online and physical retail for Heiven and leading tech brands.",
    link: "#",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-accent" />,
    title: "Heiven Mobile",
    desc: "Smartphones for a smart life - built for every need and budget.",
    link: "#",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            What We Do
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Integrated solutions across telecommunications, infrastructure, and
            smart retail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group"
            >
              <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <a
                href={service.link}
                className="text-accent font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
