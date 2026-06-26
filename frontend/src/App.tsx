import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Metrics } from "./components/Metrics";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PortfolioChatBot } from "./components/PortfolioChatBot";
import { NeuralNetworkBG } from "./components/NeuralNetworkBG";

function App() {
  return (
    <div className="relative min-h-screen text-text-primary grain-overlay">
      {/* 3D Animated Neural Network Canvas */}
      <NeuralNetworkBG />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Container Layout */}
      <main className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Metrics />
        <Certifications />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating AI RAG Assistant */}
      <PortfolioChatBot />
    </div>
  );
}

export default App;
