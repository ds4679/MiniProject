// import React from 'react';
// import { Link } from 'react-router-dom';
// import icon from '../assets/dr-icon.png';
// import { motion } from 'framer-motion';

// const Welcome = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 text-center px-4 animate-fade-in">
//       <motion.img 
//         src={icon} 
//         alt="DR Icon" 
//         className="w-32 h-32 mb-6 drop-shadow-lg" 
//         initial={{ scale: 0.5 }} 
//         animate={{ scale: 1 }} 
//         transition={{ duration: 0.6 }}
//       />
//       <h1 className="text-5xl font-extrabold text-blue-700 dark:text-white mb-4 animate-bounce-in">Welcome to DR Detector</h1>
//       <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">Your AI-powered solution for Diabetic Retinopathy detection.</p>
//       <div className="flex gap-6">
//         <Link to="/signup">
//           <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition transform duration-300">
//             Sign Up
//           </button>
//         </Link>
//         <Link to="/signin">
//           <button className="bg-white text-blue-600 dark:bg-gray-700 dark:text-blue-400 px-6 py-3 rounded-full shadow border hover:scale-105 transition transform duration-300">
//             Sign In
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Welcome;






import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/dr-icon.png';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 text-center px-4 animate-fade-in">
      <motion.img 
        src={icon} 
        alt="DR Icon" 
        className="w-32 h-32 mb-6 drop-shadow-lg" 
        initial={{ scale: 0.5 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.6 }}
      />
      <h1 className="text-5xl font-extrabold text-blue-700 dark:text-white mb-4 animate-bounce-in">Welcome to DR Detector</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">Your AI-powered solution for Diabetic Retinopathy detection.</p>
      <div className="flex gap-6">
        <Link to="/signup">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition transform duration-300">
            Sign Up
          </button>
        </Link>
        <Link to="/signin">
          <button className="bg-white text-blue-600 dark:bg-gray-700 dark:text-blue-400 px-6 py-3 rounded-full shadow border hover:scale-105 transition transform duration-300">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
