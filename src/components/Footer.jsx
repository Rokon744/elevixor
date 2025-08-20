"use client";
import React from "react";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/assets/logo-white.png";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const sections = [
    {
      title: "Services",
      links: [
        { title: "Branding", slug: "/services/graphics-design" },
        { title: "Web Design & Development", slug: "/services/web-development" },
        { title: "Digital Marketing", slug: "/services/digital-marketing" },
        { title: "SEO", slug: "/services/seo" },
      ],
    },
    {
      title: "Contacts",
      links: [
        { title: "elevixorbd@gmail.com", Icon: <IoMdMail className="text-lg" />, slug: "mailto:elevixorbd@gmail.com" },
        { title: "+880 1817-903026", Icon: <IoCall className="text-lg" />, slug: "tel:+8801817903026" },
        { title: "Boalia, Rajshahi, (BD)", Icon: <IoLocationSharp className="text-lg" /> },
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-[#0a0a23] text-[#b3b3b3]">
      <div className="container mx-auto px-6 py-12">
        <div className="lg:flex items-start gap-12">
          {/* Left Section */}
          <motion.div
            className="lg:max-w-[380px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="logo flex items-center gap-3 text-white">
              <Image src={logo} width={180} alt="Elevixor Logo" priority />
            </div>
            <p className="py-4 text-sm leading-relaxed">
              Expert Elevixor consulting for modern commerce solutions.
            </p>
            <SocialMedia />
          </motion.div>

          {/* Right Section */}
          <div className="flex-1 grid gap-10 sm:grid-cols-2 mt-10 lg:mt-0">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
              >
                <h4 className="font-bold text-lg text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <Link
                        href={item.slug || "#"}
                        className="flex items-center gap-2 hover:text-white transition"
                      >
                        {item.Icon}
                        <span>{item.title}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-[#797878]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          © {new Date().getFullYear()} Elevixor. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
