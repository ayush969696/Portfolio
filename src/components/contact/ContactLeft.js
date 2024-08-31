import React from "react";
import Media from "../banner/Media";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={
          "https://images.pexels.com/photos/18536259/pexels-photo-18536259/free-photo-of-the-word-contact-is-spelled-out-with-wooden-letters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ayush Butola</h3>
        <p className="text-lg font-normal text-gray-400">
          Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          As a dedicated fresher in web development, I’m eager to apply my
          skills in building user-friendly and efficient web applications. I'm
          passionate about learning and growing in the field, with a strong
          focus on delivering impactful solutions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7252048643</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ayush972982@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Media />
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
