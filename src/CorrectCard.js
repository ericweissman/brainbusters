import React, { Component } from 'react';
import './styles/Main.scss';

class CorrectCard extends Component {
  render() {
    return(
      <div className="correct-card">
        <h4>Correct!</h4>
        <p>Pass Question down from Card</p>
        <p>Pass Correct answer down from Card</p>
        <button>Back to Quiz</button>
      </div>
    )
  }
}

export default CorrectCard;
