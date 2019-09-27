import React from 'react';
import { Link } from "react-router-dom";
import './MenuItem.css';

const MenuItem = ({text, click }) => {
    return (
        <li>
            <Link to="/peli" onClick={click}>{text}</Link>
        </li>
    )
}

export default MenuItem;