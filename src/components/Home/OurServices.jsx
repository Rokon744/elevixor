"use client";

import React from "react";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Digital Marketing Services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      "Social Media Marketing (Facebook, Instagram, TikTok Ads)",
      "Google Ads / PPC Campaign",
      "SEO (Search Engine Optimization)",
      "Content Marketing (Blogs, Articles, Copywriting)",
      "Email Marketing & Automation",
    ],
  },
  {
    title: "Web & Tech Services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18v16H3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18" />
      </svg>
    ),
    items: [
      "Website Design & Development",
      "E-commerce Store Setup",
      "Mobile App Development",
      "UI/UX Design",
      "Website Maintenance & Security",
    ],
  },
  {
    title: "Branding & Creative Services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12V4m0 0l3 3m-3-3L9 7" />
      </svg>
    ),
    items: [
      "Logo & Brand Identity Design",
      "Graphic Design (Social Media Post, Banner, Flyer, Brochure)",
      "Motion Graphics & Video Editing",
      "Product Photography & Videography",
    ],
  },
  {
    title: "Business Growth Services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2h6v2m-3 4a9 9 0 100-18 9 9 0 000 18z" />
      </svg>
    ),
    items: [
      "Business Strategy & Consultancy",
      "Market Research & Competitor Analysis",
      "Lead Generation & Sales Funnel Setup",
      "CRM & Marketing Automation",
    ],
  },
  {
    title: "Other Services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6h7m0 0l-3 9m3-9l3 9m-3-9h7" />
      </svg>
    ),
    items: [
      "Influencer Marketing",
      "Event Marketing",
      "Online Reputation Management",
    ],
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
        {servicesData.map(({ title, items, icon }, i) => (
          <motion.div
            key={title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={i}
            className="p-6 rounded-lg shadow-sm border border-gray-200 border-t-[3px] border-t-gray-500 cursor-pointer"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <ul className="list-disc pl-3">
              {items.map((item, ind)=>{
                return <li key={ind}>{item}</li>
              })}
            </ul>
            {/* <p>{desc}</p> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
