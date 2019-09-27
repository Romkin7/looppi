import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { authenticateUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";

import Login from "./Login";
import Game from "./Game";
import AppNavbar from "./AppNavbar";

class Main extends Component {
    state = {
        maxResult: "",
        amountOfNumbers: 2,
        operator: "",
        bgColor: "blue"
    }
    
    setParameters = (newMaxResult, newOperator, newBgColor, newAmountOfNumbers) => {
        console.log(newAmountOfNumbers, newMaxResult);
        this.setState({
          maxResult : newMaxResult,
          operator : newOperator,
          bgColor: newBgColor,
          amountOfNumbers: newAmountOfNumbers
        });
    };
    
    render () {
        const { authenticateUser, removeError, errors, currentUser } = this.props;
        const { amountOfNumbers, operator, maxResult, bgColor } = this.state;
        const title = operator === "addition" 
        ? "Yhteenlaskut 0–" 
        : operator === "substraction" 
        ? "Vähennyslaskut  0–" 
        : operator === "multiplication"
        ? "Kertotaulut"
        : operator === "division" ? "Jakolaskut  0–"
        : "Looppi - Tervetuloa";
        return (
            <div>
                <AppNavbar titleText={title} maxResult={ maxResult } bgColor={ bgColor }></AppNavbar>
                <Switch>
                    <Route path="/" exact render={props => {
                    return (<Login removeError={ removeError } errors={ errors } onAuth={ authenticateUser } updateParameters={this.setParameters} />)}}></Route>
                    <Route path="/peli" render={props => <Game amountOfNumbers={amountOfNumbers} operator={operator} maxResult={maxResult} />}></Route>
                </Switch>
            </div>
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