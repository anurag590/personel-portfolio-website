import React from "react";
import { FaGithub } from "react-icons/fa";

function Portfolio() {
  const projects = [
    {
      name: "Crop Recommendation System",
      description:
        "Developed a predictive analytics solution using Random Forest to recommend optimal crops based on soil nutrients, rainfall patterns, and temperature data. Planned integration of IoT sensors for real-time recommendations.",
      techStack: ["Python", "Machine Learning", "HTML", "CSS", "Flask"],
      github: "https://github.com/anurag590/crop-recommendation-system.git",
    },
    {
      name: "Personal Portfolio Website",
      description:
        "Created a personal portfolio website to showcase projects, skills, and contact information. Built reusable components in React.js and deployed online via Netlify.",
      techStack: ["React.js", "HTML", "JavaScript", "Netlify"],
      github: "https://github.com/anurag590/Portfolio.git",
    },
    {
      name: "Expense Tracker Application",
      description:
        "Developed a browser-based expense tracking app allowing users to add, edit, and delete transactions with automatic balance calculation. Implemented local storage for data persistence.",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/anurag590/Expensetracker.git",
    },
    {
      name: "Exam Question Generator Website",
      description:
        "Built a web application that generates exam questions based on uploaded study materials. Developed using Python and Flask with HTML/CSS frontend.",
      techStack: ["Python", "Flask", "HTML", "CSS"],
      github:
        "https://github.com/anurag590/exam_question_generator_website.git",
    },
    {
      name: "Calculator",
      description:
        "Developed a fully functional calculator web app supporting basic arithmetic operations. Built with HTML, CSS, and JavaScript for browser usage.",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/anurag590/Calculator.git",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
      <span className="underline font-semibold">Featured Projects</span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {projects.map(({ name, description, techStack, github }, index) => (
          <div
            key={index}
            className="border-[2px] rounded-lg shadow-lg p-5 flex flex-col justify-between hover:scale-105 duration-300"
          >
            <div>
              <h2 className="font-bold text-xl mb-3">{name}</h2>
              <p className="text-gray-700 mb-3">{description}</p>

              <p className="text-sm text-gray-500 mb-3">
                <strong>Tech Stack:</strong> {techStack.join(", ")}
              </p>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <FaGithub size={20} className="mr-2" /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
