import React from 'react';
import { useNavigate } from 'react-router-dom';

const showcaseData = [
  {
    title: "Serene",
    image: "/cafe.png", // store preview in /public
    description: "A clean responsive cafe site with menu, gallery, and contact.",
    link: "https://serene-cafee.netlify.app/",
  },
  {
    title: "Sakhi Salon",
    image: "/salon.png",
    description: "Experience the finest salon services with our expert stylists and premium products. Every service is designed to enhance your natural beauty",
    link: "https://sakhi-salon.netlify.app/",
  },
  {
    title: "Nirmala Homestay",
    image: "/homestay.png",
    description: "Experience the serenity of Darjeeling's hills in our traditional mountain homestay, where warm hospitality meets breathtaking Himalayan views",
    link: "https://nirmala-stay.netlify.app/",
  },
];

const WebDevShowcase = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold mb-6">Web Development Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {showcaseData.map((item, index) => (
          <div key={index} className="rounded-xl shadow-lg border p-4 hover:shadow-xl transition">
            <img src={item.image} alt={item.title} className="rounded-md w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
            <p className="mt-2 text-gray-600">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Visit Site →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebDevShowcase;
