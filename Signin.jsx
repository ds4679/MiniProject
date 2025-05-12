// // // // // // // import React, { useState } from 'react';
// // // // // // // import axios from 'axios';
// // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // function Signin() {
// // // // // // //   const [form, setForm] = useState({ email: '', password: '' });
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     try {
// // // // // // //       const res = await axios.post('http://localhost:5000/api/patients/signin', form);
// // // // // // //       const data = res.data;

// // // // // // //       if (data && data.user_id) {
// // // // // // //         localStorage.setItem('user_id', data.user_id);
// // // // // // //         alert(data.message || 'Signin successful');
// // // // // // //         navigate('/home');
// // // // // // //       } else {
// // // // // // //         alert(data.message || 'Signin failed');
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       alert(err.response?.data?.message || 'Signin failed');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
// // // // // // //       <form
// // // // // // //         onSubmit={handleSubmit}
// // // // // // //         className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 w-full max-w-md"
// // // // // // //       >
// // // // // // //         <h2 className="text-2xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">Sign In</h2>

// // // // // // //         <input
// // // // // // //           type="email"
// // // // // // //           name="email"
// // // // // // //           placeholder="Email"
// // // // // // //           value={form.email}
// // // // // // //           onChange={handleChange}
// // // // // // //           required
// // // // // // //           className="w-full px-4 py-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
// // // // // // //         />

// // // // // // //         <input
// // // // // // //           type="password"
// // // // // // //           name="password"
// // // // // // //           placeholder="Password"
// // // // // // //           value={form.password}
// // // // // // //           onChange={handleChange}
// // // // // // //           required
// // // // // // //           className="w-full px-4 py-3 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
// // // // // // //         />

// // // // // // //         <button
// // // // // // //           type="submit"
// // // // // // //           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
// // // // // // //         >
// // // // // // //           Login
// // // // // // //         </button>
// // // // // // //       </form>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Signin;











// // // // // // import React, { useState } from 'react';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import { motion } from 'framer-motion';

// // // // // // const Signin = () => {
// // // // // //   const [formData, setFormData] = useState({ email: '', password: '' });
// // // // // //   const [error, setError] = useState('');
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleChange = (e) => {
// // // // // //     setFormData({ 
// // // // // //       ...formData, 
// // // // // //       [e.target.name]: e.target.value 
// // // // // //     });
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setError('');

// // // // // //     try {
// // // // // //       const response = await fetch('http://localhost:5000/api/patients/signin', {
// // // // // //         method: 'POST',
// // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // //         body: JSON.stringify(formData)
// // // // // //       });

// // // // // //       const data = await response.json();

// // // // // //       if (response.ok) {
// // // // // //         localStorage.setItem('userId', data.patient_id);
// // // // // //         navigate('/prediction');
// // // // // //       } else {
// // // // // //         setError(data.message || 'Signin failed');
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       setError('An error occurred. Please try again.');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <motion.div
// // // // // //       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4 dark:from-gray-900 dark:to-gray-800"
// // // // // //       initial={{ opacity: 0, y: 30 }}
// // // // // //       animate={{ opacity: 1, y: 0 }}
// // // // // //       transition={{ duration: 0.5 }}
// // // // // //     >
// // // // // //       <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
// // // // // //         <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-white">Sign In</h2>
// // // // // //         {error && <p className="text-red-500 text-center">{error}</p>}
// // // // // //         <input
// // // // // //           type="email"
// // // // // //           name="email"
// // // // // //           onChange={handleChange}
// // // // // //           value={formData.email}
// // // // // //           placeholder="Email"
// // // // // //           required
// // // // // //           className="w-full p-3 border rounded"
// // // // // //         />
// // // // // //         <input
// // // // // //           type="password"
// // // // // //           name="password"
// // // // // //           onChange={handleChange}
// // // // // //           value={formData.password}
// // // // // //           placeholder="Password"
// // // // // //           required
// // // // // //           className="w-full p-3 border rounded"
// // // // // //         />
// // // // // //         <button type="submit" className="w-full p-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl">
// // // // // //           Sign In
// // // // // //         </button>
// // // // // //         <p className="text-center text-sm text-gray-600 dark:text-gray-400">
// // // // // //           Don’t have an account? <a href="/signup" className="text-indigo-600 font-semibold hover:underline">Sign Up</a>
// // // // // //         </p>
// // // // // //       </form>
// // // // // //     </motion.div>
// // // // // //   );
// // // // // // };

// // // // // // export default Signin;



// // // // // import React, { useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import { motion } from 'framer-motion';

// // // // // const Signin = () => {
// // // // //   const [formData, setFormData] = useState({ email: '', password: '' });
// // // // //   const [error, setError] = useState('');
// // // // //   const navigate = useNavigate();

// // // // //   const handleChange = (e) => {
// // // // //     setFormData({
// // // // //       ...formData,
// // // // //       [e.target.name]: e.target.value
// // // // //     });
// // // // //   };

// // // // //   // const handleSubmit = async (e) => {
// // // // //   //   e.preventDefault();
// // // // //   //   setError('');

// // // // //   //   try {
// // // // //   //     const response = await fetch('http://localhost:5000/api/patients/signin', {
// // // // //   //       method: 'POST',
// // // // //   //       headers: { 'Content-Type': 'application/json' },
// // // // //   //       body: JSON.stringify(formData),
// // // // //   //     });

// // // // //   //     const data = await response.json();

// // // // //   //     if (response.ok) {
// // // // //   //       localStorage.setItem('userId', data.patient_id);
// // // // //   //       navigate('/prediction');
// // // // //   //     } else {
// // // // //   //       setError(data.message || 'Signin failed');
// // // // //   //     }
// // // // //   //   } catch (err) {
// // // // //   //     setError('An error occurred. Please try again.');
// // // // //   //   }
// // // // //   // };


// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setError('');
  
// // // // //     try {
// // // // //       const response = await fetch('http://localhost:5000/api/patients/signin', {
// // // // //         method: 'POST',
// // // // //         headers: { 'Content-Type': 'application/json' },
// // // // //         body: JSON.stringify(formData),
// // // // //       });
  
// // // // //       const data = await response.json();
  
// // // // //       if (response.ok) {
// // // // //         localStorage.setItem('userId', data.user_id);  // ✅ Update key here
// // // // //         navigate('/prediction');
// // // // //       } else {
// // // // //         setError(data.detail || 'Signin failed'); // ✅ Use 'detail' from FastAPI errors
// // // // //       }
// // // // //     } catch (err) {
// // // // //       setError('An error occurred. Please try again.');
// // // // //     }
// // // // //   };
  

// // // // //   return (
// // // // //     <motion.div
// // // // //       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4 dark:from-gray-900 dark:to-gray-800"
// // // // //       initial={{ opacity: 0, y: 30 }}
// // // // //       animate={{ opacity: 1, y: 0 }}
// // // // //       transition={{ duration: 0.5 }}
// // // // //     >
// // // // //       <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
// // // // //         <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-white">Sign In</h2>
// // // // //         {error && <p className="text-red-500 text-center">{error}</p>}
// // // // //         <input
// // // // //           type="email"
// // // // //           name="email"
// // // // //           onChange={handleChange}
// // // // //           value={formData.email}
// // // // //           placeholder="Email"
// // // // //           required
// // // // //           className="w-full p-3 border rounded"
// // // // //         />
// // // // //         <input
// // // // //           type="password"
// // // // //           name="password"
// // // // //           onChange={handleChange}
// // // // //           value={formData.password}
// // // // //           placeholder="Password"
// // // // //           required
// // // // //           className="w-full p-3 border rounded"
// // // // //         />
// // // // //         <button type="submit" className="w-full p-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl">
// // // // //           Sign In
// // // // //         </button>
// // // // //         <p className="text-center text-sm text-gray-600 dark:text-gray-400">
// // // // //           Don’t have an account? <a href="/signup" className="text-indigo-600 font-semibold hover:underline">Sign Up</a>
// // // // //         </p>
// // // // //       </form>
// // // // //     </motion.div>
// // // // //   );
// // // // // };

// // // // // export default Signin;



// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { motion } from 'framer-motion';

// // // // const Signin = () => {
// // // //   const [formData, setFormData] = useState({ email: '', password: '' });
// // // //   const [error, setError] = useState('');
// // // //   const navigate = useNavigate();

// // // //   const handleChange = (e) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       [e.target.name]: e.target.value
// // // //     });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setError('');

// // // //     try {
// // // //       const response = await fetch('http://localhost:8000/signin', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify(formData),
// // // //       });

// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         localStorage.setItem('userId', data.user_id);
// // // //         localStorage.setItem('email', data.email);
// // // //         navigate('/prediction');
// // // //       } else {
// // // //         setError(data.detail || 'Signin failed');
// // // //       }
// // // //     } catch (err) {
// // // //       setError('An error occurred. Please try again.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <motion.div
// // // //       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4 dark:from-gray-900 dark:to-gray-800"
// // // //       initial={{ opacity: 0, y: 30 }}
// // // //       animate={{ opacity: 1, y: 0 }}
// // // //       transition={{ duration: 0.5 }}
// // // //     >
// // // //       <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
// // // //         <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-white">Sign In</h2>
// // // //         {error && <p className="text-red-500 text-center">{error}</p>}
// // // //         <input
// // // //           type="email"
// // // //           name="email"
// // // //           onChange={handleChange}
// // // //           value={formData.email}
// // // //           placeholder="Email"
// // // //           required
// // // //           className="w-full p-3 border rounded"
// // // //         />
// // // //         <input
// // // //           type="password"
// // // //           name="password"
// // // //           onChange={handleChange}
// // // //           value={formData.password}
// // // //           placeholder="Password"
// // // //           required
// // // //           className="w-full p-3 border rounded"
// // // //         />
// // // //         <button type="submit" className="w-full p-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl">
// // // //           Sign In
// // // //         </button>
// // // //         <p className="text-center text-sm text-gray-600 dark:text-gray-400">
// // // //           Don’t have an account? <a href="/signup" className="text-indigo-600 font-semibold hover:underline">Sign Up</a>
// // // //         </p>
// // // //       </form>
// // // //     </motion.div>
// // // //   );
// // // // };

// // // // export default Signin;
// // // import React, { useState } from 'react';
// // // import { Navigate, useNavigate } from 'react-router-dom';



// // // const Signin = () => {
// // //   const [formData, setFormData] = useState({
// // //     email: '',
// // //     password: ''
// // //   });

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     const navigate = useNavigate();
// // //     e.preventDefault();

// // //     try {
// // //       const res = await fetch('http://localhost:5000/api/patients/signin', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(formData),
// // //       });

// // //       const data = await res.json();
// // //       if (res.ok) {
// // //         navigate('/home');
// // //       } else {
// // //         alert(data.error || 'Signin failed');
// // //       }
// // //     } catch (err) {
// // //       alert('Server error');
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
// // //       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
// // //         <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
// // //         <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
// // //         <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
// // //         <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">Sign In</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Signin;



// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Signin = () => {
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '', // Don't forget to include password in the state
// //   });

// //   const navigate = useNavigate(); // Place the hook outside the handleSubmit function

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await fetch('http://localhost:5000/api/patients/signin', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(formData),
// //       });

// //       const data = await res.json();
// //       if (res.ok) {
// //         navigate('/home'); // Redirect to home on successful signin
// //       } else {
// //         alert(data.error || 'Signin failed');
// //       }
// //     } catch (err) {
// //       alert('Server error');
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
// //       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
// //         <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
// //         <input
// //           name="email"
// //           type="email"
// //           placeholder="Email"
// //           value={formData.email}
// //           onChange={handleChange}
// //           className="w-full p-2 border rounded"
// //           required
// //         />
// //         <input
// //           name="password"
// //           type="password"
// //           placeholder="Password"
// //           value={formData.password}
// //           onChange={handleChange}
// //           className="w-full p-2 border rounded"
// //           required
// //         />
// //         <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">
// //           Sign In
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Signin;




// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const Signin = () => {
// //   const navigate = useNavigate();
// //   const [form, setForm] = useState({ email: '', password: '' });
// //   const [error, setError] = useState('');

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     try {
// //       const res = await axios.post('http://localhost:5000/api/patients/signin', form);
// //       localStorage.setItem('userId', res.data.id); // Store user ID
// //       alert('Signin successful!');
// //       navigate('/home'); // Redirect to Profile page
// //     } catch (err) {
// //       setError(err.response?.data?.error || 'Signin failed');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-200 to-indigo-200">
// //       <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md animate-fadeIn">
// //         <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Sign In</h2>
        
// //         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label className="block mb-1 font-medium">Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={form.email}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //             />
// //           </div>

// //           <div>
// //             <label className="block mb-1 font-medium">Password</label>
// //             <input
// //               type="password"
// //               name="password"
// //               value={form.password}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
// //           >
// //             Sign In
// //           </button>
// //         </form>
        
// //         <p className="text-sm text-center mt-4 text-gray-600">
// //           Don’t have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign up</a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signin;




// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2'; // Import SweetAlert2 for popups

// // const Signin = () => {
// //   const navigate = useNavigate();
// //   const [form, setForm] = useState({ email: '', password: '' });
// //   const [error, setError] = useState('');

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     try {
// //       const res = await axios.post('http://localhost:5000/api/patients/signin', form);
// //       localStorage.setItem('userId', res.data.id); // Store user ID

// //       // Show success popup after successful sign-in
// //       Swal.fire({
// //         icon: 'success',
// //         title: 'Signin Successful!',
// //         text: 'You have successfully signed in.',
// //         timer: 2000,
// //         showConfirmButton: false,
// //         timerProgressBar: true,
// //       });

// //       // Redirect to home page after success
// //       setTimeout(() => {
// //         navigate('/home');
// //       }, 2000);
// //     } catch (err) {
// //       setError(err.response?.data?.error || 'Signin failed');
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-200 to-indigo-200 animate-fadeIn">
// //       <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md transition-all duration-500 ease-in-out transform hover:scale-105">
// //         <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Sign In</h2>
        
// //         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div className="transition-all duration-500 ease-in-out">
// //             <label className="block mb-1 font-medium">Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={form.email}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
// //             />
// //           </div>

// //           <div className="transition-all duration-500 ease-in-out">
// //             <label className="block mb-1 font-medium">Password</label>
// //             <input
// //               type="password"
// //               name="password"
// //               value={form.password}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
// //           >
// //             Sign In
// //           </button>
// //         </form>
        
// //         <p className="text-sm text-center mt-4 text-gray-600">
// //           Don’t have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign up</a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signin;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import icon from '../assets/dr-icon.png'; // Import icon for consistency

// const Signin = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const res = await axios.post('http://localhost:5000/api/patients/signin', formData);

//       // Show success popup after successful sign-in
//       Swal.fire({
//         icon: 'success',
//         title: 'Signin Successful!',
//         text: 'Welcome back!',
//         timer: 2000,
//         showConfirmButton: false,
//         timerProgressBar: true,
//       });

//       // Redirect to home page after success
//       setTimeout(() => {
//         navigate('/home');
//       }, 2000);
//     } catch (err) {
//       setError(err.response?.data?.error || 'Signin failed');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-900 dark:to-gray-950 px-4 text-center">
//       {/* Landing Page Content */}
//       <img src={icon} alt="DR Icon" className="w-32 h-32 mb-6 drop-shadow-lg" />
//       <h1 className="text-5xl font-bold text-blue-800 dark:text-white mb-4">
//         Welcome to DR Detector
//       </h1>
//       <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
//         Use AI to detect Diabetic Retinopathy with retina image analysis.
//       </p>

//       {/* Signin Form */}
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4 transition-all duration-500 ease-in-out transform hover:scale-105">
//         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">Sign In</h2>

//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <input 
//           name="email" 
//           type="email" 
//           placeholder="Email" 
//           value={formData.email} 
//           onChange={handleChange} 
//           required 
//           className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
//         />
//         <input 
//           name="password" 
//           type="password" 
//           placeholder="Password" 
//           value={formData.password} 
//           onChange={handleChange} 
//           required 
//           className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
//         />

//         <button 
//           type="submit" 
//           className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
//         >
//           Sign In
//         </button>

//         <p className="text-sm text-center mt-2 text-gray-600">
//           Don't have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign up</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signin;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import icon from '../assets/dr-icon.png'; // Import icon for consistency

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   try {
  //     const res = await axios.post('http://localhost:5000/api/patients/signin', formData);

  //     // Store user details in localStorage
  //     localStorage.setItem('userId', res.data.userId); // Store user ID
  //     localStorage.setItem('userEmail', res.data.email); // Store user email
  //     localStorage.setItem('userFullName', res.data.full_name); // Store full name
  //     localStorage.setItem('userAge', res.data.age); // Store age
  //     localStorage.setItem('userMobileNumber', res.data.mobile_number); // Store mobile number
  //     localStorage.setItem('userBloodGroup', res.data.blood_group); // Store blood group
  //     localStorage.setItem('userAddress', res.data.address); // Store address

  //     // Show success popup after successful sign-in
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Signin Successful!',
  //       text: 'Welcome back!',
  //       timer: 2000,
  //       showConfirmButton: false,
  //       timerProgressBar: true,
  //     });

  //     // Redirect to profile page after success
  //     setTimeout(() => {
  //       navigate('/profile');
  //     }, 2000);
  //   } catch (err) {
  //     setError(err.response?.data?.error || 'Signin failed');
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        const res = await axios.post('http://localhost:5000/api/patients/signin', formData);

        // Log the response to check the user data
        console.log(res.data); // This should show the user data

        // Store user details in localStorage
        localStorage.setItem('userId', res.data.userId); // Store user ID
        localStorage.setItem('userEmail', res.data.email); // Store user email
        localStorage.setItem('userFullName', res.data.full_name); // Store full name
        localStorage.setItem('userAge', res.data.age); // Store age
        localStorage.setItem('userMobileNumber', res.data.mobile_number); // Store mobile number
        localStorage.setItem('userBloodGroup', res.data.blood_group); // Store blood group
        localStorage.setItem('userAddress', res.data.address); // Store address

        // Log data stored in localStorage for debugging
        console.log('Data saved to localStorage:', {
          email: localStorage.getItem('userEmail'),
          full_name: localStorage.getItem('userFullName'),
          age: localStorage.getItem('userAge'),
          mobile_number: localStorage.getItem('userMobileNumber'),
          blood_group: localStorage.getItem('userBloodGroup'),
          address: localStorage.getItem('userAddress'),
        });

        // Show success popup after successful sign-in
        Swal.fire({
            icon: 'success',
            title: 'Signin Successful!',
            text: 'Welcome back!',
            timer: 2000,
            showConfirmButton: false,
            timerProgressBar: true,
        });

        // Redirect to profile page after success
        setTimeout(() => {
            navigate('/Home');
        }, 2000);
    } catch (err) {
        setError(err.response?.data?.error || 'Signin failed');
    }
};


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white dark:from-gray-900 dark:to-gray-950 px-4 text-center">
      {/* Landing Page Content */}
      <img src={icon} alt="DR Icon" className="w-32 h-32 mb-6 drop-shadow-lg" />
      <h1 className="text-5xl font-bold text-blue-800 dark:text-white mb-4">
        Welcome to DR Detector
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
        Use AI to detect Diabetic Retinopathy with retina image analysis.
      </p>

      {/* Signin Form */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4 transition-all duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">Sign In</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
        />

        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
        >
          Sign In
        </button>

        <p className="text-sm text-center mt-2 text-gray-600">
          Don't have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Signin;
