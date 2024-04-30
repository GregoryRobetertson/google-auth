// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries
const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsCAhkB5uEgD0IH4bCafqTYZHcQ00p0gg",
  authDomain: "auth-26a56.firebaseapp.com",
  projectId: "auth-26a56",
  storageBucket: "auth-26a56.appspot.com",
  messagingSenderId: "442377513411",
  appId: "1:442377513411:web:9b373cdb7988d4cad4f576"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { provider, auth }