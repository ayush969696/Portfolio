import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="I've worked on a variety of projects, ranging from web apps to Android apps. Here are a few examples of my work."
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="FormaScholar - E-Learning Platform"
          des="A social media clone project developed with modern web technologies."
          src={projectOne}
          techStack={['React', "TailwindCSS" ,'Express', 'MongoDB', "Git"]}
          date="03/2024 - 07/2024"
        />
        <ProjectsCard
          title="News Website"
          des="An e-commerce website with full functionality including payments and user management."
          src={projectTwo}
          techStack={['HTML', 'Tailwind', 'Javascript', 'Git']}
          date="Jun 2023 - Jul 2023"
        />
        <ProjectsCard
          title="Book Store Website"
          des="A real-time chat application with user authentication and chat rooms."
          src={projectThree}
          techStack={['React', 'TailwindCSS', 'Express', 'MongoDB', "Git"]}
          date="Apr 2023 - May 2023"
        />
        <ProjectsCard
          title="User Admin App"
          des="A real-time chat application with user authentication and chat rooms."
          src={projectFour}
          techStack={['Android Studio', 'XML', 'Java', 'Firebase']}
          date="Apr 2023 - May 2023"
        />
      </div>
    </section>
  );
};

export default Projects;
