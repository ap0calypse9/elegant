import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Elegant Research Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a forward-thinking digital agency dedicated to transforming businesses through innovative solutions and exceptional design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2019, with a vision to bridge the gap between creativity and technology, Elegant Research Solution has been at the forefront of digital innovation. Our journey began with a simple belief: that every business deserves exceptional digital experiences.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the years, we've evolved into a comprehensive digital partner, helping businesses of all sizes achieve their goals through strategic design, development, and marketing solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we pride ourselves on delivering results that not only meet but exceed our clients' expectations, fostering long-term partnerships built on trust and mutual success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-800 mb-2">Mission</h4>
                <p className="text-sm text-gray-600">Empowering businesses through innovative digital solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
                <Lightbulb className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-800 mb-2">Vision</h4>
                <p className="text-sm text-gray-600">Leading the future of digital transformation</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-800 mb-2">Team</h4>
                <p className="text-sm text-gray-600">Expert professionals passionate about excellence</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
                <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-800 mb-2">Quality</h4>
                <p className="text-sm text-gray-600">Committed to delivering exceptional results</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Innovative Solutions</h4>
                <p className="text-blue-100">We stay ahead of trends to deliver cutting-edge solutions.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Client-Centric Approach</h4>
                <p className="text-blue-100">Your success is our priority, every step of the way.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Proven Results</h4>
                <p className="text-blue-100">Our track record speaks for itself with satisfied clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;