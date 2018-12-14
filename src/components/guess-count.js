import React from 'react';

import { connect } from 'react-redux';

import './guess-count.css';

export function GuessCount(props) {
    return (
        <h4>
            Guess #<span id="count">{props.guessCount}</span>!
        </h4>
    );
}

const mapStateToProps = state => ({
    guessCount: state.guessCount
  });
  
export default connect(mapStateToProps)(GuessCount);