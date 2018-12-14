import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

import './game.css'

export class Game extends React.Component {
    // constructor(props){
    //     super(props)
        // this.correctAnswer = someValue would have been how I could store it without state
        //Queston: Do I still need a constructor and props? 
    // }

    render(){
        console.log(this.props.correctAnswer);
        return (
            <div>
                {/* <Header displayTimer={this.state.displayTimer} restartGame={()=>this.restartGame()} /> */}
                <div className="box">
                <GuessSection/>
                {/* <GuessCount guessCount={this.state.guessCount} />
                <GuessList guessesList={this.state.guessesList} /> */}
                </div>
            </div>
        );
    }
}

//Question: do I need default props? For what occasion?

export const mapStateToProps = state => ({
  feedback: state.feedback,
  guessCount: state.guessCount,
  guessesList: state.guessesList,
  correctAnswer: state.correctAnswer,
  displayTimer: state.displayTimer,
  disabled: state.disabled,
})

export default connect(mapStateToProps)(Game);