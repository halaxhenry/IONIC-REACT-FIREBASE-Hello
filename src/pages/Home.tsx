import React, {useState, useEffect} from 'react';
import { 
	IonContent, 
	IonHeader, 
	IonApp, 
	IonTitle, 
	IonToolbar, 
	IonInput
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

	const [input, setInput] = useState<string>('');

	useEffect(() => {
		console.log(input)
	}, [input])

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello World!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
		  <IonInput 
		  	value={input} 
			onIonChange={(e: any) => setInput(e.target.value)}
		  >
		  </IonInput>
	  </IonContent>
    </IonApp>
  );
};

export default Home;
