import React from 'react';
import { connect } from 'react-redux';
import { restartGame, startTimer } from '../actions';

export class Timer extends React.Component {

  //theres no state being managed 
  startTimer() {
    //dispacth the action of starting timer 
    this.props.dispatch(startTimer());
    this.refresh = setInterval( () => this.refreshTimer(), 1000); //need this to call clearInterval later
  }

  //this is an accurate timer - so if it's running on a really slow comp, it might jump but still stay true to the real time (unlike old code)

  componentDidMount(){
    console.log('Mounting');
    this.startTimer();
  }

  componentWillUnmount(){
    console.log('Unmounting');
    clearInterval(this.refresh);
  } //this will happen when  I make Timer comp disappear

  refreshTimer(){
    if (+new Date() > this.props.timerShouldEnd){
      console.log('HERE');
      clearInterval(this.refresh);
      this.props.dispatch(restartGame()); //after timer is over, restart game
    }
    else{
      this.forceUpdate(); //triggers a render
    }
  }

  render() {
    return(
      <h3> {Math.ceil((this.props.timerShouldEnd - +new Date())/1000)} </h3> //so it looks like a normal number
    )
  }
}

const mapStateToProps = state => ({ 
  timerShouldEnd: state.timerShouldEnd,
});

export default connect(mapStateToProps)(Timer);
