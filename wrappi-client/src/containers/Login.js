import React, { Component } from 'react';
import { connect } from "react-redux";
import MenuItem from '../components/MenuItem/MenuItem';

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

setGameParameters = (maxResult, operator, bgColor, amountOfNumbers) => {
    this.props.updateParameters(maxResult, operator, bgColor, amountOfNumbers);
};

render () {
    const { username, showStartGameButton } = this.state;
    return (
        <div>
        {!showStartGameButton &&
        <form onSubmit={this.submitHandler}>
            <input name="username" type="text" value={ username } onChange={this.nameHandler} placeholder="Kirjoita nimimerkkisi" ></input>
            <button>Luo nimimerkki</button>
        </form>}
        {showStartGameButton && 
        <div><p>Tervetuloa, { this.props.currentUser.user.username }!</p>
            <ul>
                <MenuItem click={() => this.setGameParameters(50, "addition", "pink", 2)} text="Yhteenlaskut 0-10"></MenuItem>
                <MenuItem click={() => this.setGameParameters(50, "substraction", "blue", 2)} text="Vähennyslaskut 0-10"></MenuItem>
                <MenuItem click={() => this.setGameParameters(5, "multiplication", "purple", 2)} text="Kertotoulu 5"></MenuItem>
                <MenuItem click={() => this.setGameParameters(50, "division", "orange", 2)} text="Jakolaskut 0-10"></MenuItem>
            </ul>
        </div>}
        </div>
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