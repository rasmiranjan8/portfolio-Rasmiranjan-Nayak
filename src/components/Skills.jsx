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
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h3 className="text-4xl font-bold font-sans text-center mb-12">
          Skills
        </h3>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group [perspective:1000px]"
              data-aos="flip-left"
            >
              <div className="relative w-full h-40 bg-white rounded-xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front side */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl [backface-visibility:hidden]">
                  {skill.icon}
                </div>
                {/* Back side */}
                <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold bg-blue-500 text-white rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  {skill.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
