import React, { Component } from 'react';
import MenuItem from '../components/MenuItem/MenuItem';

class Login extends Component {
    state = {
        username: '',
        showStartGameButton: false
    }

nameHandler = (event) => {
    this.setState({
        [event.target.name] : event.target.value
    });
}

submitHandler = (event) => {
    event.preventDefault();
    this.setState({
        showStartGameButton: true
    });
    console.log("username is: ", this.state.username);
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
        <div><p>Tervetuloa, { username }!</p>
            <ul>
                <MenuItem />
            </ul>
        </div>}
        </div>
    )
}
}

export default Login;