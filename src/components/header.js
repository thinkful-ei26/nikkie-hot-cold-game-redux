import React from 'react';
import { connect } from 'react-redux';
import { displayAbout } from '../actions';

import TopNav from './top-nav';
import InfoModal from './info-modal';
import Timer from './timer'

import './header.css';

export class Header extends React.Component {

    //could also do this with css? ya we could add a class  with display none etc.

    render(){
        let infoModal = this.props.displayModal ?  <InfoModal /> : '';
        
        let timer = this.props.displayTimer ? <Timer restartGame={()=>this.props.restartGame()}/> : '';

        return (
            <header>
                <TopNav />
                {infoModal}
                <h1>HOT or COLD</h1>
                {timer}
            </header>
        );
    }
};

const mapStateToProps = state => ({
    displayModal: state.displayModal,
    displayTimer: state.displayTimer,
  });
  
export default connect(mapStateToProps)(Header);

//adding features: adding a timer, and disabling guesses if they won
