import React, {useState, useEffect} from 'react';
import { 
	IonContent, 
	IonHeader, 
	IonApp, 
	IonTitle, 
	IonToolbar, 
	IonItem,
	IonLabel,
	IonButton,
  IonInput,
  IonLoading,
} from '@ionic/react';
import {Link} from 'react-router-dom'
import { toast } from '../toast';
import {registerUser} from '../firebaseConfig';

const Register: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    
    async function register() {  
      // validation
        if(password !== cpassword){
          return toast('Passwords do not match')
        }
        if(username.trim() === '' || password.trim() === ''){
          return toast('Username and password are required')
        }
        const res = await registerUser(username, password);
    }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">



		<IonInput placeholder="Username?" onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput type="password" placeholder="Password?" onIonChange={(e: any) => setPassword(e.target.value)} />
        <IonInput type="password" placeholder="Confirm Password?" onIonChange={(e: any) => setCPassword(e.target.value)} />
        <IonButton onClick={register}>Register</IonButton>

        <p>
            Already have an account? <Link to="/login">Login</Link>
        </p>

        <IonButton routerLink="/">Home</IonButton>
	  </IonContent>
    </IonApp>
  );
};

export default Register;
