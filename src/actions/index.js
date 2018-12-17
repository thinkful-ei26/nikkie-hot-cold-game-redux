//Actions should include;
// User hitting "guess" button to submit their guess, user hitting "new game" to restart the game, user hitting "about" to see how to play the game 

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
});

export const SUBMIT_GUESS = "SUBMIT_GUESS"
export const submitGuess = guess =>({
  type: SUBMIT_GUESS,
  guess,
})

export const RESTART_GAME = "RESTART_GAME"
export const restartGame = ()=>({
  type: RESTART_GAME,
  correctAnswer: Math.floor((Math.random() * 100) + 1),
})

export const DISPLAY_ABOUT = "DISPLAY_ABOUT"
export const displayAbout = bool=>({
  type: DISPLAY_ABOUT,
  bool
})

export const START_TIMER = "START_TIMER"
export const startTimer = ()=>({
  type: START_TIMER,
})

//in order to time travel, we need to keep our reducers pure functions (predictable) - if we create random number in the reducer, the fn is no longer predictable 

//so move the math.floor code back to 

//remains in state, but we dont allow the reducer to make the random num - just accept the random number, and update (so pass in the random num)

//or do it in the actions. just not in the reducers