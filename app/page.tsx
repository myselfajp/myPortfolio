"use client";

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { SpotlightIbelick } from "@/components/ui/spotlight-ibelick";

export default function Home() {
  return (
    <main className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <SpotlightIbelick className="opacity-40" size={300} />

      <div className="w-full h-full px-4 md:px-8">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Left content */}
          <div className="flex-1 relative z-10 flex flex-col justify-center h-full hero-rise pl-3 md:pl-10 lg:pl-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-5">
              Ali Parsa
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-lg leading-relaxed">
              Meet Ali—crafting immersive experiences where thoughtful design
              meets code.
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative w-full h-full">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
