import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChoose = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="max-w-4xl mx-auto text-center mt-28"
    >
      <h2 className="text-3xl font-bold mb-6">Why Learn With Elevixor?</h2>
      <p className="text-gray-300 mb-12">
        Our courses are designed with practical, hands-on projects so you can
        apply what you learn immediately. Join a growing community of learners
        today.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Lifetime Access", "Certificate of Completion", "Expert Mentors"].map(
          (item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-[1.05] transition-transform duration-300"
            >
              <h3 className="text-lg font-semibold">{item}</h3>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default WhyChoose;
