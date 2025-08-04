import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section id="about" className="py-16 bg-white text-black font-sans">
      <div className="container mx-auto px-6 md:flex md:items-center md:space-x-12">
        {/* Left Image Section */}
        <div className="md:w-1/2" data-aos="fade-right">
          <div className="relative">
            <img
              src="/profile.png" // replace with your image path
              alt="Profile"
              className="w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full mix-blend-multiply" />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 space-y-6" data-aos="fade-left">
          <h2 className="text-4xl font-bold" data-aos="fade-down">
            ABOUT ME
          </h2>
          <p className="text-red-500 font-bold tracking-wide">
            FULL-STACK DEVELOPER
          </p>

          <p className="text-gray-700 leading-relaxed" data-aos="fade-up">
            I am a passionate full-stack web developer focused on building
            efficient, scalable, and user-friendly applications.
          </p>

          <p className="text-gray-700 leading-relaxed" data-aos="fade-up">
            My programming journey began with{" "}
            <b className="text-yellow-500 font-mono">C</b> and{" "}
            <b className="text-yellow-300 font-mono">C++</b>, building strong
            logical and problem-solving skills. With over{" "}
            <b className="text-yellow-500 font-mono">
              500+ LeetCode challenges
            </b>{" "}
            solved, I have proven expertise in coding and algorithms.
          </p>

          <p className="text-gray-700 leading-relaxed" data-aos="fade-up">
            Currently studying at{" "}
            <b className="text-teal-500">
              Odisha University of Technology and Research, Bhubaneswar
            </b>
            , I continuously explore modern technologies to deliver
            performance-driven solutions.
          </p>

          {/* Tech Stack */}
          <div
            className="grid grid-cols-3 gap-4 font-mono text-gray-800"
            data-aos="fade-up"
          >
            <div className="flex items-center space-x-2">
              <FaHtml5 className="text-red-500" />
              <span>HTML</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCss3Alt className="text-blue-500" />
              <span>CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaJs className="text-yellow-500" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaReact className="text-blue-400" />
              <span>React</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaReact className="text-teal-400" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaNodeJs className="text-green-500" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaDatabase className="text-yellow-700" />
              <span>SQL</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaDatabase className="text-green-300" />
              <span>MongoDB</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 text-xl mt-4">
            <a
              href="www.linkedin.com/in/rasmiranjan-nayak-20389a286"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rasmiranjan1616"
              className="hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:nayakrasmiranjan1616@gmail.com"
              className="hover:text-blue-950"
            >
              <FaEnvelope />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
