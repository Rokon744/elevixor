import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutHero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] px-6 text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          About <span className="text-indigo-400">Elevixor</span>
        </h1>
        <p className="mt-6 text-lg text-gray-400">
          We help brands grow in the digital world by providing expert web
          development, design, and marketing solutions tailored to their goals.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
