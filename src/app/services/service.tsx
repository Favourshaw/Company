"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TABS = [
  {
    key: "web",
    label: "Web Application Development",
    title: "Web Application Development",
    content:
      "Our web applications combine powerful functionality with exceptional user experiences. We build responsive, accessible web solutions that perform flawlessly across devices, from simple promotional sites to complex web platforms. Using modern frameworks and progressive web app techniques, we deliver web experiences that engage users while solving real business problems.",
    image: "/assets/png/web.png",
  },
  {
    key: "mobile",
    label: "Mobile Application Development",
    title: "Mobile Application Development",
    content:
      "We create native and cross-platform mobile applications that extend your digital presence to where your users are. Our mobile solutions leverage platform-specific capabilities while maintaining consistent experiences across iOS and Android. Whether you need consumer-facing apps or enterprise mobility solutions, we deliver mobile experiences that users love to engage with.",
    image: "/assets/png/service-mobile.png",
  },
  {
    key: "qa",
    label: "QA & Testing Services",
    title: "QA & Testing Services",
    content:
      "Ensure flawless performance through our comprehensive quality assurance services. We offer manual and automated testing, security audits, performance optimization, and accessibility compliance. Our testing methodologies identify issues early, reducing development costs and ensuring exceptional user experiences.",
    image: "/assets/png/qa.png",
  },
  {
    key: "tech",
    label: "Technical Consultation",
    title: "Technical Consultation",
    content:
      "Before writing a single line of code, we can help shape your digital strategy. Our technical consultants work with your team to evaluate options, define architecture, choose technologies, and create roadmap for implementation. We bring clarity to complex technical decisions and ensure alignment between business objectives and technical solutions.",
    image: "/assets/png/service-tech.png",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("web");
  const activeContent = TABS.find((tab) => tab.key === activeTab)!;

  return (
    <section className="relative w-full px-6 mt-20 lg:mt-38 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-full lg:max-w-[150px] text-[10px] text-center lg:text-left sm:text-xs text-muted pt-0 lg:pt-18 w-full"
      >
        <ul className="lg:space-y-5 space-x-3 lg:space-x-0 font-mono flex flex-row lg:flex-col justify-center">
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
        <div className="flex-1 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + "-text"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className=" font-medium sub-header mb-3">
                {activeContent.title}
              </h2>
              <p className="text text-muted mb-6 leading-relaxed">
                {activeContent.content}
              </p>
              <div className="flex flex-row flex-wrap items-center gap-4">
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

        <div className="w-full md:w-[320px] lg:w-[350px] h-auto rounded-xl overflow-hidden shadow">
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
