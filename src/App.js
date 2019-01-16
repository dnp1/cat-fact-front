import React, { Component } from 'react';
import './App.css';
import { FactView, HomeView } from './components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to cat-facts
          </p>
        </header>
        <HomeView/>
      </div>
    );
  }
}

export default App;
