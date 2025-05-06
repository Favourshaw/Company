"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

type ButtonProps = {
  types?: "primary" | "secondary" | "home" | "primaryDark" | "yellow";
  children: React.ReactNode;
} & Omit<HTMLMotionProps<"button">, "onDrag">;

const Button = ({
  types = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses = "p-2 rounded font-medium transition-all duration-200";

  const typeClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    home: "px-8 py-2 rounded-full text-xl btn-home",
    primaryDark:
      "bg-body text-white shadow-light hover:bg-primary hover:text-body hover:shadow-dark hover:-translate-y-0.5 dark:bg-primary dark:text-body dark:hover:bg-body dark:hover:text-white",
    yellow: "bg-yellow-300 hover:bg-yellow-400 text-black",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${typeClasses[types]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
