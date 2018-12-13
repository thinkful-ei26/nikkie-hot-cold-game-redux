import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
    return (
        <h4>
            Guess #<span id="count">{props.guessCount}</span>!
        </h4>
    );
}
