// // // 
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const Predict = () => {
// //   const [image, setImage] = useState(null);
// //   const [prediction, setPrediction] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   // Handle file input change
// //   const handleFileChange = (e) => {
// //     setImage(e.target.files[0]);
// //   };

// //   // Handle predict button click
// //   const handlePredict = async () => {
// //     if (!image) {
// //       alert("Please upload an image.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);
// //     setPrediction(null);

// //     const formData = new FormData();
// //     formData.append("file", image);

// //     try {
// //       // Make request to the FastAPI backend
// //       const response = await axios.post("http://localhost:8000/predict", formData, {
// //         headers: {
// //           "Content-Type": "multipart/form-data"
// //         }
// //       });

// //       // Set the prediction result and explanation
// //       setPrediction(response.data);
// //     } catch (err) {
// //       setError("Error while making prediction.");
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Handle reset button click
// //   const handleReset = () => {
// //     setImage(null);
// //     setPrediction(null);
// //     setError(null);
// //   };

// //   return (
// //     <div className="prediction-container">
// //       <h2>Diabetic Retinopathy Prediction</h2>

// //       {/* Image input */}
// //       <input type="file" accept="image/*" onChange={handleFileChange} />

// //       {/* Buttons */}
// //       <div className="button-container">
// //         <button onClick={handlePredict} disabled={loading}>
// //           {loading ? "Predicting..." : "Predict"}
// //         </button>
// //         <button onClick={handleReset}>Reset</button>
// //       </div>

// //       {/* Display prediction and explanation */}
// //       {prediction && !loading && (
// //         <div className="prediction-result">
// //           <h3>Prediction: {prediction.class}</h3>
// //           <p>Confidence: {prediction.confidence.toFixed(2)}%</p>
// //           <p>Explanation:</p>
// //           <p><strong>Explanation:</strong> {prediction.details.explanation}</p>
// //           <p><strong>Care and Treatment:</strong> {prediction.details.care}</p>
// //           <p><strong>Recommended Diet:</strong> {prediction.details.diet}</p>
// //           <p><strong>Health Tips:</strong> {prediction.details.tips}</p>
// //         </div>
// //       )}

// //       {/* Display error */}
// //       {error && !loading && <p className="error">{error}</p>}
// //     </div>
// //   );
// // };

// // export default Predict;


// import React, { useState } from "react";
// import axios from "axios";

// const Prediction = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handlePredict = async () => {
//     if (!file) return alert("Please upload an image first.");
//     const formData = new FormData();
//     formData.append("file", file);

//     setLoading(true);
//     setResult(null);
//     try {
//       const res = await axios.post("http://localhost:8000/predict", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setResult(res.data);
//     } catch (err) {
//       alert("Prediction failed.");
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Diabetic Retinopathy Prediction</h2>
//       <input type="file" onChange={handleFileChange} accept="image/*" className="mb-4" />
//       <button
//         onClick={handlePredict}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//         disabled={loading}
//       >
//         {loading ? "Predicting..." : "Predict"}
//       </button>

//       {result && (
//         <div className="mt-6 bg-white p-4 rounded shadow-lg">
//           <h3 className="text-xl font-semibold text-green-700">Prediction Result</h3>
//           <p><strong>Predicted Class:</strong> {result.class}</p>
//           <p><strong>Confidence:</strong> {result.confidence.toFixed(2)}%</p>

//           <div className="mt-4">
//             <h4 className="font-semibold">AI Explanation</h4>
//             <p><strong>1. Explanation:</strong> {result.details.explanation}</p>
//             <p><strong>2. Care Guidance:</strong> {result.details.care}</p>
//             <p><strong>3. Recommended Diet:</strong> {result.details.diet}</p>
//             <p><strong>4. Health Tips:</strong> {result.details.tips}</p>
//           </div>

//           <div className="mt-4">
//             <h4 className="font-semibold">All Class Confidences</h4>
//             <ul className="list-disc pl-5">
//               {result.class_names.map((name, index) => (
//                 <li key={index}>
//                   {name}: {(result.all_confidences[index] * 100).toFixed(2)}%
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Prediction;


// import React, { useState } from "react";
// import axios from "axios";

// const Prediction = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handlePredict = async () => {
//     if (!file) return alert("Please upload an image first.");
//     const formData = new FormData();
//     formData.append("file", file);

//     setLoading(true);
//     setResult(null);
//     try {
//       const res = await axios.post("http://localhost:8000/predict", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setResult(res.data);
//     } catch (err) {
//       alert("Prediction failed.");
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Diabetic Retinopathy Prediction</h2>
//       <input type="file" onChange={handleFileChange} accept="image/*" className="mb-4" />
//       <button
//         onClick={handlePredict}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//         disabled={loading}
//       >
//         {loading ? "Predicting..." : "Predict"}
//       </button>

//       {result && (
//         <div className="mt-6 bg-white p-4 rounded shadow-lg">
//           <h3 className="text-xl font-semibold text-green-700">Prediction Result</h3>
//           <p><strong>Predicted Class:</strong> {result.class}</p>
//           <p><strong>Confidence:</strong> {result.confidence.toFixed(2)}%</p>

//           <div className="mt-4">
//             <h4 className="font-semibold">AI Explanation</h4>
//             <p><strong>1. Explanation:</strong> {result.details.explanation}</p>
//             <p><strong>2. Care Guidance:</strong> {result.details.care}</p>
//             <p><strong>3. Recommended Diet:</strong> {result.details.diet}</p>
//             <p><strong>4. Health Tips:</strong> {result.details.tips}</p>
//           </div>

//           <div className="mt-4">
//             <h4 className="font-semibold">All Class Confidences</h4>
//             <ul className="list-disc pl-5">
//               {result.class_names.map((name, index) => (
//                 <li key={index}>
//                   {name}: {(result.all_confidences[index] * 100).toFixed(2)}%
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Prediction;



// import React, { useState } from "react";
// import axios from "axios";
// import Header from "../components/Header"; // Adjust path if needed

// const Prediction = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handlePredict = async () => {
//     if (!file) return alert("Please upload an image first.");
//     const formData = new FormData();
//     formData.append("file", file);

//     setLoading(true);
//     setResult(null);
//     try {
//       const res = await axios.post("http://localhost:8000/predict", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setResult(res.data);
//     } catch (err) {
//       alert("Prediction failed.");
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       <Header />
//       <div className="p-6 max-w-4xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4">Diabetic Retinopathy Prediction</h2>
//         <input type="file" onChange={handleFileChange} accept="image/*" className="mb-4" />
//         <button
//           onClick={handlePredict}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//           disabled={loading}
//         >
//           {loading ? "Predicting..." : "Predict"}
//         </button>

//         {result && (
//           <div className="mt-6 bg-white p-4 rounded shadow-lg">
//             <h3 className="text-xl font-semibold text-green-700">Prediction Result</h3>
//             <p><strong>Predicted Class:</strong> {result.class}</p>
//             <p><strong>Confidence:</strong> {result.confidence.toFixed(2)}%</p>

//             <div className="mt-4">
//               <h4 className="font-semibold">AI Explanation</h4>
//               <p><strong>1. Explanation:</strong> {result.details.explanation}</p>
//               <p><strong>2. Care Guidance:</strong> {result.details.care}</p>
//               <p><strong>3. Recommended Diet:</strong> {result.details.diet}</p>
//               <p><strong>4. Health Tips:</strong> {result.details.tips}</p>
//             </div>

//             <div className="mt-4">
//               <h4 className="font-semibold">All Class Confidences</h4>
//               <ul className="list-disc pl-5">
//                 {result.class_names.map((name, index) => (
//                   <li key={index}>
//                     {name}: {(result.all_confidences[index] * 100).toFixed(2)}%
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Prediction;//
//fixxxxxxxxxxxxxxxxxx





// import React, { useState } from "react";
// import axios from "axios";
// import Header from "../components/Header"; // Adjust path if needed
// import ReactMarkdown from "react-markdown";
// import { motion } from "framer-motion";

// const Prediction = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handlePredict = async () => {
//     if (!file) return alert("Please upload an image first.");
//     const formData = new FormData();
//     formData.append("file", file);

//     setLoading(true);
//     setResult(null);
//     try {
//       const res = await axios.post("http://localhost:8000/predict", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setResult(res.data);
//     } catch (err) {
//       alert("Prediction failed.");
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       <Header />
//       <div className="p-6 max-w-4xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           Diabetic Retinopathy Prediction
//         </h2>

//         <div className="flex flex-col items-center space-y-4">
//           <input
//             type="file"
//             onChange={handleFileChange}
//             accept="image/*"
//             className="border p-2 rounded w-full max-w-xs"
//           />
//           <button
//             onClick={handlePredict}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
//             disabled={loading}
//           >
//             {loading ? "Predicting..." : "Predict"}
//           </button>
//         </div>

//         {result && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg space-y-6"
//           >
//             <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
//               🎯 Prediction Result
//             </h3>
//             <p><strong>🔹 Predicted Stage:</strong> {result.class}</p>
//             <p><strong>🔹 Confidence:</strong> {result.confidence.toFixed(2)}%</p>

//             <div className="mt-6">
//               <h4 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">
//                 📋 AI-Generated Medical Report
//               </h4>
//               <div className="prose dark:prose-invert max-w-none">
//                 <ReactMarkdown>{result.details.full_text}</ReactMarkdown>
//               </div>
//             </div>

//             <div className="mt-6">
//               <h4 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">
//                 📊 All Class Confidences
//               </h4>
//               <ul className="list-disc pl-6">
//                 {result.class_names.map((name, index) => (
//                   <li key={index}>
//                     {name}: {(result.all_confidences[index] * 100).toFixed(2)}%
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Prediction; fixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx






// import React, { useState } from "react";
// import axios from "axios";
// import Header from "../components/Header"; // Adjust path if needed
// import ReactMarkdown from "react-markdown";
// import { motion } from "framer-motion";
// import { jsPDF } from "jspdf";

// const Prediction = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handlePredict = async () => {
//     if (!file) return alert("Please upload an image first.");
//     const formData = new FormData();
//     formData.append("file", file);

//     setLoading(true);
//     setResult(null);
//     try {
//       const res = await axios.post("http://localhost:8000/predict", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setResult(res.data);
//     } catch (err) {
//       alert("Prediction failed.");
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFont("helvetica", "normal");

//     // Title
//     doc.text("Diabetic Retinopathy Prediction", 20, 20);
//     doc.text(`Predicted Stage: ${result.class}`, 20, 30);
//     doc.text(`Confidence: ${result.confidence.toFixed(2)}%`, 20, 40);

//     // AI Explanation
//     doc.text("AI Explanation", 20, 60);
//     doc.text(`Explanation: ${result.details.explanation || "No explanation available"}`, 20, 70);
//     doc.text(`Care Guidance: ${result.details.care || "No care guidance available"}`, 20, 80);
//     doc.text(`Diet Recommendations: ${result.details.diet || "No diet recommendations available"}`, 20, 90);
//     doc.text(`Health Tips: ${result.details.tips || "No health tips available"}`, 20, 100);

//     // Class Confidences
//     doc.text("Class Confidences", 20, 120);
//     result.class_names.forEach((name, index) => {
//       doc.text(`${name}: ${(result.all_confidences[index] * 100).toFixed(2)}%`, 20, 130 + index * 10);
//     });

//     // Save the PDF
//     doc.save("prediction_report.pdf");
//   };

//   return (
//     <>
//       <Header />
//       <div className="p-6 max-w-4xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           Diabetic Retinopathy Prediction
//         </h2>

//         <div className="flex flex-col items-center space-y-4">
//           <input
//             type="file"
//             onChange={handleFileChange}
//             accept="image/*"
//             className="border p-2 rounded w-full max-w-xs"
//           />
//           <button
//             onClick={handlePredict}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
//             disabled={loading}
//           >
//             {loading ? "Predicting..." : "Predict"}
//           </button>
//         </div>

//         {result && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg space-y-6"
//           >
//             <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
//               🎯 Prediction Result
//             </h3>
//             <p><strong>🔹 Predicted Stage:</strong> {result.class}</p>
//             <p><strong>🔹 Confidence:</strong> {result.confidence.toFixed(2)}%</p>

//             <div className="mt-6">
//               <h4 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">
//                 📋 AI-Generated Medical Report
//               </h4>
//               <div className="prose dark:prose-invert max-w-none">
//                 <ReactMarkdown>{result.details.full_text}</ReactMarkdown>
//               </div>
//             </div>

//             <div className="mt-6">
//               <h4 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">
//                 📊 All Class Confidences
//               </h4>
//               <ul className="list-disc pl-6">
//                 {result.class_names.map((name, index) => (
//                   <li key={index}>
//                     {name}: {(result.all_confidences[index] * 100).toFixed(2)}%
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Button to download PDF */}
//             <button
//               onClick={generatePDF}
//               className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
//             >
//               Download Prediction Report as PDF
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Prediction;







