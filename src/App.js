import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FactView } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to cat-facts
          </p>
        </header>
        <FactView/>
      </div>
    );
  }
}

export default App;
