import { IonContent, IonText } from '@ionic/react';
import React from 'react';
import './Learn.css';

const NotFoundScreen = () => (
      <IonContent style={{
            textAlign: "center",
      }}>
            <IonText style={{
                  fontSize: "30px",
                  color: "#CCC",
                  fontWeight: "bold",
            }}>
                  Not Found
            </IonText>
      </IonContent>
);

export default NotFoundScreen;
