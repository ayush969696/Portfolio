import React from 'react'
import { HiArrowUp } from "react-icons/hi";

const Card = ({ item: { title, skills } }) => {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-auto overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 pb-9 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <div className="flex gap-4 flex-wrap">
              {skills.map(({ name, icon: SkillIcon }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="bannerIcon hover:text-yellow-400">
                    {<SkillIcon size={30} />}
                  </span>
                  <span className="text-lg mt-2 font-semibold text-gray-300">
                    {name}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-2xl text-yellow-400">
              <HiArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
