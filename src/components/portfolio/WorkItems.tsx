import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const WroksItem = ({ item }: any) => {
  return (
    <div className="work-card" key={item.id}>
      <Image src={item.image} alt="" className="work-img w-[250px] lg:w-[300px]" />
      <h3 className="work-title">{item.title}</h3>
      <a
        href="https://github.com/SalmanO7?tab=repositories"
        className="work-btn"
      >
        Explore <IoIosArrowRoundForward className="services-btn-icon" />
      </a>
    </div>
  );
};

export default WroksItem;
