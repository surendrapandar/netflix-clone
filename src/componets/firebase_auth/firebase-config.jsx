import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAlEeKMnfWp-yqBJVT_WCtTsCc2tL5EkXY",
    authDomain: "netflix-7307b.firebaseapp.com",
    projectId: "netflix-7307b",
    storageBucket: "netflix-7307b.appspot.com",
    messagingSenderId: "629386585096",
    appId: "1:629386585096:web:250d6c870fdd84a1d75dbd",
    measurementId: "G-BJH1K2792M"
  };

const app = initializeApp(firebaseConfig);  

export const auth = getAuth(app)