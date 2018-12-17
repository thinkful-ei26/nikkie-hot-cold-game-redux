import {SUBMIT_GUESS, RESTART_GAME, GENERATE_AURAL_UPDATE} from '../actions';

import {generateFeedback, generateAuralStatus} from './helper-functions';

const initialState ={
  feedback: 'Make your guess!',
  guessCount: 0,
  guessesList: [],
  displayTimer: false,
  disabled: false,
  correctAnswer: Math.floor((Math.random() * 100) + 1),
  guessInput: "",
  auralStatus: '',
  // correctAnswer changes when user hits new game so should be part of state
};

export const gameReducer = (state=initialState, action)=> {
  
  if(action.type===SUBMIT_GUESS){
    
    //based on the feedback, change the state accordingly: 
    let feedback = generateFeedback(state, action);

    //if feedback is they won: display the timer, turn on disabled for button/input, update the guess list with the guess, update the guess count, update the feedback 
    if(feedback==="YOU WON! Click New Game to Start Again! Game will automatically restart in 10 seconds"){
      return Object.assign({}, state, {
        displayTimer:true,
        disabled: true,
        guessesList:[...state.guessesList,action.guess],
        guessCount: state.guessCount+1,
        feedback: feedback,
    })
    }

    //else if feedback is they've already guessed that number, then only update the feedback - don't do anything else with the guess
    else if (feedback==="Oops, you already guessed that number!"){
      return Object.assign({}, state, {
        feedback: feedback,
      })
    }

    //else (basically they're hot or cold), update the guesses list, guesses count, and feedback 
    else{
      return Object.assign({}, state, {
        guessesList:[...state.guessesList,action.guess],
        guessCount: state.guessCount+1,
        feedback: feedback,
      })
    }
  }

  //set everything back to initial state
  else if(action.type===RESTART_GAME){
    //set state back to default
    return Object.assign({}, initialState, {
      correctAnswer: action.correctAnswer,
    })
  }

  else if (action.type === GENERATE_AURAL_UPDATE) {
    let auralStatus = generateAuralStatus(state);
    return Object.assign({}, state, {auralStatus});
}

  return state;
};