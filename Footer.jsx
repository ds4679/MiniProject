// // import React from 'react';

// // const Footer = () => (
// //   <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600 mt-auto">
// //     © 2025 DR Detector. All rights reserved.
// //   </footer>
// // );

// // export default Footer;
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t dark:border-gray-700 py-6 mt-auto">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         <p className="text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} DR Detector. All rights reserved.</p>
//         <div className="flex gap-4 text-sm">
//           <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
//           <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
//           <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
//             GitHub
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// // 
// import React from 'react';

// const Footer = () => (
//   <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600 mt-auto">
//     © 2025 DR Detector. All rights reserved.
//   </footer>
// );

// export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t dark:border-gray-700 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} DR Detector. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
          <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;