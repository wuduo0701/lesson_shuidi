import React from 'react';
import { Input, Button, List } from 'antd';

// 无状态组件
const ListUI = (props) => {
  return(
    <div>
      <div style={{marginTop: '10px'}}>
        <Input 
          value={props.inputValue}
          placeholder="todo info" 
          style={{width: '300px', marginRight: '10px'}}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{marginTop: '10px', width:'300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item) => (
          <List.Item onClick={(index) => {
            props.handleItemDelete(index)
          }}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}
//普通UI组件
// class  ListUI extends Component {
//   render() {
//     return(
//       <div>
//         <div style={{marginTop: '10px'}}>
//           <Input 
//             value={this.props.inputValue}
//             placeholder="todo info" 
//             style={{width: '300px', marginRight: '10px'}}
//             onChange={this.props.handleInputChange}
//           />
//           <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         </div>
//         <List
//           style={{marginTop: '10px', width:'300px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item) => (
//             <List.Item onClick={(index) => {
//               this.props.handleItemDelete(index)
//             }}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }
export default ListUI