// import React, { useState } from "react";
// import axios from "axios";
// import Header from "../components/Header";
// import ReactMarkdown from "react-markdown";
// import { motion } from "framer-motion";
// import { jsPDF } from "jspdf";
// import drIcon from "../assets/dr-icon.png"; // ✅ Import your icon properly here

// const Prediction = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handlePredict = async () => {
//     if (!file) return alert("Please upload an image first.");
//     const formData = new FormData();
//     formData.append("file", file);

//     setLoading(true);
//     setResult(null);
//     try {
//       const res = await axios.post("http://localhost:8000/predict", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setResult(res.data);
//     } catch (err) {
//       alert("Prediction failed.");
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFont("helvetica", "normal");

//     // 🖼️ Add logo
//     const img = new Image();
//     img.src = drIcon;

//     img.onload = () => {
//       doc.addImage(img, "PNG", 80, 10, 50, 50); // Centered logo

//       let y = 70; // Starting after logo

//       // 📅 Date and Time
//       const now = new Date();
//       const dateStr = now.toLocaleDateString();
//       const timeStr = now.toLocaleTimeString();
//       doc.setFontSize(10);
//       doc.text(`Date: ${dateStr}`, 20, y);
//       doc.text(`Time: ${timeStr}`, 150, y);
//       y += 10;

