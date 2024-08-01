"use client";
import Link from "next/link";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

function HeroSection() {
  const words = [
    {
      text: "Your",
    },
    {
      text: "Business",
    },
    {
      text: "Our",
    },
    {
      text: "Canvas",
    },
    {
      text: "Of",
    },
    {
      text: "Digital",
    },
    {
      text: "Magic",
      className: "text-[#006AE6] dark:text-[#006AE6]",
    },
  ];

  return (
    <div className="h-auto bg-black md:h-[30rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:my-40">
      <div className="p-4 relative z-10 w-full text-center">
        <TypewriterEffect words={words} />
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Software development is our playground, but we also excel in IT,
          Digital, Hardware, and Consultancy Solutions!
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 mt-10 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
