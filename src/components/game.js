import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

import './game.css'

export default class Game extends React.Component {
    constructor(props){
        super(props)

        // this.correctAnswer = someValue would have been how I could store it without state

        this.state={
            feedback: 'Make your guess!',
            guessCount: 0,
            guessesList: [],
            correctAnswer: Math.floor((Math.random() * 100) + 1),
            displayTimer: false,
            // correctAnswer changes when user hits new game so should be part of state
        }
    }

    handleGuessSubmit(guess){
        let feedback = this.handleFeedBack(guess);

        if(feedback==="YOU WON! Click New Game to Start Again! Game will automatically restart in 10 seconds"){
            this.setState({
                displayTimer:true,
            })
        }

        //this successfully updates the state for the count and the list
        this.setState({
            guessesList:[...this.state.guessesList,guess],
            guessCount: this.state.guessCount+1,
            feedback: feedback,
        })
    }

    handleFeedBack(guess){
        //change feedback depending on guess:
        return guess==this.state.correctAnswer ?  "YOU WON! Click New Game to Start Again! Game will automatically restart in 10 seconds"
        : guess>this.state.correctAnswer-10 && guess<this.state.correctAnswer+10 ? "Hot!" 
        : "Cold :(";
    }

    restartGame(){
        //sets everything back to  default 
        this.setState({
            feedback: 'Make your guess!',
            guessCount: 0,
            guessesList: [],
            correctAnswer: Math.floor((Math.random() * 100) + 1),
            displayTimer: false,
            //is there a more efficient way of doing this with defaults? you could have an initial state
        })
    }

    render(){
        console.log(this.state.correctAnswer);
        return (
            <div>
                <Header displayTimer={this.state.displayTimer} restartGame={()=>this.restartGame()} />
                <div className="box">
                <GuessSection feedback={this.state.feedback} handleGuessSubmit={guess=>this.handleGuessSubmit(guess)} />
                <GuessCount guessCount={this.state.guessCount} />
                <GuessList guessesList={this.state.guessesList} />
                </div>
            </div>
        );
    }
}

