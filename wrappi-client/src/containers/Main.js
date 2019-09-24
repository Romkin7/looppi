import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { authenticateUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";

import Login from "./Login";
import Game from "./Game";

class Main extends Component {
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
        const { authenticateUser, removeError, errors, currentUser } = this.props;
        const { amountOfNumbers, operator, maxResult } = this.state;
        return (
            <main>
                <Switch>
                    <Route path="/" exact render={props => {
                    return (<Login removeError={ removeError } errors={ errors } onAuth={ authenticateUser } updateParameters={() => this.setParameters} />)}}></Route>
                    <Route path="/peli" render={props => <Game amountOfNumbers={amountOfNumbers} operator={operator} maxResult={maxResult} />}></Route>
                </Switch>
            </main>
        )
    }    
        
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
};

export default withRouter(connect(mapStateToProps, { authenticateUser, removeError })(Main));