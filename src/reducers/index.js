import {SUBMIT_GUESS, RESTART_GAME, DISPLAY_ABOUT} from '../actions';

const initialState ={
  feedback: 'Make your guess!',
  guessCount: 0,
  guessesList: [],
  correctAnswer: Math.floor((Math.random() * 100) + 1),
  displayTimer: false,
  disabled: false,
};

export const gameReducer = (state=initialState, action)=> {
  
};