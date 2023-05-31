// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYyik6g_SYTDkYJTyPbhcXffpP9h8Mkq4",
  authDomain: "moon-clinic.firebaseapp.com",
  projectId: "moon-clinic",
  storageBucket: "moon-clinic.appspot.com",
  messagingSenderId: "891695443685",
  appId: "1:891695443685:web:1480e8010d2f8070292e0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;