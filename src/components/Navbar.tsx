"use client";
import React, { useState } from "react";
import { CiHome, CiFileOn, CiImageOff, CiUser } from "react-icons/ci";
import { TiBriefcase, TiMessage } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { BsMenuButtonWide } from "react-icons/bs";
import Logo from "@/assets/headLogo.jpg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <header className="header bg-black/[0.96] fixed text-white">
      <nav className="nav container p-2  ">
        <a href="#" className="nav-logo">
          <Image src={Logo} alt="HEader Logo" className="headLogo" />
        </a>
        <div>
          <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
            <ul className="nav-list sm:flex sm:justify-center sm:items-center gap-3">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  <CiHome className="nav-icon" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#about" className="nav-link">
                  <CiUser className="nav-icon" />
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#skills" className="nav-link">
                  <CiFileOn className="nav-icon" />
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#portfolio" className="nav-link">
                  <CiImageOff className="nav-icon" />
                  PortFolio
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link">
                  <TiMessage className="nav-icon" />
                  Contact
                </Link>
              </li>
            </ul>
            <IoMdClose
              className="nav-close text-white"
              onClick={() => showMenu(!toggle)}
            />

          </div>
            <div
              className={toggle ? "hidden" : "block"}
              onClick={() => showMenu(!toggle)}
            >
              <BsMenuButtonWide className="nav-toggle " />
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
