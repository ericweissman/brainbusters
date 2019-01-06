import React, { Component } from 'react';
import './styles/Main.scss';

class IncorrectCard extends Component {
  render() {
    return (
      <div className="incorrect-card">
        <h4>Wrong!</h4>
        <p>{this.props.question}</p>
        <p>Correct Answer: {this.props.correct_answer}</p>
        <p>Your Answer: {this.props.incorrect_answer}</p>
        <button onClick={() => this.props.updateGuessedCards(this.props.id)}>Back to Quiz</button>
      </div>
    )
  }
}

export default IncorrectCard;