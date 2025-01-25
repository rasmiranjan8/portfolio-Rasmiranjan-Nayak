import React from "react";
import "./Welcome.css"; // Import the CSS file

const Welcome = () => {
  return (
    <header className="bg-blue-950 text-white py-20 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 px-6">
        {/* Text Content */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold leading-tight">
            Welcome to My Portfolio
          </h2>
          <p className="mt-4 text-lg">
            Hi, I'm Rasmiranjan Nayak, a full-stack developer skilled in
            front-end and back-end technologies, passionate about creating
            dynamic, responsive applications.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-green-500 shadow-lg animate-borderShadow ">
            <img
              src="photo.png"
              alt="Rasmiranjan Nayak"
              className="absolute inset-0 w-full h-full object-contain bg-white hover:animate-borderShadowHover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Welcome;
