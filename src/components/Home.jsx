import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
          <span className="text-xl">Welcome to My Portfolio</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <br />
          <p className="text-sm md:text-md text-justify">
            Hi, I’m Anurag Bansod, a passionate MERN stack developer from
            Nagpur, India. I love building clean and responsive web
            applications, learning new technologies, and solving challenging
            problems through code.
          </p>
          <br />
          {/* Social Links */}
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/in/anurag-bansod/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-blue-600"
            >
              <FaLinkedin size={22} /> <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/anurag590"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-gray-800"
            >
              <FaGithub size={22} /> <span>GitHub</span>
            </a>
            <a
              href="https://leetcode.com/u/anuragbansod8468/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-orange-500"
            >
              <SiLeetcode size={22} /> <span>LeetCode</span>
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/anuragpno0m/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-green-700"
            >
              <SiGeeksforgeeks size={22} /> <span>GFG</span>
            </a>
          </div>
        </div>

        {/* Right Column - Photo */}
        <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
          <img
            src="/photo.jpg"
            className="rounded-full md:w-[450px] md:h-[450px] object-cover object-center shadow-lg border-4 border-gray-300 hover:scale-105 duration-300"
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;
