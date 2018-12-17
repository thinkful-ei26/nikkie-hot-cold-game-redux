import {DISPLAY_ABOUT, RESTART_GAME} from '../actions';

const initialState ={
  displayModal: false,
};

export const modalReducer = (state=initialState, action)=> {
  if(action.type===DISPLAY_ABOUT){
    //set displayModal to true 
    return Object.assign({}, state, {
      displayModal: action.bool,
    })
  }

  else if(action.type===RESTART_GAME){
    //set state back to default
    return Object.assign({}, state, initialState)
  }
return state;
};