
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRvv0I_uiA5QfkYz9S9YPpw-GUefbDF6M",
  authDomain: "reactutn-959c9.firebaseapp.com",
  projectId: "reactutn-959c9",
  storageBucket: "reactutn-959c9.firebasestorage.app",
  messagingSenderId: "527545234992",
  appId: "1:527545234992:web:71e11318740926aef01ff5"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)

