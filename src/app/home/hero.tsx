"use client";

import Button from "@/components/common/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-6 mt-30 max-w-7xl mx-auto flex flex-col items-center bg-white  ">
      <motion.div
        className="hidden lg:block absolute top-60 left-0 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Image
          src="/assets/svg/left.svg"
          alt="Floating Icon 1"
          width={160}
          height={160}
        />
      </motion.div>

      <motion.div
        className="hidden lg:block absolute top-60 right-0 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <Image
          src="/assets/svg/right.svg"
          alt="Floating Icon 3"
          width={160}
          height={160}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[928px] mb-10 z-10"
      >
        <div className="relative pb-12">
          <div className="flex items-center justify-center gap-2 text-sm bg-[#FFFAEF] rounded-full p-3 max-w-fit mx-auto -mb-8 z-10 relative">
            <div className="flex -space-x-2">
              <Image
                src="/assets/svg/hero-clients.svg"
                alt="user"
                width={58}
                height={30}
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center">
                <FaStar className="text-[#B18B29] w-3 h-3" />
                <FaStar className="text-[#B18B29] w-3 h-3" />
                <FaStar className="text-[#B18B29] w-3 h-3" />
                <FaStar className="text-[#B18B29] w-3 h-3" />
                <FaStar className="text-[#B18B29] w-3 h-3" />
              </div>
              <span className="text-xs">Trusted by 100+ clients</span>
            </div>
          </div>

          <hr className="z-0 relative text-[#E8E8E8]" />
        </div>

        <h1 className="text-4xl md:text-6xl font-medium text-gray-900">
          Transforming Ideas into Powerful
          <span className="accent"> {"{Software}"} </span> Solutions
        </h1>

        <p className="mt-4 text-base sm:text-lg muted max-w-[847px]">
          Your vision, our expertise. From concept to deployment, we create
          sophisticated digital solutions that help businesses thrive in a
          technology-driven world. Let's build something remarkable together.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <div className="sm:text-lg muted flex justify-center items-center gap-2 flex-nowrap">
            <svg
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4.5" cy="4" r="4" fill="#FADD93" />
            </svg>
            <span>2 spots left for April</span>
          </div>
          <Button types="home">Let’s Discuss Your Project</Button>
        </div>
      </motion.div>

      {/* === Developer Image === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-5xl z-10"
      >
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/assets/png/hero.png"
            alt="Developer working"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
