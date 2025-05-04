"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TABS = [
  {
    key: "approach",
    label: "Our Approach",
    title: "Problem–Solution Approach",
    content:
      "At [Company Name], we transform complex business challenges into elegant software solutions. We've partnered with businesses across [industries] to build custom applications that drive efficiency, growth, and competitive advantage.",
    image: "/assets/png/approach.png",
  },
  {
    key: "expertise",
    label: "Our Expertise",
    title: "Expertise-Focused",
    content:
      "We're a team of [X] developers, designers, and digital strategists who live at the intersection of business acumen and technical excellence. Our collective expertise spans [Y] technologies and [Z] industries, allowing us to deliver solutions that are both innovative and pragmatically effective.",
    image: "/assets/png/expert.png",
  },
  {
    key: "process",
    label: "Our Process",
    title: "Process-Centric",
    content:
      "Our development process combines technical precision with creative problem-solving. We don't just write code—we architect digital experiences that solve real business problems through thoughtful discovery, iterative development, and ongoing optimization.",
    image: "/assets/png/process.png",
  },
  {
    key: "results",
    label: "Our Results",
    title: "Results-Oriented",
    content:
      "Results drive everything we do. Our clients have seen [specific metrics: e.g., 40% increase in operational efficiency, 65% reduction in manual processes] through our custom software solutions. We measure our success by the tangible business outcomes we help our clients achieve.",
    image: "/assets/png/result.png",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("approach");
  const activeContent = TABS.find((tab) => tab.key === activeTab)!;

  return (
    <section className="relative w-full px-6 mt-12 lg:mt-38 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-full lg:max-w-[110px] text-[10px] sm:text-xs text-muted pt-0 lg:pt-18 w-full"
      >
        <ul className="lg:space-y-2 space-x-3 lg:space-x-0 font-mono flex flex-row lg:flex-col justify-center">
          {TABS.map((tab) => (
            <li
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`cursor-pointer ${
                activeTab === tab.key ? "text-accent font-semibold" : ""
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10  p-6 rounded-lg w-full overflow-hidden relative">
        <div className="flex-1 max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "-text"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="  header mb-3">{activeContent.title}</h2>
              <p className="text mb-6 leading-relaxed">
                {activeContent.content}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 flex items-center">
                  <span className="text-yellow-500 text-xl mr-2">•</span>2 spots
                  left for April
                </span>
                <button className="bg-black text-white px-6 py-2 rounded-full text-sm shadow hover:bg-gray-900 transition">
                  Let’s Discuss Your Project
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full md:w-[350px] lg:w-[400px] h-auto rounded-xl overflow-hidden shadow">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "-image"}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <Image
                src={activeContent.image}
                alt={activeContent.title}
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
