import React, { Component } from 'react';
import './NumberBox.css';


class NumberBox extends Component{
   constructor(props) {
       super(props);
       this.state = {
           input: {
                answer: ""
           }
       };
   }
   changeHandler = (event) => {
       this.setState({
            input: { 
                [event.target.name] : Number(event.target.value)
            }    
        });
    } 

    submitHandler = (event) => {
        event.preventDefault();
        this.props.submit(this.state.input.answer);
        setTimeout(this.emptyInputHandler, 1900);
    }

    emptyInputHandler = () => {
        this.setState({
            input: {
                answer: ""
            }
        });
    }
    
   render() {
        const  { maxResult, result, number, success, wrong } = this.props;
        const { answer } = this.state.input;
        if(result > 0) {
            return( 
                <div className={ "box " + (success ? "success" : wrong ? "wrong" : "")}>
                    <form className="boxForm" onSubmit={this.submitHandler}>
                        <input className="number" name="answer" type="number" step="1" max={maxResult === 0 ? "100" : String(maxResult)} min="0" value={ answer } onChange={this.changeHandler} />
                        <button className="submit">Tarkista</button>
                    </form>
                </div>
            )
        } else {
            return(
                <div className="box">
                    <h2>{ number }</h2>
                </div>
            )
        
        }
    }
}


export default NumberBox;