import React from "react";
import IntroVideoTop from "./IntroVideo/IntroVideoTop";
import IntroVideoCard from "./IntroVideo/IntroVideoCard";

const IntroVideo = () => {
  return (
    <>
      <section className="grid place-items-center bg-zinc-100 py-10!">
        <div className="flex flex-col gap-5 sm:gap-10 xl:gap-15 w-[85vw] sm:w-[80vw] md:w-[75vw] lg:w-[70vw] xl:w-3/5">
          <IntroVideoTop />
          <IntroVideoCard />
        </div>
      </section>
    </>
  );
};

export default IntroVideo;
