import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJu7yr36uTm6iHigtg44Kc5OW9CLxJTa8",
    authDomain: "artihcus-2b925.firebaseapp.com",
    projectId: "artihcus-2b925",
    storageBucket: "artihcus-2b925.appspot.com",
    messagingSenderId: "972573812496",
    appId: "1:972573812496:web:049b0a0c061cb7a99e6795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export { db, storage }; 


