"use client";

import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Priya Sharma",
    content:
      "We approached them with an ambitious timeline... their ability to blend technical excellence with creative solutions sets them apart.",
    avatar: "/avatars/priya.png",
  },
  {
    name: "Dr. Robert Kim",
    content:
      "Their team delivered a secure, scalable platform that met our clinical needs... Their ability to translate complex medical workflows into elegant software solutions impressed us most.",
    avatar: "/avatars/robert.png",
  },
  {
    name: "Jessica Ramirez",
    content:
      "Their technical expertise is matched only by their business acumen. They challenged assumptions and helped us refine the concept...",
    avatar: "/avatars/jessica.png",
  },
  {
    name: "Michael Lee",
    content:
      "Exceptional attention to detail and superb communication throughout the project. Truly a world-class experience!",
    avatar: "/avatars/michael.png",
  },
  {
    name: "Sara Ali",
    content:
      "Their team not only delivered fast, but understood our startup vision deeply. We felt like partners throughout.",
    avatar: "/avatars/sara.png",
  },
];

export default function Testimonial() {
  const containerRef = useRef<HTMLUListElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  const scrollBy = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white py-16 px-4 md:px-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="uppercase tracking-widest text-sm text-gray-500">
          We build custom software
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          What Our <span className="text-green-600">{`{Clients}`}</span> Say
        </h2>
      </motion.div>

      {/* Scroll Progress Circle */}
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        className="absolute left-4 top-6 -rotate-90 z-10"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-gray-300"
          strokeWidth="10%"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-green-500"
          strokeWidth="10%"
          fill="none"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      {/* Scrollable Testimonials */}
      <motion.ul
        ref={containerRef}
        style={{ maskImage, WebkitMaskImage: maskImage }}
        className="mt-12 flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth px-4 -mx-4 scrollbar-hide"
      >
        {testimonials.map((testimonial, index) => (
          <motion.li
            key={index}
            className="min-w-[280px] md:min-w-[45%] lg:min-w-[30%] bg-[#F5FDF9] p-6 rounded-lg shadow-md flex-shrink-0 h-[280px] relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <FaQuoteLeft className="text-green-600 text-2xl mb-4" />
            <p className="text-gray-700 mb-6 line-clamp-4">
              {testimonial.content}
            </p>
            <div className="absolute bottom-4 left-6 flex items-center gap-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      {/* Buttons */}
      <div className="absolute right-6 top-6 flex gap-2 z-20">
        <button
          onClick={() => scrollBy(-300)}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={() => scrollBy(300)}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          <FiChevronRight />
        </button>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

// Mask helper
const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}
