"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import FaqItem from "@/components/ui/faqItem";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const data = [
    {
      title: "What information do I need to provide during registration?",
      content:
        "You'll need to provide basic personal information, your Nigerian bank account details, and complete our verification process in compliance with financial regulations.",
    },
    {
      title: "Do you offer technical support?",
      content: "Yes, our team is available 24/7 to help you with any issues.",
    },
    {
      title: "Can I cancel anytime?",
      content: "Absolutely, there are no contracts or commitments.",
    },
  ];

  return (
    <section className="bg-white ">
      <div className="header  text-center pt-36 px-6">
        Frequently Asked Questions
      </div>

      <motion.div
        className="max-w-5xl mx-auto p-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {data.map((item, index) => (
          <FaqItem
            key={index}
            title={item.title}
            isOpen={openIndex === index}
            onToggle={() => toggleItem(index)}
          >
            <div className="max-w-[852px] border-t border-[#EBEBEB] py-4">
              {item.content}
            </div>
          </FaqItem>
        ))}
      </motion.div>
    </section>
  );
};

export default Faq;
