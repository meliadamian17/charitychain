// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtdUGvfDMZiaQFNMaVUDgKLPKWfu_mrng",
  authDomain: "charitychain-faa1f.firebaseapp.com",
  projectId: "charitychain-faa1f",
  messagingSenderId: "269298775185",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;