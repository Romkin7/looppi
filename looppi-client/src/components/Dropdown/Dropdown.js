import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({logout, username, open, bgColor}) => {
    return (
        <ul className={`navDropDownMenu ${ open ? " unfolded" : " folded"} ${bgColor}`}>
            <li><h5>Hei, {username}</h5></li>
            <Link to="/results"><li>Tulokset</li></Link>
            <button className="back"><li onClick={ logout }><i class="fas fa-sign-out-alt fa-3x"></i></li></button> 
        </ul>
    );
};

export default Dropdown;