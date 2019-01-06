import React, { Component } from 'react'
import QuestionCard from './QuestionCard'
import './styles/Main.scss'

class CardContainer extends Component {
  render() {
    let { questions, updateStudyList, studyList, showStudyList } = this.props 
    if (!showStudyList) {
      return (
        <div className="card-container">
          {questions.map((element) => {
            let { id, question, answers, correct_answer, concept } = element;
            return (
              <QuestionCard
                key={id}
                id={id}
                question={question}
                answers={answers}
                correct_answer={correct_answer}
                concept={concept}
                updateStudyList={updateStudyList}
              />
            )
          })}
        </div>
      )
    } else {
      return (
        <div className="card-container">
          {studyList.map((element) => {
            let { id, question, answers, correct_answer, concept } = element;
            return (
              <QuestionCard
                key={id}
                id={id}
                question={question}
                answers={answers}
                correct_answer={correct_answer}
                concept={concept}
                updateStudyList={updateStudyList}
              />
            )
          })}
        </div>
      )
    }
  }
}

export default CardContainer;