//       // 🏥 Title
//       doc.setFontSize(18);
//       doc.text("🩺 Diabetic Retinopathy Prediction Report", 20, y);
//       y += 20;

//       // 🎯 Predicted Stage
//       doc.setFontSize(12);
//       doc.text(`Predicted Stage:`, 20, y);
//       doc.setFont("helvetica", "bold");

//       // 🎨 Stage color
//       const stageColor = {
//         "No DR": "#2ecc71",
//         "Mild": "#f1c40f",
//         "Moderate": "#e67e22",
//         "Severe": "#e74c3c",
//         "Proliferative DR": "#c0392b"
//       };
//       const color = stageColor[result.class] || "#3498db";
//       doc.setTextColor(color);
//       doc.text(`${result.class}`, 70, y);
//       doc.setTextColor(0, 0, 0); // Reset color
//       doc.setFont("helvetica", "normal");
//       y += 10;

//       doc.text(`Confidence:`, 20, y);
//       doc.setFont("helvetica", "bold");
//       doc.text(`${result.confidence.toFixed(2)}%`, 70, y);
//       doc.setFont("helvetica", "normal");
//       y += 10;

//       // Separator
//       doc.line(20, y, 190, y);
//       y += 10;

//       // 📋 AI Explanation
//       doc.setFontSize(14);
//       doc.text("📋 AI-Generated Medical Explanation:", 20, y);
//       y += 10;

