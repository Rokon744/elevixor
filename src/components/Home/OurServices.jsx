"use client";

import React from "react";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Graphics Design",
    desc: "Creative and visually stunning designs for brands.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-pink-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12V4m0 0l3 3m-3-3L9 7" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    desc: "Custom, fast, and responsive websites & web apps.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-indigo-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h18" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    desc: "Boost your online presence and reach your audience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-purple-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v5l-8 5-8-5V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6m0 0l-3-3m3 3l3-3" />
      </svg>
    ),
  },
  {
    title: "Business Consulting",
    desc: "Strategic advice to grow and scale your business.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: "Ecommerce Store Management",
    desc: "Complete solutions to manage and grow your store.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-green-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v6H3V3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 9v11H8V9" />
      </svg>
    ),
  },
  {
    title: "Content Marketing",
    desc: "Engaging content to attract and retain customers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V7h18v12a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 3h10v4H7V3z" />
      </svg>
    ),
  },
  {
    title: "SEO",
    desc: "Rank higher and get discovered in search results.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-teal-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-4h6v4m-3-8h.01" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

// Variants for staggered animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const OurServices = () => {
  return (
    <section className="mt-20">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl font-semibold mb-8 text-center"
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map(({ title, desc, icon }, i) => (
          <motion.div
            key={title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={i}
            className="bg-gradient-to-br from-[#16163a] to-[#241c44] p-6 rounded-lg shadow-lg backdrop-blur-md border border-indigo-700 hover:border-purple-600 transition-colors"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;