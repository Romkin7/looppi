import React from 'react';
import { logout } from "../../store/actions/auth";

import './GameOverBox.css';

const GameOverBox = ({ close, rightAnswers, elapcedTime }) => {
    return (
        <div id="gameoverContainer">
            <div className="gameoverbox">
                <h4>Hienosti laskettu!</h4>
                <p>Teit { rightAnswers } laskua { elapcedTime } ajassa.</p>
                <p>Lähetä tuloksesi itsellesi tai opettajallesi:</p>
                <input className="emailInput" type="text" placeholder="Kirjoita sähköpostiosoite"></input>            
                <button className="sendResults submit">Lähetä</button>
                <br />
                <button className="return endButton" onClick={ close }>Sulje</button>
            </div>
        </div>
    )
}

export default GameOverBox;