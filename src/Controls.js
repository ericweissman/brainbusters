import React, { Component } from 'react';

class Controls extends Component {
  render() {
    let {studyList, showAllQuestions, toggleInstructionsShown, resetQuiz, toggle } = this.props
      return(
        <div className="user-controls">
          <button className="toggle-instructions-btn" onClick={toggleInstructionsShown}>Show Instructions</button>
          <button className="reset-quiz" onClick={resetQuiz}>Reset Study List</button>
          {
            showAllQuestions && <button className="cards-to-show" onClick={toggle}>Show Study List</button>
          }
          {
            !showAllQuestions && <button className="cards-to-show" onClick={toggle}>Show All Questions</button>
          }
        </div>
      )
  }
}

export default Controls