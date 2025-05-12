// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Header from '../components/Header'; // Adjust the path if needed

// // const Profile = () => {
// //   const userId = localStorage.getItem('userId');
// //   const [user, setUser] = useState(null);
// //   const [editMode, setEditMode] = useState(false);
// //   const [form, setForm] = useState({
// //     full_name: '',
// //     age: '',
// //     mobile_number: '',
// //     blood_group: '',
// //     address: ''
// //   });

// //   useEffect(() => {
// //     if (userId) {
// //       axios.get(`http://localhost:5000/api/profile/${userId}`)
// //         .then(res => {
// //           setUser(res.data);
// //           setForm(res.data);
// //         })
// //         .catch(err => console.error('Error fetching profile:', err));
// //     }
// //   }, [userId]);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleUpdate = () => {
// //     axios.put(`http://localhost:5000/api/profile/${userId}`, form)
// //       .then(res => {
// //         alert('Profile updated successfully');
// //         setEditMode(false);
// //         setUser(form);
// //       })
// //       .catch(err => {
// //         console.error('Error updating profile:', err);
// //         alert('Failed to update profile');
// //       });
// //   };

// //   if (!user) return <div>Loading...</div>;

// //   return (
// //     <>
// //       <Header />
// //       <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md mt-10">
// //         <h2 className="text-2xl font-bold mb-4">My Profile</h2>

// //         <div className="space-y-3">
// //           <div>
// //             <label>Email:</label>
// //             <div className="text-gray-700">{user.email}</div>
// //           </div>

// //           <div>
// //             <label>Full Name:</label>
// //             {editMode ? (
// //               <input name="full_name" value={form.full_name} onChange={handleChange} className="input" />
// //             ) : (
// //               <div className="text-gray-700">{user.full_name}</div>
// //             )}
// //           </div>

// //           <div>
// //             <label>Age:</label>
// //             {editMode ? (
// //               <input name="age" value={form.age} onChange={handleChange} className="input" />
// //             ) : (
// //               <div className="text-gray-700">{user.age}</div>
// //             )}
// //           </div>

// //           <div>
// //             <label>Mobile Number:</label>
// //             {editMode ? (
// //               <input name="mobile_number" value={form.mobile_number} onChange={handleChange} className="input" />
// //             ) : (
// //               <div className="text-gray-700">{user.mobile_number}</div>
// //             )}
// //           </div>

// //           <div>
// //             <label>Blood Group:</label>
// //             {editMode ? (
// //               <input name="blood_group" value={form.blood_group} onChange={handleChange} className="input" />
// //             ) : (
// //               <div className="text-gray-700">{user.blood_group}</div>
// //             )}
// //           </div>

// //           <div>
// //             <label>Address:</label>
// //             {editMode ? (
// //               <textarea name="address" value={form.address} onChange={handleChange} className="input" />
// //             ) : (
// //               <div className="text-gray-700">{user.address}</div>
// //             )}
// //           </div>

// //           <div className="pt-4">
// //             {editMode ? (
// //               <>
// //                 <button onClick={handleUpdate} className="px-4 py-2 bg-green-600 text-white rounded mr-2">Save</button>
// //                 <button onClick={() => setEditMode(false)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
// //               </>
// //             ) : (
// //               <button onClick={() => setEditMode(true)} className="px-4 py-2 bg-blue-600 text-white rounded">Edit</button>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Profile;


// // import React, { useState, useEffect } from 'react';
// // import Header from '../components/Header'; // Adjust the path if needed

// // const Profile = () => {
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     // Retrieve user details from localStorage
// //     const userData = {
// //       full_name: localStorage.getItem('userFullName'),
// //       email: localStorage.getItem('userEmail'),
// //       age: localStorage.getItem('userAge'),
// //       mobile_number: localStorage.getItem('userMobileNumber'),
// //       blood_group: localStorage.getItem('userBloodGroup'),
// //       address: localStorage.getItem('userAddress'),
// //     };
// //     setUser(userData);
// //   }, []);

// //   if (!user) return <div>Loading...</div>;

// //   return (
// //     <>
// //       <Header />
// //       <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md mt-10">
// //         <h2 className="text-2xl font-bold mb-4">My Profile</h2>

// //         <div className="space-y-3">
// //           <div>
// //             <label>Email:</label>
// //             <div className="text-gray-700">{user.email}</div>
// //           </div>

// //           <div>
// //             <label>Full Name:</label>
// //             <div className="text-gray-700">{user.full_name}</div>
// //           </div>

// //           <div>
// //             <label>Age:</label>
// //             <div className="text-gray-700">{user.age}</div>
// //           </div>

// //           <div>
// //             <label>Mobile Number:</label>
// //             <div className="text-gray-700">{user.mobile_number}</div>
// //           </div>

