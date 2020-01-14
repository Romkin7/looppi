import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <footer> 
            <div className="push"></div>
                <h6>{props.copyrightText}</h6>
                <h6>{props.copyrightText2}</h6>
        </footer>
    )
}

export default Footer;