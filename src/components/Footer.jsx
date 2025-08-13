// Footer.tsx
import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a23] border-t border-white/10 text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Elevixor. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-gray-400">
          <div className="flex items-center gap-2">
            <span>📧</span> elevixorbd@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span> +880 1817-903026
          </div>
        </div>
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-purple-500">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-purple-500">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-purple-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
