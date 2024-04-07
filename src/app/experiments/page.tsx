import { Reveal } from "@/components/reveal-animation";
import React from "react";

export default function Experiments() {
  return (
    <main className="min-h-screen flex flex-col items-center p-8 md:p-20 lg:p-24 xl:p-32">
      <Reveal>
        <div>
          <h2 className="text-3xl lg:text-4xl font-medium uppercase text-center">
            Exploring Prototypes and Fresh Ideas
          </h2>
          <p className="mt-6 text-xl font-light text-center">
            In my downtime, I love delving into the world of prototyping,
            testing out fresh interactions and techniques.
          </p>
          <p className="text-xl mb-24 font-light text-center mt-2">
            Keep an eye on this space for upcoming uploads—more exciting
            experiments are in the pipeline! 👇
          </p>
        </div>
      </Reveal>

      <Reveal>
        <video
          autoPlay
          muted
          playsInline
          loop
          className="h-full w-[60vh] mb-16 lg:mb-24"
        >
          <source src="/videos/experiment-1.mp4" type="video/mp4" />
        </video>
      </Reveal>

      <Reveal>
        <video
          autoPlay
          muted
          playsInline
          loop
          className="h-full w-[60vh] mb-16 lg:mb-24"
        >
          <source src="/videos/experiment-2.mp4" type="video/mp4" />
        </video>
      </Reveal>

      <Reveal>
        <video
          autoPlay
          muted
          playsInline
          loop
          className="h-full w-[60vh] mb-16 lg:mb-24"
        >
          <source src="/videos/experiment-3.mp4" type="video/mp4" />
        </video>
      </Reveal>

      <div className="h-[50px] lg:h-[20px]" />
    </main>
  );
}
