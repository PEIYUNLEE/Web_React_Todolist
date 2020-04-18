import React, { Component } from "react";
import styled from "styled-components";

import complete from "../../../../assets/icons/complete.png";
import edit from "../../../../assets/icons/edit.png";

// style
const _Item = styled.div`
  height: 50px;
  cursor: pointer;
  width: 100%;
  background-color: #414141;
  display: grid;
  grid-template-columns: 40px auto 40px;
  border-top: 2px solid #333333;
`;
const _TomoIcon = styled.img`
  width: 13px;
`;
const _IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const _Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const _TaskName = styled.div`
  font-size: 16px;
  letter-spacing: 0.8px;
  height: 19px;
`;
const _EditIcon = styled.img`
  width: 6px;
`;

//style
const editicon_active = {
  transform: 'rotate(90deg)'

};


class DoneItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { idx,todo,archiveTask,redoTask } = this.props;

    return (
      <div>
          <_Item onClick={this.onEditClick}>
            <_IconWrapper>
              <_TomoIcon src={complete} alt="" />
            </_IconWrapper>
            <_Center>
              <_TaskName>{todo.task}</_TaskName>
              <div>add</div>
            </_Center>
            <_IconWrapper>
              <_EditIcon src={edit} alt="" style={editicon_active} />
            </_IconWrapper>
          </_Item>
        </div>
      // <tr>
      //   <td>{todo.task}</td>
      //   <td>{todo.estimateTomo}</td>
      //   <td>{todo.isCompleted+''}</td>
      //   <td>
      //     <button onClick={()=>{archiveTask(idx)}}>ARCHIVE</button>
      //     <button onClick={()=>{redoTask(idx)}}>REDO</button>
      //   </td>
      // </tr>
    );
  }
}

export default DoneItem;
