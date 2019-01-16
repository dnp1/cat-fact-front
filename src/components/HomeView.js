import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import '../App.css'

import FactView from './FactView';

class HomeView extends Component {
  render() {
    return (
      <div>
        Hello to cat facts Inc.
        <Router>
          <div>
            <Route exact path="/" render={
              () =>
                (
                  <div><Link  className="App-button-link" to="/fact">Fact</Link></div>
                )
            }/>
            

            <hr />
            <Route exact path="/fact" render={
              () => {
                return (<div> <FactView></FactView></div>)
              }
            } />
          </div>
        </Router>
      </div>
    );
  }
}

export default HomeView;


