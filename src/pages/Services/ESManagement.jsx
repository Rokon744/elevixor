"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const ESManagement = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Banner Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-800">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold">E-Commerce Store Management</h1>
        </motion.div>
      </section>

      {/* Intro Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-8 md:py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4">
          Complete E-Commerce Solutions
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Running an online store is more than just adding products. From
          product listing optimization to order fulfillment, digital marketing,
          and customer support — we handle everything to ensure your e-commerce
          business grows steadily. Our goal is to help you boost sales,
          streamline operations, and provide the best customer experience.
        </p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-6 mdpy-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {[
          {
            title: "Product Listing & Optimization",
            desc: "We create SEO-friendly product listings with optimized titles, descriptions, and images.",
          },
          {
            title: "Inventory Management",
            desc: "Keep your stock levels updated across multiple platforms to avoid overselling or shortages.",
          },
          {
            title: "Order Fulfillment",
            desc: "Seamless order processing, packaging, and delivery coordination for smooth operations.",
          },
          {
            title: "Store Design & UX",
            desc: "Custom layouts and user-friendly designs that increase conversions and engagement.",
          },
          {
            title: "Marketing & Promotions",
            desc: "We manage ad campaigns, email marketing, and discount strategies to drive traffic and sales.",
          },
          {
            title: "Customer Support",
            desc: "Ensure happy customers with responsive support, returns management, and feedback handling.",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-lg shadow-sm border border-gray-200 overflow-hidden"
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
        className="max-w-4xl mx-auto px-6 pt-8 md:pt-16 pb-16 md:pb-28 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4">
          Want to Grow Your Online Store?
        </h2>
        <p className="text-gray-400 mb-6">
          From product listings to delivery — we take care of your store so you
          can focus on scaling your brand.
        </p>
        <Link href={'/contact'} className="btn-button px-6 py-3 rounded-md text-white font-semibold">
          Get a Free Consultation
        </Link>
      </motion.section>
      <Footer />
    </div>
  );
};

export default ESManagement;