//       doc.setFontSize(11);
//       const aiText = result.details.full_text || "No explanation available";
//       const lines = doc.splitTextToSize(aiText, 170);

//       if (y + lines.length * 6 > 260) {
//         doc.addPage();
//         y = 20;
//       }
//       doc.text(lines, 20, y);
//       y += lines.length * 6 + 10;

//       // Another separator
//       doc.line(20, y - 5, 190, y - 5);

//       // 📈 Class Confidences
//       doc.setFontSize(14);
//       doc.text("📊 Class Confidence Scores:", 20, y);
//       y += 10;

//       doc.setFontSize(11);
//       result.class_names.forEach((name, index) => {
//         doc.text(
//           `${name}: ${(result.all_confidences[index] * 100).toFixed(2)}%`,
//           20,
//           y + index * 8
//         );
//       });

//       // Footer
//       doc.setFontSize(10);
//       const pageHeight = doc.internal.pageSize.height || 297;
//       doc.setTextColor(150);
//       doc.text("Generated by DR Detector AI System", 20, pageHeight - 10);

//       // Save
//       doc.save("prediction_report.pdf");
//     };
//   };

//   return (
//     <>
//       <Header />
//       <div className="p-6 max-w-4xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           Diabetic Retinopathy Prediction
//         </h2>

