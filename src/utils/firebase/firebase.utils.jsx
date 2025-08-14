import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, getDoc, setDoc,  } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqa10KmVeXPsOBOM4esl2CpLAvWt-VK58",
    authDomain: "crown-clothing-am.firebaseapp.com",
    projectId: "crown-clothing-am",
    storageBucket: "crown-clothing-am.firebasestorage.app",
    messagingSenderId: "1086220442090",
    appId: "1:1086220442090:web:9e74c398589c4e1dcb3a93"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);