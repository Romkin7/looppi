import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { authenticateUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";

import Login from "./Login";
import Game from "./Game";
import AppNavbar from "./AppNavbar";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxResult: "",
            min: 0,
            max: 0,
            multiplier: 0,
            amountOfNumbers: 2,
            operator: "",
            bgColor: "blue"
        }
    }

    logoutFromGame = () => {
        this.props.logout();
        this.props.history.push("/");
    }

    setParameters = (newMaxResult, newOperator, newBgColor, newAmountOfNumbers, newMin, newMax, newMultiplier) => {
        this.setState({
          maxResult : newMaxResult,
          operator : newOperator,
          bgColor: newBgColor,
          amountOfNumbers: newAmountOfNumbers,
          min: newMin,
          max: newMax,
          multiplier: newMultiplier
        });
    };
    
    render () {
        const { authenticateUser, removeError, errors, currentUser } = this.props;
        const { amountOfNumbers, operator, maxResult, bgColor, min, max, multiplier } = this.state;
        const title = operator === "addition" 
        ? "Yhteenlaskut 0–" 
        : operator === "substraction" 
        ? "Vähennyslaskut 0–" 
        : operator === "multiplication"
        ? "Kertotaulut "
        : operator === "division" ? "Jakolaskut - "
        : "Looppi - Laskuja lapsille";
        return (
            <div className="mainContainer">
                <div>
                    <AppNavbar titleText={title} logout={this.logoutFromGame} maxResult={ multiplier ? multiplier : max } bgColor={ bgColor } currentUser={currentUser}></AppNavbar>
                    <Switch>
                        <Route path="/" exact render={props => {
                        return (<Login removeError={ removeError } errors={ errors } 
                            onAuth={ authenticateUser } updateParameters={this.setParameters} currentUser={currentUser} />)}}></Route>
                        <Route path="/peli" render={
                            props => <Game amountOfNumbers={amountOfNumbers} 
                                operator={operator} maxResult={maxResult} 
                                min={min} max={max} multiplier={multiplier} />}></Route>
                    </Switch>
                </div>
                <div className="push"></div>
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

export default withRouter(connect(mapStateToProps, { authenticateUser, removeError, logout })(Main));