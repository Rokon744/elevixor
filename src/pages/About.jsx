"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import teamImage from "@/assets/about/about-team.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AboutHero,
  AboutValue,
  OurMission,
  OurTeam,
} from "@/components/Abouts";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <main className="text-gray-300">
      <Navbar />
      <AboutHero />
      <OurMission />
      <OurTeam />
      <AboutValue />

      <Footer />
    </main>
  );
};

export default About;
