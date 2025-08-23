"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const DigitalMarketing = () => {
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
          <h1 className="text-5xl font-bold">Digital Marketing Services</h1>
        </motion.div>
      </section>

      {/* Intro Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4 pt-10">
          Why Digital Marketing?
        </h2>
        <p className="text-gray-300 leading-relaxed">
          In today’s competitive digital landscape, a strong online presence is
          essential for any business. Our digital marketing services are
          designed to boost your brand visibility, generate leads, and drive
          conversions. From SEO and paid ads to social media and email
          marketing, we provide strategies tailored to your goals.
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
            title: "Search Engine Optimization (SEO)",
            desc: "Rank higher on Google and attract organic traffic with our proven SEO strategies.",
          },
          {
            title: "Pay-Per-Click (PPC) Ads",
            desc: "Drive instant traffic and leads through targeted Google and social media ad campaigns.",
          },
          {
            title: "Social Media Marketing",
            desc: "Engage and grow your audience with impactful social media campaigns and strategies.",
          },
          {
            title: "Content Marketing",
            desc: "Deliver value-driven content that builds trust and converts visitors into customers.",
          },
          {
            title: "Email Marketing",
            desc: "Nurture leads and improve retention with personalized, high-converting email campaigns.",
          },
          {
            title: "Analytics & Reporting",
            desc: "Track, measure, and optimize your campaigns with data-driven insights.",
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
          Ready to Elevate Your Business?
        </h2>
        <p className="text-gray-300 mb-6">
          Let our digital marketing experts help you grow your brand and reach
          your ideal customers with powerful strategies.
        </p>
        <Link
          href={"/contact"}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg transition"
        >
          Get Started Today
        </Link>
      </motion.section>
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
