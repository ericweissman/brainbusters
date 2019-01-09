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
      showAllQuestions: false,
      guessedQuestions: [],
      error: null
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
      .catch((error) => {
        this.setState({ error: true })
      });
      this.populateStudyList();
    }


  populateStudyList = () => {
    if (Object.keys(localStorage).length > 0) {
      const savedStudyList = JSON.parse(localStorage.getItem('StudyList'))
      this.setState({
        studyList: savedStudyList
      })
    }
  }

  toggleAllQuestions = () => {
    this.setState({
      showAllQuestions: !this.state.showAllQuestions,
    })
  }

  updateStudyList = (id, answer) => {
    const questions = [...this.state.questions];
    const studyList = [...this.state.studyList];
    const guess = questions.find((question) => {
      return question.id === id
    })

    if (!studyList.includes(guess.id) && answer === false) {
      studyList.push(guess.id)
    } else if (studyList.includes(guess.id) && !this.state.showAllQuestions) {
      let index = studyList.indexOf(guess.id)
      studyList.splice(index, 1)
    }

    this.setState({
      studyList: studyList
    }, () => {
      localStorage.setItem('StudyList', JSON.stringify(studyList))
      this.updateGuessedCards(id);
    })
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

  resetQuiz = () => {
    this.setState({
      studyList: [],
      guessedQuestions: [],
      showAllQuestions: false
    });
    localStorage.clear();
  }

  render() {
    let {error} = this.state
      return (
        <div className="App">
        {!error ? (
          <div>
            <Header
              toggle={this.toggleAllQuestions}
              resetQuiz={this.resetQuiz}
              studyList={this.state.studyList}
              showAllQuestions={this.state.showAllQuestions}
            />
            <CardContainer
              questions={this.state.questions}
              updateStudyList={this.updateStudyList}
              studyList={this.state.studyList}
              showAllQuestions={this.state.showAllQuestions}
              updateGuessedCards={this.updateGuessedCards}
              guessedQuestions={this.state.guessedQuestions}
            />
          </div>
        ) : (
          <div className="error">
            <h1>Error, huh? Well, see you later!</h1>
            <img src="https://media.giphy.com/media/MACp8o4fXZfAA/giphy.gif"/>
          </div>
        )
        }
          
        </div>
      );
    }
  }

export default App;
