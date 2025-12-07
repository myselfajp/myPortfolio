"use client";

import { useState, useRef, useEffect } from "react";

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { SpotlightIbelick } from "@/components/ui/spotlight-ibelick";
import { AIInputWithLoading } from "@/components/ui/ai-input-with-loading";

export default function Home() {
  const [messages, setMessages] = useState<
    { text: string; role: "user" | "ai" }[]
  >([
    {
      text: "Hi! I'm Ali's AI assistant. Ask me anything about his work.",
      role: "ai",
    },
    {
      text: "You can try: 'What projects has Ali shipped recently?'",
      role: "ai",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (value: string) => {
    setMessages((prev) => [...prev, { text: value, role: "user" }]);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setMessages((prev) => [
      ...prev,
      {
        text: "Thanks for the question! Ali will get back to you soon.",
        role: "ai",
      },
    ]);
  };

  return (
    <main className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <SpotlightIbelick className="opacity-40" size={300} />

      <div className="w-full h-full px-4 md:px-8 py-6">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12">
          {/* Left content */}
          <div className="flex-1 relative z-10 flex flex-col justify-center md:h-full hero-rise pl-3 md:pl-10 lg:pl-16 items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4 md:mb-5">
              Ali Parsa
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed">
              Meet Ali—crafting immersive experiences where thoughtful design
              meets code.
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative w-full h-[46vh] sm:h-[54vh] md:h-full">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Centered chat assistant */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 z-30">
        <div className="pointer-events-auto w-full max-w-xl flex flex-col gap-4">
          <div className="relative w-full h-[60vh] md:h-[62vh] min-h-[42vh] overflow-hidden rounded-3xl">
            <div
              ref={scrollRef}
              className="absolute inset-0 overflow-y-auto scrollbar-hide"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 100%)",
              }}
            >
              <div className="min-h-full flex flex-col justify-end gap-3 px-1 pb-4 pt-28">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`text-sm md:text-base max-w-[90%] sm:max-w-[80%] px-4 py-3 rounded-2xl shadow-lg border backdrop-blur-sm ${
                      msg.role === "user"
                        ? "ml-auto bg-white/15 text-white border-white/10 text-right"
                        : "mr-auto bg-black/30 text-neutral-100/90 border-white/10 text-left"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
            </div>
          </div>
          <AIInputWithLoading
            onSubmit={handleSubmit}
            loadingDuration={1600}
            placeholder="Ask Ali's AI assistant…"
            className="bg-transparent"
          />
        </div>
      </div>
    </main>
  );
}
