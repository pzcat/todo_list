import axios from 'axios';
import store from '.';
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM} from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
});

export const getDataInitAction = (data) => ({
  type: INIT_DATA,
  data
});

export const getInitList = () => {
  return (dispatch) => {
    axios.get('/test.json').then((res) => {
      const data = res.data;
      const action = getDataInitAcion(data);
      dispatch(action);
    })
  }
}
