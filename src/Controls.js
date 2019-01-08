import React, { Component } from 'react';

class Controls extends Component {
  render() {
    let {studyList, showAllQuestions, toggleInstructionsShown, resetQuiz, toggle } = this.props
    if(showAllQuestions && studyList.length === 0) {
      return(
        <div className="user-controls">
          <button className="toggle-instructions-btn" onClick={toggleInstructionsShown}>Show Instructions</button>
          <button onClick={resetQuiz}>Reset Study List</button>
          <button className="cards-to-show" onClick={toggle}>Study List Empty</button>
        </div>
      )
    } else if (showAllQuestions) {
      return (
        <div className="user-controls">
          <button className="toggle-instructions-btn" onClick={toggleInstructionsShown}>Show Instructions</button>
          <button onClick={resetQuiz}>Reset Study List</button>
          <button className="cards-to-show" onClick={toggle}>Show Study List</button>
        </div>
      )
    } else if (!showAllQuestions) {
      return (
        <div className="user-controls">
          <button className="toggle-instructions-btn" onClick={toggleInstructionsShown}>Show Instructions</button>
          <button onClick={resetQuiz}>Reset Study List</button>
          <button className="cards-to-show" onClick={toggle}>Show All Questions</button>
        </div>
      )
    }

  }
}

export default Controls