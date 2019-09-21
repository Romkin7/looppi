import React, { Component } from "react";
import NumberBox from "../components/NumberBox/NumberBox";
import './Game.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [],
            result: 0,
            wrongAnswers: 0,
            tries: 2
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
              numbers: this.state.numbers
            });
            return;
        }
      }
      
      componentDidMount() {
        // Kutsutaan funktiota ja syötetään siihen parametrit:
        // (arvottavien lukujen määrä, laskutoimitus ja maksimisumma)
        this.createCalculation(2, this.addition, 10);
      }
      
      getResult = (input) => {

      }

    render() {
        const { maxResult, operator } = this.props;
        const title = operator === "addition" 
        ? "Yhteenlaskut" 
        : operator === "substraction" 
        ? "Vähennyslaskut" 
        : operator === "multiplication"
        ? "Kertotaulut"
        : "Jakolaskut";

        return (
          <div className="calcContainer">
          <div className="title"><h1>{title} 0-{maxResult}</h1></div>
            <div className="boxes">
              <NumberBox number={this.state.numbers[0]} result={false} />
              <p className="operatorSpace">+</p>
              <NumberBox number={this.state.numbers[1]} result={false} />
              <p className="operatorSpace">=</p>
              <NumberBox result={true} rightResult={this.state.result} />
            </div>
            <div className="displayResults">
              <p>Suoritettuja laskuja:</p>
              <p>Kulunut aika:</p>
            </div>
          </div>
          
        );
    }
}

export default Game;