import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth } from "firebase/auth";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0D7twhejVCxKhBBJwsUICgAYSYlVAff8",
  authDomain: "ecommerce-saroj.firebaseapp.com",
  projectId: "ecommerce-saroj",
  storageBucket: "ecommerce-saroj.appspot.com",
  messagingSenderId: "871681946914",
  appId: "1:871681946914:web:a3a569ea2ff9a741ac617b",
  measurementId: "G-LYPKCXEM7E",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const createUserProfileDocument = async(userAuth,additionalData)=>{
  if(!userAuth) return
  
}
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com",
  prompt: "select_account",
});
export const signInWithGoogle = () => signInWithPopup(auth, provider);

const Fbprovider = new FacebookAuthProvider();
Fbprovider.setCustomParameters({
  display: "popup",
});
export const signInWithFb = () => {
  signInWithPopup(auth, Fbprovider);
};

