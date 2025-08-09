"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo-white.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={`h-[57px] lg:h-[65px] w-full z-50 text-white shadow fixed`}>
      <nav className="flex justify-between items-center !py-2 container m-auto px-5">
        <Link href={"/"} className="logo flex items-center gap-3">
          <Image src={logo} width={150} alt="logo" />
        </Link>
        <ul className="nav-itens flex items-center gap-10 max-md:hidden">
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
          <button className="max-md:hidden">
            <Link
              href={"/contact"}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-md text-white font-semibold hover:scale-105 transition-transform duration-300"
            >
              Contact Us
            </Link>
          </button>
        </ul>
        {!openMenu && (
          <button
            className="text-3xl md:hidden"
            onClick={() => setOpenMenu(true)}
          >
            <RxHamburgerMenu />
          </button>
        )}
        {openMenu && (
          <button
            className="text-3xl md:hidden"
            onClick={() => setOpenMenu(false)}
          >
            <RxCross1 />
          </button>
        )}
      </nav>
      <div
        className={`${
          openMenu ? "w-full bg-white" : "w-0"
        } overflow-hidden transition-all duration-300 h-[30vh] mobile-menu`}
      >
        <ul className="nav-itens flex flex-col pl-5 justify-evenly lg:hidden h-full">
          <li>
            <Link
              href={"/"}
              className="nav-item"
              onClick={() => setOpenMenu(false)}
            >
              Home
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
              href={"/services"}
              className="nav-item"
              onClick={() => setOpenMenu(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href={"/courses"}
              className="nav-item"
              onClick={() => setOpenMenu(false)}
            >
              Courses
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
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
