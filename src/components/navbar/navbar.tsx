"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../common/button";

interface NavLink {
  id: string;
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { id: "home", label: "Home", path: "/" },
  { id: "how", label: "How it works", path: "/how-it-works" },
  { id: "faq", label: "FAQ", path: "/faq" },
  { id: "contact", label: "Contact us", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="bg-home-bg">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={` fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-lg transition-colors duration-300 ${
          scrolled ? "bg-home-bg" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 md:px-10 py-4 md:py-5">
          <Link href="/" className="w-24 h-6 bg-gray-300 rounded" />

          <div className="hidden md:flex space-x-6 text-sm relative">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.path} className="relative">
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded"
                  />
                )}
                <span
                  className={`transition-colors  ${
                    isActive(link.path) ? "text-black" : "text-muted"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Button types="home">Login</Button>
          </div>

          <div className="block md:hidden z-50">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="text-white text-3xl"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      <div
        ref={sidebarRef}
        className={`flex md:hidden fixed top-0 left-0 h-full w-64 bg-home-bg text-white p-6 flex-col gap-6 transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            className={`text-white py-2 px-3 rounded hover:bg-gray-700 ${
              isActive(link.path) ? "bg-gray-700" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        <Button types="home" onClick={() => alert("Button clicked!")}>
          Click Me
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
