'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SpotlightIbelick } from "@/components/ui/spotlight-ibelick"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <SpotlightIbelick className="opacity-40" size={300} />
      
      <div className="flex h-full flex-col md:flex-row gap-8 md:gap-0">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center hero-rise pl-3 md:pl-8 lg:pl-12 items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-3 md:mb-4">
            Ali Parsa
          </h1>
          <p className="mt-3 md:mt-4 text-neutral-300 max-w-xl">
            Meet Ali—crafting immersive experiences where thoughtful design meets
            code.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative w-full h-[42vh] sm:h-[50vh] md:h-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}

