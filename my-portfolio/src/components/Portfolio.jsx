import { FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto text-center px-4">
      <h1 className="text-4xl font-bold mt-10">Quan Duong</h1>
      <p className="text-lg mt-2 text-gray-300">
        Computer Science Student <br /> Aspiring Software Engineer
      </p>

      <div className="flex justify-center items-center gap-2 mt-2 text-gray-400">
        <FaMapMarkerAlt />
        <span>Birmingham, United Kingdom</span>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <a
          href="mailto:quan.duong4work@gmail.com"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/duong-anh-quan-bb4b3b1a4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Quanthenewbiecoder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
