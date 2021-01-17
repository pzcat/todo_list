<<<<<<< HEAD
=======
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes';


const defaultState = {
  inputValue: '',
  list: [1, 2]
}

// always try not to modify state
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));  
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  // if (action.type === INIT_DATA) {
  //   const newState = JSON.parse(JSON.stringigy(state));
  //   newState.list = action.data;
  //   return newState;
  // }
  console.log('reducer', state, action);
  return state;
}
>>>>>>> 15802574e1dc2b82a25ba2169d57bf7684d797aa
