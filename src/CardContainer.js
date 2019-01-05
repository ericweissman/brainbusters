import React, { Component } from 'react'
import QuestionCard from './QuestionCard'
import './styles/Main.scss'

class CardContainer extends Component {
  render() {
    let {questions} = this.props.questions
    return (
      <div className="card-container">
        {
          questions.map((question) => {
            return (
              <QuestionCard 
                key={question.id}
                question={question.question}
                answers={question.answers}
                correct_answer={questions.correct_answer}
                concept={questions.concept}
              />
            )
          })
        }
      </div>
    )
  }
}

export default CardContainer;