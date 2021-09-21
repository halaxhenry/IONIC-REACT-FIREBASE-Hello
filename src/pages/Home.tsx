import React from 'react';
import { 
	IonContent, 
	IonHeader, 
	IonApp, 
	IonTitle, 
	IonToolbar, 
	IonList, 
	IonItem,
	IonText,
	IonAvatar,
	IonLabel,
	IonItemOptions,
	IonItemSliding,
	IonItemOption,

} from '@ionic/react';
import './Home.css';

const arr = [
	{
		name:'Finn', 
		desc: 'This guy rocks!'
	},
	{
		name:'Han', 
		desc: 'Trust me, I am a programmer'
	},
	{
		name:'Rey', 
		desc: 'I am done with it!'
	},
]

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>Hello World!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
			{arr.map(elem => (
				<IonItemSliding key={elem.name}>
					<IonItem>
						<IonAvatar>
							<img src={`https://ionicframework.com/docs/demos/api/list/avatar-${elem.name.toLowerCase()}.png`} />
						</IonAvatar>

						<IonLabel className="ion-padding">
							<h2>{elem.name}</h2>
							<h3>{elem.desc}</h3>
							<p>Some helper text!</p>
						</IonLabel>
					</IonItem>
						<IonItemOptions side="end">
							<IonItemOption onClick={() => alert('pressed deleted!')}>Delete</IonItemOption>
						</IonItemOptions>
				</IonItemSliding>
			))}
		</IonList>
      </IonContent>
    </IonApp>
  );
};

export default Home;
