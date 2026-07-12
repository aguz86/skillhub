import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "thinking-karma-qfs6l",
  appId: "1:827782629533:web:2b9de504d33aed154c2c74",
  apiKey: "AIzaSyCOtWpQb0tlYhJA1Rply7hptqS6FImfExE",
  authDomain: "thinking-karma-qfs6l.firebaseapp.com",
  storageBucket: "thinking-karma-qfs6l.firebasestorage.app",
  messagingSenderId: "827782629533",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app, "ai-studio-scalevmasterclas-fbb6cc33-381a-4e9d-a93c-91f62c3c414d");
