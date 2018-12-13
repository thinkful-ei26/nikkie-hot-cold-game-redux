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
        return (
            <form onSubmit={e=>this.onSubmit(e)}>
                <input 
                    type="text" 
                    name="userGuess" 
                    id="userGuess"
                    className="text" 
                    maxLength="3" 
                    autoComplete="off"
                    placeholder="Enter your Guess" 
                    required 
                    ref={input => this.textInput=input}/>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

