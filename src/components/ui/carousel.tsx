"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { ArrowBigRight } from "lucide-react";

interface CarouselProps {
  items: {
    id: string;
    name: string;
    text: string;
    avatar: string;
  }[];
  itemsToShow?: number;
}
const variants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
};

export default function Carousel({ items, itemsToShow = 3 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 760 });
  const isMedium = useMediaQuery({ maxWidth: 1128 });
  const [isMounted, setIsMounted] = useState(false);

  const currentItemsToShow = isMobile ? 2 : isMedium ? 2 : itemsToShow;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= items.length - currentItemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? items.length - currentItemsToShow : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!isMounted) return null;

  return (
    <div className="relative w-full overflow-hidden md:overflow-visible">
      <div className="absolute w-full justify-between items-end right-0 z-50 md:-top-40 flex-row  flex space-x-2 p-4">
        <div className="">
          <div className="lg:max-w-lg max-w-xs text-sm pb-5">
            We build custom software that solves real business problems and
            drives measurable growth
          </div>
          <div className="header">
            What Our <span className="accent"> {"{Clients}"} </span> Say
          </div>
        </div>
        <div>
          <button
            onClick={prevSlide}
            className="rounded-full  p-2 text-white backdrop-blur-sm transition hover:bg-black/50"
            aria-label="Previous slide"
          >
            <svg
              width={isMobile ? "40" : "52"}
              height={isMobile ? "40" : "52"}
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={isMobile ? "rotate-90" : ""}
            >
              <rect width="52" height="52" rx="26" fill="#1E1E1E" />
              <path
                d="M16.2929 26.7071C15.9024 26.3166 15.9024 25.6834 16.2929 25.2929L20.2929 21.2929C20.6834 20.9024 21.3166 20.9024 21.7071 21.2929C22.0976 21.6834 22.0976 22.3166 21.7071 22.7071L19.4142 25L35 25C35.5523 25 36 25.4477 36 26C36 26.5523 35.5523 27 35 27L19.4142 27L21.7071 29.2929C22.0976 29.6834 22.0976 30.3166 21.7071 30.7071C21.3166 31.0976 20.6834 31.0976 20.2929 30.7071L16.2929 26.7071Z"
                fill="white"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="rounded-full  p-2 text-white backdrop-blur-sm transition hover:bg-black/50"
            aria-label="Next slide"
          >
            <svg
              width={isMobile ? "40" : "52"}
              height={isMobile ? "40" : "52"}
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={isMobile ? "rotate-90" : ""}
            >
              <rect width="52" height="52" rx="26" fill="#1E1E1E" />
              <path
                d="M35.7071 26.7071C36.0976 26.3166 36.0976 25.6834 35.7071 25.2929L31.7071 21.2929C31.3166 20.9024 30.6834 20.9024 30.2929 21.2929C29.9024 21.6834 29.9024 22.3166 30.2929 22.7071L32.5858 25L17 25C16.4477 25 16 25.4477 16 26C16 26.5523 16.4477 27 17 27L32.5858 27L30.2929 29.2929C29.9024 29.6834 29.9024 30.3166 30.2929 30.7071C30.6834 31.0976 31.3166 31.0976 31.7071 30.7071L35.7071 26.7071Z"
                fill="white"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {!isMobile && (
        <div className=" h-full w-full pt-12 mt-42">
          <AnimatePresence>
            <motion.div
              className="flex gap-5 lg:gap-10 "
              initial={false}
              animate={{
                x: `-${currentIndex * (100 / currentItemsToShow)}%`,
              }}
              transition={{ duration: 0.5 }}
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex-shrink-0 px-5 bg-green-50 p-6 rounded-lg shadow-sm"
                  style={{ width: `${100 / currentItemsToShow}%` }}
                >
                  <div className="flex h-full min-h-fit w-full flex-col justify-between items-start rounded-lg text-muted text-lg p-4 backdrop-blur-sm">
                    <div className="mb-32">
                      <img
                        src="/assets/png/quotes.png"
                        alt="quotes"
                        className="w-10 h-10 mb-5"
                      />
                      <div className="">{item.text}</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="font-medium">{item.name}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {isMobile && (
        <div className="relative h-full w-full pt-0 mt-52">
          <AnimatePresence mode="wait">
            <motion.div
              key={items[currentIndex].id}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 px-5 bg-green-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex h-full min-h-fit w-full flex-col justify-between items-start rounded-lg text-muted text-lg p-4 backdrop-blur-sm">
                <div className="mb-32">
                  <img
                    src="/assets/png/quotes.png"
                    alt="quotes"
                    className="w-10 h-10 mb-5"
                  />
                  <div className="">{items[currentIndex].text}</div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <img
                      src={items[currentIndex].avatar}
                      alt={items[currentIndex].name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">
                      {items[currentIndex].name}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-2">
        {Array.from({ length: items.length }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
