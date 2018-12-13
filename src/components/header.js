import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';
import Timer from './timer'

import './header.css';

export default class Header extends React.Component {
    constructor(props){
        super(props)

        this.state={
            displayModal: false,
        }
        //Is it okay that I'm storing state here and not in parent? thats okay - we dont need that info higher up
        //dont store the component in the state - the state itself should just be data
        //store a bool and then use that to render the infoModal
    }

    onClickInfo(bool){
        this.setState({
            displayModal:bool,
        })
    }
    //could also do this with css? ya we could add a class  with display none etc.

    render(){
        let infoModal = this.state.displayModal ?  <InfoModal onClickInfo={()=>this.onClickInfo(false)}/> : '';
        
        let timer = this.props.displayTimer ? <Timer restartGame={()=>this.props.restartGame()}/> : '';

        return (
            <header>
                <TopNav restartGame={()=>this.props.restartGame()} onClickInfo={()=>this.onClickInfo(true)} />
                {infoModal}
                <h1>HOT or COLD</h1>
                {timer}
            </header>
        );
    }
};

//adding features: adding a timer, and disabling guesses if they won
