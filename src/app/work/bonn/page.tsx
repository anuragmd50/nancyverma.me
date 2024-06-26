"use client";

import Image from "next/image";
import * as React from "react";

import { AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/reveal-animation";

import image1 from "../../../../public/images/work/bonn/2.jpeg";
import image2 from "../../../../public/images/work/bonn/3.jpeg";
import image3 from "../../../../public/images/work/bonn/4.jpeg";
import image4 from "../../../../public/images/work/bonn/5.jpeg";

function CaseStudy() {
  return (
    <AnimatePresence>
      <main className="min-h-screen">
        <Reveal width="100%">
          <div className="px-[6.5%] my-8 text-3xl lg:text-4xl xl:text-5xl z-50 font-georgia font-bold">
            <h1>
              Americana by <span className="text-[#DE0730]">Bonn</span>
            </h1>
          </div>

          <div className="w-full h-[200px] lg:h-[480px] mt-10 lg:mt-16">
            <Image
              src="/images/work/bonn/1.jpeg"
              alt=""
              width={1184}
              height={520}
              className="w-full h-full object-contain lg:object-cover transition-all duration-300"
            />
          </div>
        </Reveal>

        <div className="px-[6%] gap-8 mt-12 lg:mt-16 text-xl font-light">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-10">
            HIGHLIGHTS:
          </h2>

          <p className="my-6">
            The below shown assets are from campaigns of the following products:{" "}
          </p>

          <p className="my-6">Americana biscuit by bonn </p>

          <p className="my-6">
            This test campaign was named :{" "}
            <span className="font-medium">‘LOVE AT FIRST BITE’ </span>
          </p>

          <p className="my-6">
            Whole process of brainstorming and designing this campaign was quite
            interesting and fun. These creatives were designed for the social
            channels and with vernacular variations too.
          </p>
        </div>

        <div className="px-[6%] gap-8 mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2">
          <div>
            <Image
              src={image1}
              alt=""
              width={600}
              height={593}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <Image
              src={image2}
              alt=""
              width={600}
              height={593}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <Image
              src={image3}
              alt=""
              width={600}
              height={593}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <Image
              src={image4}
              alt=""
              width={600}
              height={593}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-12 lg:mt-24">
          <a
            href="https://www.behance.net/nancyverma5"
            target="_blank"
            className="px-12 py-3 border-primary border text-primary text-xl hover:bg-primary hover:text-white transition-all duration-300"
          >
            SEE MORE
          </a>
        </div>

        <div className="h-[150px]" />
      </main>
    </AnimatePresence>
  );
}

export default CaseStudy;
