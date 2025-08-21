import React from "react";
import { motion } from "framer-motion";

const CourseHero = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-20 pt-20 md:pt-40"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Explore Our Courses
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Upgrade your skills with high-quality courses crafted by industry
          experts. Learn at your own pace with lifetime access.
        </p>
      </motion.div>
    </div>
  );
};

export default CourseHero;
