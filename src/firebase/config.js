// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_DWlpOxywF_Pf6JCDE9PGAgX0JUIDKJU",
    authDomain: "react-coder-45744.firebaseapp.com",
    projectId: "react-coder-45744",
    storageBucket: "react-coder-45744.appspot.com",
    messagingSenderId: "529130683436",
    appId: "1:529130683436:web:2291ce36290c6de9682589",
    measurementId: "G-YEXEXB7QSV"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);