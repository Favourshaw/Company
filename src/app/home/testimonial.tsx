import Carousel from "@/components/ui/carousel";
import Image from "next/image";

export default function Testimonial() {
  const items = [
    {
      id: "1",
      name: "Priya Sharma",
      text: "We approached them with an ambitious timeline for our e-commerce platform relaunch, and they not only met our deadline but delivered a system that exceeded our performance targets. Six months after launch, our conversion rates have improved by 28%. Their ability to blend technical excellence with creative solutions sets them apart.",
      avatar: "/assets/png/priya.png",
    },
    {
      id: "2",
      name: "Dr. Robert Kim",
      text: "As a healthcare startup, we needed developers who understood both technical requirements and HIPAA compliance. Their team delivered a secure, scalable platform that our medical providers find intuitive to use. What impressed us most was how they translated complex medical workflows into elegant software solutions.",
      avatar: "/assets/png/dr-rob.png",
    },
    {
      id: "3",
      name: "Jessica Ramirez",
      text: "Their technical expertise is matched only by their business acumen. Instead of just coding what we asked for, they challenged our assumptions and helped us refine the concept. The resulting logistics management system has cut our processing time in half and significantly reduced errors. Five stars doesn't seem enough.",
      avatar: "/assets/png/jess.png",
    },
    {
      id: "4",
      name: "Sarah Chen",
      text: "Working with this development team transformed our business operations completely. They didn't just build our custom ERP system—they took the time to understand our unique workflows first. The solution they delivered has increased our operational efficiency by 37% and the ongoing support has been exceptional. They're true partners in our growth.",
      avatar: "/assets/png/sarah.png",
    },
    {
      id: "5",
      name: "Priya Sharma",
      text: "We approached them with an ambitious timeline for our e-commerce platform relaunch, and they not only met our deadline but delivered a system that exceeded our performance targets. Six months after launch, our conversion rates have improved by 28%. Their ability to blend technical excellence with creative solutions sets them apart.",
      avatar: "/assets/png/priya.png",
    },
    {
      id: "6",
      name: "Dr. Robert Kim",
      text: "As a healthcare startup, we needed developers who understood both technical requirements and HIPAA compliance. Their team delivered a secure, scalable platform that our medical providers find intuitive to use. What impressed us most was how they translated complex medical workflows into elegant software solutions.",
      avatar: "/assets/png/dr-rob.png",
    },
  ];

  return (
    <div className="flex min-h-screen h-full flex-col items-center justify-between p-6">
      <div className="w-full max-w-[1300px] ">
        <Carousel items={items} itemsToShow={3} />
      </div>
    </div>
  );
}
