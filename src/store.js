import {createStore, combineReducers} from 'redux';

import {gameReducer} from './reducers/game-reducer';
import {modalReducer} from './reducers/modal-reducer';
import {timerReducer} from './reducers/timer-reducer';

export default createStore(
  combineReducers({
    game: gameReducer,
    modal: modalReducer,
    timer: timerReducer,
  })
);