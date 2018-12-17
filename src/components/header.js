import React from 'react';
import { connect } from 'react-redux';

import TopNav from './top-nav';
import InfoModal from './info-modal';
import Timer from './timer'

import './header.css';

export function Header(props){

    //could also do this with css? ya we could add a class  with display none etc.

    return (
        <header>
            <TopNav />
            {props.displayModal ?  <InfoModal /> : ''}
            <h1>HOT or COLD</h1>
            {props.displayTimer ? <Timer/> : ''}
        </header>
    );
};

const mapStateToProps = state => ({
    displayModal: state.modal.displayModal,
    displayTimer: state.game.displayTimer,
  });
  
export default connect(mapStateToProps)(Header);