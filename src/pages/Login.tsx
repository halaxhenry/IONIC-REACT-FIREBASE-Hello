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

const Login: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function loginUser() {
        alert('username is ' + username + 'and password is ' + password);
    }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
		<IonInput placeholder="Username?" onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput placeholder="Password?" onIonChange={(e: any) => setPassword(e.target.value)} />
        <IonButton onClick={loginUser}>Login</IonButton>

        <p>
            New here? <Link to="/register">Register</Link>
        </p>

        <IonButton routerLink="/">Home</IonButton>
	  </IonContent>
    </IonApp>
  );
};

export default Login;
