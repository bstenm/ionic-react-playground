import { IonButton, IonContent, IonItemGroup } from '@ionic/react';
import React from 'react';
import FlashCard from '../components/FlashCard';
import './Learn.css';

class LearnScreen extends React.Component {
      state = { cardFlipped: false };

      render () {
            return (
                  <IonContent>
                        <FlashCard flipped={this.state.cardFlipped} />
                        <IonItemGroup style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              position: "absolute",
                              width: "100%",
                              bottom: "0px",
                              padding: "10px",
                        }}>
                              <IonButton
                                    onClick={() => {
                                          this.setState({
                                                cardFlipped: !this.state.cardFlipped
                                          });
                                    }}
                                    style={{"--border-radius": "0", "--background": "red" }}
                              >
                                    Again
                              </IonButton>
                              <IonButton style={{"--border-radius": "0", "--background": "orange" }}>Difficult</IonButton>
                              <IonButton style={{"--border-radius": "0", "--background": "yellow" }}>Good</IonButton>
                              <IonButton style={{"--border-radius": "0", "--background": "green" }}>Perfect</IonButton>
                        </IonItemGroup>
                  </IonContent>
            )
      }
};

export default LearnScreen;
