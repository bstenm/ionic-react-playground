import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import About from './Home';
import MapView from './Map';
import SchedulePage from './SchedulePage';
import SessionDetail from './SessionDetail';
import SpeakerDetail from './SpeakerDetail';
import SpeakerList from './SpeakerList';

const AppStack: React.SFC = () => (
  <IonPage>
    <Route exact path="/" render={() => <Redirect to="/home"/>}/>
    {
    /**
     * Only render exact matches.  Only destroy on back button click
     * On history.push keep previous route stored for back button
     *
     * TabBar does a push on iontabbutton click.
     * TabBar updates the tab links based on the current route path.
     */
    }

    <IonTabs>
      <IonRouterOutlet>
        <Route path="/:tab(schedule)" component={SchedulePage} exact={true} />
        <Route path="/:tab(speakers)" component={SpeakerList} exact={true} />
        <Route path="/:tab(speakers)/speaker/:id" component={SpeakerDetail} />
        <Route path="/:tab(schedule|speakers)/sessions/:id" component={SessionDetail} />
        <Route path="/:tab(map)" component={MapView} />
        <Route path="/:tab(home)" component={About} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule" href="/schedule">
          <IonIcon name="calendar" />
          <IonLabel>Schedule</IonLabel>
        </IonTabButton>
        <IonTabButton tab="speakers" href="/speakers">
          <IonIcon name="contacts" />
          <IonLabel>Speakers</IonLabel>
        </IonTabButton>
        <IonTabButton tab="map" href="/map">
          <IonIcon name="map" />
          <IonLabel>Map</IonLabel>
        </IonTabButton>
        <IonTabButton tab="home" href="/Home">
          <IonIcon name="home" />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
);

export default AppStack;
