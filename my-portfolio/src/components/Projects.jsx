const projects = [
    {
      name: "The Divine E-Commerce",
      stack: "Flask, MongoDB, Gmail API",
      description: "Built a secure, role-based e-commerce platform with contact integration using Gmail API.",
      link: "https://github.com/Quanthenewbiecoder/the-divine-ecommerce"
    },
    {
      name: "VS Code Bug Tracker",
      stack: "React, Express, MongoDB",
      description: "Custom VS Code extension for real-time bug tracking across team projects.",
      link: "https://github.com/Quanthenewbiecoder/Bug-Tracker-VS-Code-Extension"
    },
    {
      name: "Personal Finance Manager",
      stack: "Flask, SQLite",
      description: "Simple web app for personal budgeting and expense tracking.",
      link: "https://github.com/Quanthenewbiecoder/personal-finance"
    }
  ];
  
  export default function Projects() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="text-sm text-blue-400 mt-1">{project.stack}</p>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-blue-500 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  