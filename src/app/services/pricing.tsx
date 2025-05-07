"use client";
import Button from "@/components/common/button";
import { motion } from "framer-motion";

const pricingData = [
  {
    title: "Startup Launch Package",
    subtitle:
      "Perfect for: Early-stage businesses needing an MVP or startups with focused software needs",
    price: "$15,000 - $30,000",
    priceInfo: "\u00A0 ",
    features: [
      "Project discovery & requirements workshop",
      "UX/UI design for up to 5 key screens",
      "Core feature development",
      "Basic API integrations (up to 2 external services)",
      "Cross-browser/device testing",
      "Deployment to your selected environment",
      "30 days post-launch support",
    ],
  },
  {
    title: "Business Growth Solution",
    subtitle:
      "Perfect for: Established businesses requiring comprehensive software solutions",
    price: "$45,000 - $75,000",
    priceInfo: " \u00A0",
    features: [
      "In-depth business analysis & strategy workshop",
      "Complete UX/UI design process with user testing",
      "Full-featured application development",
      "Custom API development & multiple integrations",
      "Comprehensive testing (functional, security, performance)",
      "Deployment with CI/CD pipeline setup",
      "3 months maintenance & support",
      "Training for your team",
    ],
  },
  {
    title: "Enterprise Partnership",
    subtitle:
      "Perfect for: Organizations with ongoing development needs and complex requirements",
    price: "$20,000/month",
    priceInfo: "(6-month minimum commitment)",
    features: [
      "Dedicated development team (customizable composition)",
      "Technical product owner",
      "Weekly progress reports and planning sessions",
      "Unlimited feature development within resource constraints",
      "Continuous integration and deployment",
      "Proactive security monitoring",
      "Priority support with guaranteed response times",
      "Quarterly strategy & roadmap sessions",
      "Technology stack optimization",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="header  mb-4"
      >
        Our Pricing
      </motion.h2>
      <p className="text-sm max-w-3xl mx-auto mb-12">
        We don&apos;t believe in one-size-fits-all pricing. Each business
        challenge is unique, requiring a thoughtfully crafted solution. Our
        pricing reflects the value we deliver—robust, scalable software that
        drives real business outcomes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0">
        {pricingData.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="border border-dark    bg-white text-left"
          >
            <div className="border-b  border-dark p-10">
              <h3 className="text-[16px] font-semibold text-muted  mb-1">
                {plan.title}
              </h3>
              <p className="text-xs muted mb-4">{plan.subtitle}</p>
              <p className="text-2xl font-semibold text-muted mb-4 whitespace-pre-line">
                {plan.price} <br />{" "}
                <span className="text-xs">{plan.priceInfo}</span>
              </p>
              <Button types="home" className=" transition ">
                Get Started
              </Button>
            </div>
            <ul className="space-y-4 text-xs text-muted p-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center ">
                  <span className="text-green-500 mr-2">
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.3535 2.14375C15.755 1.76453 15.773 1.13162 15.3938 0.730113C15.0146 0.328602 14.3817 0.310531 13.9802 0.689751L4.96132 9.2079L2.02014 6.43C1.61863 6.05078 0.98572 6.06885 0.6065 6.47036C0.22728 6.87187 0.24535 7.50478 0.64686 7.884L4.27468 11.3104C4.66008 11.6744 5.26256 11.6744 5.64796 11.3104L15.3535 2.14375Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
