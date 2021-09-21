import React, {useState, useEffect} from 'react';
import { 
	IonContent, 
	IonHeader, 
	IonApp, 
	IonTitle, 
	IonToolbar, 
	IonItem,
	IonLabel,

} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
		<IonItem routerLink="/example">
				<IonLabel>to Example</IonLabel>
		</IonItem>
	  </IonContent>
    </IonApp>
  );
};

export default Home;
