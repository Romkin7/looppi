import React, { Component } from 'react';
import { connect } from "react-redux";
import MenuItem from '../components/MenuItem/MenuItem';
import './Login.css';
import './Appnavbar.css';

class Login extends Component {
    state = {
        userdata: {
            username: ''
        },
        showStartGameButton: false
    }

nameHandler = (event) => {
    this.setState({
        userdata: {
            [event.target.name] : event.target.value
        }
    });
}

submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth("login", this.state.userdata).then((res) => {
        this.setState({
            showStartGameButton: true
        });
    }).catch((error) => {
        return; 
    });
}; 

setGameParameters = (maxResult, min, max, multiplier, operator, bgColor, amountOfNumbers) => {
    this.props.updateParameters(maxResult, operator, bgColor, amountOfNumbers, min, max, multiplier);
};

render () {
    const { username, showStartGameButton } = this.state;
    return (
        <main className="boxes">
        {!showStartGameButton &&
        <form className="loginForm" onSubmit={this.submitHandler}>
            <input name="username" type="text" value={ username } onChange={this.nameHandler} placeholder="Kirjoita nimimerkkisi" ></input>
            <button className="submit">Luo nimimerkki</button>
        </form>}
        {showStartGameButton && 
        <div className="menu">
            <h2>Tervetuloa, { this.props.currentUser.user.user }!</h2>
            <p>Valitse laskutoimitus.</p>

            <button id="additionBtn" index="0" className="dropdownBtn pink">Yhteenlaskut</button>
                <ul className="dropdownUl0 folded" >
                    <MenuItem click={() => this.setGameParameters(10, 0, 10, false, "addition", "pink", 2)} text="Yhteenlaskut 0–10" bgColor=' pink'></MenuItem>
                    <MenuItem click={() => this.setGameParameters(20, 0, 20, false, "addition", "pink", 2)} text="Yhteenlaskut 0–20" bgColor=' pink'></MenuItem>
                    <MenuItem click={() => this.setGameParameters(100, 0, 100, false, "addition", "pink", 2)} text="Yhteenlaskut 0–100" bgColor=' pink'></MenuItem>
                </ul>
            <button id="substractionBtn" index="1" className="dropdownBtn blue">Vähennyslaskut</button>
            <ul className="dropdownUl1 folded">
                <MenuItem click={() => this.setGameParameters(0, 0, 10, false,  "substraction", "blue", 2)} text="Vähennyslaskut 0–10" bgColor=' blue'></MenuItem></ul>
            <button id="decrementBtn" index="1" className="dropdownBtn blue">Vähennyslaskut</button>

                <MenuItem click={() => this.setGameParameters(false, 0, 10, 5, "multiplication", "purple", 2)} text="Kertotaulu 5" bgColor=' purple'></MenuItem>
                <MenuItem click={() => this.setGameParameters(0, 0, 10, false, "division", "orange", 2)} text="Jakolaskut 0–10" bgColor=' orange'></MenuItem>
        </div>}
        </main>
    )
}
}
function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}
export default connect(mapStateToProps, { })(Login);