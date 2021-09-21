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


const Example: React.FC = () => {

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Example!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem routerLink="/">
			<IonLabel>to Home</IonLabel>
		</IonItem>

        <IonButton routerLink="/">Click Me</IonButton>
	  </IonContent>
    </IonApp>
  );
};

export default Example;
