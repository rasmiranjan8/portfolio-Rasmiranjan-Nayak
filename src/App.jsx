import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
const App = () => {
  const projects = [
    {
      name: "Sustainable Developement",
      githublink: "https://github.com/rasmiranjan8/sustainableDev.git",
      previewLink: "https://ibm-nu.vercel.app/",
      pic: "./sustainable_dev.png",
      description:
        "Developed a frontend website using React, CSS, HTML, and JavaScript, enabling users to purchase eco-friendly products and promoting environmental sustainability.",
      type: "frontend",
      catagory: "Significant Projects",
      involved: "Team Project",
      used: "IBM Frontend Internship",
    },
    {
      name: "CareSync",
      githublink: "https://github.com/abhijitnaik101/CareSync.git",
      previewLink: "https://github.com/abhijitnaik101/CareSync.git",
      pic: "./caresync.png",
      description:
        "A portfolio website built using React, CSS, and JavaScript, showcasing my skills and experience as a software developer.",
      type: "frontend and backend",
      catagory: "Significant Projects",
      involved: "Team Project",
      used: "SIH 2024",
    },
    {
      name: "Tic Tac Toe Game",
      githublink: "https://github.com/rasmiranjan8/tic-tac-toe-game.git",
      previewLink: "https://tic-tac-toe-game-seven-gamma.vercel.app/",
      pic: "./tic_tac_toe.png",
      description:
        "Built a Tic Tac Toe game with React and Tailwind CSS, featuring options to play in 3x3, 4x4, and 5x5 grids, enhancing both logic and interactive UI design.",
      type: "frontend",
      catagory: "Learning Projects",
      involved: "self project",
    },
    {
      name: "Simon Game",
      githublink: "https://github.com/rasmiranjan8",
      previewLink: "https://github.com/rasmiranjan8",
      pic: "./simon_game.png",
      description:
        "A portfolio website built using React, CSS, and JavaScript, showcasing my skills and experience as a software developer.",
      type: "frontend and backend",
      catagory: "Learning Projects",
      involved: "self project",
    },
    {
      name: "Calculator App",
      githublink: "https://github.com/rasmiranjan8",
      previewLink: "https://github.com/rasmiranjan8",
      pic: "./calculator.jpeg",
      description:
        "A portfolio website built using React, CSS, and JavaScript, showcasing my skills and experience as a software developer.",
      type: "frontend and backend",
      catagory: "Learning Projects",
      involved: "self project",
    },
    {
      name: "ToDo App",
      githublink: "https://github.com/rasmiranjan8",
      previewLink: "https://github.com/rasmiranjan8",
      pic: "./todo_app.png",
      description:
        "A portfolio website built using React, CSS, and JavaScript, showcasing my skills and experience as a software developer.",
      type: "frontend",
      catagory: "Learning Projects",
      involved: "self project",
    },
    {
      name: "Furniture Website",
      githublink:
        "https://github.com/rasmiranjan8/maa-bhattarika-furniture.git",
      previewLink: "https://maa-bhattarika-furnuture.netlify.app/",
      pic: "./furniture.png",
      description:
        "Developed a furniture website with the integration of WhatsApp API to enable direct messaging upon item selection, streamlining communication for our own business.",
      type: "frontend and backend",
      catagory: "Significant Projects",
      involved: "self project",
      used: "For our own business",
    },
    {
      name: "Alumni Connect Website",
      githublink: "https://github.com/rasmiranjan8/code-surgeons.git",
      previewLink: "https://bitsindrialumniconnect.netlify.app/",
      pic: "./alumni_connect.png",
      description:
        "Developed a fully functional alumni connect website for BIT Sindri using React and Tailwind CSS, designed to foster networking among alumni, and created for participation in Nexus 3.0.",
      type: "frontend",
      catagory: "Significant Projects",
      involved: "Group Project",
      used: "Nexus 3.0",
    },
  ];
  
  
  return (
    <div className="min-h-screen bg-gray-100 pt-16 flex flex-col ">
      <NavBar />
      <Welcome />
      <AboutMe />
      <Projects projects={projects} />
      <Skills />
      <Certifications />
      <Contact />
      <footer className="bg-blue-900 text-sm text-white py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Rasmiranjan Nayak. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
