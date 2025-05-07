import React from "react";
import ServiceHero from "./hero";
import Services from "./service";
import PricingSection from "./pricing";

const page = () => {
  return (
    <div>
      <ServiceHero />
      <Services />
      <PricingSection />
    </div>
  );
};

export default page;
