import React from "react";
import { motion } from "framer-motion";


const CTABanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="max-w-5xl mx-auto text-center mt-28 bg-gradient-to-r from-purple-600/70 to-blue-600/70 backdrop-blur-xl p-12 rounded-2xl shadow-xl border border-white/10 mb-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Start Learning?
      </h2>
      <p className="text-gray-200 mb-8">
        Take your career to the next level with our professional courses.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-lg bg-white text-[#0a0a23] font-semibold hover:bg-gray-200 transition"
      >
        Browse All Courses
      </motion.button>
    </motion.div>
  );
};

export default CTABanner;
