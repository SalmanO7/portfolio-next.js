import React from "react";
import { FaSmileWink } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Data = () => {
  return (
    <>
      <div className="home-data">
        <div className="small-home-section">
          <h1 className="home-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Muhammad Salman
          </h1>
          <div className="flex justify-start py-2 items-center gap-2 font-bold text-sm sm:text-[13px] lg:text-2xl">
            <h3 className="text-animation">I am</h3>
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Frontend Developer",
                  "UI/UX Designer",
                  "Web Designer",
                  "Frontend Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                cursor: "👀",
                deleteSpeed: 50,
                wrapperClassName: "text-animation-wrapper",
              }}
            />
          </div>
          <p className="home-description max-w-[400px] mb-1 text-sm">
            As a dedicated front-end developer, I have a passion for crafting
            engaging and dynamic user interfaces.enabling me to create
            interactive web applications that provide seamless user experiences.
          </p>
        </div>
        <div className="mb-11">
          {" "}
          <button className="px-8 bg-black  text-white rounded-md py-2 flex justify-center items-center gap-1 ">
            Say Hi
            <FaSmileWink className="home-icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Data;
