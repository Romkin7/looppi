import React from 'react';
import { Link } from "react-router-dom";
import './MenuItem.css';

const MenuItem = ({text, click, bgColor }) => {
    return (
        <Link to="/peli">
            <div onClick={click} className={'linkItem' + bgColor}>
                {text}
            </div>
        </Link>
    );
}

export default MenuItem;