import Marquee from "react-fast-marquee";

import { Reveal } from "@/components/reveal-animation";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Video } from "@/components/video";

const Intro = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-20 lg:p-24 xl:p-32 ">
      <div className="lg:col-span-1">
        <div className="text-xl font-light text-[#3B3D3E]">
          <div className="text-3xl lg:text-4xl xl:text-5xl font-georgia font-bold text-[#313232]">
            <h1>
              I’m a <span className="text-primary">Creative</span> <br />
              Graphic Designer
            </h1>
          </div>

          <p className="my-6">
            I am a designer at heart. With 7+ years of professional experience
            in graphic design, I specialize in product branding, social media &
            advertising assets, and graphics for websites & marketplaces. A
            creative collaborator and eager learner, I thrive on new challenges.
          </p>

          <div className="gap-2 flex mt-8">
            <Link
              href="/about"
              className="px-10 py-2 bg-primary border-primary border text-white text-base inline-block"
            >
              ABOUT ME
            </Link>
            <Link
              href="/nancy-resume.pdf"
              target="_blank"
              className="px-10 py-2 border-primary border text-primary text-base inline-block hover:bg-primary hover:text-white transition-all duration-300"
            >
              RESUME
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/images/nancy-image.jpeg"
        alt="Short Image"
        width={350}
        height={621}
        className="w-full lg:w-[472px] lg:h-[500px] object-contain z-10 ml-auto lg:-mt-24"
      />
    </section>
  );
};

const Work = () => {
  return (
    <section className="bg-gray-100  p-8 md:p-20 lg:p-24 xl:p-32 py-8 md:py-8 lg:py-8 xl:py-8">
      <h2
        className="text-3xl font-georgia lg:text-4xl mb-10 pt-8 font-medium lg:font-bold xl:text-5xl"
        id="work"
      >
        Recent Work
      </h2>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <Link href="/work/nestasia" className="overflow-hidden">
          <Image
            src="/images/work/nestasia.jpeg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-300"
          />
        </Link>

        <Link href="/work/nudge" className="overflow-hidden">
          <Image
            src="/images/work/nudge.jpeg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-300"
          />
        </Link>

        <Link href="/work/bare-anatomy" className="overflow-hidden">
          <Image
            src="/images/work/bare-anatomy.jpeg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-300"
          />
        </Link>

        <Link href="/work/sunscoop" className="overflow-hidden">
          <Image
            src="/images/work/sunscoop.jpeg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-300"
          />
        </Link>

        <Link href="/work/innovist" className="overflow-hidden">
          <Image
            src="/images/work/innovist.jpg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-300"
          />
        </Link>

        <Link href="/work/bonn" className="overflow-hidden">
          <Image
            src="/images/work/bonn.jpeg"
            alt=""
            width={500}
            height={600}
            className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-300"
          />
        </Link>
      </section>

      <div className="flex items-center justify-center my-12">
        <a
          href="https://www.behance.net/nancyverma5"
          target="_blank"
          className="px-10 py-2 border-primary border text-primary hover:bg-primary hover:text-white transition-all duration-300 text-base inline-block"
        >
          SEE MORE
        </a>
      </div>
    </section>
  );
};

const LogoWrapper = ({
  children,
  tooltip,
}: {
  children: React.ReactNode;
  tooltip?: string;
}) => {
  return (
    <div className="group relative flex items-center justify-center flex-col">
      {children}
      <span className="mt-2 text-xs text-gray-500">{tooltip}</span>
    </div>
  );
};

const ToolBox = () => {
  return (
    <Reveal width="100%">
      <section className="bg-[#f7f7f7] p-8 md:p-20 lg:p-24 xl:p-32">
        <h2
          className="text-3xl font-georgia lg:text-4xl mb-1 pt-8 font-medium lg:font-bold xl:text-5xl"
          id="work"
        >
          Tool Box
        </h2>

        <div className="mt-12 flex items-center flex-wrap gap-12">
          <LogoWrapper tooltip="Photoshop">
            <Image
              src="/images/photoshop.png"
              alt="Photoshop"
              width={60}
              height={60}
            />
          </LogoWrapper>
          <LogoWrapper tooltip="Illustrator">
            <Image
              src="/images/illustrator.png"
              alt="Illustrator"
              width={60}
              height={60}
            />
          </LogoWrapper>
          <LogoWrapper tooltip="After Effects">
            <Image
              src="/images/after-effects.png"
              alt="After Effects"
              width={60}
              height={60}
            />
          </LogoWrapper>
          <LogoWrapper tooltip="Coreldraw">
            <Image
              src="/images/coreldraw.png"
              alt="Coreldraw"
              width={60}
              height={60}
              className="rounded-lg"
            />
          </LogoWrapper>
          <LogoWrapper tooltip="Canva">
            <Image src="/images/canva.png" alt="Canva" width={60} height={60} />
          </LogoWrapper>
          <LogoWrapper tooltip="Figma">
            <Image src="/images/figma.png" alt="Figma" width={60} height={60} />
          </LogoWrapper>
        </div>
      </section>
    </Reveal>
  );
};

