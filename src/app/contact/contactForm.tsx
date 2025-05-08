"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/common/button";
import Image from "next/image";

type Option = "Mobile app" | "Web app" | "Website" | "Custom";

export default function ContactForm() {
  const [selected, setSelected] = useState<Option>("Mobile app");

  const options: Option[] = ["Mobile app", "Web app", "Website", "Custom"];

  return (
    <section className=" mt-30 max-w-7xl mx-auto p-6 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[928px] mb-10 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-medium text-gray-900">
          Let&apos;s Build Something Amazing Together
        </h1>

        <p className="mt-4 text-base sm:text-lg muted max-w-[847px]">
          Ready to discuss your software development needs? We&apos;re excited
          to learn about your project and explore how our expertise can bring
          your vision to life. Whether you&apos;re at the early concept stage or
          looking to enhance an existing application, our team is here to help.
        </p>
      </motion.div>
      <div className=" mt-10 p-0 md:p-6 flex flex-col md:flex-row items-start gap-12 md:bg-[#f9fff6] rounded-3xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-left bg-white p-6 md:p-12 pb-2 md:max-w-md  border border-[#F4F2F2] rounded-xl"
        >
          <h2 className="text-3xl text-dark font-semibold">
            Contact Information
          </h2>

          <div>
            <h3 className="text-dark text-[16px] font-semibold">
              Physical office locations.
            </h3>
            <p className="text-[14px] text-dark">
              Lorem ipsum dolor sit amet consectetur. Sit eget dictum amet quam
              sit sed. Enim aliquam egestas pellentesque habitant in.
            </p>
          </div>

          <div>
            <h3 className="text-dark text-[16px] font-semibold">
              Phone number
            </h3>
            <p className="text-[14px] text-dark">
              Lorem ipsum dolor sit amet consectetur. Sit eget dictum amet quam
              sit sed. Enim aliquam egestas pellentesque habitant in.
            </p>
          </div>

          <div>
            <h3 className="text-dark text-[16px] font-semibold">
              Email address
            </h3>
            <p className="text-[14px] text-dark">
              Lorem ipsum dolor sit amet consectetur. Sit eget dictum amet quam
              sit sed. Enim aliquam egestas pellentesque habitant in.
            </p>
            <button className="flex items-center text-xs text-dark mt-2">
              <span className="mr-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10C13.1046 10 14 9.10457 14 8V4C14 2.89543 13.1046 2 12 2H9.33333C8.22876 2 7.33333 2.89543 7.33333 4V5.13333H7.66667C8.77124 5.13333 9.66667 6.02876 9.66667 7.13333V10H12Z"
                    fill="black"
                  />
                  <path
                    d="M4 6C2.89543 6 2 6.89543 2 8V12C2 13.1046 2.89543 14 4 14H6.66667C7.77124 14 8.66667 13.1046 8.66667 12V8C8.66667 6.89543 7.77124 6 6.66667 6H4Z"
                    fill="black"
                  />
                </svg>
              </span>
              Copy email address
            </button>
          </div>
          <div className="md:mt-30 w-[138px] ml-auto md:ml-0">
            <Image
              width="134"
              height="159"
              src="/assets/svg/vintage-mac.svg"
              alt="Vintage Mac"
              className=""
            />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 w-full col-span-2 pt-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <label className="text-[10px] pb-3">
              First Name
              <input
                type="text"
                placeholder="First Name"
                className="p-3 mt-3 text-sm rounded-lg border border-gray-300 w-full"
                defaultValue="John"
              />
            </label>
            <label className="text-[10px] pb-3">
              Last Name
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 mt-3 text-sm rounded-lg border border-gray-300 w-full"
                defaultValue="Doe"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <label className="text-[10px] pb-6">
              Email
              <input
                type="email"
                placeholder="Email"
                className="p-3 mt-3 text-sm rounded-lg border border-gray-300 w-full"
                defaultValue="xyz@gmail.com"
              />
            </label>

            <label className="text-[10px] pb-6">
              Phone number
              <input
                type="tel"
                placeholder="Phone number"
                className="p-3 mt-3 text-sm rounded-lg border border-gray-300 w-full"
                defaultValue="000 0000 0000"
              />
            </label>
          </div>

          <div>
            <p className="font-semibold mb-4">Project type</p>
            <div className="flex flex-wrap gap-2 md:gap-4 pb-4">
              {options.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-1 md:space-x-3 cursor-pointer text-sm "
                >
                  <input
                    type="radio"
                    name="projectType"
                    value={option}
                    checked={selected === option}
                    onChange={() => setSelected(option)}
                    className="hidden"
                  />
                  <span className="relative w-5 h-5 md:w-6 md:h-6 rounded-full border border-transparent bg-[#E0E0E0] flex items-center justify-center">
                    {selected === option && (
                      <motion.span
                        layoutId="radio-dot"
                        className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#011C2A] flex items-center justify-center text-white"
                      >
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 text-green"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.span>
                    )}
                  </span>
                  <span className="text-[#011C2A] font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <textarea
            rows={5}
            placeholder="Write your message.."
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>

          <Button type="submit" className=" transition" types="home">
            Send message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
