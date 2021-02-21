import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import { constants } from '.';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  searchInfoList: [],
  page: 0,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      // set method of immutable return a new object
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        searchInfoList: action.data,
        totalPage:action.totalPage
      });
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}