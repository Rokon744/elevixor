import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { courses } from "@/db/coursesData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const CourseItems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {courses.map((course, i) => (
        <motion.div
          key={course.id}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={i}
          className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-purple-700/30 hover:scale-[1.03] transition-transform duration-300 p-6"
        >
          <Image
            src={course.image}
            alt={course.title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">{course.title}</h3>
          <p className="text-gray-300 text-sm mt-2">{course.desc}</p>
          <p className="text-purple-400 font-bold mt-4">{course.price}</p>
          <div className="flex justify-between items-end">
            <Link
              href={`/courses/${course.id}`}
              className="inline-block mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition"
            >
              More Info
            </Link>
            <button className="mt-6 bg-indigo-500 px-5 py-2 text-white rounded-lg hover:bg-indigo-600 transition">
              Enroll Now
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CourseItems;
