import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import React from 'react';
import { Redirect, Route } from 'react-router';
import ExploreScreen from './Explore';
import Home from './Home';
import LearnScreen from './Learn';
import NotFoundScreen from './NotFound';

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
        <Route path="/:tab(explore)" component={ExploreScreen} exact={true} />
        <Route path="/:tab(learn)" component={LearnScreen} exact={true} />
        <Route path="/:tab(progress)" component={NotFoundScreen} />
        <Route path="/:tab(home)" component={Home} />
        <Route path="/:tab(more)" component={NotFoundScreen} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/Home">
          <IonIcon name="home" />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="learn" href="/learn">
          <IonIcon name="book" />
          <IonLabel>Learn</IonLabel>
        </IonTabButton>
        <IonTabButton tab="explore" href="/explore">
          <IonIcon name="eye" />
          <IonLabel>Explore</IonLabel>
        </IonTabButton>
        <IonTabButton tab="progress" href="/progress">
          <IonIcon name="arrow-round-up" />
          <IonLabel>Progress</IonLabel>
        </IonTabButton>
        <IonTabButton tab="more" href="/more">
          <IonIcon name="more" style={{
            "WebkitTransform": "rotate(90deg)",
            "MozTransform": "rotate(90deg)",
            "OTransform": "rotate(90deg)",
            "MsTransform": "rotate(90deg)",
            "transform": "rotate(90deg)",
          }} />
          <IonLabel>More</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
);

export default AppStack;
