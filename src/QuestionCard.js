import React, { Component } from 'react';

class QuestionCard extends Component {
  render() {
    return (
      <div className='question-card' id={this.props.id}>
        <h3>{this.props.concept}</h3>
        <p>{this.props.question}</p>
        <ul>
          {
            this.props.answers.map((answer) => {
              return (
                <li key={answer}>{answer}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default QuestionCard;