import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "./toast";

const firebaseConfig = {
  apiKey: "AIzaSyDq62VTzH8X0YpznAgI9MePA-vCZVtOF_0",
  authDomain: "ionic-react-hello.firebaseapp.com",
  projectId: "ionic-react-hello",
  storageBucket: "ionic-react-hello.appspot.com",
  messagingSenderId: "411887969296",
  appId: "1:411887969296:web:d0a5351f1babfad9301695",
  measurementId: "G-87B1S2SG8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export async function loginUser(username: string, password: string) {
  const email = `${username}@codedamn.com`;
  

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    toast('login success');
    alert(user.email);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    alert(error);
    alert(errorCode);
    alert(errorMessage);
  });
}

export async function registerUser(username: string, password: string) {
  const email = `${username}@codedamn.com`;
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...

    alert(user.email);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorCode);
    alert(errorMessage);
  });
}
