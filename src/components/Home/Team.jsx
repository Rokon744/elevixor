"use client";
import React from "react";
import rokon from "@/assets/Home/rokon.jpg";
import rion from "@/assets/Home/rion.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "AH Rion", role: "CEO & Graphics Designer", image: rion },
  { name: "Md Rokon", role: "Web Developer", image: rokon },
  { name: "Md Asif", role: "Digital Marketer", image: rion },
  { name: "David Brown", role: "Project Manager", image: rion },
  { name: "Sarah Lee", role: "Graphics Designer", image: rion },
  { name: "James Carter", role: "Business Consultant", image: rion },
  { name: "Emily Clark", role: "Content Marketer", image: rion },
  { name: "Robert Wilson", role: "SEO Specialist", image: rion },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const card = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
};

export default function Team() {
  return (
    <section className="py-16">
      <div className="px-4">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Team
        </motion.h2>

        {/* Team Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
              variants={card}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="bg-white/5 rounded-xl p-6 text-center backdrop-blur-md border border-white/10 hover:border-purple-500 transition"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-500 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}