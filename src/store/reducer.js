const defaultState = {
  inputValue: '',
  list: [1, 2]
}

// always try not to modify state
export default (state=defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));  // deep copy state
    newState.inputValue = action.value;
    return newState;
  }
  console.log(state, action);
  return state;
}