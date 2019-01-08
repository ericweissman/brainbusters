import React, { Component } from 'react';
import './styles/Main.scss';

class IncorrectCard extends Component {
  render() {
    if (this.props.showAllCards) {
      return (
        <div className="incorrect-card">
          <h4>Wrong!</h4>
          <img src="https://media.giphy.com/media/BmshHM2V8ByjC/giphy.gif" />
          <p>{this.props.question}</p>
          <p>Correct Answer: {this.props.correct_answer}</p>
          <p className="incorrect-answer">Your Answer: {this.props.incorrect_answer}</p>
          <button className="back-to-quiz-button" onClick={() => {
            this.props.updateGuessedCards(this.props.id);
            this.props.updateStudyList(this.props.id)
          }}>Back to Quiz</button>
        </div>
      )
    } else {
      return(
      <div className="incorrect-card">
        <h4>Wrong!</h4>
        <img src="https://media.giphy.com/media/BmshHM2V8ByjC/giphy.gif" />
        <p>{this.props.question}</p>
        <p>Correct Answer: {this.props.correct_answer}</p>
        <p className="incorrect-answer">Your Answer: {this.props.incorrect_answer}</p>
        <button className="back-to-quiz-button" onClick={this.props.reset}>Back to Quiz</button>
      </div>
      )
    }
  }
}

export default IncorrectCard;