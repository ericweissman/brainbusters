import React, { Component } from 'react'
import QuestionCard from './QuestionCard'
import './styles/Main.scss'

class CardContainer extends Component {
  render() {
    let { questions, updateStudyList, studyList, showStudyList, updateGuessedCards, guessedQuestions } = this.props 
    if (!showStudyList) {
      return (
        <div className="card-container">
          {questions.map((element) => {
            let { id, question, answers, correct_answer, concept } = element;
            if (!guessedQuestions.includes(element)) {
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
                />
              )
            }
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

//For showing one card
    // render() {
    //   let { currentQuestion, updateStudyList, studyList, showStudyList, updateQuestionIndex } = this.props
    //   return (
    //     <div className="card-container">
    //       <button className="down" onClick={updateQuestionIndex}></button>
    //       <QuestionCard
    //         key={currentQuestion.id}
    //         id={currentQuestion.id}
    //         question={currentQuestion.question}
    //         answers={currentQuestion.answers}
    //         correct_answer={currentQuestion.correct_answer}
    //         concept={currentQuestion.concept}
    //         updateStudyList={updateStudyList}
    //       />
    //       <button className="up" onClick={updateQuestionIndex}></button>
    //     </div>
    //   )
    // }
      