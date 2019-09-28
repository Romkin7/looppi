import React, { Component } from "react";
import NumberBox from "../components/NumberBox/NumberBox";
import './Game.css';
import { connect } from "react-redux";

import GameOverBox from "../components/GameOverBox/GameOverBox";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // time: 0,
            inputValid: false,
            rightAnswers: 0,
            wrongAnswers: 0,
            tries: 2,
            gameOver: false
          }
        }
        getRandomNumber = (min, max) => {
          return Math.floor(Math.random() * (max - min +1) + min);
      }
      
      addition = (accumulator, currentValue) => accumulator + currentValue;
      substraction = (accumulator, currentValue) => accumulator - currentValue;
      multiplication = (accumulator, currentValue) => accumulator * currentValue;
      division = (accumulator, currentValue) => accumulator / currentValue;
      numbers = [];
      result = 0;
      success = false;
      wrong = false;
      currentOperator = false;
      /** CreateCalculation function that creates new math assignment */
      createCalculation = (amountOfNumbers, operator, maxResult, min, max, multiplier) => {
        if(multiplier && this.numbers.length < 1) {
          this.numbers.push(multiplier);
          this.createCalculation(amountOfNumbers, operator, maxResult, min, max, multiplier);
        } else if (this.numbers.length < amountOfNumbers) {
          this.numbers.push(this.getRandomNumber(min,max));
          this.createCalculation(amountOfNumbers, operator, maxResult, min, max, multiplier);
        } else if(maxResult && maxResult === 0 && this.numbers.reduce(operator) < maxResult) {
          this.numbers.sort((function(a, b){return b-a}));
        } else if(maxResult && maxResult > 0 && maxResult < this.numbers.reduce(this.addition)) {
          this.numbers.pop();
          this.createCalculation(amountOfNumbers, operator, maxResult, min, max, multiplier);
        } else if(this.numbers.length === amountOfNumbers) {
          this.result = this.numbers.reduce(operator);
          this.numbers = this.numbers;
          this.success = false;
          this.wrong = false;
          this.setState({
            tries: 2
          });
          return;
        } else {
          return;
        }
      }

      startCalculation() {
        // Kutsutaan funktiota ja syötetään siihen parametrit:
        // (arvottavien lukujen määrä, laskutoimitus ja maksimisumma)
        this.currentOperator = this.currentOperator || this.props.operator === "addition" 
          ? this.addition 
          : this.props.operator === "substraction" 
          ? this.substraction 
          : this.props.operator === "multiplication"
          ? this.multiplication
          : this.substraction; 
        this.createCalculation(2, this.currentOperator, this.props.maxResult, this.props.min, this.props.max, this.props.multiplier);
      }
      
      componentDidMount() {
        this.startCalculation();
      }
      
      answerHandler = (answer) => {
        if(this.result === answer) {
          this.success = true;
          this.wrong = false;
          this.setState({
            rightAnswers: this.state.rightAnswers + 1
          }, () => {
            setTimeout(this.startCalculation, 2000);
          });
        } else if (this.state.wrongAnswers < 1){
          this.success = false;
          this.wrong = true;
          this.setState({
            wrongAnswers: this.state.wrongAnswers + 1
          });
        } else {
          this.setState({
            wrongAnswers: 0,
            success: false,
            wrong: true
          });
          this.createCalculation(2, this.addition, 10);
        }
    }

    stopGameHandler = () => {
      this.setState({
        gameOver: true
      });
    }
    
    render() {
        const operatorDisplay =  this.props.operator === "addition" 
        ? "+" 
        : this.props.operator === "substraction" 
        ? "-"
        : this.props.operator === "multiplication"
        ? "*"
        : "/"; 
        return (
            <main className="calcContainer">
              <div className="boxes">
                <NumberBox number={this.numbers[0]} result={false} />
                <p className="operatorSpace">{operatorDisplay}</p>
                <NumberBox number={this.numbers[1]} result={false} />
                <p className="operatorSpace">=</p>
                <NumberBox
                  success={this.success}
                  wrong={this.wrong}
                  maxResult={this.maxResult}
                  result={this.result} 
                  rightResult={this.result}
                  submit={this.answerHandler}
                   />
              </div>
              <div className="displayResults">
                <div><button onClick={this.stopGameHandler} className="endButton">Lopeta</button></div>
                <div className="showResults">
                  Suoritettuja laskuja: {this.state.rightAnswers}
                  Kulunut aika:
                </div>
              </div>
              {this.state.gameOver && <GameOverBox rightAnswers={ this.state.rightAnswers } username={ this.state.currentUser.user }></GameOverBox>}
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

export default connect(mapStateToProps, {})(Game);