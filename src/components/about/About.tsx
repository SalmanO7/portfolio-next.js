import Image from "next/image";
import React from "react";
import aboutImg from "@/assets/about.jpg";
import Link from "next/link";
// import myResume from "../../assets/myResume.pdf"

const About = () => {
  return (
    <>
      {" "}
      <div className=" w-full" id="about">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl  xl:text-4xl text-center font-bold mt-40 ">
          About Me
        </h1>
        <h4 className="text-sm text-center mb-10">My Introduction</h4>
        <div className="flex justify-around items-center gap-7 md:gap-16  flex-col sm:flex-col sm:justify-center md:flex-row">
          <div className="img max-w-[60%] sm:max-w-[50%] md:max-w-[30%]">
            <Image
              src={aboutImg}
              alt="About Image"
              className="md:pl-5 h-[10%] "
            />
          </div>
          <div className="content  sm:max-w-[50%] flex justify-center flex-col items-center md:pr-14">
            <div className="boxs flex justify-center items-center gap-6 sm:py-3 sm:pt-0 m-4">
              <div className="project py-5 px-7 border rounded-md  ">
                <h3>Completed</h3>
                <p className="text-[12px] text-center">Projects</p>
              </div>
              <div className="technology py-5 px-7 border rounded-md  ">
                <h3>Technologies</h3>
                <p className="text-[12px] text-center">Skills</p>
              </div>
            </div>
            <p className="py-3 text-sm sm:text-base  w-[400px] md-pl-[20px] text-justify">
              Hi! I'm Salman, a passionate student developer with a keen
              interest in software development and web technologies.As I
              continue my journey in the tech world, I am eager to take on new
              challenges,learn from experienced professionals,and contribute to
              meaningful projects that make a difference.Thank you for visiting
              my portfolio, and I look forward to connecting with you!❤👀
            </p>

            {/* <Link href={myResume} className=" px-12 bg-black text-white rounded-md py-3 my-5">Download</Link> */}
            <button className="px-12 bg-black  text-white rounded-md max-w-[200px] py-3 my-5">
              Download Cv
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
