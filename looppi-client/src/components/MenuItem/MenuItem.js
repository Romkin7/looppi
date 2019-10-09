import React from 'react';
import { Link } from "react-router-dom";
import './MenuItem.css';

const MenuItem = ({text, click, bgColor }) => {
    return (
        <Link to="/peli">
            <li onClick={click} className={'linkItem' + bgColor}>
                {text}
            </li>
        </Link>
    );
}

export default MenuItem;