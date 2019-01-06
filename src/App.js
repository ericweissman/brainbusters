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
      showStudyList: false
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

  updateStudyList = (id) => {
    let missedQuestions = [...this.state.studyList];
    missedQuestions.push(id)

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
          showStudyList={this.state.showStudyList}
        />
      </div>
    );
  }
}

export default App;
