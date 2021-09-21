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
} from '@ionic/react';


const Home: React.FC = () => {

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
		<IonButton routerLink="/login">Login</IonButton>
		<IonButton routerLink="/register" color="secondary">Register</IonButton>
	  </IonContent>
    </IonApp>
  );
};

export default Home;
