"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import webDesign from '@/assets/Home/web-design.webp'
import graphicsDesign from '@/assets/Home/graphic-design.jpg'
import digitalMarketing from '@/assets/Home/digital-marketing.jpg'
import seoOptimizing from '@/assets/Home/seo-optimizing.png'
import ecommerceWebsite from '@/assets/Home/ecommerce-website.png'
import contentMarketing from '@/assets/Home/content-marketing.jpg'

// Sample portfolio data
const portfolioProjects = [
  {
    title: "Branding Project",
    image: graphicsDesign,
    link: "#",
  },
  {
    title: "Ecommerce Website",
    image: ecommerceWebsite,
    link: "#",
  },
  {
    title: "Digital Marketing Campaign",
    image: digitalMarketing,
    link: "#",
  },
  {
    title: "SEO Optimization",
    image: seoOptimizing,
    link: "#",
  },
  {
    title: "Web Application Design",
    image: webDesign,
    link: "#",
  },
  {
    title: "Content Marketing",
    image: contentMarketing,
    link: "#",
  },
];

const Portfolio = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-[#0a0a23] text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          Our Portfolio
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl overflow-hidden relative group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover w-full h-64 rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={project.link}
                  className="text-white text-lg font-semibold border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
                >
                  View Project
                </a>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-center">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
