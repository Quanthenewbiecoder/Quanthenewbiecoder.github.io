import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { useState } from 'react';
import { workExperience } from '../data/experience';
import { education } from '../data/education';

const timelineData = {
  work: workExperience.map((item) => ({
    title: item.role,
    company: item.company,
    date: item.period,
    description: item.description,
    icon: <FaBriefcase />,
  })),
  education: education.map((item) => ({
    title: item.degree,
    company: item.institution,
    date: item.period,
    description: item.description,
    icon: <FaGraduationCap />,
  })),
};

const TimelineSection = () => {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <section className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab('work')}
          className={`px-5 py-2 rounded-t-lg font-medium ${
            activeTab === 'work' ? 'bg-white text-black' : 'bg-gray-700 text-gray-300'
          }`}
        >
          Work
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`px-5 py-2 rounded-t-lg font-medium ${
            activeTab === 'education' ? 'bg-white text-black' : 'bg-gray-700 text-gray-300'
          }`}
        >
          Education
        </button>
      </div>

      <div className="bg-transparent border border-white rounded-xl px-8 py-6">
        <div className="relative border-l-4 border-white pl-10">
          {timelineData[activeTab].map((item, idx) => (
            <div key={idx} className="mb-10 relative">
              <div className="absolute -left-8 w-10 h-10 rounded-full bg-gray-800 border-2 border-white flex items-center justify-center text-white shadow-md">
                {item.icon}
              </div>
              <div className="text-white p-4 text-left">
                <p className="text-sm text-gray-400">{item.date}</p>
                <h3 className="text-xl font-semibold">{item.company}</h3>
                <p className="text-md font-medium text-gray-300">{item.title}</p>
                <p className="text-sm mt-2 text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;