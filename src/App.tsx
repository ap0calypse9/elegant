import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AnimatedMetrics from './components/AnimatedMetrics';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AnimatedMetrics />
      <About />
      <Footer />
    </div>
  );
}

export default App;