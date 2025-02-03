import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const certificates = [
    {
      id: 1,
      title: "Web Development Fundamental",
      provider: "IBM",
      image: "./IBMWebdev.jpg",
    },
    {
      id: 2,
      title: "IBM Frontend Internship",
      provider: "IBM",
      image: "./IBMFrontendInternCert.jpg",
    },
    {
      id: 3,
      title: "Cybersecurity Fundamentals",
      provider: "IBM",
      image: "./IBMCyberSecurity.jpg",
    },
    {
      id: 4,
      title: "Working in a Digital World: Professional Skills",
      provider: "IBM",
      image: "./IBMWorkingDigitalWorld.jpg",
    },
    {
      id: 5,
      title: "Project Management Fundamentals",
      provider: "IBM",
      image: "./IBMProjectManagement.jpg",
    },
    {
      id: 6,
      title: "CISCO Virtual Internship",
      provider: "CISCO",
      image: "./CISCOInternCert.jpg",
    },
    {
      id: 7,
      title: "IBM Data Science Internship",
      provider: "IBM",
      image: "./IBMDataScienceCert.jpg",
    },
    {
      id: 8,
      title: "IBM Artificial Intelligence Internship",
      provider: "IBM",
      image: "./IMBAICert.jpg",
    },
    {
      id: 9,
      title: "Network Addressing and Basic Troubleshooting",
      provider: "CISCO",
      image: "./CISCONetworkAddressing.jpg",
    },
    {
      id: 10,
      title: "Devnet Associate",
      provider: "CISCO",
      image: "./DevnetAssociate.jpg",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-blue-950 text-white" id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-4xl font-bold text-center font-serif mb-8">
          Certifications
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {(showAll ? certificates : certificates.slice(0, 4)).map((cert) => (
            <div
              data-aos="zoom-in-up"
              key={cert.id}
              className="dark:bg-gray-900 p-5 rounded-xl shadow-md transition-transform transform hover:scale-102 cursor-pointer"
              onClick={() => openModal(cert.image)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-contain rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold">{cert.title}</h3>
              <p className="text-gray-300">{cert.provider}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-center mt-4 mr-4 hover:cursor-pointer text-white border rounded-md p-2 hover:bg-gray-200 hover:text-black"
          >
            <div className="flex items-center justify-center">
              {showAll ? "Show Less" : "Show All"}
              <MdKeyboardArrowRight size={30} />
            </div>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-10 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-3xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:cursor-pointer"
            >
              <IoMdClose size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
