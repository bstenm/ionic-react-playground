import { IonButton, IonButtons, IonContent, IonIcon, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import TopBar from './TopBar';

const topBarButtons = (
      <IonButtons>
            <IonButton>
                  <IonIcon name="add-circle"/>
            </IonButton>
            <IonButton>
                  <IonIcon name="search"/>
            </IonButton>
      </IonButtons>
);

const Explore = () => (
      <IonContent >
            <TopBar title="Categories" buttons={topBarButtons} />
            <IonList>
                  {[
                        { id: 0, category: 'Optional packs', description: 'Additional content to boost your learning' },
                        { id: 1, category: 'Useful lists', description: 'Ex. Flash catds ordered by level' },
                        { id: 2, category: 'The Basics', description: 'General words and phrases' },
                        { id: 3, category: 'Eating', description: 'In a restaurant, food, in the kitchen, etc.' },
                        { id: 4, category: 'Accomodation', description: 'Hotels, house, camping...' },
                        { id: 5, category: 'Transportation', description: 'By train, bus, taxi, car, plane...' },
                        { id: 6, category: 'Shopping', description: 'Paying, negociating, banking, shopping...' },
                        { id: 7, category: 'Tourism', description: 'Visits, culture, nature, geography...' },
                  ].map( e => (
                        <IonItem key={e.id} detail lines="full" style={{ "--background": "#FFF" }}>
                              <IonIcon slot="start" style={{ color: "orange" }} name="restaurant" size="large"></IonIcon>
                              <IonLabel>
                                    <h3>{e.category}</h3>
                                    <p>{e.description}</p>
                              </IonLabel>
                        </IonItem>
                  ))}
            </IonList>
      </IonContent>
);

export default Explore;
