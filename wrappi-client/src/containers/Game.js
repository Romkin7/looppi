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
            numbers: [],
            result: 0,
            inputValid: false,
            rightAnswers: 0,
            wrongAnswers: 0,
            tries: 2,
            success: false,
            wrong: false,
            gameOver: false
          }
        }
        getRandomNumber = (min, max) => {
          return Math.floor(Math.random() * (max - min +1) + min);
      }
      
      addition = (accumulator, currentValue) => accumulator + currentValue;
      createCalculation = (amountOfNumbers, operator, maxResult) => {
        if (this.state.numbers.length < amountOfNumbers) {
            this.setState({numbers: this.state.numbers.push(this.getRandomNumber(0,10))});
            this.createCalculation(amountOfNumbers, operator, maxResult);
        } else if (maxResult < this.state.numbers.reduce(this.addition)) {
            this.setState({numbers: this.state.numbers.pop()});
            this.createCalculation(amountOfNumbers, operator, maxResult);
        } else {
            this.setState({
              result: this.state.numbers.reduce(this.addition),
              numbers: this.state.numbers,
              success: false,
              wrong: false
            });
            return;
        }
      }
      
      componentDidMount() {
        // Kutsutaan funktiota ja syötetään siihen parametrit:
        // (arvottavien lukujen määrä, laskutoimitus ja maksimisumma)
        this.createCalculation(2, this.addition, 10);
      }
      
      answerHandler = (answer) => {
        if(this.state.result === answer) {
          this.setState({
            rightAnswers: this.state.rightAnswers + 1,
            success: true,
            wrong: false
          });
          //this.createCalculation(2, this.addition, 10);
        } else if (this.state.wrongAnswers < 1){
          this.setState({
            wrongAnswers: this.state.wrongAnswers + 1,
            success: false,
            wrong: true
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

    render() {
        return (
            <main className="calcContainer">
              <div className="boxes">
                <NumberBox number={this.state.numbers[0]} result={false} />
                <p className="operatorSpace">+</p>
                <NumberBox number={this.state.numbers[1]} result={false} />
                <p className="operatorSpace">=</p>
                <NumberBox
                  success={this.state.success}
                  wrong={this.state.wrong}
                  maxResult={this.state.maxResult}
                  result={this.state.result} 
                  rightResult={this.state.result}
                  submit={this.answerHandler}
                   />
              </div>
              <div className="displayResults">
                <div><button className="endButton">Lopeta</button></div>
                <div className="showResults">
                  <p>Suoritettuja laskuja:</p>
                  <p>Kulunut aika:</p>
                </div>
              </div>
              {this.state.gameOver && <GameOverBox rightAnswers={ this.state.rightAnswers } username={ this.state.currentUser.user.username }></GameOverBox>}
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