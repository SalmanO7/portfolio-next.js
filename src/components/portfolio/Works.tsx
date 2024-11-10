"use client";
import React, { useEffect, useState } from "react";
import { projects, projectsNav } from "./Data";
import WroksItem from "./WorkItems";
import "./work.css"

// Define types for the project and navigation items
interface Project {
  id: number;
  image: any;
  title: string;
  // category: string;
  [key: string]: any; // Adjust properties as per actual project data structure
}

interface ProjectNav {
  name: string;
}
console.log("Salman")

const Works: React.FC = () => {
  const [item, setItem] = useState<ProjectNav>({ name: "all" });
  const [project, setProject] = useState<Project[]>([]);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (item.name === "all") {
      setProject(projects);
    } else {
      const newProject = projects.filter(
        (project) => project.category === item.name
      );
      setProject(newProject);
    }
  }, [item]);

  const clickHandler = (
    e: React.MouseEvent<HTMLSpanElement>,
    index: number
  ) => {
    setItem({ name: e.currentTarget.textContent || "all" });
    setActive(index);
  };

  return (
    <div className="work-box">
      <div className="work-filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={(e) => clickHandler(e, index)}
            className={`${active === index ? "active-work" : ""} work-item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="work-container container grid place-items-center">
        {project.map((item) => (
          <WroksItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
