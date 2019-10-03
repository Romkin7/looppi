import React from 'react';

import './GameOverBox.css';

const GameOverBox = ({ close, rightAnswers, elapcedTime }) => {
    return (
        <div id="gameoverContainer">
            <div className="gameoverbox">
            <button className="closeGameover"><i class="far fa-times-circle fa-2x"></i></button>
                <h4>Hienosti laskettu!</h4>
                <p>Teit { rightAnswers } laskua { elapcedTime }.</p>
                <p>Lähetä tuloksesi itsellesi tai opettajallesi:</p>
                <input className="emailInput" type="text" placeholder="Kirjoita sähköpostiosoite"></input>            
                <button className="sendResults submit">Lähetä</button>
                <br />
                <button className="return endButton" onClick={ close }>Palaa valikkoon</button>
            </div>
        </div>
    )
}

export default GameOverBox;