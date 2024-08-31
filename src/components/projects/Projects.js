import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

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
          title="FormaScholar "
          githublink="https://github.com/formascholar0007/FormaScholar"
          des="A user-friendly E-Learning platform designed for students in grades 8 to 12, focusing on Math and Science education. The platform offers interactive and engaging content, ensuring a secure and efficient learning experience. It includes an admin panel for easy content management and currently covers two subjects, with plans for future expansion to additional classes and subjects."
          src={projectOne}
          techStack={["React", "TailwindCSS", "Express", "MongoDB"]}
          date="Mar 2024 -Jul 2024"
        />
        <ProjectsCard
          title="Book Store Website"
          githublink="https://github.com/ayush969696/Book-store-App"
          des="
          A book store website that allows users to manage a collection of books. Users can add new books by specifying details such as title, author, name, and publish year. The site also provides functionality to edit and delete book entries, ensuring efficient management of the book inventory."
          src={projectThree}
          techStack={["React", "TailwindCSS", "Express", "MongoDB"]}
          date="Mar 2024 - Apr 2024"
        />
          <ProjectsCard
          title="News Website"
          githublink="https://github.com/ayush969696/Z-News"
          des="A web application designed to deliver the latest news across various categories such as business, health, and sports. The application fetches news from an external API and presents it in a clean and organized layout, ensuring users can easily stay updated on the topics that matter most to them."
          src={projectTwo}
          techStack={["HTML", "CSS", "Javascript", "Git"]}
          date="Sep 2023 - Sep 2023"
        />
        <ProjectsCard
          title="Z-Quiz"
          githublink="https://github.com/ayush969696/Z-Quiz"
          des="Z-Quiz is an Android quiz app developed using Java in Android Studio. It leverages Firebase to store and retrieve quiz information, allowing users to take quizzes across various subjects like science, math, and history. The app provides an interactive and engaging way for users to test their knowledge, making learning both enjoyable and accessible."
          src={projectFive}
          techStack={["Android Studio", "XML", "Java", "Firebase"]}
          date="Oct 2023 - Nov 2023"
        />
        <ProjectsCard
          title="User Admin App"
          githublink="https://github.com/ayush969696/hzuCollege"
          des="A university management app that streamlines communication between administration and students. The admin app allows staff to update information, post news, add photos, and manage details. This content is visible to students through the user app, which provides a comprehensive platform for university-related updates, notices, and announcements, keeping students informed about important events and changes."
          src={projectFour}
          techStack={["Android Studio", "XML", "Java", "Firebase"]}
          date="Jul 2023 - Sep 2023"
        />
      </div>
    </section>
  );
};

export default Projects;
