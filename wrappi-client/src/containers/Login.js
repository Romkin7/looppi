
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
        showStartGameButton: false,
        dropdown: {
            ul: '',
            open: false,
            id: ''
        }
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

openDropdown = (event) => {
    let id = event.target.getAttribute("index");
    let ul = "dropdownUl"+id;
    this.setState({
        dropdown: {
            ul: ul,
            open: id === this.state.dropdown.id ? false : true,
            id: id === this.state.dropdown.id ? "" : id
        }
    })
}

render () {
    const { username, showStartGameButton } = this.state;
    const { currentUser } = this.props;
    return (
        <main className="boxes">
        {!showStartGameButton && !currentUser &&
        <form className="loginForm" onSubmit={this.submitHandler}>
            <input name="username" type="text" value={ username } onChange={this.nameHandler} placeholder="Kirjoita nimimerkkisi" ></input>
            <button className="submit">Luo nimimerkki</button>
        </form>}
        { currentUser &&
        <div className="menu">
            <h2>Tervetuloa, { this.props.currentUser.user.user }!</h2>
            <p>Valitse laskutoimitus.</p>

            <button id="additionBtn" index="0" className="dropdownBtn pink" onClick={this.openDropdown}>Yhteenlaskut</button>
            <ul className={`dropdown dropdownUl0 ${ this.state.dropdown.ul === "dropdownUl0" && this.state.dropdown.open ? "unfolded" : "folded"}`} >
              <MenuItem click={() => this.setGameParameters(10, 0, 10, false, "addition", "pink", 2)} text="Lukuväli 0–10" bgColor=' pink'></MenuItem>
              <MenuItem click={() => this.setGameParameters(20, 0, 20, false, "addition", "pink", 2)} text="Lukuväli 0–20" bgColor=' pink'></MenuItem>
              <MenuItem click={() => this.setGameParameters(100, 0, 100, false, "addition", "pink", 2)} text="Lukuväli 0–100" bgColor=' pink'></MenuItem>
            </ul>
            <button id="substractionBtn" index="1" className="dropdownBtn blue" onClick={this.openDropdown}>Vähennyslaskut</button>
            <ul className={`dropdown dropdownUl1 ${ this.state.dropdown.ul === "dropdownUl1" && this.state.dropdown.open ? "unfolded" : "folded"}`} >
                <MenuItem click={() => this.setGameParameters(0, 0, 10, false,  "substraction", "blue", 2)} text="Vähennyslaskut 0–10" bgColor=' blue'></MenuItem>
             </ul>
            <button id="multiplicationBtn" index="2" className="dropdownBtn purple" onClick={this.openDropdown}>Kertolaskut</button>
             <ul className={`dropdown dropdownUl2 ${ this.state.dropdown.ul === "dropdownUl2" && this.state.dropdown.open ? "unfolded" : "folded"}`} >
                <MenuItem click={() => this.setGameParameters(false, 0, 10, 5, "multiplication", "purple", 2)} text="Kertotaulu 5" bgColor=' purple'></MenuItem>
             </ul>
             <button id="divisionBtn" index="3" className="dropdownBtn orange" onClick={this.openDropdown}>Jakolaskut</button>
             <ul className={`dropdown dropdownUl3 ${ this.state.dropdown.ul === "dropdownUl3" && this.state.dropdown.open ? "unfolded" : "folded"}`} > 
                <MenuItem click={() => this.setGameParameters(0, 0, 10, false, "division", "orange", 2)} text="Jakolaskut 0–10" bgColor=' orange'></MenuItem>
             </ul>
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