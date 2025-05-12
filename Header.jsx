// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Moon, Sun } from 'lucide-react';
// import logo from '../assets/dr-icon.png';

// const Header = ({ toggleDarkMode, isAuthenticated, handleSignout }) => {
//   return (
//     <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50 transition-colors">
//       <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Logo" className="w-10 h-10" />
//           <Link to="/" className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 animate-pulse">
//             DR Detector
//           </Link>
//         </div>

//         {isAuthenticated && (
//           <ul className="flex gap-6 text-base font-semibold">
//             <li><Link to="/" className="hover:text-blue-500 transition">🏠 Home</Link></li>
//             <li><Link to="/about" className="hover:text-blue-500 transition">📖 About</Link></li>
//             <li><Link to="/prediction" className="hover:text-blue-500 transition">🔍 Prediction</Link></li>
//             <li><Link to="/dashboard" className="hover:text-blue-500 transition">📊 Dashboard</Link></li>
//             <li><Link to="/contact" className="hover:text-blue-500 transition">📞 Contact</Link></li>
//             <li>
//               <button 
//                 onClick={handleSignout} 
//                 className="text-red-500 hover:text-red-700 transition"
//               >
//                 🚪 Sign out
//               </button>
//             </li>
//           </ul>
//         )}

//         {!isAuthenticated && (
//           <ul className="flex gap-4 font-semibold text-sm">
//             <li><Link to="/signin" className="hover:text-blue-500 transition">Sign In</Link></li>
//             <li><Link to="/signup" className="hover:text-blue-500 transition">Sign Up</Link></li>
//           </ul>
//         )}

//         <button
//           onClick={toggleDarkMode}
//           className="p-2 rounded-full hover:rotate-180 transform transition duration-500"
//           aria-label="Toggle Dark Mode"
//         >
//           <Sun className="w-6 h-6 text-yellow-500 dark:hidden animate-spin-slow" />
//           <Moon className="w-6 h-6 text-white hidden dark:block animate-spin-slow" />
//         </button>
//       </nav>
//     </header>
//   );
// };

// export default Header;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Moon, Sun } from 'lucide-react';
// import logo from '../assets/dr-icon.png';

// const Header = ({ toggleDarkMode }) => {
//   return (
//     <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50 transition-colors">
//       <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Logo" className="w-10 h-10" />
//           <Link to="/" className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 animate-pulse">
//             DR Detector
//           </Link>
//         </div>
//         <ul className="flex gap-6 text-base font-semibold">
//           <li><Link to="/home" className="hover:text-blue-500 transition">🏠 Home</Link></li>
//           <li><Link to="/profile" className="hover:text-blue-500 transition">🏠 Profile</Link></li>
//           <li><Link to="/about" className="hover:text-blue-500 transition">📖 About</Link></li>
//           <li><Link to="/prediction" className="hover:text-blue-500 transition">🔍 Prediction</Link></li>
//           <li><Link to="/dashboard" className="hover:text-blue-500 transition">📊 Dashboard</Link></li>
//           <li><Link to="/contact" className="hover:text-blue-500 transition">📞 Contact</Link></li>
//         </ul>
//         <button
//           onClick={toggleDarkMode}
//           className="p-2 rounded-full hover:rotate-180 transform transition duration-500"
//           aria-label="Toggle Dark Mode"
//         >
//           <Sun className="w-6 h-6 text-yellow-500 dark:hidden animate-spin-slow" />
//           <Moon className="w-6 h-6 text-white hidden dark:block animate-spin-slow" />
//         </button>
//       </nav>
//     </header>
//   );
// };

// export default Header; fixxxxxxxxxxxxxxxxxxxxxx




import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import Swal from 'sweetalert2'; // Make sure this is installed
import logo from '../assets/dr-icon.png';

const Header = ({ toggleDarkMode }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token/session logic here
    localStorage.removeItem('token'); // or your auth method

    Swal.fire({
      icon: 'success',
      title: 'Logged Out!',
      text: 'You have been successfully logged out.',
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true,
    });

    setTimeout(() => {
      navigate('/signin');
    }, 2000);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <Link to="/" className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 animate-pulse">
            DR Detector
          </Link>
        </div>
        <ul className="flex gap-6 text-base font-semibold">
          <li><Link to="/home" className="hover:text-blue-500 transition">🏠 Home</Link></li>
          <li><Link to="/profile" className="hover:text-blue-500 transition">🙍‍♂️ Profile</Link></li>
          <li><Link to="/about" className="hover:text-blue-500 transition">📖 About</Link></li>
          <li><Link to="/prediction" className="hover:text-blue-500 transition">🔍 Prediction</Link></li>
          <li><Link to="/dashboard" className="hover:text-blue-500 transition">📊 Dashboard</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500 transition">📞 Contact</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:rotate-180 transform transition duration-500"
            aria-label="Toggle Dark Mode"
          >
            <Sun className="w-6 h-6 text-yellow-500 dark:hidden animate-spin-slow" />
            <Moon className="w-6 h-6 text-white hidden dark:block animate-spin-slow" />
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
          >
            🚪 Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
