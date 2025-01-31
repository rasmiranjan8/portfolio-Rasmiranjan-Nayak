import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section
      data-aos="fade-up"
      id="contact"
      className="py-20 bg-blue-950 text-white"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold font-serif mb-8 text-center text-gray-100">
          Let's Connect
        </h3>
        <p className="text-center text-md text-gray-200">
          Feel free to reach out for collaborations or just to say hi!
        </p>

        <div className="flex flex-col items-center mt-10 space-y-6 md:space-y-0 md:flex-row md:justify-evenly">
          {/* Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-4xl text-blue-400" />
            <p className="mt-4 text-md text-gray-300">Email:</p>
            <a
              href="mailto:nayakrasmiranjan1616@gmail.com"
              className="text-md text-white underline hover:text-blue-400"
            >
              nayakrasmiranjan1616@gmail.com
            </a>
          </div>

          {/* Phone/WhatsApp */}
          <div className="flex flex-col items-center">
            <FaPhone className="text-4xl text-green-400" />
            <p className="mt-4 text-md text-gray-300">Phone/WhatsApp:</p>
            <a
              href="tel:9556872621"
              className="text-md text-white underline hover:text-green-400"
            >
              +91 955 687 2621
            </a>
            <p className="flex items-center mt-2">
              <FaWhatsapp className="text-green-400 text-md mr-2" /> Available
              on WhatsApp
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <FaLinkedin className="text-4xl text-blue-500" />
            <p className="mt-4 text-md text-gray-300">LinkedIn:</p>
            <a
              href="www.linkedin.com/in/rasmiranjan-nayak-20389a286"
              className="text-md text-white underline hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              rasmiranjan-nayak
            </a>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center">
            <FaGithub className="text-4xl text-gray-400" />
            <p className="mt-4 text-md text-gray-300">GitHub:</p>
            <a
              href="https://github.com/rasmiranjan8"
              className="text-md text-white underline hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/rasmiranjan8
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center">
            <FaInstagram className="text-4xl text-pink-500" />
            <p className="mt-4 text-md text-gray-300">Instagram:</p>
            <a
              href="#"
              className="text-md text-white underline hover:text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              rasmiranjan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
