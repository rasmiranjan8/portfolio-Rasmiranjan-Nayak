import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = ({ projects }) => {
  // Filter projects into major and minor categories
  const majorProjects = projects.filter(
    (project) => project.catagory.toLowerCase() === "significant projects"
  );
  const minorProjects = projects.filter(
    (project) => project.catagory.toLowerCase() === "learning projects"
  );
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
      <div data-aos="fade-up" className="container mx-auto px-4">
        {/* Grid layout for multiple cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden p-4 transition-transform transform hover:scale-102"
            >
              {/* Image Section */}
              <div className="w-full">
                <img
                  src={project.pic}
                  alt={`${project.name} screenshot`}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>

              {/* Details Section */}
              <div className="p-4 flex flex-col justify-between">
                <h4 className="text-2xl font-bold text-black dark:text-white mb-3 text-center">
                  {project.name}
                </h4>
                <p className="text-gray-800 dark:text-gray-300 text-sm mb-4 text-center">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-gray-700 text-white text-xs">
                    {project.type}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-gray-700 text-white text-xs">
                    {project.catagory}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-gray-700 text-white text-xs">
                    {project.involved}
                  </span>
                  {project.used && (
                    <span className="px-3 py-1 rounded-lg bg-gray-700 text-white text-xs">
                      {project.used}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={project.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center p-2 rounded-lg bg-blue-600 hover:bg-blue-800 text-white transition-all duration-300 w-32"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center p-2 rounded-lg bg-blue-600 hover:bg-blue-800 text-white transition-all duration-300 w-32"
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
    <section id="projects" className="py-20 bg-blue-950 text-white">
      <div className="container mx-auto px-4">
        {/* Projects Header */}
        <h3 className="text-4xl font-extrabold bg-clip-text mb-12 text-center font-serif">
          Projects
        </h3>

        {/* Major Projects Section */}
        <div className="mb-10">
          <h4 className="text-3xl font-bold text-white mb-6">
            Significant Projects
          </h4>
          {majorProjects.length > 0 ? (
            renderProjects(majorProjects)
          ) : (
            <p className="text-gray-400">No Significant Projects available.</p>
          )}
        </div>

        {/* Minor Projects Section */}
        <div>
          <h4 className="text-3xl font-bold text-white mb-6">
            Learning Projects
          </h4>
          {minorProjects.length > 0 ? (
            renderProjects(minorProjects)
          ) : (
            <p className="text-gray-400">No Learning Projects available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
