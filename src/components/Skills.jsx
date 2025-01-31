import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiPython,
  SiCplusplus,
} from "react-icons/si";
import { FaDatabase, FaCode, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-600" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Problem Solving", icon: <FaCode className="text-purple-500" /> },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section id="skills" className="py-16 bg-blue-950 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h3 className="text-4xl font-bold font-serif text-center mb-12 bg-clip-text text-white">
          Skills
        </h3>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {skills.map((skill, index) => (
            <div
              data-aos="flip-left"
              key={index}
              className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 border border-gray-700"
            >
              {/* Skill Icon */}
              <div className="text-5xl mb-3">{skill.icon}</div>

              {/* Skill Name */}
              <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
