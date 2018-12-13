import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    constructor(props){
        super(props)
    }
    
    onSubmit(e){
        //grab the guess and send it off to parent
        e.preventDefault();
        const guess = this.textInput.value;
        this.textInput.value = '';
        this.props.handleGuessSubmit(guess);
        //e.target.userGuess.value - without refs. both are uncontrolled. with controlled, you'd have state
    }


    render(){
        let disabled="";
        if(this.props.disabled){
            disabled= "disabled"
        }
        console.log('disabled is', disabled);
        return (
            <form onSubmit={e=>this.onSubmit(e)}>
                <input 
                    type="number" 
                    name="userGuess" 
                    id="userGuess"
                    className="text" 
                    maxLength="3" 
                    autoComplete="off"
                    placeholder="Enter your Guess" 
                    min= "1"
                    max="100"
                    required 
                    disabled={disabled}
                    ref={input => this.textInput=input}/>
                <input disabled={disabled} type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

//when you click newgame, the value in the input should clear. also look into required for input
//you already guessed that 
//disabled