"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
  {
    title: "Frontend",
    description:
      "For our frontend projects, we maximize modern JavaScript frameworks like React and Angular to create responsive, intuitive user interfaces that keep your customers engaged. Our component-based approach ensures consistent experiences across devices while enabling rapid development and future scalability.",
    icon: "/assets/png/frontend.png",
  },
  {
    title: "Backend",
    description:
      "Our backend development leverages the power of Node.js, Python, and Java to build robust server architectures that handle complex business logic efficiently. We design scalable APIs and services that provide the solid foundation your applications need to grow with your business.",
    icon: "/assets/png/backend.png",
  },
  {
    title: "Mobile Development",
    description:
      "In the mobile space, we employ native and cross-platform technologies strategically based on your specific needs. Whether using Swift for iOS efficiency, Kotlin for Android performance, or Flutter for cross-platform efficiency, we deliver mobile experiences that users love to engage with.",
    icon: "/assets/png/mobile.png",
  },
  {
    title: "Database & Cloud",
    description:
      "Our data and infrastructure solutions utilize best-in-class database technologies and cloud platforms to ensure your applications are secure, performant, and cost-effective. We architect systems on AWS and Azure that scale automatically with your user base while maintaining optimal performance.",
    icon: "/assets/png/cloud.png",
  },
];

export default function Stack() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technology stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6   border-r border-transparent md:border-[#F4F2F2] "
            >
              <div className=" flex justify-center mb-4 ">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="object-cover w-full"
                />
              </div>
              <h3 className="text-black text  font-semibold text-left mb-3">
                {item.title}
              </h3>
              <p className="t text-gray-600 text-xs">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
