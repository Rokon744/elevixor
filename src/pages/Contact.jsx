"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import map from "@/assets/Home/map.avif";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUpSpring = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="relative bg-[#0a0a23] text-white overflow-hidden pt-20 md:pt-40">
        {/* Background Map */}
        <div className="absolute inset-0">
          <Image
            src={map}
            alt="Map Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -80, scale: 0.9, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions or want to work with us? Fill out the form or reach
              us through the details below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              {["Name", "Email", "Message"].map((field, idx) => (
                <motion.div key={idx} variants={fadeUpSpring}>
                  {field === "Message" ? (
                    <textarea
                      placeholder={field}
                      rows={5}
                      className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
                    ></textarea>
                  ) : (
                    <input
                      type={field === "Email" ? "email" : "text"}
                      placeholder={field}
                      className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 outline-none"
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                variants={fadeUpSpring}
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition font-semibold shadow-lg shadow-purple-800/40"
              >
                Send Message
              </motion.button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-8"
            >
              {[
                { title: "Phone", value: "+880 1817-903026" },
                { title: "Email", value: "support@elevixor.com" },
                {
                  title: "Address",
                  value: "Dhaka, Bangladesh\nElevixor HQ",
                },
              ].map((info, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUpSpring}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:scale-[1.03] hover:shadow-xl transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-300 whitespace-pre-line">
                    {info.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
