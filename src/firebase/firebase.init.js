// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxkyqItujQpBLNXrxcn4MDrkKgfrIPVn4",
  authDomain: "visa-navigator-portal-152e9.firebaseapp.com",
  projectId: "visa-navigator-portal-152e9",
  storageBucket: "visa-navigator-portal-152e9.firebasestorage.app",
  messagingSenderId: "398010498810",
  appId: "1:398010498810:web:a1194074af8b7dccf91343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };