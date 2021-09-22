import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';

// TODO: Replace the following with your app's Firebase project configuration 
const firebaseConfig = {   
  apiKey: "AIzaSyDq62VTzH8X0YpznAgI9MePA-vCZVtOF_0",
    authDomain: "ionic-react-hello.firebaseapp.com",
    projectId: "ionic-react-hello",
    storageBucket: "ionic-react-hello.appspot.com",
    messagingSenderId: "411887969296",
    appId: "1:411887969296:web:d0a5351f1babfad9301695",
    measurementId: "G-87B1S2SG8K"
};

const app = initializeApp(firebaseConfig);

export async function loginUser(username: string, password: string){
const email = `${username}@codedamn.com`;

try{
  const res = await firebase.auth().signInWithEmailAndPassword(email, password)

  console.log(res)
}catch(error){
  console.log(error)
  return false
}

  
}