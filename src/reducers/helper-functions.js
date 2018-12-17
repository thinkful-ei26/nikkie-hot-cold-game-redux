'use strict';

export function generateFeedback(state, action){
  //look at what action.guess is and determine the feedback (seperate fn)
  return (
    state.guessesList.includes(action.guess) 
      ? 'Oops, you already guessed that number!' 
      : action.guess==state.correctAnswer 
        ?  'YOU WON! Click New Game to Start Again! Game will automatically restart in 10 seconds' 
        : action.guess>state.correctAnswer-10 && action.guess<state.correctAnswer+10 
          ? 'Hot!' 
          : 'Cold :('
  );
}

export function generateAuralStatus(state){
  console.log('in generate aural state is,', state);
  const {guessesList, feedback} = state;

  // If there's not exactly 1 guess, we want to
  // pluralize the nouns in this aural update.
  const pluralize = guessesList.length !== 1;

  let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guessesList.length} ${pluralize
    ? 'guesses'
    : 'guess'}.`;

  if (guessesList.length > 0) {
    auralStatus += ` ${pluralize
      ? 'In order of most- to least-recent, they are'
      : 'It was'}: ${guessesList.reverse().join(', ')}`;
  }

  return auralStatus;
}