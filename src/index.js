import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBeyebElLFjB3bRyou2eJfKiPWxNwHlZE",
  authDomain: "proyectoreact-coderhouse-tomch.firebaseapp.com",
  projectId: "proyectoreact-coderhouse-tomch",
  storageBucket: "proyectoreact-coderhouse-tomch.appspot.com",
  messagingSenderId: "20039043833",
  appId: "1:20039043833:web:36387e431b53c07c1f7028"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


