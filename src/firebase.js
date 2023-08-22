import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYI3fSf78g29OccxTpOy0R8qm2mEceIII",
  authDomain: "openinapp-edf35.firebaseapp.com",
  projectId: "openinapp-edf35",
  storageBucket: "openinapp-edf35.appspot.com",
  messagingSenderId: "267460821355",
  appId: "1:267460821355:web:ba2d95dd602e8113c30c2e",
  measurementId: "G-4L7LP6KVV2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;