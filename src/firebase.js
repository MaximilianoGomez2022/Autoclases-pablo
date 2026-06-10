import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-zCgk1n5A-XuI7J7fQz9DYzWxn67A9tQ",
  authDomain: "autoclases-pablo.firebaseapp.com",
  projectId: "autoclases-pablo",
  storageBucket: "autoclases-pablo.firebasestorage.app",
  messagingSenderId: "638901981439",
  appId: "1:638901981439:web:2c36536f29c32e608efcca"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);