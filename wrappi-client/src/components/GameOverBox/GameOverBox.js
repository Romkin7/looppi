<<<<<<< HEAD
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

=======
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

>>>>>>> bd531dc2776c35399dd62e17b6e2347f5d5a8bda
export default GameOverBox;