// //           <div>
// //             <label>Blood Group:</label>
// //             <div className="text-gray-700">{user.blood_group}</div>
// //           </div>

// //           <div>
// //             <label>Address:</label>
// //             <div className="text-gray-700">{user.address}</div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Profile;



import React, { useState, useEffect } from 'react';
import Header from '../components/Header'; // Adjust the path if needed

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user details from localStorage
    const userData = {
      full_name: localStorage.getItem('userFullName'),
      email: localStorage.getItem('userEmail'),
      age: localStorage.getItem('userAge'),
      mobile_number: localStorage.getItem('userMobileNumber'),
      blood_group: localStorage.getItem('userBloodGroup'),
      address: localStorage.getItem('userAddress'),
    };

    // If no user data exists, log an error or handle appropriately
    if (!userData.email) {
      console.error('No user data found in localStorage');
    }

    setUser(userData);
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-4">My Profile</h2>

        <div className="space-y-3">
          <div>
            <label>Email:</label>
            <div className="text-gray-700">{user.email || 'Not available'}</div>
          </div>

          <div>
            <label>Full Name:</label>
            <div className="text-gray-700">{user.full_name || 'Not available'}</div>
          </div>

          <div>
            <label>Age:</label>
            <div className="text-gray-700">{user.age || 'Not available'}</div>
          </div>

          <div>
            <label>Mobile Number:</label>
            <div className="text-gray-700">{user.mobile_number || 'Not available'}</div>
          </div>

          <div>
            <label>Blood Group:</label>
            <div className="text-gray-700">{user.blood_group || 'Not available'}</div>
          </div>

          <div>
            <label>Address:</label>
            <div className="text-gray-700">{user.address || 'Not available'}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Import Link for navigation
// import Header from '../components/Header'; // Adjust path if needed
// import { FaEdit } from 'react-icons/fa'; // For edit icon

// const Profile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Retrieve user details from localStorage
//     const userData = {
//       full_name: localStorage.getItem('userFullName'),
//       email: localStorage.getItem('userEmail'),
//       age: localStorage.getItem('userAge'),
//       mobile_number: localStorage.getItem('userMobileNumber'),
//       blood_group: localStorage.getItem('userBloodGroup'),
//       address: localStorage.getItem('userAddress'),
//     };

//     // If no user data exists, log an error or handle appropriately
//     if (!userData.email) {
//       console.error('No user data found in localStorage');
//     }

//     setUser(userData);
//   }, []);

//   if (!user) return <div>Loading...</div>;

//   return (
//     <>
//       <Header />
//       <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
//         <h2 className="text-4xl font-semibold text-blue-700 dark:text-white text-center mb-8 animate__animated animate__fadeIn">
//           My Profile
//         </h2>

//         <div className="space-y-6">
//           <div className="profile-section animate__animated animate__fadeInUp">
//             <label className="text-xl font-semibold text-gray-800 dark:text-gray-200">Email:</label>
//             <div className="text-lg text-gray-700 dark:text-gray-300">{user.email || 'Not available'}</div>
//           </div>

//           <div className="profile-section animate__animated animate__fadeInUp">
//             <label className="text-xl font-semibold text-gray-800 dark:text-gray-200">Full Name:</label>
//             <div className="text-lg text-gray-700 dark:text-gray-300">{user.full_name || 'Not available'}</div>
//           </div>

//           <div className="profile-section animate__animated animate__fadeInUp">
//             <label className="text-xl font-semibold text-gray-800 dark:text-gray-200">Age:</label>
//             <div className="text-lg text-gray-700 dark:text-gray-300">{user.age || 'Not available'}</div>
//           </div>

//           <div className="profile-section animate__animated animate__fadeInUp">
//             <label className="text-xl font-semibold text-gray-800 dark:text-gray-200">Mobile Number:</label>
//             <div className="text-lg text-gray-700 dark:text-gray-300">{user.mobile_number || 'Not available'}</div>
//           </div>

//           <div className="profile-section animate__animated animate__fadeInUp">
//             <label className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blood Group:</label>
//             <div className="text-lg text-gray-700 dark:text-gray-300">{user.blood_group || 'Not available'}</div>
//           </div>

//           <div className="profile-section animate__animated animate__fadeInUp">
//             <label className="text-xl font-semibold text-gray-800 dark:text-gray-200">Address:</label>
//             <div className="text-lg text-gray-700 dark:text-gray-300">{user.address || 'Not available'}</div>
//           </div>
//         </div>

//         {/* Edit Profile Button
//         <div className="mt-8 text-center">
//           <Link to="/edit-profile">
//             <button className="flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 animate__animated animate__fadeInUp">
//               <FaEdit className="mr-3" />
//               Edit Profile
//             </button>
//           </Link>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default Profile;
