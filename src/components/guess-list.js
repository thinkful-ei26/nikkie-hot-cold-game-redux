import React from 'react';
import { connect } from 'react-redux';


import './guess-list.css';

export function GuessList(props) {
    const guesses = props.guessesList.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};

const mapStateToProps = state => ({
    guessesList: state.game.guessesList
  });
  
export default connect(mapStateToProps)(GuessList);