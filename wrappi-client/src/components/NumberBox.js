import React from 'react';
import './NumberBox.css';


const NumberBox = (props) => {
    if(props.result === true) {
        return(
            <div className="box">
                <form>
                    <input type="text" defaultValue={props.rightResult} /><h1>{props.result}</h1>
                    <button type="submit" defaultValue="submit">Tarkista</button>
                </form>
            </div>
        )
    } else {
        return(
            <div className="box">
                <h2>{props.number}</h2>
            </div>
        )
    
    }
}


export default NumberBox;