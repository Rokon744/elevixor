"use client";
import React from "react";
import hero1 from "@/assets/Home/heros1.jpg";
import hero2 from "@/assets/Home/heros2.jpg";
import hero3 from "@/assets/Home/heros3.jpg";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  const slides = [hero1, hero2, hero3];

  return (
    <section className="pt-[8vh] flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20">
      <HeroSlider slides={slides} />
      {/* <Image src={hero2} className="w-full shadow-lg" /> */}
    </section>
  );
};

export default Hero;
