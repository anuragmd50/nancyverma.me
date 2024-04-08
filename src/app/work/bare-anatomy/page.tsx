"use client";

import Image from "next/image";
import * as React from "react";

import { AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/reveal-animation";

import image1 from "../../../../public/images/work/bare-anatomy/2.jpeg";
import image2 from "../../../../public/images/work/bare-anatomy/3.jpeg";
import image3 from "../../../../public/images/work/bare-anatomy/4.jpeg";
import image4 from "../../../../public/images/work/bare-anatomy/5.jpeg";

function CaseStudy() {
  return (
    <AnimatePresence>
      <main className="min-h-screen">
        <Reveal width="100%">
          <div className="px-[6.5%] my-8 font-light text-xl">
            <div className="text-3xl lg:text-4xl xl:text-5xl z-50 font-georgia font-bold">
              <h1>Bare Anatomy</h1>
            </div>

            <p className="my-6">
              <span className="text-primary">
                <a
                  target="_blank"
                  href="https://innovist.com/pages/bare-anatomy-store"
                >
                  Bare anatomy
                </a>
              </span>{" "}
              is a hair care brand started with an attempt to provide custom
              hair care solutions. It now offers a range of products from hair
              serums, shampoos, conditioners, masks, and related accessories.
            </p>
          </div>

          <div className="w-full h-[250px] lg:h-[480px] mt-10 lg:mt-16">
            <Image
              src="/images/work/bare-anatomy/1.jpeg"
              alt=""
              width={1184}
              height={520}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>
        </Reveal>

        <div className="px-[6%] gap-8 mt-12 lg:mt-16 text-xl font-light">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-10">
            HIGHLIGHTS
          </h2>

          <ul className="list-disc px-4">
            <li className="my-1">
              I have worked on planning and executing product launches for{" "}
              <span className="text-primary">
                <a
                  href="https://innovist.com/products/curly-range-kit-2"
                  target="_blank"
                >
                  Curly hair range
                </a>
              </span>{" "}
              and{" "}
              <span className="text-primary">
                <a
                  href="https://innovist.com/products/hair-wax"
                  target="_blank"
                >
                  Hair wax.
                </a>
              </span>
            </li>
            <li className="my-1">
              Designed graphic assets for advertising campaigns - for Meta,
              google sponsored ads, etc.
            </li>
            <li className="my-1">
              Designed graphic assets for marketplaces- Amazon, Nykaa, Flipkart,
              Blinkit, Tira, etc.
            </li>
            <li className="my-1">
              Graphic assets for website including - banners, icons, sale logos
              &units, popups, and more.
            </li>
          </ul>
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
