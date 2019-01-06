import React, { Component } from 'react'
import QuestionCard from './QuestionCard'
import './styles/Main.scss'

class CardContainer extends Component {
  render() {
    if (this.props.showStudyList) {
      this.props.questions.filter((question) => {
        if (this.props.studyList.includes(question.id)) {
          return (
            <div className="card-container">
              {this.props.questions.map((element) => {
                let { id, question, answers, correct_answer, concept } = element;
                return (
                  <QuestionCard
                    key={id}
                    id={id}
                    question={question}
                    answers={answers}
                    correct_answer={correct_answer}
                    concept={concept}
                    updateStudyList={this.props.updateStudyList}
                  />
                )
              })}
            </div>
          )
        }
      })
    } else {
      return (
        <div className="card-container">
          {this.props.questions.map((element) => {
            let { id, question, answers, correct_answer, concept } = element;
            return (
              <QuestionCard
                key={id}
                id={id}
                question={question}
                answers={answers}
                correct_answer={correct_answer}
                concept={concept}
                updateStudyList={this.props.updateStudyList}
              />
            )
          })}
        </div>
      )
    }

  }
}

export default CardContainer;