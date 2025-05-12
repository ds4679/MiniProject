// // Import the necessary functions from Firebase SDK
// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import the method for Sign In
// import { getStorage } from "firebase/storage"; // Firebase Storage
// import { getFirestore } from "firebase/firestore"; // Firebase Firestore (db)

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBFxWqblfDrX53Kh5ZhFAxvwfyv7khw1jw",
//   authDomain: "diabeticretinopathydetector.firebaseapp.com",
//   databaseURL: "https://diabeticretinopathydetector-default-rtdb.firebaseio.com",
//   projectId: "diabeticretinopathydetector",
//   storageBucket: "diabeticretinopathydetector.appspot.com", // Firebase Storage Bucket
//   messagingSenderId: "284691914324",
//   appId: "1:284691914324:web:74ddd81c6ee392b04a97c1",
//   measurementId: "G-BBPP5ZQ4M3"
// };

// // Initialize Firebase with the configuration
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication
// const auth = getAuth(app);

// // Initialize Firebase Storage
// const storage = getStorage(app);

// // Initialize Firestore (db)
// const db = getFirestore(app);

// // Export the necessary methods
// export { auth, storage, db, signInWithEmailAndPassword }; // Add signInWithEmailAndPassword export


// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Firebase Authentication
import { getStorage } from "firebase/storage"; // Firebase Storage
import { getFirestore } from "firebase/firestore"; // Firebase Firestore (db)
import { getDatabase, ref, set, get } from "firebase/database"; // Firebase Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFxWqblfDrX53Kh5ZhFAxvwfyv7khw1jw",
  authDomain: "diabeticretinopathydetector.firebaseapp.com",
  databaseURL: "https://diabeticretinopathydetector-default-rtdb.firebaseio.com", // Realtime Database URL
  projectId: "diabeticretinopathydetector",
  storageBucket: "diabeticretinopathydetector.appspot.com", // Firebase Storage Bucket
  messagingSenderId: "284691914324",
  appId: "1:284691914324:web:74ddd81c6ee392b04a97c1",
  measurementId: "G-BBPP5ZQ4M3"
};

// Initialize Firebase with the configuration
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Storage
const storage = getStorage(app);

// Initialize Firestore (db)
const db = getFirestore(app);

// Initialize Realtime Database (for storing structured data)
const realTimeDb = getDatabase(app);

// Export the necessary methods and objects
export { auth, storage, db, realTimeDb, signInWithEmailAndPassword, ref, set, get };
