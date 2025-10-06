"use client";
import React from "react";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import { motion } from "framer-motion";
import logowhite from "../assets/logo-white.png";
import logoblack from "../assets/logo-black.png";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const sections = [
    {
      title: "Services",
      links: [
        {
          title: "Branding & Creative Services",
          slug: "/services/graphics-design",
        },
        {
          title: "Web & Tech Services",
          slug: "/services/web-development",
        },
        { title: "Digital Marketing Services", slug: "/services/digital-marketing" },
        { title: "SEO Services", slug: "/services/seo" },
      ],
    },
    {
      title: "Contacts",
      links: [
        {
          title: "elevixorbd@gmail.com",
          Icon: <IoMdMail className="text-lg" />,
          slug: "mailto:elevixorbd@gmail.com",
        },
        {
          title: "+880 1817-903026",
          Icon: <IoCall className="text-lg" />,
          slug: "tel:+8801817903026",
        },
        {
          title: "Boalia, Rajshahi, (BD)",
          Icon: <IoLocationSharp className="text-lg" />,
        },
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="">
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
            <div className="logo flex items-center gap-3 text-white company-logo">
              <Image
                src={logowhite}
                width={150}
                alt="logo"
                className="logo-white"
              />
              <Image
                src={logoblack}
                width={150}
                alt="logo"
                className="logo-black"
              />
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
                <h4 className="font-bold text-lg mb-4">{section.title}</h4>
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
                        className="flex items-center gap-2 pointer hover:text-indigo-400 transition"
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
