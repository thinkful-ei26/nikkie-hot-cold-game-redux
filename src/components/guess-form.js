import React from 'react';
import { connect } from 'react-redux';

import './guess-form.css';
import { submitGuess } from '../actions';

//this should stay a class so I can have its own method
export class GuessForm extends React.Component {
    
    onSubmit(e){
        //grab the guess and send it off to parent
        e.preventDefault();
        // const guess = this.textInput.value;
        this.props.dispatch(submitGuess(e.target.userGuess.value));
        e.target.userGuess.value = '';
        //e.target.userGuess.value - without refs. both are uncontrolled. with controlled, you'd have state
    }

    render(){
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
                    // value={this.props.guessInput}
                    required 
                    disabled={this.props.disabled}
                    />
                <input disabled={this.props.disabled} type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

export const mapStateToProps = state => ({
    disabled: state.disabled,
    guessInput: state.guessInput,
  })

export default connect (mapStateToProps)(GuessForm);
// Why don't we do makeStateToProps fn here? We do that when we directly need access to a prop which we currently dont

//when you click newgame, the value in the input should clear.

//With React you're supposed to use controlled inputs for everything - so onChange, I would change the state and grab what's in the state and put in the value of the input