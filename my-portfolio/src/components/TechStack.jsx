import {
    FaPython, FaJava, FaJs, FaPhp, FaDatabase,
    FaGitAlt, FaGithub, FaLinux
  } from 'react-icons/fa';
  import {
    SiMysql, SiMongodb, SiSqlite, SiFlask,
    SiEclipseide, SiPostman
  } from 'react-icons/si';
  import { VscCode } from 'react-icons/vsc';
  
  const techStack = [
    { name: 'Python', icon: <FaPython className="text-blue-400" /> },
    { name: 'Java', icon: <FaJava className="text-orange-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'PHP', icon: <FaPhp className="text-indigo-300" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
    { name: 'MongoDB Atlas', icon: <SiMongodb className="text-green-600" /> },
    { name: 'SQLite', icon: <SiSqlite className="text-gray-300" /> },
    { name: 'Flask', icon: <SiFlask className="text-white" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    { name: 'VS Code', icon: <VscCode className="text-blue-400" /> },
    { name: 'Eclipse', icon: <SiEclipseide className="text-indigo-400" /> },
    { name: 'Linux', icon: <FaLinux className="text-gray-200" /> },
    { name: 'Postman / REST APIs', icon: <SiPostman className="text-orange-400" /> },
  ];
  
  const TechStack = () => {
    return (
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-10">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white text-sm transform transition-transform hover:scale-105"
              title={tech.name}
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <span className="text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechStack;
  