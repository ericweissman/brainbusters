import React, { Component } from 'react'
class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        <h5>How It Works</h5>
        <p>Use this app to build you skills with tricky methods you'll encounter in Javascript!</p>
        <p>Each card is a multiple choice question. Click on the answer you think is correct!</p>
        <p>If you get the answer incorrect, you will have the option to save it later for review in your Study List.</p>
        <p>If you want to view the questions you missed, choose Study List Only from the dropdown!</p>
        <button onClick={this.props.hideInstructions}>Got it!</button>
      </div>
    )
  }
}

export default Instructions;