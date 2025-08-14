// import React from "react";
// import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0a0a23] border-t border-white/10 text-white py-6">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//         <div className="text-gray-400 text-sm">
//           © {new Date().getFullYear()} Elevixor. All rights reserved.
//         </div>
//         <div className="flex items-center gap-6 text-gray-400">
//           <div className="flex items-center gap-2">
//             <span>📧</span> elevixorbd@gmail.com
//           </div>
//           <div className="flex items-center gap-2">
//             <span>📞</span> +880 1817-903026
//           </div>
//         </div>
//         <div className="flex gap-4 text-xl">
//           <a href="#" className="hover:text-purple-500">
//             <FaTwitter />
//           </a>
//           <a href="#" className="hover:text-purple-500">
//             <FaLinkedin />
//           </a>
//           <a href="#" className="hover:text-purple-500">
//             <FaInstagram />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import logo from "@/assets/logo-white.png"
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const sections = [
    {
      title: "Services",
      links: [
        {
          title: "Branding",
          slug: "/services/graphics-design",
        },
        {
          title: "Web Design & Development",
          slug: "/services/web-development",
        },
        {
          title: "Digital Marketing",
          slug: "/services/digital-marketing",
        },
        {
          title: "SEO",
          slug: "/services/seo",
        },
      ],
    },
    {
      title: "Contacts",
      links: [
        {
          title: "elevixorbd@gmail.com",
          Icon: <IoMdMail />,
          slug: "mailto:elevixorbd@gmail.com",
        },
        {
          title: "+880 1817-903026",
          Icon: <IoCall />,
          slug: "tel:+880 1817-903026",
        },
        {
          title: "Boalia, Rajshahi, (BD)",
          Icon: <IoLocationSharp />,
        },
      ],
    },
  ];
  return (
    <footer className="">
      <div className="container mx-auto px-6 py-12">
        <div className="footer-main text-[#b3b3b3] pt-20 pb-12">
          <div className="container lg:flex items-start gap-5">
            <div className="footer-main-left lg:max-w-[400px]">
              <div className="logo flex items-center gap-3 text-white">
                <Image src={logo} width={200} alt="logo-white" />
                {/* <h2 className={`text-2xl`}>NYCAA</h2>
                <p className="text-[14px] text-[#e0e0e0]">Technology</p> */}
              </div>
              <p className="py-3">
                Expert Elevixor consulting for modern commerce
                solutions.
              </p>
              <SocialMedia />
            </div>
            <div className="footer-main-right lg:pl-20 max-lg:pt-10">
              <ul className="grid gap-10 lg:gap-40 max-sm:grid-cols-1 grid-cols-2 md:flex justify-between items-start">
                {sections.map((section, idx) => (
                  <li key={idx}>
                    <ul className="space-y-3">
                      <li className="font-bold text-[18px] text-[#f0efef]">
                        {section.title}
                      </li>
                      {section.links.map((item, i) => (
                        <li key={i}>
                          <Link
                            className="nav-items-footer font-normal flex gap-2 items-center"
                            href={item.slug ? item.slug : "#"}
                          >
                            {item.Icon}
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="text-[#797878] pt-4 pb-7 px-5 text-center">
          © 2025 Elevixor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