//         <div className="flex flex-col items-center space-y-4">
//           <input
//             type="file"
//             onChange={handleFileChange}
//             accept="image/*"
//             className="border p-2 rounded w-full max-w-xs"
//           />
//           <button
//             onClick={handlePredict}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
//             disabled={loading}
//           >
//             {loading ? "Predicting..." : "Predict"}
//           </button>
//         </div>

//         {result && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg space-y-6"
//           >
//             <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
//               🎯 Prediction Result
//             </h3>
//             <p><strong>🔹 Predicted Stage:</strong> {result.class}</p>
//             <p><strong>🔹 Confidence:</strong> {result.confidence.toFixed(2)}%</p>

//             <div className="mt-6">
//               <h4 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">
//                 📋 AI-Generated Medical Report
//               </h4>
//               <div className="prose dark:prose-invert max-w-none">
//                 <ReactMarkdown>{result.details.full_text}</ReactMarkdown>
//               </div>
//             </div>

//             <div className="mt-6">
//               <h4 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">
//                 📊 All Class Confidences
//               </h4>
//               <ul className="list-disc pl-6">
//                 {result.class_names.map((name, index) => (
//                   <li key={index}>
//                     {name}: {(result.all_confidences[index] * 100).toFixed(2)}%
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Button to download PDF */}
//             <button
//               onClick={generatePDF}
//               className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
//             >
//               Download Prediction Report as PDF
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Prediction;










// import React, { useState } from "react";
// import axios from "axios";
// import Header from "../components/Header";
// import ReactMarkdown from "react-markdown";
// import { motion } from "framer-motion";
// import { jsPDF } from "jspdf";
// import drIcon from "../assets/dr-icon.png"; // Diabetic Retinopathy icon

// const Prediction = () => {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Handle file input
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // Handle prediction request
//   const handlePredict = async () => {
//     if (!file) {
//       return alert("Please upload an image first.");
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     setLoading(true);
//     setResult(null);
//     try {
//       const res = await axios.post("http://localhost:8000/predict", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setResult(res.data);
//     } catch (err) {
//       alert("Prediction failed.");
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   // Generate PDF report
//   const generatePDF = () => {
//     const userData = {
//       full_name: localStorage.getItem("userFullName") || "N/A",
//       email: localStorage.getItem("userEmail") || "N/A",
//       age: localStorage.getItem("userAge") || "N/A",
//       mobile_number: localStorage.getItem("userMobileNumber") || "N/A",
//       blood_group: localStorage.getItem("userBloodGroup") || "N/A",
//       address: localStorage.getItem("userAddress") || "N/A",
//     };

//     const doc = new jsPDF();
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const margin = 20;
//     let y = 20;

//     const img = new Image();
//     img.src = drIcon;

//     img.onload = () => {
//       const imgWidth = 50;
//       const imgHeight = 50;
//       doc.addImage(img, "PNG", (pageWidth - imgWidth) / 2, y, imgWidth, imgHeight);
//       y += imgHeight + 10;

//       doc.setFontSize(18);
//       doc.setFont("helvetica", "bold");
//       doc.text("Diabetic Retinopathy Prediction Report", pageWidth / 2, y, { align: "center" });
//       y += 15;

//       drawDivider(doc, y);
//       y += 10;

//       y = drawSectionHeader(doc, "Patient Information", y);
//       y = drawField(doc, "Full Name:", userData.full_name, y);
//       y = drawField(doc, "Email:", userData.email, y);
//       y = drawField(doc, "Age:", userData.age, y);
//       y = drawField(doc, "Mobile No:", userData.mobile_number, y);
//       y = drawField(doc, "Blood Group:", userData.blood_group, y);
//       y = drawField(doc, "Address:", userData.address, y);

