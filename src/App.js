import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginBody from './components/LoginBody/LoginBody';
import QuestionsContainer from './components/QuestionsContainer/QuestionsContainer';
import ScoresContainer from './components/ScoresContainer/ScoresContainer';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.page === 'login') {
      return (
        <div className="App">
          <Header />
          <LoginBody />
        </div>
      );
    } else if (this.props.page === 'showquestions') {
      return (
        <div className="App">
          <Header uname={this.props.uname} />
          <QuestionsContainer />
        </div>
      );
    } else if (this.props.page === 'showscores') {
      return (
        <div className="App">
          <Header uname={this.props.uname} />
          <ScoresContainer />
        </div>
      );
    }
    return (
      <div className="App" />
    );
  }
}
const mapStateToProps = state => ({
  page: state.quiz.page,
  uname: state.quiz.uname,

});
export default connect(mapStateToProps, null)(App);

