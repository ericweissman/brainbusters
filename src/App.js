import React, { Component } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import './styles/Main.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      studyList: [],
      showStudyList: false,
      guessedQuestions: [],
      questionIndex: 0
    }
  }
  componentDidMount() {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/ewQuestions")
      .then(results => results.json())
      .then((result) => {
        this.setState({
          questions: result.ewQuestions
        })
      })
      .catch(err => {
        this.setState({ error: err })
      })

      this.populateStudyList()
    }

  updateQuestionIndex = (event) => {
    let currentIndex = this.state.questionIndex
    console.log(event.target.innerText)
    if (event.target.className === 'down') {
      console.log(event.target.innerText)
      this.setState({
        questionIndex: currentIndex - 1
      })
    } else if (event.target.className === 'up') {
      this.setState({
        questionIndex: currentIndex + 1
      })
    }
  }

  populateStudyList = () => {
    if (Object.keys(localStorage).length > 0) {
      const savedStudyList = JSON.parse(localStorage.getItem('StudyList'))
      this.setState({
        studyList: savedStudyList
      })
    }
  }

  toggleCardsToShow = () => {
    this.setState({
      showStudyList: !this.state.showStudyList
    })
  }

  updateStudyList = (id) => {
    const questions = [...this.state.questions]
    const studyList = [...this.state.studyList];
    const missedQuestions = questions.filter((question) => {
      return question.id === id && !studyList.includes(question)
    })

    studyList.push(...missedQuestions)
    localStorage.setItem('StudyList', JSON.stringify(studyList))

    this.setState({
      studyList: studyList
    })
  }

  updateGuessedCards = (id) => {
    const questionsArr = [...this.state.questions];
    const guessedArr = [...this.state.guessedQuestions];
    const guessed = questionsArr.filter((elem) => {
      return elem.id === id && !guessedArr.includes(elem)
    })
    guessedArr.push(...guessed)
    
    this.setState({
      guessedQuestions: guessedArr
    })

  }

  
  render() {
      let index = this.state.questionIndex
      let currentQuestion = this.state.questions[index];
      return (
        <div className="App">
          <Header
            toggle={this.toggleCardsToShow}
          />
          {
            this.state.questions.length > 0 &&
             <CardContainer
              currentQuestion={currentQuestion}
              questions={this.state.questions}
              updateStudyList={this.updateStudyList}
              studyList={this.state.studyList}
              showStudyList={this.state.showStudyList}
              updateGuessedCards={this.updateGuessedCards}
              updateQuestionIndex={this.updateQuestionIndex}
              guessedQuestions={this.state.guessedQuestions}
            />
          }
        </div>
      );
    }
  }

export default App;
