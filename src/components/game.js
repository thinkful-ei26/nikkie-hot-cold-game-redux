import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

import './game.css'

export function Game(props){

    console.log(props.correctAnswer);
    return (
        <div>
            <Header />
            <div className="box">
            <GuessSection/>
            <GuessCount />
            <GuessList />
            </div>
        </div>
    );
}

export const mapStateToProps = state => ({
  correctAnswer: state.game.correctAnswer,
})

export default connect(mapStateToProps)(Game);
