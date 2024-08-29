import React from "react";
import { FaLinkedinIn, FaReact, FaAndroid, FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/ayush-butola-655456270">
            <span className="bannerIcon hover:text-yellow-400" >
              <FaLinkedinIn />
            </span>
          </a>

          <a href="https://github.com/ayush969696">
            <span className="bannerIcon hover:text-yellow-400 ">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>
      {/* <div className="w-[65%]">
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4 flex-wrap">
          <span className="bannerIcon hover:text-yellow-400 ">
            <FaHtml5 />
          </span>
          <span className="bannerIcon hover:text-yellow-400 ">
            <FaCss3Alt />
          </span>
          <span className="bannerIcon hover:text-yellow-400 ">
            <FaJs />
          </span>
          <span className="bannerIcon hover:text-yellow-400 ">
            <FaReact />
          </span>
          <span className="bannerIcon hover:text-yellow-400 ">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon hover:text-yellow-400 ">
            <SiExpress />
          </span>
          <span className="bannerIcon hover:text-yellow-400 ">
            <SiMongodb />
          </span>
          <span className="bannerIcon hover:text-yellow-400 ">
            <FaAndroid />
          </span>
          <span className="bannerIcon hover:text-yellow-400 ">
            <FaGitAlt />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Media;
