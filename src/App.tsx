import React from 'react';
import Header from './components/Header';
import BlobBackground from "./components/AnimatedBackgrotund";
import Hero from './components/Hero';
import Services from './components/Services';
import AnimatedMetrics from './components/AnimatedMetrics';
import About from './components/About';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackgrotund';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
       <AnimatedBackground/>
      <Hero />
      <Services />
      <AnimatedMetrics />
      <About />
      <Footer />
    </div>
  );
}

export default App;