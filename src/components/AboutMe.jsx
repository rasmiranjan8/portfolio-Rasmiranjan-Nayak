import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-extrabold bg-clip-text mb-12 text-center tracking-wider">
          About Me
        </h3>

        <div className="text-md md:text-lg leading-relaxed space-y-8 font-serif tracking-wide font-playfair">
          <p className="font-medium">
            I am a passionate full-stack web developer dedicated to building
            efficient, scalable, and user-friendly applications. I specialize in
            front-end technologies like:
          </p>

          {/* Front-end Technologies */}
          <div className="flex flex-wrap items-center space-x-6 mt-4">
            <div className="flex items-center text-lg font-medium">
              <FaHtml5 className="text-red-500" size={25} />
              <span className="ml-3">HTML</span>
            </div>
            <div className="flex items-center text-lg font-medium">
              <FaCss3Alt className="text-blue-500" size={25} />
              <span className="ml-3">CSS</span>
            </div>
            <div className="flex items-center text-lg font-medium">
              <FaJs className="text-yellow-500" size={25} />
              <span className="ml-3">JavaScript</span>
            </div>
            <div className="flex items-center text-lg font-medium">
              <FaReact className="text-blue-400" size={25} />
              <span className="ml-3">React</span>
            </div>
            <div className="flex items-center text-lg font-medium">
              <FaReact className="text-teal-400" size={25} />
              <span className="ml-3">Tailwind CSS</span>
            </div>
          </div>

          {/* Back-end Technologies */}
          <p className="mt-8">On the back-end, I work with:</p>
          <div className="flex flex-wrap items-center space-x-6 mt-4">
            <div className="flex items-center text-lg font-medium">
              <FaNodeJs className="text-green-500" size={25} />
              <span className="ml-3">Node.js</span>
            </div>
            <div className="flex items-center text-lg font-medium">
              <FaDatabase className="text-yellow-700" size={25} />
              <span className="ml-3">SQL</span>
            </div>
            <div className="flex items-center text-lg font-medium">
              <FaDatabase className="text-green-300" size={25} />
              <span className="ml-3">MongoDB</span>
            </div>
          </div>

          <p className="mt-8">
            My programming journey began with{" "}
            <b className="text-yellow-400">C</b> and{" "}
            <b className="text-yellow-200">C++ </b>, which developed my logical
            and problem-solving skills, creating a strong foundation for web
            development.
          </p>

          <p>
            Whether collaborating with teams or working solo, I aim to deliver
            innovative, performance-driven solutions. I’m continuously learning
            new technologies to stay at the forefront of web development trends.
          </p>

          <p className="mt-6">
            With over{" "}
            <b className="text-yellow-400">450 challenges solved on LeetCode</b>
            , I have proven my expertise in coding and problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
