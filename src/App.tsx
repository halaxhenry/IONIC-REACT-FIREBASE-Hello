import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Example from './pages/Example';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { useDispatch } from 'react-redux';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { getCurrentUser } from './firebaseConfig';


const RoutingSystem: React.FC = () => {
  return (
  <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" component={Home} exact />
          <Route path="/example" component={Example} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/dashboard" component={Dashboard} exact />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

const App: React.FC = () => {

  const [busy, setBusy] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then(user => {
      if(user){
        // I'm logged in
        dispatch()
        window.history.replaceState({},'', '/dashboard');
      }else{
        window.history.replaceState({}, '', '/');
      }
      setBusy(false)
    });
  }, []);
  
  return (
    <IonApp>
      {busy ? <IonSpinner /> : <RoutingSystem />}
    </IonApp>
  );
};

export default App;
