import Image from "next/image";
import Hero from "./home/hero";
import About from "./home/about";
import Stack from "./home/stack";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stack />
    </>
  );
}
