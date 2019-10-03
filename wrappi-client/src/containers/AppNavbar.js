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
                        <button className="back" onClick={this.changeGameMode}><i className="fas fa-arrow-left"></i></button>
                    </aside>
                    <aside className="middleBlock">
                        <h1>{titleText}{maxResult}</h1>
                    </aside>   
                    <aside className="sideBlock">
                        <Link to="/results"><button className="back">Tulokset</button></Link>
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
                        <Link to="/results"><button className="back">Tulokset</button></Link>
                        {currentUser.isAuthenticated &&
                        <button className="red" onClick={ logout }><i className="fas fa-door-open"></i></button>}
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