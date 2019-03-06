import { IonButton, IonContent, IonItemGroup } from '@ionic/react';
import React from 'react';
import FlashCard from './FlashCard';
import './Learn.css';
import TopBar from './TopBar';
class LearnScreen extends React.Component {
      state = { cardFlipped: false };

      render () {
            return (
                  <IonContent>
                        <TopBar title="Flash Cards" />
                        <FlashCard flipped={this.state.cardFlipped} />
                        <IonItemGroup class="learn-actions">
                              {[
                                    { color: 'red', name: 'again'},
                                    { color: 'orange', name: 'difficult'},
                                    { color: 'yellow', name: 'good'},
                                    { color: 'green', name: 'perfect'},
                              ].map( e => (
                                    <IonButton
                                          key={e.name}
                                          onClick={() => {
                                                this.setState({
                                                      cardFlipped: !this.state.cardFlipped
                                                });
                                          }}
                                          style={{"--border-radius": "0", "--background": e.color }}
                                    >
                                    {e.name}
                              </IonButton>
                              ))}
                        </IonItemGroup>
                  </IonContent>
            )
      }
};

export default LearnScreen;
