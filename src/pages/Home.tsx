import React from 'react';
import { 
	IonContent, 
	IonHeader, 
	IonApp, 
	IonTitle, 
	IonToolbar, 
	IonButton,
	IonIcon,
} from '@ionic/react';
import {star} from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello World!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
		  <IonButton expand="full" color="secondary">
			  <IonIcon slot="end" icon={star}></IonIcon>
			  Hello World
		  </IonButton>
	  </IonContent>
    </IonApp>
  );
};

export default Home;
