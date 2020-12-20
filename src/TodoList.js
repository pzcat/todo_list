import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index.js';


class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <Input 
          placeholder="write your item here" 
          type="dashed" 
          style={{width: '300px', marginRight: '10px'}}
          onChange={this.handleInputChange}
        ></Input>
        <Button>Add item</Button>
            <List
              style={{marginTop: '10px', width: '400px'}}
              bordered
              dataSource={this.state.list}
              renderItem={item => (
                <List.Item>{item}</List.Item>
              )}
            />
      </div>)
  }

  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
    console.log('store changed');
  }
}

export default TodoList;