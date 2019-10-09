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
            userdata: {
                username: ''
            }
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
    const { username } = this.state;
    const { currentUser } = this.props;
    return (
        <main className="boxes">
        {!currentUser.isAuthenticated &&
        <form className="loginForm" onSubmit={this.submitHandler}>
            <input name="username" type="text" autoFocus required value={ username } onChange={this.nameHandler} placeholder="Kirjoita nimimerkkisi" ></input>
            <button className="submit">Luo nimimerkki</button>
        </form>}
        { currentUser.isAuthenticated &&
        <div className="menu">
            <h2>Tervetuloa, { this.props.currentUser.user.user }!</h2>
            <p>Valitse laskutoimitus.</p>

            <button id="additionBtn" index="0" className="dropdownBtn pink" onClick={this.openDropdown}>Yhteenlaskut</button>
            <ul className={`dropdown dropdownUl0 ${ this.state.dropdown.ul === "dropdownUl0" && this.state.dropdown.open ? "unfolded" : "folded"}`} >
              <MenuItem click={() => this.setGameParameters(10, 0, 10, false, "addition", "pink", 2)} text="Lukuväli 0–10" bgColor=' lightpink'></MenuItem>
              <MenuItem click={() => this.setGameParameters(20, 0, 20, false, "addition", "pink", 2)} text="Lukuväli 0–20" bgColor=' lightpink'></MenuItem>
              <MenuItem click={() => this.setGameParameters(100, 0, 100, false, "addition", "pink", 2)} text="Lukuväli 0–100" bgColor=' lightpink'></MenuItem>
            </ul>
            <button id="substractionBtn" index="1" className="dropdownBtn blue" onClick={this.openDropdown}>Vähennyslaskut</button>
            <ul className={`dropdown dropdownUl1 ${ this.state.dropdown.ul === "dropdownUl1" && this.state.dropdown.open ? "unfolded" : "folded"}`} >
                <MenuItem click={() => this.setGameParameters(0, 0, 10, false,  "substraction", "blue", 2)} text="Lukuväli 0–10" bgColor=' lightblue'></MenuItem>
                <MenuItem click={() => this.setGameParameters(0, 0, 20, false,  "substraction", "blue", 2)} text="Lukuväli 0–20" bgColor=' lightblue'></MenuItem>
                <MenuItem click={() => this.setGameParameters(0, 0, 100, false,  "substraction", "blue", 2)} text="Lukuväli 0–100" bgColor=' lightblue'></MenuItem>
             </ul>
            <button id="multiplicationBtn" index="2" className="dropdownBtn purple" onClick={this.openDropdown}>Kertotaulut</button>
             <ul className={`dropdown dropdownUl2 ${ this.state.dropdown.ul === "dropdownUl2" && this.state.dropdown.open ? "unfolded" : "folded"}`} >
                <MenuItem click={() => this.setGameParameters(false, 0, 10, 1, "multiplication", "purple", 2)} text="Luvun 1 kertotaulu" bgColor=' lightpurple'></MenuItem>
                <MenuItem click={() => this.setGameParameters(false, 0, 10, 2, "multiplication", "purple", 2)} text="Luvun 2 kertotaulu" bgColor=' lightpurple'></MenuItem>
                <MenuItem click={() => this.setGameParameters(false, 0, 10, 3, "multiplication", "purple", 2)} text="Luvun 3 kertotaulu" bgColor=' lightpurple'></MenuItem>
                <MenuItem click={() => this.setGameParameters(false, 0, 10, 4, "multiplication", "purple", 2)} text="Luvun 4 kertotaulu" bgColor=' lightpurple'></MenuItem>
                <MenuItem click={() => this.setGameParameters(false, 0, 10, 5, "multiplication", "purple", 2)} text="Luvun 5 kertotaulu" bgColor=' lightpurple'></MenuItem>
                <MenuItem click={() => this.setGameParameters(false, 0, 10, 10, "multiplication", "purple", 2)} text="Luvun 10 kertotaulu" bgColor=' lightpurple'></MenuItem>
             </ul>
             <button id="divisionBtn" index="3" className="dropdownBtn orange" onClick={this.openDropdown}>Jakolaskut</button>
             <ul className={`dropdown dropdownUl3 ${ this.state.dropdown.ul === "dropdownUl3" && this.state.dropdown.open ? "unfolded" : "folded"}`} > 
                <MenuItem click={() => this.setGameParameters(0, 0, 100, 2, "division", "orange", 2)} text="Lukujen puolittaminen" bgColor=' lightorange'></MenuItem>
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