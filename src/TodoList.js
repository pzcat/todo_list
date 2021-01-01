import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index.js';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreators';
import TodoListUI from './TodoListUI';
// import axios from 'axios';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleItemAdd = this.handleItemAdd.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (<TodoListUI 
              inputValue={this.state.inputValue}
              handleInputChange={this.handleInputChange}
              handleItemAdd={this.handleItemAdd}
              handleItemDelete={this.handleItemDelete}
              list={this.state.list}
           />);
  }

  componentDidMount(){
    const action = getInitList();
    store.dispatch(action);
    // axios.get('/test.json')
    //   .then((res) => {
    //     const data = res.data;
    //     const action = getDataInitAction(data);
    //     store.dispatch(action);
    //     })
    //   .catch(() => {alert('error')})
  }

  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
    console.log('todolist handleinputchange');

  }

  handleItemAdd() {
    // const action = {
    //   type: ADD_ITEM
    // }
    const action = getAddItemAction();
    store.dispatch(action);
    console.log('todolist handleitemadd');

  }

  handleItemDelete(index) {
    // const action = {
    //   type: DELETE_ITEM,
    //   index
    // }
    const action = getDeleteItemAction(index);
    store.dispatch(action);
    console.log('todolist handleitemdelete index', index);
  }

  handleStoreChange() {
    this.setState(store.getState());
    console.log('store changed');
  }
}

export default TodoList;