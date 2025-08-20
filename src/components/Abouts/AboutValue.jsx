import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutValue = () => {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Our Core Values
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
          We believe in innovation, transparency, and results. Every project we
          take on is built on these principles.
        </p>
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {[
            {
              title: "Innovation",
              desc: "Always exploring new ideas and creative solutions.",
            },
            {
              title: "Transparency",
              desc: "Clear communication and honest collaboration.",
            },
            {
              title: "Results",
              desc: "Delivering measurable success to every client.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUp}
              className="p-6 bg-[#1a1a3a] rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-indigo-400">
                {value.title}
              </h3>
              <p className="mt-2 text-gray-400">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutValue;
