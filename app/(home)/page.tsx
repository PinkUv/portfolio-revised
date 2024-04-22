'use client'
import { AuroraBackground } from "@/components/ui/aura-background";
import React, { useEffect } from "react";
import Typed from 'typed.js';
import Navbar from "./components/Navbar";

export default function Home() {

  useEffect(() => {
    const el = document.getElementById("typed-text");
    if (el) {
      const typed = new Typed(el, {
        strings: ['Fullstack developer', 'student'],
        typeSpeed: 50,
        backDelay: 1750,
        loop: true,
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, []);

  return (
    <main>
      <Navbar/>
      <AuroraBackground>
        <div className="relative flex flex-col gap-4 items-center justify-center px-4">
          <div className="text-2xl md:text-5xl font-bold dark:text-white text-center">
            Hello, I'm Gabriel Zandler
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            A dedicated <span id="typed-text"></span>based in Staten Island, New York.
          </div>
          <button className="hover:scale-110 transition-all bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Contact me
          </button>
        </div>
      </AuroraBackground>
    </main>
  );
}
