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
    }
   render() {
        const  { result, number } = this.props;
        const { answer } = this.state.input;
        console.log(this.state.input.answer);
        if(result > 0) {
            return( 
                <div className="box">
                    <form onSubmit={this.submitHandler}>
                        <input name="answer" type="text" value={ answer } onChange={this.changeHandler} />
                        <button>Tarkista</button>
                    </form>
                </div>
            )
        } else {
            return(
                <div className="box">
                    <h2>{ number}</h2>
                </div>
            )
        
        }
    }
}


export default NumberBox;