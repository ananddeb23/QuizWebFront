import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginBody from './components/LoginBody/LoginBody';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'login',
    };
  }
  render() {
    if (this.state.page === 'login') {
      return (
        <div className="App">
          <Header />
          <LoginBody />
        </div>
      );
    }
    return (
      <div className="App" />
    );
  }
}

export default App;
