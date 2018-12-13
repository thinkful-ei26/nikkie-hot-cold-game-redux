import React from 'react';

const startTime = 10;

export default class Timer extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      currentTime: startTime,
    }
  } 

  startTimer() {
      this.setState({
        currentTime: startTime,
      }) //reset state

      this.incrementer = setInterval( () =>
        this.setState({
          currentTime: this.state.currentTime - 1
        })
      , 1000);

      //this.incrementer -setting a property of our class. WE're setting it = to setInterval which takes a fn and a number (ms) - will execute the fn every 1000 ms - setInterval is JS. setInterval returns a unique id, that we set = to incrementer, so we can pass it into clearInterval with the unique id
  }

  componentDidMount(){
    console.log('Mounting');
    this.startTimer();
  }

  componentWillUnmount(){
    console.log('Unmounting');
    clearInterval(this.incrementer);
  } //this will happen when  I make Timer comp disappear

  componentDidUpdate(){
    if(this.state.currentTime===0){
      console.log('HERE');
      clearInterval(this.incrementer);
      this.props.restartGame(); //after timer is over, restart game
    }
  }

  render() {
    return(
      <h3> {this.state.currentTime} </h3>
    )
  }
}