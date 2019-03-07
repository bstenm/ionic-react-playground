import { IonButton, IonContent, IonIcon, IonImg } from '@ionic/react';
import React from 'react';
import frenchIcon from '../assets/icon-french.png';
import './Home.css';
import TopBar from './TopBar';

const topBarButtons = (
      <IonButton>
            <IonIcon slot="end" name="help-circle"/>
      </IonButton>
);

const Home = () => (
      <IonContent>
            <TopBar title="French" buttons={topBarButtons} />
            <div style={{ marginTop: "70px" }}>
                  <IonImg src={frenchIcon} class="home-icon"/>
                  <p className="home-intro">
                        Congratulations, your learning path is now ready<br/>
                        You'll make rapid progress in French, we promise you!<br/>
                        Let's start right away with your first cards
                  </p>
            </div>
      </IonContent>
);


export default Home;
