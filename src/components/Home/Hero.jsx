import Image from "next/image";
import React from "react";
import banner from "@/assets/banner.png";
import { PiPhoneCallFill } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="min-h-[80vh] pt-32 md:pt-0 flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          We Build Digital <br /> Solutions That Matter
        </h1>
        <p className="text-gray-300 max-w-md">
          We provide innovative if solutions to help businesses grow and succeed
          in the digital world.
        </p>
        <a
          href="tel:+8801817903026"
          className="text-gray-300 max-w-md flex items-center gap-5"
        >
          <PiPhoneCallFill className="text-2xl text-indigo-600" />
          +880 1817-903026
        </a>
        <br />
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-md text-white font-semibold hover:scale-105 transition-transform duration-300">
          Get a Quote
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center relative">
        <p className="absolute text-center top-20 left-[40%] animate-bounce">
          <span className="font-bold">200+</span>
          <br />
          <span>Completed Projects</span>
        </p>
        <p className="absolute text-center bottom-20 left-5 animate-pulse">
          <span className="font-bold">150+</span> <br />
          <span>Happy Clients</span>
        </p>
        <div>
          <Image
            src={banner}
            alt="Laptop neon code"
            width={700}
            height={500}
            className="rounded-lg"
          />
        </div>
        <p className="absolute text-center bottom-20 right-5 animate-pulse">
          <span className="font-bold">5+</span>
          <br />
          <span>Years of Experience</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
