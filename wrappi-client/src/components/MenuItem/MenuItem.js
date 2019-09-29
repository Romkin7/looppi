import React from 'react';
import { Link } from "react-router-dom";
import './MenuItem.css';

const MenuItem = ({text, click, bgColor }) => {
    return (
        <div className={'linkItem' + bgColor}>
            <Link to="/peli" onClick={click}>{text}</Link>
        </div>
    )
}

export default MenuItem;