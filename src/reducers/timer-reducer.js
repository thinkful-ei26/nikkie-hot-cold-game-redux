import {START_TIMER, RESTART_GAME} from '../actions';

const initialState ={
  timerShouldEnd: 0,
};

export const timerReducer = (state=initialState, action)=> {
  if(action.type ===START_TIMER){
    return Object.assign({}, state, {
      timerShouldEnd: +new Date() + 10000 //10 seconds from when the timer starts. +new means current date as a number 
    })
  }

  else if(action.type===RESTART_GAME){
    //set state back to default
    return Object.assign({}, state, initialState)
  }
  return state;
};