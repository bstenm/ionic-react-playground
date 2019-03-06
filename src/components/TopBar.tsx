import { IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { withRouter } from 'react-router-dom';

const TopBar = (props: any) => (
      <IonHeader style={{ position: "fixed", top: "0px", textAlign: "center" }} >
            <IonToolbar>
                  <IonIcon
                        style={{ cursor: "pointer" }}
                        slot="start"
                        name="arrow-round-back"
                        onClick={() => props.history.goBack()}
                  />
                  <IonTitle>{ props.title }</IonTitle>
                  <IonButtons slot="secondary">
                        {props.buttons}
                  </IonButtons>
            </IonToolbar>
      </IonHeader>
);

export default withRouter(TopBar);