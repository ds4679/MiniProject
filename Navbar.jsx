// import React from "react";
// import { Link } from "react-router-dom";
// import ThemeToggle from "./ThemeToggle";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   return (
//     <motion.nav
//       className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 80 }}
//     >
//       <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">DR Detector</Link>
//       <div className="flex items-center gap-6 text-lg font-medium">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/prediction">Prediction</Link>
//         <Link to="/contact">Contact</Link>
//         <ThemeToggle />
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">DR Detector</Link>
      <div className="flex items-center gap-6 text-lg font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/prediction">Prediction</Link>
        <Link to="/contact">Contact</Link>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
};

export default Navbar;