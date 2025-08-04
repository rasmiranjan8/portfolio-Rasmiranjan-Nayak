import "./Welcome.css"; // Import the CSS file
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Welcome = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  const openPdf = () => {
    window.open("/resume-Rasmiranjan Nayak.pdf", "_blank");
  };
  return (
    <header className="bg-blue-950 min-h-screen h-auto text-white flex flex-col justify-center text-center">
      <div
        data-aos="zoom-in-up"
        className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 px-6  py-20"
      >
        {/* Text Content */}
        <div className="max-w-lg">
          <h2 className="text-6xl font-bold font-serif leading-tight">
            Welcome to My Portfolio
          </h2>
          <p className="mt-4 text-base font-mono">
            Hi, I&apos;m Rasmiranjan Nayak, a full-stack developer skilled in
            front-end and back-end technologies, passionate about creating
            dynamic, responsive applications.
          </p>
          <button
            onClick={openPdf}
            className="mt-8 p-2 border rounded hover:cursor-pointer bg-transparent hover:bg-gray-200 text-white hover:text-black shadow "
          >
            View Resume
          </button>
        </div>
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-green-500 shadow-lg animate-borderShadow">
            <img
              src="photo2.png"
              alt="Rasmiranjan Nayak"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Welcome;
