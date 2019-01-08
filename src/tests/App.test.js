import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, mount } from 'enzyme';


const question = [
  {
    "id": 1,
    "question": "What array prototype method would return a sum of the elements in an array?",
    "answers": [
      ".sort()",
      ".reduce()",
      ".forEach()"
    ],
    "correct_answer": ".reduce()",
    "concept": "prototypes"
  }];
const guessedQuestions = [];
const id = 1;
const studyList = [4, 6]

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    // localStorage.setItem('StudyList', '[4, 6]');
    wrapper = shallow(
      <App />
    );

  afterEach(() => {
    localStorage.clear();
  })

  });

  it('should retrieve data from local storage on mount', () => {
    localStorage.setItem('StudyList', JSON.stringify(studyList))
    wrapper = mount(<App />)
    expect(wrapper.state().studyList).toEqual(studyList)
  }) 

  it('should only update Guessed Cards with a new ID when the id matches an ID in guessed questions', () => {
    wrapper.setState({ questions: question, guessedQuestions: guessedQuestions});
    wrapper.instance().updateGuessedCards(id);
    expect(wrapper.state('guessedQuestions')).toEqual([1]);
    wrapper.instance().updateGuessedCards(id);
    expect(wrapper.state('guessedQuestions')).toEqual([1]);
  });



  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Header and CardContainer component', () => {
    expect(wrapper.find('Header').length).toEqual(1)
    expect(wrapper.find('CardContainer').length).toEqual(1)
  });



  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      questions: [],
      studyList: [],
      showAllQuestions: false,
      guessedQuestions: [],
      error: null
    })
  });

  it('should change state when toggleAllQuestions is called', () => {
    expect(wrapper.state('showAllQuestions')).toEqual(false);
    wrapper.instance().toggleAllQuestions();
    expect(wrapper.state('showAllQuestions')).toEqual(true);
    wrapper.instance().toggleAllQuestions();
    expect(wrapper.state('showAllQuestions')).toEqual(false);
  });

  it('should change state when resetQuiz is called', () => {
    wrapper.setState({
      questions: [1,2],
      studyList: [1,2],
      showAllQuestions: false,
      guessedQuestions: []
    });
    wrapper.instance().resetQuiz();
    expect(wrapper.state()).toEqual({
      questions: [],
      studyList: [],
      showAllQuestions: false,
      guessedQuestions: []
    });
  })

  
});