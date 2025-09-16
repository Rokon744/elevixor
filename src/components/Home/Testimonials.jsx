"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Creative Director, ArtWave Studio",
    feedback:
      "Their graphics design team brought our vision to life with stunning visuals and a consistent brand identity. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Smith",
    role: "Founder, CodeSprint",
    feedback:
      "The new website they developed is fast, responsive, and beautifully designed. Our users love the smooth experience.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Alicia Brown",
    role: "Marketing Director, BizGrowth",
    feedback:
      "Our online campaigns saw a huge boost thanks to their digital marketing strategies. ROI has never been better.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "David Carter",
    role: "CEO, StrategyHub",
    feedback:
      "Their business consulting helped us identify key growth opportunities and streamline operations for maximum efficiency.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Emily Davis",
    role: "Owner, TrendyMart",
    feedback:
      "Managing our ecommerce store is now effortless. They optimized everything from product listings to checkout flow.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "James Wilson",
    role: "Content Manager, StoryLine Media",
    feedback:
      "The content marketing plan they developed has boosted our audience engagement and driven more qualified leads.",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    name: "Sophia Lee",
    role: "SEO Specialist, RankPro",
    feedback:
      "Our search engine rankings improved drastically within weeks. Their SEO expertise is unmatched.",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

// Framer Motion animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

function Responsive() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          What Our Clients Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="px-4"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="rounded-2xl p-6 flex flex-col items-center text-center transition">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-indigo-500 mb-4"
                />
                <p className="italic text-gray-400 mb-4">"{t.feedback}"</p>
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Responsive;