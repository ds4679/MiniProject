// // // // import React, { useState } from 'react';

// // // // const Signup = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     fullName: '',
// // // //     age: '',
// // // //     gender: '',
// // // //     email: '',
// // // //     phone: '',
// // // //     password: '',
// // // //     confirmPassword: '',
// // // //     address: '',
// // // //     medicalHistory: ''
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     if (formData.password !== formData.confirmPassword) {
// // // //       alert('Passwords do not match');
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await fetch('http://localhost:5000/api/patients/signup', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({
// // // //           full_name: formData.fullName,
// // // //           age: formData.age,
// // // //           gender: formData.gender,
// // // //           email: formData.email,
// // // //           phone: formData.phone,
// // // //           password: formData.password,
// // // //           address: formData.address,
// // // //           medical_history: formData.medicalHistory
// // // //         }),
// // // //       });

// // // //       const result = await response.json();
// // // //       if (response.ok) {
// // // //         alert(result.message || 'Signup successful');
// // // //       } else {
// // // //         alert(result.message || 'Signup failed');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error:', error);
// // // //       alert('An error occurred');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// // // //       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg">
// // // //         <h2 className="text-2xl font-bold mb-4 text-center">Patient Signup</h2>
// // // //         <div className="space-y-4">
// // // //           <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="input-field" />
// // // //           <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required className="input-field" />
// // // //           <select name="gender" value={formData.gender} onChange={handleChange} required className="input-field">
// // // //             <option value="">Select Gender</option>
// // // //             <option value="Male">Male</option>
// // // //             <option value="Female">Female</option>
// // // //             <option value="Other">Other</option>
// // // //           </select>
// // // //           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input-field" />
// // // //           <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="input-field" />
// // // //           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="input-field" />
// // // //           <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required className="input-field" />
// // // //           <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="input-field"></textarea>
// // // //           <textarea name="medicalHistory" placeholder="Medical History (optional)" value={formData.medicalHistory} onChange={handleChange} className="input-field"></textarea>
// // // //           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Sign Up</button>
// // // //         </div>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Signup;














// // // import React, { useState } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { motion } from 'framer-motion';

// // // const Signup = () => {
// // //   const navigate = useNavigate();
// // //   const [formData, setFormData] = useState({
// // //     fullName: '',
// // //     age: '',
// // //     gender: '',
// // //     email: '',
// // //     phone: '',
// // //     password: '',
// // //     confirmPassword: '',
// // //     address: '',
// // //     medicalHistory: ''
// // //   });

// // //   const [error, setError] = useState('');
// // //   const [success, setSuccess] = useState('');

// // //   const handleChange = (e) => {
// // //     setFormData({ 
// // //       ...formData, 
// // //       [e.target.name]: e.target.value 
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (formData.password !== formData.confirmPassword) {
// // //       setError('Passwords do not match!');
// // //       return;
// // //     }

// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/patients/signup', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({
// // //           name: formData.fullName,
// // //           age: formData.age,
// // //           gender: formData.gender,
// // //           email: formData.email,
// // //           phone: formData.phone,
// // //           password: formData.password,
// // //           address: formData.address,
// // //           medical_history: formData.medicalHistory
// // //         })
// // //       });

// // //       const data = await response.json();
// // //       if (response.ok) {
// // //         setSuccess('Signup successful!');
// // //         navigate('/signin');
// // //       } else {
// // //         setError(data.message || 'Signup failed');
// // //       }
// // //     } catch (err) {
// // //       setError('An error occurred. Please try again.');
// // //     }
// // //   };

// // //   return (
// // //     <motion.div 
// // //       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 p-4 dark:from-gray-900 dark:to-gray-800"
// // //       initial={{ opacity: 0, y: 40 }}
// // //       animate={{ opacity: 1, y: 0 }}
// // //       transition={{ duration: 0.6 }}
// // //     >
// // //       <form onSubmit={handleSubmit} className="w-full max-w-2xl p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl space-y-6">
// // //         <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-white">Patient Signup</h2>

// // //         {error && <div className="text-red-500 font-semibold text-center">{error}</div>}
// // //         {success && <div className="text-green-600 font-semibold text-center">{success}</div>}

// // //         <div className="grid grid-cols-2 gap-4">
// // //           <input name="fullName" onChange={handleChange} value={formData.fullName} placeholder="Full Name" required className="p-2 border rounded col-span-2" />
// // //           <input type="number" name="age" onChange={handleChange} value={formData.age} placeholder="Age" required className="p-2 border rounded" />
// // //           <select name="gender" onChange={handleChange} value={formData.gender} required className="p-2 border rounded">
// // //             <option value="">Select Gender</option>
// // //             <option>Male</option>
// // //             <option>Female</option>
// // //             <option>Other</option>
// // //           </select>
// // //           <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email" required className="p-2 border rounded col-span-2" />
// // //           <input type="tel" name="phone" onChange={handleChange} value={formData.phone} placeholder="Phone Number" required className="p-2 border rounded col-span-2" />
// // //           <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Password" required className="p-2 border rounded" />
// // //           <input type="password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} placeholder="Confirm Password" required className="p-2 border rounded" />
// // //           <textarea name="address" onChange={handleChange} value={formData.address} placeholder="Address" required className="col-span-2 p-2 border rounded" />
// // //           <textarea name="medicalHistory" onChange={handleChange} value={formData.medicalHistory} placeholder="Medical History (optional)" className="col-span-2 p-2 border rounded" />
// // //         </div>

// // //         <button type="submit" className="w-full p-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition duration-300">
// // //           Sign Up
// // //         </button>

// // //         <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
// // //           Already have an account? <a href="/signin" className="text-indigo-600 font-semibold hover:underline">Sign In</a>
// // //         </p>
// // //       </form>
// // //     </motion.div>
// // //   );
// // // };

// // // export default Signup;

   
// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from 'react-router-dom';

// // const Signup = () => {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post("http://localhost:8000/api/patients/signup", formData);
// //       if (response.status === 201) {
// //         navigate('/signin'); // Redirect to Sign In page after successful sign up
// //       }
// //     } catch (error) {
// //       console.error("Error during signup:", error.response.data);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Signup</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Sign Up</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Signup;


// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from 'react-router-dom';

// // const Signup = () => {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //     full_name: "",
// //     age: "",
// //     mobile_number: "",
// //     blood_group: "",
// //     address: ""
// //   });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post("/signup", formData);
// //       if (response.status === 200) {  // Expecting 200 OK response
// //         navigate('/signin'); // Redirect to Sign In page after successful sign up
// //       }
// //     } catch (error) {
// //       console.error("Error during signup:", error.response ? error.response.data : error.message);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Signup</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Full Name</label>
// //           <input
// //             type="text"
// //             name="full_name"
// //             value={formData.full_name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Age</label>
// //           <input
// //             type="number"
// //             name="age"
// //             value={formData.age}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Mobile Number</label>
// //           <input
// //             type="text"
// //             name="mobile_number"
// //             value={formData.mobile_number}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Blood Group</label>
// //           <input
// //             type="text"
// //             name="blood_group"
// //             value={formData.blood_group}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Address</label>
// //           <input
// //             type="text"
// //             name="address"
// //             value={formData.address}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <button type="submit">Sign Up</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Signup;







// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     full_name: "",
//     age: "",
//     mobile_number: "",
//     blood_group: "",
//     address: ""
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/api/patients/signup", formData);
//       if (response.status === 200) {
//         alert("Signup successful!");
//         navigate('/signin');  // Redirect to Sign In
//       }
//     } catch (error) {
//       console.error("Signup error:", error.response?.data || error.message);
//       alert(error.response?.data?.detail || "Signup failed");
//     }
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         {["email", "password", "full_name", "age", "mobile_number", "blood_group", "address"].map((field) => (
//           <div key={field} style={{ marginBottom: "1rem" }}>
//             <label style={{ textTransform: "capitalize" }}>{field.replace("_", " ")}:</label>
//             <input
//               type={field === "password" ? "password" : "text"}
//               name={field}
//               value={formData[field]}
//               onChange={handleChange}
//               required
//               style={{ marginLeft: "1rem" }}
//             />
//           </div>
//         ))}
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;



// import React, { useState } from 'react';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     full_name: '',
//     email: '',
//     password: '',
//     age: '',
//     mobile_number: '',
//     blood_group: '',
//     address: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:5000/api/patients/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert('Signup successful!');
//       } else {
//         alert(data.error || 'Signup failed');
//       }
//     } catch (err) {
//       alert('Server error');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4">
//         <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
//         <input name="full_name" type="text" placeholder="Full Name" value={formData.full_name} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input name="mobile_number" type="text" placeholder="Mobile Number" value={formData.mobile_number} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input name="blood_group" type="text" placeholder="Blood Group" value={formData.blood_group} onChange={handleChange} className="w-full p-2 border rounded" />
//         <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />
//         <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup; fixxxxxxxxxxxxxxxxxxxxxxxxxx




// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     full_name: '',
//     email: '',
//     password: '',
//     age: '',
//     mobile_number: '',
//     blood_group: '',
//     address: '',
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const res = await axios.post('http://localhost:5000/api/patients/signup', formData);
//       alert('Signup successful!');
//       navigate('/home');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Signup failed');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-blue-200 to-indigo-200 px-4">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4 animate-fadeIn">
//         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">Sign Up</h2>

//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <input name="full_name" type="text" placeholder="Full Name" value={formData.full_name} onChange={handleChange} required className="w-full p-2 border rounded" />
//         <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
//         <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-2 border rounded" />
//         <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input name="mobile_number" type="text" placeholder="Mobile Number" value={formData.mobile_number} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input name="blood_group" type="text" placeholder="Blood Group" value={formData.blood_group} onChange={handleChange} className="w-full p-2 border rounded" />
//         <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" />

//         <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition">
//           Sign Up
//         </button>

//         <p className="text-sm text-center mt-2 text-gray-600">
//           Already have an account? <a href="/signin" className="text-indigo-600 hover:underline">Sign in</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2'; // Import SweetAlert2 for popups

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     full_name: '',
//     email: '',
//     password: '',
//     age: '',
//     mobile_number: '',
//     blood_group: '',
//     address: '',
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       const res = await axios.post('http://localhost:5000/api/patients/signup', formData);
      
//       // Show success popup after successful signup
//       Swal.fire({
//         icon: 'success',
//         title: 'Signup Successful!',
//         text: 'You have successfully created an account.',
//         timer: 2000,
//         showConfirmButton: false,
//         timerProgressBar: true,
//       });

//       // Redirect to home page after success
//       setTimeout(() => {
//         navigate('/home');
//       }, 2000);
//     } catch (err) {
//       setError(err.response?.data?.error || 'Signup failed');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-blue-200 to-indigo-200 px-4 animate-fadeIn">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4 transition-all duration-500 ease-in-out transform hover:scale-105">
//         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">Sign Up</h2>

//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <input 
//           name="full_name" 
//           type="text" 
//           placeholder="Full Name" 
//           value={formData.full_name} 
//           onChange={handleChange} 
//           required 
//           className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
//         />
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
//         <input 
//           name="age" 
//           type="number" 
//           placeholder="Age" 
//           value={formData.age} 
//           onChange={handleChange} 
//           className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
//         />
//         <input 
//           name="mobile_number" 
//           type="text" 
//           placeholder="Mobile Number" 
//           value={formData.mobile_number} 
//           onChange={handleChange} 
//           className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
//         />
//         <input 
//           name="blood_group" 
//           type="text" 
//           placeholder="Blood Group" 
//           value={formData.blood_group} 
//           onChange={handleChange} 
//           className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
//         />
//         <textarea 
//           name="address" 
//           placeholder="Address" 
//           value={formData.address} 
//           onChange={handleChange} 
//           className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
//         />

//         <button 
//           type="submit" 
//           className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
//         >
//           Sign Up
//         </button>

//         <p className="text-sm text-center mt-2 text-gray-600">
//           Already have an account? <a href="/signin" className="text-indigo-600 hover:underline">Sign in</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import icon from '../assets/dr-icon.png'; // Import icon for consistency

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    age: '',
    mobile_number: '',
    blood_group: '',
    address: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/patients/signup', formData);
      
      // Show success popup after successful signup
      Swal.fire({
        icon: 'success',
        title: 'Signup Successful!',
        text: 'You have successfully created an account.',
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });

      // Redirect to home page after success
      setTimeout(() => {
        navigate('/Signin');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
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

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4 transition-all duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">Sign Up</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input 
          name="full_name" 
          type="text" 
          placeholder="Full Name" 
          value={formData.full_name} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
        />
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
        <input 
          name="age" 
          type="number" 
          placeholder="Age" 
          value={formData.age} 
          onChange={handleChange} 
          className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
        />
        <input 
          name="mobile_number" 
          type="text" 
          placeholder="Mobile Number" 
          value={formData.mobile_number} 
          onChange={handleChange} 
          className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
        />
        <input 
          name="blood_group" 
          type="text" 
          placeholder="Blood Group" 
          value={formData.blood_group} 
          onChange={handleChange} 
          className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
        />
        <textarea 
          name="address" 
          placeholder="Address" 
          value={formData.address} 
          onChange={handleChange} 
          className="w-full p-2 border rounded transition-all duration-300 ease-in-out"
        />

        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
        >
          Sign Up
        </button>

        <p className="text-sm text-center mt-2 text-gray-600">
          Already have an account? <a href="/signin" className="text-indigo-600 hover:underline">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
