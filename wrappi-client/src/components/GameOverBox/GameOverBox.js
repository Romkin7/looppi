import React from 'react';
import './GameOverBox.css';

const GameOverBox = (props) => {
    return (
        <div id="gameoverContainer">
            <div className="gameoverbox">
                <h4>Hienosti laskettu!</h4>
                <p>Teit XX laskua XX ajassa. Nopeutesi oli XX laskua minuutissa.</p>
                <p>Lähetä tuloksesi itsellesi tai opettajallesi:</p>
                <input type="text" value="email" placeholder="Kirjoita sähköpostiosoite"></input>            
                <button className="submit">Lähetä</button>
                <button className="endButton">Takaisin</button>

            </div>
        </div>
    )
}

export default GameOverBox;