import React, { useState, useEffect, useRef } from 'react';
import { FileText, Globe, Image, Users, Award, Zap } from 'lucide-react';

const metrics = [
  {
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    value: 5666,
    label: 'Papers Published',
    suffix: '+'
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-600" />,
    value: 25,
    label: 'Websites Created',
    suffix: '+'
  },
  {
    icon: <Image className="w-8 h-8 text-green-600" />,
    value: 100,
    label: 'Posters Designed',
    suffix: '+'
  },
  {
    icon: <Users className="w-8 h-8 text-orange-600" />,
    value: 500,
    label: 'Happy Clients',
    suffix: '+'
  },
  {
    icon: <Award className="w-8 h-8 text-indigo-600" />,
    value: 6,
    label: 'Road So Far',
    suffix: '+ years'
  },
  {
    icon: <Zap className="w-8 h-8 text-pink-600" />,
    value: 475,
    label: 'Projects Completed',
    suffix: '+'
  }
];

const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, value, duration]);

  return <span ref={countRef}>{count}</span>;
};

const AnimatedMetrics = () => {
  return (
    <section id="metrics" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and client satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                <AnimatedCounter value={metric.value} />
                {metric.suffix}
              </div>
              <p className="text-gray-600 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedMetrics;