import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { authenticateUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";

import Login from "./Login";
import Game from "./Game";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

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
        this.setState({
            maxResult: "",
            min: 0,
            max: 0,
            multiplier: 0,
            amountOfNumbers: 2,
            operator: "",
            bgColor: "blue"
        });
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
        : operator === "division" ? "Jakolaskut 0–10"
        : "Looppi - Laskuja lapsille";
        return (
            <div className="mainContainer">
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
                <Footer 
                    copyrightText="Copyright © 2019 Roman Tuomisto & Pauliina Veijalainen"
                    copyrightText2="All rights reserved.">
                </Footer>

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