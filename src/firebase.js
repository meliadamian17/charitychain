// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyCtdUGvfDMZiaQFNMaVUDgKLPKWfu_mrng",
  authDomain: "charitychain-faa1f.firebaseapp.com",
  projectId: "charitychain-faa1f",
  messagingSenderId: "269298775185",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const createUserProfileDocument = (user) => {
  const userRef = ref(db, `Users/${user.uid}`);

  // Check if the user already exists in the database
  get(userRef)
    .then((snapshot) => {
      if (!snapshot.exists()) {
        // User does not exist, create a new entry
        set(userRef, {
          email: user.email,
        });
      }
    })
    .catch((error) => {
      console.error("Error checking user existence:", error);
    });
};


export default app;