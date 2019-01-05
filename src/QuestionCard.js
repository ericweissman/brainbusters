import React, { Component } from 'react';

class QuestionCard extends Component {
  render() {
    return (
      <div className='question-card' id={this.props.key}>
        <h3>{this.props.concept}</h3>
        <p>{this.props.question}</p>
        <ul>
          {
            this.props.answers.map((answer) => {
              return (
                <li>{answer}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}

export default QuestionCard;