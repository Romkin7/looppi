import React from 'react';
import { Link } from "react-router-dom";
import './MenuItem.css';

const MenuItem = () => {
    return (
        <li>
            <Link to="/peli">Hei vaan!</Link>
        </li>
    )
}

export default MenuItem;