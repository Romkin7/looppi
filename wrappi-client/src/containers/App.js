import React, { Component } from 'react';
import Login from "./Login";
import Game from "./Game";
import {BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    maxResult: 20,
    amountOfNumbers: 2,
    operator: "multiplication"
  }

  setParameters = (newMaxResult, newOperator) => {
    this.setState({
      maxResult : newMaxResult,
      operator : newOperator
    })
  }

  render () {
    const { amountOfNumbers, operator, maxResult } = this.state;
    return (
        <div className="App">
          <Router>
            <Route path="/" exact render={props => <Login updateParameters={() => this.setParameters} />}></Route>
            <Route path="/peli" render={props => <Game amountOfNumbers={amountOfNumbers} operator={operator} maxResult={maxResult} />}></Route>
          </Router>
        </div>
    );
  }
}

export default App;
