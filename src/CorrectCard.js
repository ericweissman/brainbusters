import React, { Component } from 'react';
import './styles/Main.scss';

class CorrectCard extends Component {
  render() {
    console.log(this.props.id)
    return(
      <div className="correct-card">
        <h4>Correct!</h4>
        <p>{this.props.question}</p>
        <p>{this.props.correct_answer}</p>
        <button onClick={() => this.props.updateGuessedCards(this.props.id)}>Back to Quiz</button>      
      </div>
    )
  }
}

export default CorrectCard;
