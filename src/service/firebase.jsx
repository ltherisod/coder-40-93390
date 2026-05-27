// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// apiKey: import.meta.env.VITE_API_KEY,

const firebaseConfig = {
  apiKey: "AIzaSyAzjYMx4LZyXcmk4FM7KwPjflbVTxX1yq8",
  authDomain: "coder-93390-app.firebaseapp.com",
  projectId: "coder-93390-app",
  storageBucket: "coder-93390-app.firebasestorage.app",
  messagingSenderId: "1043700691641",
  appId: "1:1043700691641:web:f6b8314da6aa0886c0e168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//OBTENER LA BASE DE DATOS
export const db = getFirestore(app)