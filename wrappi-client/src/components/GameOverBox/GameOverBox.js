import React from 'react';

const GameOverBox = (props) => {
    return (
        <div id="background">
            <div className="gameoverbox">
                <h5>Hienosti laskettu!</h5>
                <p>Teit XX laskua XX ajassa. Nopeutesi oli XX laskua minuutissa.</p>
                <p>Lähetä tuloksesi itsellesi tai opettajallesi:</p>
                <input type="text" value="email" placeholder="Kirjoita sähköpostiosoite"></input>            
                <button>Takaisin</button>
                <button>Lähetä</button>
            </div>
        </div>
    )
}
    


 }
}



export default GameOverBox;