"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AboutHero,
  AboutValue,
  OurMission,
  OurTeam,
} from "@/components/Abouts";
import { Team } from "@/components/Home";
import ComingSoon from "@/components/ComingSoon";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <OurMission />
      <OurTeam />
      <div className="px-6 py-12 container mx-auto">
        <h1 className="text-center text-3xl md:text-5xl">Team</h1>
        <ComingSoon />
        {/* <Team /> */}
      </div>
      <AboutValue />

      <Footer />
    </main>
  );
};

export default About;
