export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ABOUT US
            </h2>
            <div className="w-16 h-1 bg-accent mb-6"></div>
            <p className="text-gray-600 text-lg mb-6">
              A provider of ICT infrastructure, telecom services and smart
              devices. With integrated solutions across multiple domains within
              telecommunications and consumer electronics, we are committed to
              bridging the digital gap, connecting the world and equipping
              people with high quality smart products and services.
            </p>
            <div className="bg-light p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-primary text-lg">Moteng Moseri</h3>
              <p className="text-gray-500">Founder and CEO</p>
            </div>
          </div>
          <div className="bg-gray-100 h-80 md:h-96 rounded-2xl flex items-center justify-center text-gray-400">
            {/* Replace with actual team/office image */}
            <img
              src="/images/ha.png"
              alt="Heiven Team"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