//       drawDivider(doc, y);
//       y += 10;

//       y = drawSectionHeader(doc, "Prediction Result", y);

//       const stageColors = {
//         "No DR": [46, 204, 113],
//         "Mild": [241, 196, 15],
//         "Moderate": [230, 126, 34],
//         "Severe": [231, 76, 60],
//         "Proliferative DR": [192, 57, 43]
//       };
//       const stageColor = stageColors[result.class] || [52, 152, 219];

//       doc.setFontSize(12);
//       doc.setTextColor(stageColor[0], stageColor[1], stageColor[2]);
//       doc.text(`Predicted Stage: ${result.class}`, margin, y);
//       y += 8;

//       doc.setTextColor(0, 0, 0);
//       doc.text(`Confidence: ${result.confidence.toFixed(2)}%`, margin, y);
//       y += 15;

//       drawDivider(doc, y);
//       y += 10;

//       y = drawSectionHeader(doc, "AI-Generated Medical Explanation", y);
//       doc.setFontSize(11);
//       const explanationLines = doc.splitTextToSize(result.details.full_text || "No explanation available", pageWidth - margin * 2);
//       explanationLines.forEach(line => {
//         if (y > 270) {
//           addFooter(doc);
//           doc.addPage();
//           y = 20;
//         }
//         doc.text(line, margin, y);
//         y += 6;
//       });
//       y += 10;

//       drawDivider(doc, y);
//       y += 10;

//       y = drawSectionHeader(doc, "Class Confidence Scores", y);
//       result.class_names.forEach((name, index) => {
//         const confidenceColor = result.all_confidences[index] > 0.8 ? [46, 204, 113] : result.all_confidences[index] > 0.5 ? [241, 196, 15] : [231, 76, 60];
//         doc.setTextColor(confidenceColor[0], confidenceColor[1], confidenceColor[2]);
//         if (y > 270) {
//           addFooter(doc);
//           doc.addPage();
//           y = 20;
//         }
//         doc.text(`${name}: ${(result.all_confidences[index] * 100).toFixed(2)}%`, margin, y);
//         y += 8;
//       });

//       y += 20;

//       if (y > 250) {
//         addFooter(doc);
//         doc.addPage();
//         y = 20;
//       }

//       drawDivider(doc, y);
//       y += 10;

//       doc.setFontSize(12);
//       doc.setFont("helvetica", "bold");
//       doc.text("Doctor's Remarks / Signature:", margin, y);
//       y += 20;
//       doc.setDrawColor(150);
//       doc.line(margin, y, pageWidth - margin, y);
//       y += 8;
//       doc.setFontSize(10);
//       doc.setFont("helvetica", "normal");
//       doc.setTextColor(150);
//       doc.text("Name:", margin, y);
//       doc.text("Date:", pageWidth - margin - 30, y);

//       addFooter(doc);

//       doc.save("prediction_report.pdf");
//     };
//   };

//   // Helper functions for PDF formatting
//   const drawSectionHeader = (doc, title, y) => {
//     const pageWidth = doc.internal.pageSize.getWidth();
//     doc.setFillColor(173, 216, 230);
//     doc.rect(20, y, pageWidth - 40, 10, "F");
//     doc.setFontSize(14);
//     doc.setFont("helvetica", "bold");
//     doc.setTextColor(0, 0, 0);
//     doc.text(title, pageWidth / 2, y + 7, { align: "center" });
//     y += 15;
//     return y;
//   };

//   const drawField = (doc, label, value, y) => {
//     doc.setFontSize(11);
//     doc.setFont("helvetica", "normal");
//     doc.setTextColor(0, 0, 0);
//     doc.text(label, 25, y);
//     doc.text(value, 80, y);
//     y += 8;
//     return y;
//   };

//   const drawDivider = (doc, y) => {
//     const pageWidth = doc.internal.pageSize.getWidth();
//     doc.setDrawColor(200);
//     doc.line(20, y, pageWidth - 20, y);
//   };

