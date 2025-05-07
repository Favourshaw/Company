"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative w-full overflow-hidden px-6 mt-30 max-w-7xl mx-auto flex flex-col items-center lg:items-start bg-white  ">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-left max-w-[1200px] px-6 md:px-10 mb-10 z-10"
      >
        <h1 className="text-3xl sm:text-5xl font-medium text-gray-900">
          Our
          <span className="accent"> {"{Development}"} </span> <br />
          Methodology
        </h1>

        <p className="mt-4 text-base sm:text-lg muted ">
          At the core of our success is a refined development methodology that
          balances technical excellence with business objectives. We've crafted
          our approach to deliver predictable results while maintaining the
          flexibility to adapt to your unique challenges.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-5xl z-10 mt-10 px-6 md:px-10"
      >
        <div className="rounded-xl overflow-hidden ">
          <Image
            src="/assets/png/service-graph.png"
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
