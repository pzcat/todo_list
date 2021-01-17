import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';


const TodoListUI = (props) => {
  return(      
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <Input 
        value={props.inputValue}
        placeholder="write your item here" 
        type="dashed" 
        style={{width: '300px', marginRight: '10px'}}
        onChange={props.handleInputChange}
      ></Input>
      <Button
        onClick={props.handleItemAdd}
      >
        Add item
      </Button>
      <List
        style={{marginTop: '10px', width: '400px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <Fragment>
            <List.Item style={{display: 'inline'}} >{item}</List.Item>
            <Button style={{textAlign: 'right'}} onClick={props.handleItemDelete.bind(this, index)}> Delete item </Button><br/>
          </Fragment> 
        )}
      />
    </div>)
}

// class TodoListUI extends Component {
//   render(){
//     return (
//       <div style={{marginTop: '10px', marginLeft: '10px'}}>
//         <Input 
//           value={this.props.inputValue}
//           placeholder="write your item here" 
//           type="dashed" 
//           style={{width: '300px', marginRight: '10px'}}
//           onChange={this.props.handleInputChange}
//         ></Input>
//         <Button
//          onClick={this.props.handleItemAdd}
//         >
//           Add item
//         </Button>
//         <List
//           style={{marginTop: '10px', width: '400px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <Fragment>
//               <List.Item style={{display: 'inline'}} >{item}</List.Item>
//               <Button style={{textAlign: 'right'}} onClick={this.props.handleItemDelete.bind(this, index)}> Delete item </Button><br/>
//             </Fragment> 
//           )}
//         />
//       </div>
//     )

//   }
// }

export default TodoListUI;