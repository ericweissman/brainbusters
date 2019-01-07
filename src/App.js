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

  toggleStudyList = (event) => {
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
    const questions = [...this.state.questions];
    const studyList = [...this.state.studyList];
    const missedQuestions = questions.find((question) => {
      return question.id === id
    })
    if (!studyList.includes(missedQuestions.id)) {
      studyList.push(missedQuestions.id)
    }
    this.setState({
      studyList: studyList
    })
    localStorage.setItem('StudyList', JSON.stringify(studyList))
  }

  updateGuessedCards = (id) => {
    const questionsArr = [...this.state.questions];
    const guessedArr = [...this.state.guessedQuestions];
    const guessed = questionsArr.find((elem) => {
      return elem.id === id
    })
    if (!guessedArr.includes(guessed.id)) {
      guessedArr.push(guessed.id)
    }
    this.setState({
      guessedQuestions: guessedArr
    })

  }

  render() {
      return (
        <div className="App">
          <Header
            toggle={this.toggleStudyList}
          />
          <CardContainer
            questions={this.state.questions}
            updateStudyList={this.updateStudyList}
            studyList={this.state.studyList}
            showStudyList={this.state.showStudyList}
            updateGuessedCards={this.updateGuessedCards}
            guessedQuestions={this.state.guessedQuestions}
          />
        </div>
      );
    }
  }

export default App;
