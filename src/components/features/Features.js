import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAndroid, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiVisualstudiocode, SiPostman,SiAndroidstudio } from "react-icons/si";

const skillsData = [
  {
    id: 1,
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: 2,
    title: "Backend",
    skills: [
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    id: 3,
    title: "Android",
    skills: [
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Java", icon: FaJava },
    ],
  },
  {
    id: 4,
    title: "Others",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Postman", icon: SiPostman },
    ],
  },
];


const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Skills" des="My SKILLS" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {skillsData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
