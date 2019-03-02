import { IonButton, IonCard, IonCardContent, IonContent, IonItemGroup } from '@ionic/react';
import React from 'react';
import './Learn.css';

const LearnScreen = () => (
      <IonContent>
            <IonCard style={{
                  position: "absolute",
                  width: "98%",
                  top: "0px",
                  bottom: "50px",
                  background: "white",
            }}>
                  <IonCardContent>
                        to guess
                  </IonCardContent>
            </IonCard>
            <IonItemGroup style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: "absolute",
                  width: "98%",
                  bottom: "0px",
                  padding: "10px",
            }}>
                  <IonButton
                        onClick={() => console.log('voila')}
                        style={{"--border-radius": "0", "--background": "red" }}
                  >
                        Again
                  </IonButton>
                  <IonButton style={{"--border-radius": "0", "--background": "orange" }}>Difficult</IonButton>
                  <IonButton style={{"--border-radius": "0", "--background": "yellow" }}>Good</IonButton>
                  <IonButton style={{"--border-radius": "0", "--background": "green" }}>Perfect</IonButton>
            </IonItemGroup>
      </IonContent>
);

export default LearnScreen;