const MotionVideos = () => {
  return (
    <Reveal width="100%">
      <section className="p-8 md:p-20 lg:p-24 xl:p-32 py-8 md:py-8 lg:py-8 xl:py-8">
        <h2 className="text-3xl font-georgia lg:text-4xl mb-1 pt-8 font-medium lg:font-bold text-center  xl:text-5xl">
          Motion graphics done right!
        </h2>

        <p className="text-lg font-serif font-light mt-3 text-center">
          (Here are some of the video advertising assets, I made for Meta)
        </p>

        <div className="mt-24 lg:mt-40 xl:[&>*:nth-child(even)]:-mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center place-content-center gap-12">
          <Video src="/videos/2.mp4" poster="/images/video-posters/2.png" />
          <Video src="/videos/4.mp4" poster="/images/video-posters/4.png" />
          <Video src="/videos/5.mp4" poster="/images/video-posters/5.png" />
          <Video src="/videos/8.mp4" poster="/images/video-posters/8.png" />
          <Video src="/videos/17.mp4" poster="/images/video-posters/17.png" />
          <Video src="/videos/11.mp4" poster="/images/video-posters/11.png" />
          <Video src="/videos/10.mp4" poster="/images/video-posters/10.png" />
          <Video src="/videos/7.mp4" poster="/images/video-posters/7.png" />
        </div>

        <div className="flex items-center justify-center my-12">
          <Link
            href="/motion-videos"
            className="px-10 py-2 border-primary border text-primary hover:bg-primary hover:text-white transition-all duration-300 text-base inline-block"
          >
            SEE MORE
          </Link>
        </div>
      </section>
    </Reveal>
  );
};

const Brands = () => {
  return (
    <Reveal width="100%">
      <section className="bg-[#fff] p-8 md:p-20 lg:p-24 xl:p-32">
        <h2
          className="text-3xl font-georgia lg:text-4xl mb-1 pt-8 font-medium lg:font-bold xl:text-5xl"
          id="work"
        >
          Brands
        </h2>
        <p className="text-lg font-serif">I Have Designed For</p>

        <Marquee>
          <div className="flex items-center gap-12">
            <Image
              src="/images/brands/nestasia.jpeg"
              alt="nestasia-logo"
              width={219}
              height={59}
              className="ml-12"
            />
            <Image
              src="/images/brands/sun-scoop.jpeg"
              alt="sun-scoop-logo"
              width={129}
              height={92}
            />
            <Image
              src="/images/brands/bare-anatomy.jpeg"
              alt="bare-anatomy-logo"
              width={212}
              height={212}
            />
            <Image
              src="/images/brands/chemist-at-play.jpeg"
              alt="chemist-at-play-logo"
              width={179}
              height={105}
            />
            <Image
              src="/images/brands/nudge.jpeg"
              alt="nudge-logo"
              width={181}
              height={100}
            />
            <Image
              src="/images/brands/americana.jpg"
              alt="americana-logo"
              width={200}
              height={61}
            />
            <Image
              src="/images/brands/codebrew.jpeg"
              alt="codebrew-logo"
              width={200}
              height={61}
            />
            <Image
              src="/images/brands/daffodils.jpeg"
              alt="daffodils-logo"
              width={200}
              height={61}
            />
            <Image
              src="/images/brands/studio-6.jpeg"
              alt="studio-6-logo"
              width={200}
              height={61}
            />
            <Image
              src="/images/brands/teckle.jpg"
              alt="teckle-logo"
              width={200}
              height={61}
            />
            <Image
              src="/images/brands/whitechalk.jpg"
              alt="whitechalk-logo"
              width={70}
              height={61}
            />
            <Image
              src="/images/brands/kabera.jpeg"
              alt="kabera-logo"
              width={200}
              height={61}
            />
            <Image
              src="/images/brands/kabera-clinics.jpeg"
              alt="kabera-clinics-logo"
              width={200}
              height={61}
            />
            <Image
              src="/images/brands/kabera-care.jpeg"
              alt="kabera-care-logo"
              width={200}
              height={61}
            />
          </div>
        </Marquee>

        <div className="h-[100px] lg:h-[50px]" />
      </section>
    </Reveal>
  );
};

function Home() {
  return (
    <main className="min-h-screen">
      <Intro />
      <Work />
      <MotionVideos />
      <ToolBox />
      <Brands />
    </main>
  );
}

export default Home;
