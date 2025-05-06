import Button from "@/components/common/button";
import React from "react";

export default function Cta() {
  return (
    <div className="mx-auto flex justify-center items-center flex-col max-w-4xl text-center py-20  px-6">
      <div className="text-4xl lg:text-6xl font-semibold  pb-6 leading-15">
        Start Your Project With A Free Consultation
      </div>
      <div className="text-[15px] lg:text-lg  pb-8">
        Ready to build something exceptional? Our team is prepared to turn your
        concept into powerful, scalable software that drives real business
        results. Schedule a no-obligation consultation today.
      </div>
      <div>
        <Button types="home">Let's Discuss Your Project</Button>
      </div>
    </div>
  );
}
