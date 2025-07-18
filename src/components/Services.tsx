import React from 'react';
import { Palette, Globe, PenTool, TrendingUp, Brain, Image } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="w-12 h-12 text-green-600" />,
    title: 'Content Writing',
    description: 'Crafting compelling content that resonates with your audience and drives action across all platforms.',
    features: ['Blog Writing', 'Copy Writing', 'SEO Content', 'Social Media Content']
  },
  {
    icon: <Palette className="w-12 h-12 text-blue-600" />,
    title: 'Modern UI/UX Design',
    description: 'Creating stunning posters, banners, and thumbnails that capture attention and communicate your message effectively.',
    features: ['Poster Design', 'Banner Creation', 'Thumbnail Design', 'Brand Identity']
  },
  {
    icon: <Globe className="w-12 h-12 text-purple-600" />,
    title: 'Website Development',
    description: 'Building responsive, fast, and user-friendly websites that drive engagement and conversions.',
    features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'Performance Optimization']
  },
  
  {
    icon: <TrendingUp className="w-12 h-12 text-orange-600" />,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that amplify your brand reach and maximize ROI through data-driven approaches.',
    features: ['Social Media Marketing', 'SEO Optimization', 'PPC Campaigns', 'Analytics & Reporting']
  },
  {
    icon: <Brain className="w-12 h-12 text-indigo-600" />,
    title: 'AI Solutions',
    description: 'Leveraging artificial intelligence to automate processes, enhance user experiences, and drive innovation.',
    features: ['AI Integration', 'Machine Learning', 'Automation', 'Data Analysis']
  },
  {
    icon: <Image className="w-12 h-12 text-pink-600" />,
    title: 'Creative Design',
    description: 'Comprehensive design solutions that blend creativity with functionality for maximum impact.',
    features: ['Logo Design', 'Brand Guidelines', 'Print Design', 'Digital Assets']
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-white/70 backdrop-blur-sm z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of digital services designed to elevate your brand and drive results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;