import { Reveal } from "@/components/reveal-animation";
import { Video } from "@/components/video";
import React from "react";

const MotionVideosPage = () => {
  return (
    <Reveal width="100%">
      <section className="p-8 md:p-20 lg:p-24 xl:p-32 pt-0 md:pt-0 lg:pt-0 xl:pt-0">
        <div className="my-16 text-2xl lg:text-3xl xl:text-4xl text-center font-georgia font-bold text-[#313232]">
          <h2>Motion graphics done right!</h2>
          <p className="text-sm font-serif font-light">
            (Here are some of the videos i made for insta ads.)
          </p>
        </div>

        <div className="mt-32 xl:[&>*:nth-child(even)]:-mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center place-content-center gap-12">
          <Video src="/videos/3.mp4" />
          <Video src="/videos/4.mp4" />
          <Video src="/videos/5.mp4" />
          <Video src="/videos/6.mp4" />
          <Video src="/videos/7.mp4" />
          <Video src="/videos/8.mp4" />

          <Video src="/videos/10.mp4" />
          <Video src="/videos/11.mp4" />
          <Video src="/videos/12.mp4" />
          <Video src="/videos/13.mp4" />
          <Video src="/videos/14.mp4" />
          <Video src="/videos/15.mp4" />
          <Video src="/videos/16.mp4" />

          <Video src="/videos/17.mp4" />
          <Video src="/videos/18.mp4" />
          <Video src="/videos/19.mp4" />
        </div>
      </section>

      <div className="mb-[100px]" />
    </Reveal>
  );
};

export default MotionVideosPage;
