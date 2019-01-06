import React, { Component } from 'react';
import CorrectCard from './CorrectCard'
import IncorrectCard from './IncorrectCard'

class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered_correctly: null,
      incorrect_answer: null
    }
  }

  evaluateGuess= (event) => {
    let guess = event.target.innerText;
    let answer = this.props.correct_answer;

    if (guess === answer) {
      this.setState({
        answered_correctly: true
      })
    } else {
      this.setState({
        answered_correctly: false,
        incorrect_answer: guess
      })
    }
  }

  render() {
    if (this.state.answered_correctly === null) {
      return (
        <div className='question-card' id={this.props.id}>
          <p>{this.props.question}</p>
          <div className="answer-btns">
            {
              this.props.answers.map((answer) => {
                return (
                  <button onClick={this.evaluateGuess} key={answer}>{answer}</button>
                )
              })
            }
          </div>
        </div>
      )
    } else if (this.state.answered_correctly === true) {
      return (
        <CorrectCard 
          question={this.props.question}
          correct_answer={this.props.correct_answer}
        />
      )
    } else if (this.state.answered_correctly === false) {
      return (
        <IncorrectCard 
          question={this.props.question}
          correct_answer={this.props.correct_answer}
          incorrect_answer={this.state.incorrect_answer}
        />
      )
    }
  } 
}

export default QuestionCard;