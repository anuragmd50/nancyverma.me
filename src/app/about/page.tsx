"use client";

import Image from "next/image";
import * as React from "react";

import { AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/reveal-animation";

import image1 from "../../../public/images/about/1.jpeg";
import image2 from "../../../public/images/about/2.jpeg";
import image3 from "../../../public/images/about/3.jpeg";
import image4 from "../../../public/images/about/4.jpeg";
import image5 from "../../../public/images/about/5.jpeg";
import image6 from "../../../public/images/about/6.jpeg";

import Link from "next/link";

function About() {
  return (
    <AnimatePresence>
      <main className="min-h-screen">
        <Reveal width="100%">
          <div className="w-full h-[250px] lg:h-[480px] mt-10 lg:mt-16">
            <Image
              src="/images/about/about-cover.jpeg"
              alt="Nancy"
              width={1184}
              height={593}
              className="w-full h-full object-cover object-top transition-all duration-300"
            />
          </div>
        </Reveal>

        <div className="px-[6%] gap-8 mt-12 lg:mt-16 text-xl font-light text-[#3B3D3E]">
          <div className="text-3xl lg:text-4xl xl:text-5xl z-50 font-georgia font-bold text-[#313232]">
            <h1>
              I’m a <span className="text-primary">Creative</span> Graphic
              Designer
            </h1>
          </div>

          <p className="my-6">
            The story of my <span className="font-semibold">passion</span> for
            design started in the veranda of my house where my mum used to teach
            stitching. I was a 10-year-old restless kid back then.
          </p>

          <p className="my-6">
            During my college days, I used to design and stitch clothes which I
            still fondly do. My <span className="font-semibold">journey</span>{" "}
            as a graphic designer started in 2016.
          </p>

          <p className="my-6">
            My most recent work stint was with{" "}
            <span className="font-semibold">Innovist</span> which has{" "}
            <span className="font-semibold">
              4 brands- Bare Anatomy, Chemist at Play, Sun Scoop, and Nudge
            </span>
            . I designed for all the brands and led the design for ‘chemist at
            play’.
          </p>

          <p className="my-6">
            At Innovist I designed for social engagement & advertising, their
            e-commerce partners, Nykaa, Amazon, and Flipkart, Myntra, Landing
            page, website and other marketing assets like, banners, newsletters.
          </p>

          <p className="my-6">
            I am a foodie, a movie buff, and love to sleep extra at weekends.
            Apart from being a graphic designer, I’m a great cook.
          </p>

          <Link
            href="/nancy-resume.pdf"
            target="_blank"
            className="px-12 py-3 border-primary border text-primary hover:bg-primary hover:text-white transition-all duration-300 text-xl inline-block mt-8"
          >
            RESUME
          </Link>
        </div>

        <div className="px-[6%] gap-8 mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2">
          <div>
            <Image
              src={image1}
              alt=""
              width={600}
              height={593}
              placeholder="blur"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <Image
              src={image2}
              alt=""
              width={600}
              height={593}
              placeholder="blur"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <Image
              src={image3}
              alt=""
              width={600}
              height={593}
              placeholder="blur"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <Image
              src={image4}
              alt=""
              width={600}
              height={593}
              placeholder="blur"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <Image
              src={image5}
              alt=""
              width={600}
              height={593}
              placeholder="blur"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div>
            <Image
              src={image6}
              alt=""
              width={600}
              height={593}
              placeholder="blur"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        <div className="h-[150px]" />
      </main>
    </AnimatePresence>
  );
}

export default About;
