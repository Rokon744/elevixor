"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import banner from "@/assets/banner.png";
import { PiPhoneCallFill } from "react-icons/pi";

// Animation variants for reusable effects
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Hero = () => {
  return (
    <section className="min-h-[80vh] pt-32 md:pt-0 flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20 overflow-hidden">
      {/* Left side - text */}
      <div className="md:w-1/2 space-y-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          We Build Digital <br /> Solutions That Matter
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: false, amount: 0.2 }}
          className="text-gray-300 max-w-md"
        >
          We provide innovative solutions to help businesses grow and succeed
          in the digital world.
        </motion.p>

        <motion.a
          href="tel:+8801817903026"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          viewport={{ once: false, amount: 0.2 }}
          className="text-gray-300 max-w-md flex items-center gap-5"
        >
          <PiPhoneCallFill className="text-2xl text-indigo-600" />
          <span>+880 1817-903026</span>
        </motion.a>

        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-md text-white font-semibold hover:scale-105 transition-transform duration-300"
        >
          Get a Quote
        </motion.button>
      </div>

      {/* Right side - image and stats */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.2 }}
        className="md:w-1/2 flex justify-center relative"
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
          className="absolute text-center top-20 left-[40%]"
        >
          <span className="font-bold text-xl">200+</span>
          <br />
          <span>Completed Projects</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
          className="absolute text-center bottom-20 left-5"
        >
          <span className="font-bold text-xl">150+</span> <br />
          <span>Happy Clients</span>
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src={banner}
            alt="Laptop neon code"
            width={700}
            height={500}
            className="rounded-lg"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
          className="absolute text-center bottom-20 right-5"
        >
          <span className="font-bold text-xl">5+</span>
          <br />
          <span>Years of Experience</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
