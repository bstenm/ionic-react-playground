import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonApp, IonPage } from '@ionic/react';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import NavTabs from './NavTabs';

const App = () => (
      <Router>
            <div id="app">
                  <IonApp>
                        <IonPage  style={{ paddingTop: '55px' }}>
                              <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                              <NavTabs />
                        </IonPage>
                  </IonApp>
            </div>
      </Router>
);

export default App;
