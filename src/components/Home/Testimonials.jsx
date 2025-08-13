"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

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

function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className="reviews-sec">
      <div className="container mx-auto px-6 py-12">
        <div className="slider-container">
          <h2 className="text-3xl font-semibold mb-8 text-white">
            What Our Clients Say
          </h2>
          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-indigo-100 mb-4 mx-auto"
                />
                <p className="italic mb-4">"{t.feedback}"</p>
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <span className="text-sm">{t.role}</span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Responsive;
