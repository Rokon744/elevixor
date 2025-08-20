import React from "react";
import { motion } from "framer-motion";
import missionImage from "@/assets/about/mission.jpg";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurMission = () => {
  return (
    <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12">
      <motion.div
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <Image
          src={missionImage}
          alt="Our mission"
          className="rounded-2xl shadow-lg"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Our Mission
        </h2>
        <p className="mt-4 text-gray-400">
          To empower businesses with innovative digital solutions that are not
          only visually striking but also strategically impactful. We focus on
          delivering measurable growth and building long-term client
          partnerships.
        </p>
      </motion.div>
    </section>
  );
};

export default OurMission;
