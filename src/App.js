import React, { Component } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import './styles/Main.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      studyList: []
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
    }

  updateStudyList = (question) => {
    let missedQuestions = [...this.state.studyList];
    missedQuestions.push(question)

    this.setState({
      studyList: missedQuestions
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CardContainer 
          questions={this.state.questions}
          updateStudyList={this.updateStudyList}
        />
      </div>
    );
  }
}

export default App;
