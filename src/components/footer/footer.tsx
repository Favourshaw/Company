"use client";

import Cta from "@/app/home/cta";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Cta />
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-dark text-white pt-12 pb-36"
      >
        <div className="max-w-[1200px] px-6 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 pt-12 gap-10 home-text-xs border-t border-gray-600 text-white">
          {/* Logo and Contact Info */}
          <div className="space-y-6 text-[14px] text-white col-span-1 lg:col-span-2">
            <h2 className="text font-semibold text-white">Logo</h2>
            <div>
              <p className="mb-2">Address</p>
              <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
            </div>
            <div>
              <p className="mb-2">Email</p>
              <p>company@example.com</p>
            </div>
            <div>
              <p className="mb-2">Phone Number</p>
              <p>+321 4356 2212</p>
            </div>
          </div>

          <div className="space-y-4 col-span-1">
            <h2 className="home-text font-semibold text-gray-300">Menu</h2>
            <ul className="space-y-4 home-text-xs text-gray-300">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="#how">How it works</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 col-span-1">
            <h2 className="home-text font-semibold text-gray-300">Menu</h2>
            <ul className="space-y-4 home-text-xs text-gray-300">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="#how">How it works</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 col-span-1 md:col-span-1 lg:col-span-2">
            <h2 className="home-text-sm font-semibold text-gray-300">
              Let’s Stay in Touch
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-nowrap items-center bg-white rounded-full overflow-hidden max-w-md mb-8"
            >
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-2 text-black home-text-xs outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 rounded-full home-text-xs"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-4">
              <p className="text-gray-300 mb-2">Follow our Social</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-2 rounded-full text-black">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-black">
                  <FaInstagram />
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-black">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
