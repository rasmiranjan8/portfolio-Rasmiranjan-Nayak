/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Projects = ({ projects }) => {
  const [allMajorProject, setAllMajorProject] = useState(false);
  const [allMinorProject, setAllMinorProject] = useState(false);

  // Filter projects into major and minor categories
  const majorProjects = projects.filter(
    (project) => project.catagory.toLowerCase() === "significant projects"
  );
  const minorProjects = projects.filter(
    (project) => project.catagory.toLowerCase() === "learning projects"
  );

  const showMajorProjects = allMajorProject
    ? majorProjects
    : majorProjects.slice(0, 3);
  const showMinorProjects = allMinorProject
    ? minorProjects
    : minorProjects.slice(0, 3);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Function to render project cards
  const renderProjects = (projectsList) => {
    return (
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {projectsList.map((project, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-4 transition-transform transform hover:scale-102 hover:shadow-xl"
            >
              <div className="w-full">
                <img
                  src={project.pic}
                  alt={`${project.name} screenshot`}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>

              <div className="p-4 flex flex-col justify-between">
                <h4 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                  {project.name}
                </h4>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-800 text-xs">
                    {project.type}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-green-100 text-green-800 text-xs">
                    {project.catagory}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-purple-100 text-purple-800 text-xs">
                    {project.involved}
                  </span>
                  {project.used && (
                    <span className="px-3 py-1 rounded-lg bg-orange-100 text-orange-800 text-xs">
                      {project.used}
                    </span>
                  )}
                </div>

                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={project.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 w-32"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center p-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-all duration-300 w-32"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <h3
          className="text-4xl font-extrabold bg-clip-text mb-12 text-center font-serif text-gray-800"
          data-aos="fade-down"
        >
          Projects
        </h3>

        <div className="mb-10">
          <h4
            className="text-3xl font-bold text-gray-800 mb-6"
            data-aos="fade-right"
          >
            Significant Projects
          </h4>
          {majorProjects.length > 0 ? (
            renderProjects(showMajorProjects)
          ) : (
            <p className="text-gray-600">No Significant Projects available.</p>
          )}
          <div className="flex justify-end">
            <button
              onClick={() => setAllMajorProject(!allMajorProject)}
              className="text-center mt-4 mr-4 hover:cursor-pointer text-gray-800 border border-gray-300 rounded-md p-2 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
            >
              <div className="flex items-center justify-center">
                {allMajorProject ? "View Less Projects" : "View All Projects"}
                <MdKeyboardArrowRight size={30} />
              </div>
            </button>
          </div>
        </div>

        <div>
          <h4
            className="text-3xl font-bold text-gray-800 mb-6"
            data-aos="fade-right"
          >
            Learning Projects
          </h4>
          {minorProjects.length > 0 ? (
            renderProjects(showMinorProjects)
          ) : (
            <p className="text-gray-600">No Learning Projects available.</p>
          )}
          <div className="flex justify-end">
            <button
              onClick={() => setAllMinorProject(!allMinorProject)}
              className="text-center mt-4 mr-4 hover:cursor-pointer text-gray-800 border border-gray-300 rounded-md p-2 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
            >
              <div className="flex items-center justify-center">
                {allMinorProject ? "View Less Projects" : "View All Projects"}
                <MdKeyboardArrowRight size={30} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects.propTypes = {
//   projects: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       pic: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       catagory: PropTypes.string.isRequired,
//       involved: PropTypes.string.isRequired,
//       used: PropTypes.string,
//       githublink: PropTypes.string.isRequired,
//       previewLink: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default Projects;