//   const addFooter = (doc) => {
//     const pageCount = doc.internal.getNumberOfPages();
//     const pageHeight = doc.internal.pageSize.height || 297;
//     doc.setFontSize(10);
//     doc.setTextColor(150);
//     doc.text(`Page ${pageCount}`, 180, pageHeight - 10);
//     doc.text("Generated by DR Detector AI System", 20, pageHeight - 10);
//   };

//   return (
//     <>
//       <Header />
//       <div className="p-6 max-w-4xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           Diabetic Retinopathy Prediction
//         </h2>

//         <div className="flex flex-col items-center space-y-4">
//           <input
//             type="file"
//             onChange={handleFileChange}
//             accept="image/*"
//             className="border p-2 rounded w-full max-w-xs"
//           />
//           <button
//             onClick={handlePredict}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
//             disabled={loading}
//           >
//             {loading ? "Predicting..." : "Predict"}
//           </button>
//         </div>

//         {result && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg space-y-6"
//           >
//             <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
//               Prediction Result
//             </h3>
//             <p><strong>Predicted Stage:</strong></p>
//             <p>{result.class}</p>

//             <p><strong>Confidence:</strong></p>
//             <p>{result.confidence.toFixed(2)}%</p>

//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-blue-500">Medical Explanation</h4>
//               <ReactMarkdown>{result.details.full_text}</ReactMarkdown>
//             </div>

//             <div className="mt-6">
//               <h4 className="text-lg font-semibold text-blue-500">Class Confidence Scores</h4>
//               <ul>
//                 {result.class_names.map((name, index) => (
//                   <li key={index} style={{ color: result.all_confidences[index] > 0.8 ? "green" : result.all_confidences[index] > 0.5 ? "orange" : "red" }}>
//                     {name}: {(result.all_confidences[index] * 100).toFixed(2)}%
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mt-8 text-center">
//               <button
//                 onClick={generatePDF}
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded"
//               >
//                 Download Report (PDF)
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Prediction;








import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import drIcon from "../assets/dr-icon.png"; // Diabetic Retinopathy icon

