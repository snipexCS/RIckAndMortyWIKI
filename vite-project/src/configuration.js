// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI53BibxFqXKcRA-eEhEzmXzHCe5lQGdE",
  authDomain: "project-98018.firebaseapp.com",
  projectId: "project-98018",
  storageBucket: "project-98018.firebasestorage.app",
  messagingSenderId: "221306487905",
  appId: "1:221306487905:web:873e6a5d42b59f80021620",
  measurementId: "G-1SYE82HW00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default app;