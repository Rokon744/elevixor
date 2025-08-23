"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const SEO = () => {
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
          <h1 className="text-5xl font-bold">SEO Services</h1>
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
          Boost Your Visibility with SEO
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Search Engine Optimization (SEO) is essential for businesses to grow
          online. We specialize in optimizing websites to rank higher on Google
          and other search engines, bringing you more traffic, leads, and
          conversions. Our SEO strategies are designed for long-term success and
          sustainable growth.
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
            title: "On-Page SEO",
            desc: "Optimize website structure, titles, meta descriptions, and content for better ranking.",
          },
          {
            title: "Off-Page SEO",
            desc: "Build high-quality backlinks and improve domain authority with proven strategies.",
          },
          {
            title: "Technical SEO",
            desc: "Improve site speed, indexing, mobile optimization, and structured data for maximum performance.",
          },
          {
            title: "Keyword Research",
            desc: "Discover the best keywords that align with your target audience and business goals.",
          },
          {
            title: "Local SEO",
            desc: "Boost your presence on Google Maps and local searches to attract nearby customers.",
          },
          {
            title: "SEO Audits & Reporting",
            desc: "Track progress with in-depth reports and audits for data-driven decision-making.",
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

      {/* CTA Section */}
      <motion.section
        className="max-w-4xl mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Rank Higher on Google?
        </h2>
        <p className="text-gray-300 mb-6">
          Let us help you increase your visibility, attract quality traffic, and
          grow your business with tailored SEO solutions.
        </p>
        <Link href={'/contact'} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg transition">
          Get SEO Consultation
        </Link>
      </motion.section>
      <Footer />
    </div>
  );
};

export default SEO;
