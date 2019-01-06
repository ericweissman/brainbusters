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

  evaluateGuess = (event) => {
    let guess = event.target.innerText;
    let answer = this.props.correct_answer;

    if (guess === answer) {
      this.setState({
        answered_correctly: true
      })
    } else {
      let missedId = this.props.id
      this.setState({
        answered_correctly: false,
        incorrect_answer: guess
      })
      this.props.updateStudyList(missedId)
    }
  }

  backToCards = () => {
    this.setState({
      answered_correctly: null
    })
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
    } else if (this.state.answered_correctly) {
      return (
        <div className="correct-card">
          <h4>Correct!</h4>
          <p>{this.props.question}</p>
          <p>{this.props.correct_answer}</p>
          <button onClick={this.backToCards}>Back to Quiz</button>
        </div>
      )
      // return (
      //   <CorrectCard 
      //     question={this.props.question}
      //     correct_answer={this.props.correct_answer}
      //     reset={this.backToCards}
      //   />
      // )
    } else {
      return (
        <div className="incorrect-card">
          <h4>Wrong!</h4>
          <p>{this.props.question}</p>
          <p>Correct Answer: {this.props.correct_answer}</p>
          <p>Your Answer: {this.state.incorrect_answer}</p>
          <button onClick={this.backToCards}>Back to Quiz</button>
        </div>
      )
      // return (
      //   <IncorrectCard 
      //     question={this.props.question}
      //     correct_answer={this.props.correct_answer}
      //     incorrect_answer={this.state.incorrect_answer}
      //     reset={this.backToCards}
      //   />
      // )
    }
  } 
}

export default QuestionCard;