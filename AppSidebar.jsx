import React from 'react';
import { Link } from 'react-router-dom';

const AppSidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-6 space-y-4 hidden md:block">
      <h3 className="text-lg font-bold">📂 Navigation</h3>
      <nav className="space-y-2">
        <Link to="/" className="block hover:text-blue-500">🏠 Home</Link>
        <Link to="/about" className="block hover:text-blue-500">📖 About</Link>
        <Link to="/prediction" className="block hover:text-blue-500">🔍 Prediction</Link>
        <Link to="/dashboard" className="block hover:text-blue-500">📊 Dashboard</Link>
        <Link to="/contact" className="block hover:text-blue-500">📞 Contact</Link>
      </nav>
    </aside>
  );
};

export default AppSidebar;
