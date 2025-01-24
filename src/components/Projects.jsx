import React from "react";

const Projects = ({ projects }) => {
  // Filter projects into major and minor categories
  const majorProjects = projects.filter(
    (project) => project.catagory.toLowerCase() === "significant projects"
  );
  const minorProjects = projects.filter(
    (project) => project.catagory.toLowerCase() === "learning projects"
  );

  // Function to render project cards
  const renderProjects = (projectsList) => {
    return projectsList.map((project, index) => (
      <div
        key={index}
        className="flex flex-col lg:flex-row bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 border border-gray-700 rounded-lg shadow-lg overflow-hidden mb-6"
      >
        {/* Image Section */}
        <div className="lg:w-1/3 flex-shrink-0">
          <img
            src={project.pic}
            alt={`${project.name} screenshot`}
            className="w-full h-64 object-cover lg:h-full"
          />
        </div>

        {/* Details Section */}
        <div className="lg:w-2/3 p-6 flex flex-col justify-between">
          <div>
            <h4 className="text-2xl font-bold text-black mb-4">
              {project.name}
            </h4>
            <p className="text-gray-900 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap mb-4">
              <span className="p-1.5 rounded-lg bg-gray-600 text-white m-1 text-xs">
                {project.type}
              </span>
              <span className="p-1.5 rounded-lg bg-gray-600 text-white m-1 text-xs">
                {project.catagory}
              </span>
              <span className="p-1.5 rounded-lg bg-gray-600 text-white m-1 text-xs">
                {project.involved}
              </span>
              {project.used && (
                <span className="p-1.5 rounded-lg bg-gray-600 text-white m-1 text-xs">
                  {project.used}
                </span>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-4">
            <button>
              <a
                href={project.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border p-2 rounded-lg bg-blue-600 hover:bg-blue-800 text-white"
              >
                View GitHub
              </a>
            </button>
            <button>
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white"
              >
                view Preview
              </a>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="container mx-auto px-4">
        {/* Projects Header */}
        <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-10 text-center">
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
