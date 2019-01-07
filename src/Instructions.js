import React, { Component } from 'react'
class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        <h5>How It Works</h5>
        <p>Each card is a multiple choice question. Click on the answer you think is correct!</p>
        <p>If you get the answer incorrect, it will be added to your Study List to continue practicing.</p>
        <p>If you want to view the questions you missed, choose Study List Only from the dropdown!</p>
        <button onClick={this.props.toggleInstructions}>Got it!</button>
      </div>
    )
  }
}

export default Instructions;