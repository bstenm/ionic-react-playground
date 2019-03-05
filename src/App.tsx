import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonApp, IonPage } from '@ionic/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppStack from './pages/AppStack';
import './theme.css';


const App = () => (
    <Router>
      <div id="app">
        <IonApp>
            <IonPage id="main">
              <Switch>
                <Route path="/" component={AppStack} />
              </Switch>
            </IonPage>
        </IonApp>
      </div>
    </Router>
);

export default App;
