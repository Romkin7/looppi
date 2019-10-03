import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "./Appnavbar.css";

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    changeGameMode = () => {
        this.props.history.push("/");
    }    

    render() {
        const {titleText, maxResult, bgColor, logout, currentUser} = this.props;
        if(window.location.pathname !== "/") { 
            return (
                <header className={"title "+ bgColor}>
                    <aside className="sideBlock">
                        <button className="back" onClick={this.changeGameMode}><i class="fas fa-arrow-circle-left fa-3x"></i></button>
                    </aside>
                    <aside className="middleBlock">
                        <h1>{titleText}{maxResult === 2 ? "Lukujen puolittaminen" : maxResult}</h1>
                    </aside>   
                    <aside className="sideBlock">
                        {currentUser.isAuthenticated &&
                            <button className="back" onClick={ logout }><i class="fas fa-user-alt fa-3x"></i></button>}
                    </aside> 
                </header>
            );
        } else {
            return (
                <header className="title blue">
                    <aside className="sideBlock">
                    
                    </aside>
                    <aside className="middleBlock">
                        <h1>Looppi - Laskuja lapsille</h1>
                    </aside>   
                    <aside className="sideBlock">
                        
                        {currentUser.isAuthenticated &&
                        <button className="back" onClick={ logout }><i class="fas fa-user-alt fa-3x"></i></button>}
                    </aside> 
                </header>
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