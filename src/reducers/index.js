import {SUBMIT_GUESS, RESTART_GAME, DISPLAY_ABOUT} from '../actions';

const initialState ={
  feedback: 'Make your guess!',
  guessCount: 0,
  guessesList: [],
  displayTimer: false,
  displayModal: false,
  disabled: false,
  correctAnswer: Math.floor((Math.random() * 100) + 1),
  // correctAnswer changes when user hits new game so should be part of state

};

export const gameReducer = (state=initialState, action)=> {

  if(action.type==="SUBMIT_GUESS"){
    //look at what action.guess is and determine the feedback (seperate fn)
    let feedback = state.guessesList.includes(action.guess) ? "Oops, you already guessed that number!" : action.guess==state.correctAnswer ?  "YOU WON! Click New Game to Start Again! Game will automatically restart in 10 seconds"
    : action.guess>state.correctAnswer-10 && action.guess<state.correctAnswer+10 ? "Hot!" 
    : "Cold :(";
    //based on the feedback, change the state accordingly: 

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

  else if(action.type==="RESTART_GAME"){
    //set state back to default
    return Object.assign({}, state, {
      feedback: 'Make your guess!',
      guessCount: 0,
      guessesList: [],
      correctAnswer: Math.floor((Math.random() * 100) + 1),
      displayTimer: false,
      disabled:false,
      //is there a more efficient way of doing this with defaults? you could have an initial state
    })
  }

  else if(action.type==="DISPLAY_ABOUT"){
    //set displayModal to true 
    return Object.assign({}, state, {
      displayModal: action.bool,
    })
  }

  return state;
};