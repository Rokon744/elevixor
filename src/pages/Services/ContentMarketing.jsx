"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ContentMarketing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#1a1a40] text-white">
      <Navbar />
      {/* Banner Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-800">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold">Content Marketing</h1>
        </motion.div>
      </section>

      {/* Intro Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4">
          Grow With High-Quality Content
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Great content is the backbone of digital marketing. We help businesses
          build trust, educate audiences, and drive conversions through
          engaging, SEO-optimized content strategies. From blogs to videos, we
          ensure your brand voice reaches the right people at the right time.
        </p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {[
          {
            title: "Content Strategy",
            desc: "We research and create a tailored strategy that aligns with your business goals and audience needs.",
          },
          {
            title: "Blog Writing",
            desc: "High-quality, SEO-friendly articles to build authority and drive organic traffic.",
          },
          {
            title: "Social Media Content",
            desc: "Engaging captions, visuals, and campaigns designed to spark conversations and shares.",
          },
          {
            title: "Video Marketing",
            desc: "Scriptwriting, production ideas, and editing support for high-converting video content.",
          },
          {
            title: "Email Marketing Content",
            desc: "Compelling newsletters and campaigns to nurture customer relationships and boost retention.",
          },
          {
            title: "Content Analytics",
            desc: "Track performance with detailed reports and optimize content for better reach and engagement.",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            className="bg-[#16163a] p-6 rounded-xl shadow-lg hover:shadow-xl border border-indigo-700 hover:border-purple-500 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA */}
      <motion.section
        className="max-w-4xl mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Build Your Brand with Content?
        </h2>
        <p className="text-gray-300 mb-6">
          From strategy to execution, we deliver content that educates, engages,
          and converts your target audience.
        </p>
        <Link href={'/contact'} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg transition">
          Start Your Content Journey
        </Link>
      </motion.section>
      <Footer />
    </div>
  );
};

export default ContentMarketing;
