import { IonCard } from '@ionic/react';
import classNames from 'classnames';
import React, { Component } from 'react';
import './FlashCard.css';

const  flashCardData = {
  expression: 'to guess',
  expressionTranslation: 'deviner',
  example: 'Tu ne vas jamais deviner ce qui est arrive au travail aujourd\'hui',
  exampleTranslation: 'You\'ll never guess what happened at work today',
};

class Card extends Component<{ flipped: boolean }> {
    render() {
        const cardClass = classNames({
            card: true,
            flipped: this.props.flipped,
        });
        return (
          <div className="flip">
            <div className={cardClass}>
              <IonCard class="face front">
                <p className="expression">{flashCardData.expression}</p>
                <p className="expressionTranslation">{flashCardData.expressionTranslation}</p>
                <p className="example">{flashCardData.example}</p>
                <p className="exampleTranslation">{flashCardData.exampleTranslation}</p>
              </IonCard>
              <IonCard class="face back">Something</IonCard>
            </div>
          </div>
        );
    }
}

export default Card;