import {
  Smartphone,
  Laptop,
  Watch,
  Headphones,
  Server,
  Network,
} from "lucide-react";

const productCategories = [
  {
    icon: <Smartphone className="w-10 h-10 text-accent" />,
    title: "Heiven Mobile",
    desc: "Smartphones for a smart life — exceptional performance, sleek design, and innovative technology for every need and budget.",
    items: ["Heiven X1 Pro", "Heiven Lite", "Heiven Max", "Heiven Go"],
  },
  {
    icon: <Laptop className="w-10 h-10 text-accent" />,
    title: "Computing Devices",
    desc: "Tablets and laptops built for productivity, learning, and entertainment — powered by Heiven reliability.",
    items: ["Heiven Tab S", "Heiven Book Pro", "Heiven EduTab"],
  },
  {
    icon: <Watch className="w-10 h-10 text-accent" />,
    title: "Wearables",
    desc: "Stay connected on the go with smartwatches and earbuds designed for comfort, health, and seamless integration.",
    items: ["Heiven Watch Air", "Heiven Buds Pro", "Heiven Fit Band"],
  },
  {
    icon: <Headphones className="w-10 h-10 text-accent" />,
    title: "Audio & Accessories",
    desc: "Premium sound and essential accessories to enhance your Heiven experience — from cases to chargers.",
    items: [
      "Wireless Earbuds",
      "Power Banks",
      "Protective Cases",
      "Fast Chargers",
    ],
  },
  {
    icon: <Server className="w-10 h-10 text-accent" />,
    title: "Enterprise Equipment",
    desc: "Professional ICT products and networking solutions for businesses — scalable, secure, and support-ready.",
    items: ["Routers & Switches", "ONTs", "Wi-Fi Extenders", "PBX Systems"],
  },
  {
    icon: <Network className="w-10 h-10 text-accent" />,
    title: "Smart Home",
    desc: "Connect and control your home with Heiven smart devices — security, lighting, and automation made simple.",
    items: ["Smart Plugs", "Security Cameras", "Smart Lights", "Voice Hubs"],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Heiven Smart Products
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Quality tech for every need — from personal devices to enterprise
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-light p-6 rounded-xl border border-gray-100 hover:shadow-lg transition group"
            >
              <div className="mb-4 p-4 bg-accent/10 rounded-xl w-fit group-hover:bg-accent/20 transition">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{category.desc}</p>
              <ul className="space-y-1 mb-4">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-500 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="text-accent font-medium text-sm hover:underline inline-flex items-center"
              >
                Inquire now →
              </a>
            </div>
          ))}
        </div>

        {/* PIXEL TECH Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm">
            PIXEL TECH by Heiven
          </div>
          <p className="text-gray-500 text-sm mt-3">
            Premium smart products engineered for performance and affordability.
          </p>
        </div>
      </div>
    </section>
  );
}
