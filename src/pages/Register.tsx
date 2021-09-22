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
import {Link} from 'react-router-dom'


const Register: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    function registerUser() {

        if(password === cpassword){
            alert('username is ' + username + 'and password is ' + password + 'confirm password is same as password' );
        } else{
            alert ('please check password and confirm password is same')
        }
        
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
        <IonButton onClick={registerUser}>Register</IonButton>

        <p>
            Already have an account? <Link to="/login">Login</Link>
        </p>

        <IonButton routerLink="/">Home</IonButton>
	  </IonContent>
    </IonApp>
  );
};

export default Register;
