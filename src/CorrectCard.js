import React, { Component } from 'react';
import './styles/Main.scss';

class CorrectCard extends Component {
  render() {
    if (this.props.showAllCards) {
      return (
        <div className="correct-card">
          <h4>Correct!</h4>
          <img src="https://media.giphy.com/media/PS7d4tm1Hq6Sk/giphy.gif" alt="Correct!" />
          <p>{this.props.question}</p>
          <p className="correct-answer">{this.props.correct_answer}</p>
          <button className="back-to-quiz-btn" onClick={() => this.props.updateGuessedCards(this.props.id)}>Back to Quiz</button>
        </div>
      )
    } else {
      //study list only
      return (
        <div className="correct-card">
          <h4>Correct!</h4>
          <img src="https://media.giphy.com/media/PS7d4tm1Hq6Sk/giphy.gif" alt="Correct!" />
          <p>{this.props.question}</p>
          <p className="correct-answer">{this.props.correct_answer}</p>
          <button className="back-to-quiz-btn" onClick={() => this.props.updateStudyList(this.props.id, this.props.answered_correctly)}>Back to Quiz</button>
          {/* <button className="back-to-quiz-btn" onClick={this.props.reset}>Back to Quiz</button> */}
        </div>
      )
    }
  }
}

export default CorrectCard;