const Prediction = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePredict = async () => {
    if (!file) return alert("Please upload an image first.");
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setResult(null);
    try {
      const res = await axios.post("http://localhost:8000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data);
    } catch (err) {
      alert("Prediction failed.");
      console.error(err);
    }
    setLoading(false);
  };

  const generatePDF = () => {
    const userData = {
      full_name: localStorage.getItem("userFullName") || "N/A",
      email: localStorage.getItem("userEmail") || "N/A",
      age: localStorage.getItem("userAge") || "N/A",
      mobile_number: localStorage.getItem("userMobileNumber") || "N/A",
      blood_group: localStorage.getItem("userBloodGroup") || "N/A",
      address: localStorage.getItem("userAddress") || "N/A",
    };

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let y = 20;

    const img = new Image();
    img.src = drIcon;

    img.onload = () => {
      const imgWidth = 50;
      const imgHeight = 50;
      doc.addImage(img, "PNG", (pageWidth - imgWidth) / 2, y, imgWidth, imgHeight);
      y += imgHeight + 10;

      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("Diabetic Retinopathy Prediction Report", pageWidth / 2, y, { align: "center" });
      y += 15;

      drawDivider(doc, y);
      y += 10;

      y = drawSectionHeader(doc, "Patient Information", y);
      y = drawField(doc, "Full Name:", userData.full_name, y);
      y = drawField(doc, "Email:", userData.email, y);
      y = drawField(doc, "Age:", userData.age, y);
      y = drawField(doc, "Mobile No:", userData.mobile_number, y);
      y = drawField(doc, "Blood Group:", userData.blood_group, y);
      y = drawField(doc, "Address:", userData.address, y);

      drawDivider(doc, y);
      y += 10;

      y = drawSectionHeader(doc, "Prediction Result", y);

      const stageColors = {
        "No DR": [46, 204, 113],
        "Mild": [241, 196, 15],
        "Moderate": [230, 126, 34],
        "Severe": [231, 76, 60],
        "Proliferative DR": [192, 57, 43]
      };
      const stageColor = stageColors[result.class] || [52, 152, 219];

      doc.setFontSize(12);
      doc.setTextColor(stageColor[0], stageColor[1], stageColor[2]);
      doc.text(`Predicted Stage: ${result.class}`, margin, y);
      y += 8;

      doc.setTextColor(0, 0, 0);
      doc.text(`Confidence: ${result.confidence.toFixed(2)}%`, margin, y);
      y += 15;

      drawDivider(doc, y);
      y += 10;

      y = drawSectionHeader(doc, "AI-Generated Medical Explanation", y);
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 128); // Set color for medical explanation text

      const explanationText = result.details.full_text || "No explanation available";
      const explanationLines = doc.splitTextToSize(explanationText, pageWidth - margin * 2);

      explanationLines.forEach(line => {
        if (y > 270) {
          addFooter(doc);
          doc.addPage();
          y = 20;
        }
        doc.text(line, margin, y);
        y += 6;
      });
      y += 10;

      drawDivider(doc, y);
      y += 10;

      y = drawSectionHeader(doc, "Class Confidence Scores", y);
      result.class_names.forEach((name, index) => {
        const confidenceColor = result.all_confidences[index] > 0.8 ? [46, 204, 113] : result.all_confidences[index] > 0.5 ? [241, 196, 15] : [231, 76, 60];
        doc.setTextColor(confidenceColor[0], confidenceColor[1], confidenceColor[2]);
        if (y > 270) {
          addFooter(doc);
          doc.addPage();
          y = 20;
        }
        doc.text(`${name}: ${(result.all_confidences[index] * 100).toFixed(2)}%`, margin, y);
        y += 8;
      });

      y += 20;

      if (y > 250) {
        addFooter(doc);
        doc.addPage();
        y = 20;
      }

      drawDivider(doc, y);
      y += 10;

      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.text("Doctor's Remarks / Signature:", margin, y);
      y += 20;
      doc.setDrawColor(150);
      doc.line(margin, y, pageWidth - margin, y);
      y += 8;
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(150);
      doc.text("Name:", margin, y);
      doc.text("Date:", pageWidth - margin - 30, y);

      addFooter(doc);

      doc.save("prediction_report.pdf");
    };
  };

  // Helpers
  const drawSectionHeader = (doc, title, y) => {
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFillColor(173, 216, 230);
    doc.rect(20, y, pageWidth - 40, 10, "F");
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(title, pageWidth / 2, y + 7, { align: "center" });
    y += 15;
    return y;
  };

  const drawField = (doc, label, value, y) => {
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text(label, 25, y);
    doc.text(value, 80, y);
    y += 8;
    return y;
  };

  const drawDivider = (doc, y) => {
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setDrawColor(200);
    doc.line(20, y, pageWidth - 20, y);
  };

  const addFooter = (doc) => {
    const pageCount = doc.internal.getNumberOfPages();
    const pageHeight = doc.internal.pageSize.height || 297;
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(`Page ${pageCount}`, 180, pageHeight - 10);
    doc.text("Generated by DR Detector AI System", 20, pageHeight - 10);
  };

  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Diabetic Retinopathy Prediction
        </h2>

        <div className="flex flex-col items-center space-y-4">
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="border p-2 rounded w-full max-w-xs"
          />
          <button
            onClick={handlePredict}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg space-y-6"
          >
            <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
              Prediction Result
            </h3>
            <p><strong>Predicted Stage:</strong></p>
            <p>{result.class}</p>

            <p><strong>Confidence:</strong></p>
            <p>{result.confidence.toFixed(2)}%</p>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-blue-500">Medical Explanation</h4>
              <ReactMarkdown>{result.details.full_text}</ReactMarkdown>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-blue-500">Class Confidence Scores</h4>
              <ul>
                {result.class_names.map((name, index) => (
                  <li key={index} style={{ color: result.all_confidences[index] > 0.8 ? "green" : result.all_confidences[index] > 0.5 ? "orange" : "red" }}>
                    {name}: {(result.all_confidences[index] * 100).toFixed(2)}%
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={generatePDF}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded"
              >
                Download Report (PDF)
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Prediction;
