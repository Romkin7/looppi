import React, { Component } from "react";
import NumberBox from "../components/NumberBox";

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
            this.setState({result: this.state.numbers.reduce(this.addition)});
            return;
        }
      }
      
      componentDidMount() {
        // Kutsutaan funktiota ja syötetään siihen parametrit:
        // (arvottavien lukujen määrä, laskutoimitus ja maksimisumma)
        this.createCalculation(3, this.addition, 20);
      }
      
    render() {
        return (
            <h1>{ this.state.result }</h1>
        );
    }
}

export default Game;