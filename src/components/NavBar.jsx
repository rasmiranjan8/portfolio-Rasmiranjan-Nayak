import { useState, useEffect } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-1 left-1 right-1 w-full h-16 z-50 bg-black/50 backdrop-blur-sm border-b border-white/20 shadow-md">
      <div className="container mx-auto px-4  flex justify-between  items-center">
        <h1 className="text-2xl font-bold text-white font-serif">
          Rasmiranjan Nayak
        </h1>

        {/* Mobile menu button */}
        <button className="text-white lg:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu items */}
        <ul
          className={`lg:flex ${
            isMenuOpen
              ? "flex bg-black/40 backdrop-blur-lg w-36 ml-auto rounded-md"
              : "hidden lg:flex"
          } absolute lg:static top-20 left-0 right-0 text-md lg:bg-transparent lg:flex-row flex-col items-center space-y-4 lg:space-y-0 lg:space-x-12 p-4 lg:py-5`}
        >
          {["about", "projects", "skills", "certifications", "contact"].map(
            (link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={handleLinkClick}
                  className="text-white hover:text-gray-100 hover:border-b"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
