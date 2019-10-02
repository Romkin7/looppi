import React from 'react';
import './GameOverBox.css';

const GameOverBox = (props) => {
    return (
        <div id="gameoverContainer">
            <div className="gameoverbox">
                <h4>Hienosti laskettu!</h4>
                <p>Teit XX laskua XX ajassa. Nopeutesi oli XX laskua minuutissa.</p>
                <p>Lähetä tuloksesi itsellesi tai opettajallesi:</p>
                <input className="emailInput" type="text" placeholder="Kirjoita sähköpostiosoite"></input>            
                <button className="sendResults submit">Lähetä</button>
                <button className="return endButton">Takaisin</button>
                <button onClick={props.close}>Sulje</button>
            </div>
        </div>
    )
}

export default GameOverBox;