import React, { Component } from 'react';
import './styles/Main.scss';

class CorrectCard extends Component {
  render() {
    return(
      <div className="correct-card">
        <h4>Correct!</h4>
        <img src="https://media.giphy.com/media/PS7d4tm1Hq6Sk/giphy.gif"/>
        <p>{this.props.question}</p>
        <p className="correct-answer">{this.props.correct_answer}</p>
        <button onClick={() => this.props.updateGuessedCards(this.props.id)}>Back to Quiz</button>      
      </div>
    )
  }
}

export default CorrectCard;
