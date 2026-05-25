import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products"; // ✅ Added
import CTA from "./components/CTA";
import Contact from "./components/Contact"; // ✅ Added
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products /> {/* ✅ Added */}
        <CTA />
        <Contact /> {/* ✅ Added */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
