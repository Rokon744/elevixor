"use client";

import React from "react";
import team from "@/assets/Home/team.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const whyChooseData = [
  {
    title: "Expert Team",
    desc: "Skilled professionals dedicated to delivering the best results.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V10H2v10h5m10 0a3 3 0 11-6 0 3 3 0 016 0zM7 20a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Support",
    desc: "Always here to help with quick and reliable assistance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M8.757 15.243l-2.121 2.121m0-12.728l2.121 2.121m8.486 8.486l2.121 2.121" />
      </svg>
    ),
  },
  {
    title: "Quality",
    desc: "We ensure top-notch standards in every project.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Affordable",
    desc: "Premium services at budget-friendly prices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.66 0 3-1.34 3-3H9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20" />
      </svg>
    ),
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="mt-24">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl font-semibold mb-8 text-center md:text-left"
      >
        Why Choose Us
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-1/2 rounded-lg overflow-hidden"
        >
          <Image
            src={team}
            alt="Team working"
            width={600}
            height={400}
            className="object-cover rounded-2xl"
          />
        </motion.div>

        {/* Right side content */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
            {whyChooseData.map(({ title, desc, icon }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={i}
                className="flex items-start gap-4"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: false }}
                  className="mt-1"
                >
                  {icon}
                </motion.div>
                <div>
                  <h4 className="text-xl font-semibold">{title}</h4>
                  <p className="text-gray-400 md:mt-5">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;