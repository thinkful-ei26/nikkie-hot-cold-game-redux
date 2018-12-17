import React from 'react';
import { connect } from 'react-redux';
import { displayAbout, restartGame, generateAuralUpdate } from '../actions';

import './top-nav.css';

export function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={()=>props.dispatch(displayAbout(true))}>
                        What?
                    </a>
                </li>
                <li>
                    <a
                        href="#get-status"
                        /* the `visuallyhidden` class hides an element 
            while leaving it available to screen reader users  */
                        className="visuallyhidden focusable status-link"
                        onClick={() => props.dispatch(generateAuralUpdate())}>
                        Hear state of game
                    </a>
                </li>
                <li>
                    <a className="new" href="#" onClick={()=>props.dispatch(restartGame())}>
                        + New Game
                    </a>
                </li>
                
            </ul>
        </nav>
    );
}

export default connect()(TopNav);
