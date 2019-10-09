import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Dropdown from "../components/Dropdown/Dropdown";
import "./Appnavbar.css";

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownOpened: false
        };
    }

    changeGameMode = () => {
        this.props.history.push("/");
    }
    
    handleLogOut = () => {
        this.props.logout();
    };

    componentWillUnmount() {
        this.handleDropDownToggling();
    }

    handleDropDownToggling = () => {
        this.setState({
            dropDownOpened: this.state.dropDownOpened ? false : true 
        })
    };

    render() {
        const {titleText, maxResult, bgColor, logout, currentUser} = this.props;
        if(window.location.pathname !== "/") { 
            return (
                <>
                <header className={"title "+ bgColor}>
                    <aside className="sideBlock">
                        <button className="back" onClick={this.changeGameMode}><i class="fas fa-arrow-circle-left fa-3x"></i></button>
                    </aside>
                    <aside className="middleBlock">
                        <h1>{titleText}{maxResult === 2 ? "Lukujen puolittaminen" : maxResult}</h1>
                    </aside>   
                    <aside className="sideBlock">
                        {currentUser.isAuthenticated &&
                            <button className="back" onClick={this.handleDropDownToggling}><i class="fas fa-user-alt fa-3x"></i></button>}
                        
                        <Dropdown username={currentUser.user.user} bgColor={bgColor} logout={this.handleLogOut} open={this.state.dropDownOpened ? this.state.dropDownOpened : false} />
                        
                    </aside> 
                </header>
                </>
            );
        } else {
            return (
                <>
                <header className="title blue">
                    <aside className="sideBlock">
                    
                    </aside>
                    <aside className="middleBlock">
                        <h1>Looppi - Laskuja lapsille</h1>
                    </aside>   
                    <aside className="sideBlock">
                        
                        {currentUser.isAuthenticated &&
                            <button className="back" onClick={this.handleDropDownToggling}><i class="fas fa-user-alt fa-3x"></i></button>}
                    
                    </aside> 
                </header>
                <Dropdown username={currentUser.user.user} bgColor={"blue"} logout={this.handleLogOut} open={this.state.dropDownOpened ? this.state.dropDownOpened : false} />
                </>
            );
        }
    }
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}

export default withRouter(connect(mapStateToProps, {})(AppNavbar));