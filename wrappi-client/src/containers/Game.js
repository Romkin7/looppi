import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
import NumberBox from "../components/NumberBox/NumberBox";
import './Game.css';
import { connect } from "react-redux";

import GameOverBox from "../components/GameOverBox/GameOverBox";
let result = 0;
let success = false;
let wrong = false;
let currentOperator = false;
let operatorDisplay = "";
let min = 0;
let max = 0;
let multiplier = false;
let maxResult = "";
let numbers = [];

const addition = (accumulator, currentValue) => accumulator + currentValue;
const substraction = (accumulator, currentValue) => accumulator - currentValue;
const multiplication = (accumulator, currentValue) => accumulator * currentValue;
const division = (accumulator, currentValue) => accumulator / currentValue;

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // time: 0,
            inputValid: false,
            rightAnswers: 0,
            wrongAnswers: 0,
            tries: 2,
            gameOver: false,
            startTime: Date.now(),
            time: 0
        }
    }
    getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min +1) + min);
    }

    getRandomEvenNumber = (min, max) => {
      return Math.floor( Math.random() * max / 2 ) * 2;
    };

      pace = null;

      /** CreateCalculation function that creates new math assignment */
      createCalculation = (amountOfNumbers, operator, maxResult, min, max, multiplier) => {
        if(multiplier && numbers.length < 1) {
          numbers.push(multiplier);
          this.createCalculation(amountOfNumbers, operator, maxResult, min, max, multiplier);
        } else if(operator === division && numbers.length < amountOfNumbers) {
          numbers.unshift(this.getRandomEvenNumber(min,max));
          this.createCalculation(amountOfNumbers, operator, maxResult, min, max, multiplier);
        } else if (numbers.length < amountOfNumbers) {
          numbers.push(this.getRandomNumber(min,max));
          this.createCalculation(amountOfNumbers, operator, maxResult, min, max, multiplier);
        } else if(operator === substraction && maxResult === 0 && numbers.reduce(operator) < maxResult) {
          numbers.sort((function(a, b){return b-a}));
          this.createCalculation(amountOfNumbers, operator, maxResult, min, max, multiplier);
        } else if(operator !== division && maxResult && maxResult > 0 && maxResult < numbers.reduce(operator)) {
          numbers.pop();
          this.createCalculation(amountOfNumbers, operator, maxResult, min, max, multiplier);
        } else if(numbers.length === amountOfNumbers) {
          result = numbers.reduce(operator);
          success = false;
          wrong = false;
          this.setState({
            tries: 2
          });
          return;
        } else {
          return;
        }
      }

      startCalculation = () => {
        // Kutsutaan funktiota ja syötetään siihen parametrit:
        // (arvottavien lukujen määrä, laskutoimitus ja maksimisumma)
        numbers = [];
        currentOperator =  currentOperator ? currentOperator : this.props.operator === "addition" 
          ? addition 
          : this.props.operator === "substraction" 
          ? substraction 
          : this.props.operator === "multiplication"
          ? multiplication
          : division; 
        this.createCalculation(2, currentOperator, maxResult, min, max, multiplier);
      }
      
      componentDidMount() {
        maxResult = this.props.maxResult;
        min = this.props.min;
        max = this.props.max;
        multiplier = this.props.multiplier;
        currentOperator = false;
        operatorDisplay = "";
        this.startCalculation();
        this.pace = setInterval(() => {
          let newTime =  Date.now() - this.state.startTime;
          this.setState({
            time: newTime
          });
          // alternatively just show wall clock time:
          //output(new Date().toUTCString());
        }, 1000); 
      }
      
      answerHandler = (answer) => {
        if(result === answer) {
          success = true;
          wrong = false;
          this.setState({
            rightAnswers: this.state.rightAnswers + 1
          }, () => {
            setTimeout(this.startCalculation, 2000);
          });
        } else if (this.state.wrongAnswers < 1){
          success = false;
          wrong = true;
          this.setState({
            wrongAnswers: this.state.wrongAnswers + 1
          });
        } else {
          success = false;
          wrong = true;
          this.setState({
            wrongAnswers: 0
          });
          this.startCalculation();
        }
    }

    stopGameHandler = () => {
      clearInterval(this.pace);
      this.setState({
        gameOver: true
      });
    }

    componentWillUnmount() {
      clearInterval(this.pace);
    }
    
    closeGameOver = () => {
      this.setState({
        gameOver: false
      }, () => {
        this.props.history.push("/");
      });
    }
    
    render() {
        const { currentUser } = this.props;

        operatorDisplay = operatorDisplay ? operatorDisplay : this.props.operator === "addition" 
        ? "+" 
        : this.props.operator === "substraction" 
        ? "-"
        : this.props.operator === "multiplication"
        ? "*"
        : ":"; 
        return (
            <main className="calcContainer">
              <div className="boxes">
                <NumberBox number={numbers[0]} result={false} />
                <p className="operatorSpace">{operatorDisplay}</p>
                <NumberBox number={numbers[1]} result={false} />
                <p className="operatorSpace">=</p>
                <NumberBox
                  success={success}
                  wrong={wrong}
                  maxResult={maxResult}
                  result={result} 
                  rightResult={result}
                  submit={this.answerHandler}
                  operator={currentOperator}
                   />
              </div>
              <div className="displayResults">
                <div><button onClick={ this.stopGameHandler } className="endButton">Lopeta</button></div>
                <div className="showResults">
                  <h5>Suoritettuja laskuja: { this.state.rightAnswers }</h5>
                  <h5>Kulunut aika: { moment(this.state.time).format("mm:ss") }</h5>
                </div>
              </div>
              {this.state.gameOver && <GameOverBox close={this.closeGameOver} elapcedTime={ `${moment(this.state.time).format("mm")} minuutissa ${moment(this.state.time).format("ss")} sekunnissa` } rightAnswers={ this.state.rightAnswers } username={ currentUser.user }></GameOverBox>}
            </main> 
        );
    }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
}

export default withRouter(connect(mapStateToProps, {})(Game));