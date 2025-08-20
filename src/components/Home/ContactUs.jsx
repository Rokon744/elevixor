"use client";
import React from "react";
import map from "@/assets/Home/map.avif";
import Image from "next/image";
import { motion } from "framer-motion";

// Container animation (stagger children)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Field animation (fade + slide-up)
const field = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 15 },
  },
};

export default function ContactUs() {
  return (
    <section className="py-16 bg-[#0a0a23] text-white relative px-6">
      {/* Background Map */}
      <div className="absolute inset-0">
        <Image
          src={map}
          alt="Map Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact Us
        </motion.h2>

        {/* Form */}
        <motion.form className="space-y-6" variants={container}>
          <motion.input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 
                       focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 
                       outline-none transition"
            variants={field}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          />
          <motion.input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 
                       focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 
                       outline-none transition"
            variants={field}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          />
          <motion.textarea
            placeholder="Message"
            rows={4}
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 
                       focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 
                       outline-none transition"
            variants={field}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          />
          <motion.button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 
                       hover:opacity-90 active:scale-95 transition font-semibold"
            variants={field}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
