import React, { Component } from 'react'
import QuestionCard from './QuestionCard'
import './styles/Main.scss'

class CardContainer extends Component {
  render() {
    let { questions, updateStudyList, studyList, showAllQuestions, updateGuessedCards, guessedQuestions } = this.props
    if (!showAllQuestions && studyList.length > 0) {
      //there is something in local storage and i want to load the cards i missed to start 

      return (
        <div className="card-container">
          {questions.map((element) => {
            let { id, question, answers, correct_answer, concept } = element;
            if (studyList.includes(element.id)) {
              return (
                <QuestionCard
                key={id}
                id={id}
                question={question}
                answers={answers}
                correct_answer={correct_answer}
                concept={concept}
                updateStudyList={updateStudyList}
                updateGuessedCards={updateGuessedCards}
                showAllQuestions={showAllQuestions}
                />
                )
              }
            })}
        </div>
      )
    } else {
      return (
        <div className="card-container">
          {questions.map((element) => {
            let { id, question, answers, correct_answer, concept } = element;
            if (!studyList.includes(element.id) && !guessedQuestions.includes(element.id)) {
              return (
                <QuestionCard
                  key={id}
                  id={id}
                  question={question}
                  answers={answers}
                  correct_answer={correct_answer}
                  concept={concept}
                  updateStudyList={updateStudyList}
                  updateGuessedCards={updateGuessedCards}
                  showAllQuestions={showAllQuestions}
                />
              )
            }
          })}
        </div>
      )
    }
  }
}

export default CardContainer;


      