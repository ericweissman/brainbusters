import React, { Component } from 'react';
import './styles/Main.scss';

class CorrectCard extends Component {
  render() {
    return(
      <div className="correct-card">
        <h4>Correct!</h4>
        <p>{this.props.question}</p>
        <p>{this.props.correct_answer}</p>
        <button onClick={this.props.reset}>Back to Quiz</button>      
      </div>
    )
  }
}

export default CorrectCard;
