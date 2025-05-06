import Carousel from "@/components/ui/carousel";
import Image from "next/image";

export default function Testimonial() {
  const items = [
    {
      id: "1",
      name: "bg-blue-400",
      text: "We approached them with an ambitious timeline for our e-commerce platform relaunch, and they not only met our deadline but delivered a system that exceeded our performance targets. Six months after launch, our conversion rates have improved by 28%. Their ability to blend technical excellence with creative solutions sets them apart.",
      avatar: "/assets/png/dr-rob.png",
    },
    {
      id: "2",
      name: "bg-green-400",
      text: "We approached them with an ambitious timeline for our e-commerce platform relaunch, and they not only met our deadline but delivered a system that exceeded our performance targets. Six months after launch, our conversion rates have improved by 28%. Their ability to blend technical excellence with creative solutions sets them apart.",
      avatar: "/assets/png/dr-rob.png",
    },
    {
      id: "3",
      name: "bg-purple-400",
      text: "We approached them with an ambitious timeline for our e-commerce platform relaunch, and they not only met our deadline but delivered a system that exceeded our performance targets. Six months after launch, our conversion rates have improved by 28%. Their ability to blend technical excellence with creative solutions sets them apart.",
      avatar: "/assets/png/dr-rob.png",
    },
    {
      id: "4",
      name: "bg-yellow-400",
      text: "Item 4",
      avatar: "/assets/png/dr-rob.png",
    },
    {
      id: "5",
      name: "bg-red-400",
      text: "Item 5",
      avatar: "/assets/png/dr-rob.png",
    },
    {
      id: "6",
      name: "bg-pink-400",
      text: "Item 6",
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
