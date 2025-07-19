import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AnimatedBackground from './components/AnimatedBackground';
import AnimatedMetrics from './components/AnimatedMetrics';
import About from './components/About';
import Footer from './components/Footer';
import WebDevShowcase from './WebDevShowcase'; // <- your new page

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Header />
              <AnimatedBackground />
              <Hero />
              <Services />
              <AnimatedMetrics />
              <About />
              <Footer />
            </div>
          }
        />
        <Route path="/web-dev" element={<WebDevShowcase />} />
      </Routes>
    </Router>
  );
}

export default App;
