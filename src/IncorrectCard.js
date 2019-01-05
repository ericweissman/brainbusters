import React, { Component } from 'react';
import './styles/Main.scss';

class IncorrectCard extends Component {
  render() {
    return (
      <div className="incorrect-card">
        <h4>Wrong!</h4>
        <p>Pass Question down from Card</p>
        <p>Pass Incorrect answer down from card</p>
        <p>Pass Correct answer down from Card</p>
        <div className="incorrect-btns">
          <button>Add to Study List</button>
          <button>Back to Quiz</button>
        </div>
      </div>
    )
  }
}

export default CorrectCard;