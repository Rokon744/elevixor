import React from "react";
import { motion } from "framer-motion";
import teamImage from "@/assets/about/about-team.jpg";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurTeam = () => {
  return (
    <section className="bg-[#111133] py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Meet Our Team
          </h2>
          <p className="mt-4 text-gray-400">
            Our talented team of designers, developers, and marketers bring
            creativity, technical expertise, and data-driven insights to every
            project. Together, we build solutions that make brands stand out.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <Image
            src={teamImage}
            alt="Our team"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
