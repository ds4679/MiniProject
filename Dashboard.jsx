import React, { useState } from 'react';
import Header from '../components/Header';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import {
  UploadCloud, BarChart3, Activity as ActivityIcon, ChevronDown, ChevronUp
} from 'lucide-react';

const sampleData = [
  { name: 'Jan', predictions: 5 },
  { name: 'Feb', predictions: 8 },
  { name: 'Mar', predictions: 6 },
  { name: 'Apr', predictions: 10 },
];

const Section = ({ icon: Icon, title, isOpen, onToggle, children }) => (
  <div className="border rounded-lg p-4 bg-white dark:bg-gray-800 shadow transition-all duration-500">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex items-center gap-2">
        <Icon className="text-blue-500 dark:text-blue-400" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {isOpen ? <ChevronUp /> : <ChevronDown />}
    </div>
    <div
      className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[1000px]' : 'max-h-0'
      }`}
    >
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  </div>
);

const Dashboard = () => {
  const [sections, setSections] = useState({
    uploads: true,
    stats: true,
    activity: true,
  });

  const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
    <Header/>
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300 text-center">
        Project Dashboard
      </h1>

      <Section
        icon={UploadCloud}
        title="Uploads"
        isOpen={sections.uploads}
        onToggle={() => toggleSection('uploads')}
      >
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
          <li>April 2025 - 10 retina scans uploaded</li>
          <li>March 2025 - 6 retina scans uploaded</li>
          <li>February 2025 - 8 retina scans uploaded</li>
        </ul>
      </Section>

      <Section
        icon={BarChart3}
        title="Statistics"
        isOpen={sections.stats}
        onToggle={() => toggleSection('stats')}
      >
        <div className="h-64 sm:h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sampleData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="predictions" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Section>

      <Section
        icon={ActivityIcon}
        title="Activity"
        isOpen={sections.activity}
        onToggle={() => toggleSection('activity')}
      >
        <ul className="text-gray-700 dark:text-gray-300 space-y-2">
          <li>✅ User uploaded new scan on April 5, 2025</li>
          <li>📊 Model predicted “Moderate DR” on scan #112</li>
          <li>📤 Exported summary report (PDF) on April 4, 2025</li>
        </ul>
      </Section>
    </div>
    </>
  );
};

export default Dashboard;
