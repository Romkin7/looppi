import React from "react";
import { Link } from "react-router-dom";
import "./Appnavbar.css";

const AppNavbar = ({titleText, maxResult, bgColor }) => {
    if(window.location.pathname !== "/") { 
        return (
            <header className={"title "+ bgColor}>
                <aside className="sideBlock">
                    <Link to="/"><button className="back"><i class="fas fa-arrow-left"></i></button></Link>
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
            <header className={"title "+ "blue"}>
                <aside className="sideBlock">
                    
                </aside>
                <aside className="middleBlock">
                    <h1>Looppi - Laskuja lapsille</h1>
                </aside>   
                <aside className="sideBlock">
                <Link to="/results"><button className="back">Tulokset</button></Link>
                </aside> 
            </header>
        );
    }
};

export default AppNavbar;