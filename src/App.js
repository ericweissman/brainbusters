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

  populateStudyList = () => {
    if (Object.keys(localStorage).length > 0) {
      const savedStudyList = JSON.parse(localStorage.getItem('StudyList'))
      this.setState({
        studyList: savedStudyList
      })
    }
  }

  toggleCardsToShow = (event) => {
    if (event.target.value === 'show-studylist') {
      this.setState({
        showStudyList: true
      })
    } else {
      this.setState({
        showStudyList: false
      })
    }
  }

  updateStudyList = (id) => {
    const questions = [...this.state.questions]
    const studyList = [...this.state.studyList];
    const missedQuestions = questions.filter((question) => {
      return question.id === id && !studyList.includes(question)
    })
    if (!studyList.includes(missedQuestions)) {
      studyList.push(...missedQuestions)
    }
    
    this.setState({
      studyList: studyList
    })
    localStorage.setItem('StudyList', JSON.stringify(studyList))
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
             <CardContainer
              currentQuestion={currentQuestion}
              questions={this.state.questions}
              updateStudyList={this.updateStudyList}
              studyList={this.state.studyList}
              updateGuessedCards={this.updateGuessedCards}
              guessedQuestions={this.state.guessedQuestions}
            />
          }
        </div>
      );
    }
  }

export default App;
