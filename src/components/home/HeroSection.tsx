"use client";
import React from "react";
import ScrollDown from "@/components/home/ScrollDown";
import Social from "@/components/home/Social";
import Data from "@/components/home/Data";
import Image from "next/image";
import homeImg from "@/assets/dp.png"
import { Spotlight } from "../ui/Spotlight";

const HeroSection = () => {
  return (
    <div className="h-[40rem] w-full sm:mt-[56px]   flex md:items-center text-black md:justify-center bg-white/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="green"
      /> */}
      <section className="home section flex h-auto  overflow-hidden mx-auto ">
        <div className="home-container container grid items-center">
          <div className="home-content flex justify-center flex-col sm:flex-row sm:pt-24 md:pt-3 items-center pt-11  sm:mt-[-90px]">
            <div className="flex justify-center items-center  px-20 gap-x-5 sm:gap-x-10 md:gap-x-16 lg:gap-x-20 xl:gap-x-24 ml-[-60px]">
              <Social />
              <Data />
            </div>

            <Image
              src={homeImg}
              alt="Home Image"
              className="bg-no-repeat bg-center bg-cover order-1 lg:mt-[-30px] self-center max-w-[60%] sm:max-w-[38%] h-[200px] md:h-[330] xl:h-[380px] lg: rounded-xl border-y-cyan-50 "
            />
          </div>
          <ScrollDown />
          
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
