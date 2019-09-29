import React from "react";
import "./Appnavbar.css";

const AppNavbar = ({titleText, maxResult, bgColor }) => {
    return (
        <header className={"title "+ bgColor}><h1>{titleText}{maxResult}</h1></header>
    );
};

export default AppNavbar;