// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvI6AOGrAiZNJzmZkic9xzsypfFmPYvGo",
  authDomain: "foodka-auth.firebaseapp.com",
  projectId: "foodka-auth",
  storageBucket: "foodka-auth.appspot.com",
  messagingSenderId: "904359260489",
  appId: "1:904359260489:web:43a4591428dfc58c5c2a98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
