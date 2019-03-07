import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import React from 'react';
import { Route } from 'react-router-dom';
import ExploreScreen from './Explore';
import Home from './Home';
import LearnScreen from './Learn';
import NotFoundScreen from './NotFound';

export default () => (
      <IonTabs>
            <IonRouterOutlet>
                  <Route path="/:tab(explore)" component={ExploreScreen} exact={true} />
                  <Route path="/:tab(learn)" component={LearnScreen} exact={true} />
                  <Route path="/:tab(progress)" component={NotFoundScreen} />
                  <Route path="/:tab(home)" component={Home} />
                  <Route path="/:tab(more)" component={NotFoundScreen} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom"  class="bar-royal">
                  {[
                        { name: 'home', icon: 'home' },
                        { name: 'learn', icon: 'book' },
                        { name: 'explore', icon: 'eye' },
                        { name: 'progress', icon: 'arrow-round-up' },
                        { name: 'more', icon: 'more', style: {
                              "WebkitTransform": "rotate(90deg)",
                              "MozTransform": "rotate(90deg)",
                              "OTransform": "rotate(90deg)",
                              "MsTransform": "rotate(90deg)",
                              "transform": "rotate(90deg)",
                        }},
                  ].map( e => (
                        <IonTabButton
                              key={e.name}
                              tab={e.name}
                              href={`/${e.name}`}
                              style={{
                                    "--color-selected": '#F66F24',
                              }}
                        >
                              <IonIcon name={e.icon} style={e.style}/>
                              <IonLabel style={{ textTransform: "capitalize" }}>{e.name}</IonLabel>
                        </IonTabButton>
                  ))}
            </IonTabBar>
      </IonTabs>
);
