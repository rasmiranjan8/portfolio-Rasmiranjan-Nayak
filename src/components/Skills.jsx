import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCuttlefish,
  FaDatabase,
} from "react-icons/fa"; // Importing relevant icons
import { SiMongodb, SiExpress } from "react-icons/si"; // Importing MongoDB and Express icons

const Skills = ({ skills }) => {
  return (
    <section
      id="skills"
      className="py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto p-2">
        <h3 className="text-5xl font-bold text-center mb-10 bg-clip-text text-white">
          Skills
        </h3>

        {/* Single-column layout */}
        <div className="flex flex-col items-center space-y-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-full max-w-md flex flex-row items-center space-x-4"
            >
              {/* Skill Icon */}
              <div className="text-3xl">{skill.icon}</div>

              {/* Skill Details */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold">{skill.name}</h4>
                  <p className="text-sm text-gray-400">{skill.level}%</p>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-4 mt-2">
                  <div
                    className="bg-gradient-to-r from-green-800 to-green-200 h-4 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
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
