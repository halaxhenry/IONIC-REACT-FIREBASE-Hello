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
} from '@ionic/react';
import {Link} from 'react-router-dom';
import { loginUser } from '../firebaseConfig';
import { toast } from '../toast';



const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {

        const res = await loginUser(email, password);

        // if(res){
        //   toast('You have logged in!');
        // }
    }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
		<IonInput placeholder="Email?" onIonChange={(e: any) => setEmail(e.target.value)} />
        <IonInput type="password" placeholder="Password?" onIonChange={(e: any) => setPassword(e.target.value)} />
        <IonButton onClick={login}>Login</IonButton>

        <p>
            New here? <Link to="/register">Register</Link>
        </p>

        <IonButton routerLink="/">Home</IonButton>
	  </IonContent>
    </IonApp>
  );
};

export default Login;
