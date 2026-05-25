export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-light to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">
          WE ARE HEIVEN
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-6">
          Connecting the world,
          <br /> everywhere.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          At Heiven we are driven by a simple mission: to make high quality
          connectivity and smart products accessible, available and affordable
          to everyone, everywhere.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#services" className="btn-primary">
            Explore services →
          </a>
          <a href="#contact" className="btn-outline">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
