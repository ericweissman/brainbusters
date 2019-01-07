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
    const {correct_answer } = this.props
    let guess = event.target.innerText;
    
    if (guess === correct_answer) {
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

  resetAnswered = () => {
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
        <CorrectCard 
          question={this.props.question}
          correct_answer={this.props.correct_answer}
          id={this.props.id}
          updateGuessedCards={this.props.updateGuessedCards}
          showAllCards={this.props.showAllQuestions}
        />
      )
    } else {
      return (
        <IncorrectCard 
          question={this.props.question}
          correct_answer={this.props.correct_answer}
          incorrect_answer={this.state.incorrect_answer}
          id={this.props.id}
          updateGuessedCards={this.props.updateGuessedCards}
          updateStudyList={this.props.updateStudyList}
          showAllCards={this.props.showAllQuestions}
          reset={this.resetAnswered}
        />
      )
    }
  } 
}

export default QuestionCard;