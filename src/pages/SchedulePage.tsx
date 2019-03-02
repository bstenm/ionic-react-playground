import { IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';
import React, { Component } from 'react';
import './SchedulePage.css';

class SchedulePage extends Component {

  render() {
    return (
        <IonContent>
        <IonItem detail lines="full" style={{ "--background": "#FFF" }}>
          <IonIcon slot="start" style={{ color: "orange" }} name="restaurant" size="large"></IonIcon>
          <IonLabel>
            <h3>Machin</h3>
            <p>
              something
            </p>
          </IonLabel>
        </IonItem>
        </IonContent>
    );
  }
}

export default SchedulePage;
