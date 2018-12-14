//Actions should include;
// User hitting "guess" button to submit their guess, user hitting "new game" to restart the game, user hitting "about" to see how to play the game 

export const SUBMIT_GUESS = "SUBMIT_GUESS"
export const submitGuess = guess =>({
  type: SUBMIT_GUESS,
  guess,
})

export const RESTART_GAME = "RESTART_GAME"
export const restartGame = ()=>({
  type: RESTART_GAME
})

export const DISPLAY_ABOUT = "DISPLAY_ABOUT"
export const displayAbout = bool=>({
  type: DISPLAY_ABOUT,
  bool
})