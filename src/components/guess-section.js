import React from 'react';
import { connect } from 'react-redux';

import GuessForm from './guess-form';
import AuralStatus from './aural-status';


import './guess-section.css';

export function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm />
            <AuralStatus />
        </section>
    );
}

const mapStateToProps = state => ({
    feedback: state.game.feedback
  });
  
export default connect(mapStateToProps)(GuessSection);