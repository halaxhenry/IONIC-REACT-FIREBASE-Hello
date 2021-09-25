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



const Dashboard: React.FC = () => {


  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard!</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
		
        <p>Hello whatever user</p>
        <IonButton routerLink="/">Home</IonButton>
	  </IonContent>
    </IonApp>
  );
};

export default Dashboard;
