import React from "react";
import { TiTickOutline } from "react-icons/ti";

const Skills = () => {
  return (
    <div className="w-full" id="skills">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-center font-bold mt-40 ">
        Skills
      </h1>
      <h4 className="text-sm text-center mb-10">My Technical Level</h4>
      <div className="flex justify-center items-center flex-col md:flex-row gap-8 gap-x-12">
        <div className="sections border w-60 flex justify-center items-center gap-8 pr-3 flex-col py-12 rounded-lg">
          <div className="skill flex justify-center items-center gap-2">
            <TiTickOutline className="text-black text-2xl" />
            <div className="flex justify-center  flex-col">
              <h3 className="text-base sm:text-[17px] font-bold">HTML</h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
          <div className="skill flex justify-center items-center gap-2">
            <TiTickOutline className="text-black text-2xl" />
            <div className="flex justify-center  flex-col">
              <h3 className="text-base sm:text-[17px]  font-bold">CSS</h3>
              <span className="text-sm text-gray-400">Intermediate</span>
            </div>
          </div>
          <div className="skill flex justify-center items-center gap-2">
            <TiTickOutline className="text-black text-2xl" />
            <div className="flex justify-center flex-col">
              <h3 className="text-base sm:text-[17px]  font-bold">
                JavaScript
              </h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
          <div className="skill flex justify-center items-center gap-2">
            <TiTickOutline className="text-black text-2xl" />
            <div className="flex justify-center flex-col">
              <h3 className="text-base sm:text-[17px]  font-bold">
                TypeScript
              </h3>
              <span className="text-sm text-gray-400">Intermidate</span>
            </div>
          </div>
        </div>
        <div className="sections border w-60 flex  gap-8 flex-col pr-3 py-12 rounded-lg">
          <div className="skill flex justify-center items-center gap-2">
            <TiTickOutline className="text-black text-2xl" />
            <div className="flex justify-center  flex-col">
              <h3 className="text-base sm:text-[17px]  font-bold">Next</h3>
              <span className="text-sm text-gray-400">Intermediate</span>
            </div>
          </div>
          <div className="skill flex justify-center items-center gap-2">
            <TiTickOutline className="text-black text-2xl" />
            <div className="flex justify-center  flex-col">
              <h3 className="text-base sm:text-[17px]  font-bold">React</h3>
              <span className="text-sm text-gray-400">Intermediate</span>
            </div>
          </div>
          <div className="skill flex justify-center items-center gap-2">
            <TiTickOutline className="text-black text-2xl" />
            <div className="flex justify-center flex-col">
              <h3 className="text-base sm:text-[17px]  font-bold">
                TailwindCss
              </h3>
              <span className="text-sm text-gray-400">Intermediate</span>
            </div>
          </div>
          <div className="skill flex justify-center items-center gap-2">
            <TiTickOutline className="text-black text-2xl" />
            <div className="flex justify-center flex-col">
              <h3 className="text-base sm:text-[17px]  font-bold">
                Git Github
              </h3>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
