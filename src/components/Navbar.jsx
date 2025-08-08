"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={`h-[57px] lg:h-[65px] w-full z-50 bg-white text-black`}>
      <nav className="flex justify-between items-center !py-2 container m-auto text-[20px]">
        <Link href={"/"} className="logo flex items-center gap-3">
          <Image src={logo} width={150} />
        </Link>
        <ul className="nav-itens flex items-center gap-10 max-lg:hidden">
          <li>
            <Link href={"/"} className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="nav-item">
              About
            </Link>
          </li>
          <li>
            <Link href={"/services"} className="nav-item">
              Services
            </Link>
          </li>
          <li>
            <Link href={"/services"} className="nav-item">
              Courses
            </Link>
          </li>
          <button className="px-10 py-2 max-lg:hidden">
            <Link
              href={"/contact"}
              className="px-4 py-2 bg-[#3096ff] text-white rounded-sm"
            >
              Contact Us
            </Link>
          </button>
        </ul>
        {!openMenu && (
          <button
            className="text-3xl lg:hidden"
            onClick={() => setOpenMenu(true)}
          >
            <RxHamburgerMenu />
          </button>
        )}
        {openMenu && (
          <button
            className="text-3xl lg:hidden"
            onClick={() => setOpenMenu(false)}
          >
            <RxCross1 />
          </button>
        )}
      </nav>
      <div
        className={`${
          openMenu ? "w-full bg-[#111827]" : "w-0"
        } overflow-hidden transition-all duration-300 h-[30vh] mobile-menu`}
      >
        <ul className="nav-itens flex flex-col items-center justify-evenly lg:hidden h-full">
          <li>
            <Link
              href={"/services"}
              className="nav-item"
              onClick={() => setOpenMenu(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href={"/industries"}
              className="nav-item"
              onClick={() => setOpenMenu(false)}
            >
              Industries
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="nav-item"
              onClick={() => setOpenMenu(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="nav-item"
              onClick={() => setOpenMenu(false)}
            >
              Contact
            </Link>
          </li>
          <button size="large" type="primary" className="px-10 py-2">
            <Link
              href={"/contact"}
              className="nav-item px-4 bg-[#1f2937] py-2"
              onClick={() => setOpenMenu(false)}
            >
              Schedule Consultation
            </Link>
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
