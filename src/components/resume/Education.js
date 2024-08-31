import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part One: Education */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Computer Application"
            subTitle="Jigyasa University, Dehradun, Uttarakhand"
            result="GPA: 8/10"
            des="2021 - 2024"
          />
          <ResumeCard
            title="Senior Secondary Education"
            subTitle="Sanjay Public Inter College, Dehradun, Uttarakhand"
            result="72%"
            des="2020 - 2021"
          />
          <ResumeCard
            title="Secondary Education"
            subTitle="Sanjay Public Inter College, Dehradun, Uttarakhand"
            result="62%"
            des="2018 - 2019"
          />
        </div>
      </div>
      
      {/* Part Two: Job Experience */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Digital Marketing Executive (Internship)"
            subTitle="Chessian Consultants Pvt Ltd - Jan 2024 - May 2024"
            result=""
            des="Improved company website using WordPress, lead generation through LinkedIn, graphic design for digital marketing, and blog writing."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
