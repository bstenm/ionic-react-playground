import { IonContent, IonImg } from '@ionic/react';
import React from 'react';
import frenchIcon from '../assets/icon-french.png';
import './Home.css';

const Home = () => (
      <IonContent>
            <IonImg src={frenchIcon} class="home-icon"/>
                  <p className="home-intro">
                        Congratulations, your learning path is now ready<br/>
                        You'll make rapid progress in French, we promise you!<br/>
                        Let's start right away with your first cards
                  </p>
      </IonContent>
);


export default Home;
