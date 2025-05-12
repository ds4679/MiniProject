// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Prediction from './pages/Prediction';
// import Dashboard from './pages/Dashboard';
// import Signin from './pages/Signin';
// import Signup from './pages/Signup';
// import '@fontsource/inter';
// import '@fontsource/poppins';
// // 
// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleSignin = () => setIsAuthenticated(true);
//   const handleSignout = () => setIsAuthenticated(false);

//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <Router>
//         <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
//           <Header 
//             toggleDarkMode={() => setDarkMode(!darkMode)} 
//             isAuthenticated={isAuthenticated} 
//             handleSignout={handleSignout}
//           />
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/signin" element={<Signin onSignin={handleSignin} />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/signin" />} />
//               <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/signin" />} />
//               <Route path="/prediction" element={isAuthenticated ? <Prediction /> : <Navigate to="/signin" />} />
//               <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;






// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Prediction from './pages/Prediction';
// import Dashboard from './pages/Dashboard';
// import '@fontsource/inter'; // Defaults to weight 400
// import '@fontsource/poppins'; // Defaults to weight 400

// // Optional specific weights
// import '@fontsource/inter/600.css';
// import '@fontsource/poppins/600.css';
// import LandingPage from './components/LandingPage'
// import Signup from './pages/Signup';

// import Signin  from './pages/Signin';


// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <Router>
//         <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
//           <Header toggleDarkMode={() => setDarkMode(!darkMode)} />
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<LandingPage />} />
//               <Route path="/home" element={<Home/>}/>
//               <Route path="/about" element={<About />} />
//               <Route path="/prediction" element={<Prediction />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/signup" element={<Signup/>}/>
//               <Route path="/signin" element={<Signin/>}/>
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;











// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Prediction from './pages/Prediction';
// import Dashboard from './pages/Dashboard';
// import LandingPage from './components/LandingPage';
// import Signup from './pages/Signup';
// import Signin from './pages/Signin';
// import Profile from './pages/profile';

// // Custom Fonts
// import '@fontsource/inter'; 
// import '@fontsource/poppins'; 
// import '@fontsource/inter/600.css';
// import '@fontsource/poppins/600.css';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode ? 'dark' : ''}>
//       <Router>
//         <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
//           {/* <Header toggleDarkMode={() => setDarkMode(!darkMode)} /> */}
          
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<LandingPage />} />
//               <Route path="/profile" element={<Profile/>}/>
//               <Route path="/home" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/prediction" element={<Prediction />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/signin" element={<Signin />} />
//             </Routes>
//           </main>

//           <Footer />
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Prediction from './pages/Prediction';
import Dashboard from './pages/Dashboard';
import LandingPage from './components/LandingPage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/profile';

// Custom Fonts
import '@fontsource/inter'; 
import '@fontsource/poppins'; 
import '@fontsource/inter/600.css';
import '@fontsource/poppins/600.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {/* <Header toggleDarkMode={() => setDarkMode(!darkMode)} /> */}
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/prediction" element={<Prediction />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App
