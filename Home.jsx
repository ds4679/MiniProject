// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // //import icon from '/mnt/data/dr-icon.png'; // Update if you move the file elsewhere
// // import icon from '../assets/dr-icon.png'; // ✅ correct relative path now

// // const Home = () => (
// //   <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 text-center animate-fade-in px-4">
// //     <img src={icon} alt="DR Icon" className="w-32 h-32 mb-6 drop-shadow-lg" />
// //     <h1 className="text-5xl font-extrabold text-blue-700 dark:text-white mb-4">Welcome to DR Detector</h1>
// //     <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">Detect Diabetic Retinopathy using AI!</p>
// //     <Link to="/prediction">
// //       <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300">
// //         Start Prediction
// //       </button>
// //     </Link>
// //   </div>
// // );

// // export default Home;
// import React from 'react';
// import { Link } from 'react-router-dom';
// //import icon from '/mnt/data/dr-icon.png'; // Update if you move the file elsewhere
// import icon from '../assets/dr-icon.png'; // ✅ correct relative path now
// import Header from '../components/Header';

// const Home = () => (
//   <Header/>
//   <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 text-center animate-fade-in px-4">
//     <img src={icon} alt="DR Icon" className="w-32 h-32 mb-6 drop-shadow-lg" />
//     <h1 className="text-5xl font-extrabold text-blue-700 dark:text-white mb-4">Welcome to DR Detector</h1>
//     <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">Detect Diabetic Retinopathy using AI!</p>
//     <Link to="/prediction">
//       <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300">
//         Start Prediction
//       </button>
//     </Link>
//   </div>
// );

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
// import icon from '/mnt/data/dr-icon.png'; // Update if you move the file elsewhere
import icon from '../assets/dr-icon.png'; // ✅ correct relative path now
import Header from '../components/Header';

const Home = () => (
  <>
    <Header />
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 text-center animate-fade-in px-4">
      <img src={icon} alt="DR Icon" className="w-32 h-32 mb-6 drop-shadow-lg" />
      <h1 className="text-5xl font-extrabold text-blue-700 dark:text-white mb-4">Welcome to DR Detector</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">Detect Diabetic Retinopathy using AI!</p>
      <Link to="/prediction">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300">
          Start Prediction
        </button>
      </Link>
    </div>
  </>
);

export default Home;
