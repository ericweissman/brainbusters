import React, { Component } from 'react'
import QuestionCard from './QuestionCard'
import './styles/Main.scss'

class CardContainer extends Component {
  render() {
    let { questions } = this.props.questions;
    return (
      <div className-="card-container">
        {questions.map((element) => {
          let { id, question, answers, correct_answer, concept } = element;
            return (
              <QuestionCard
                key={id}
                question={question}
                answers={answers}
                correct_answer={correct_answer}
                concept={concept}
              />
            )
      })}
      </div>
    )
  }
}

export default CardContainer;