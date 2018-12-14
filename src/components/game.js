import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

import './game.css'

export class Game extends React.Component {

    render(){
        console.log(this.props.correctAnswer);
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
}

export const mapStateToProps = state => ({
  correctAnswer: state.correctAnswer,
})

export default connect(mapStateToProps)(Game);

//Queston: Do I still need a constructor and props? 
//Question: do I need default props? For what occasion?
