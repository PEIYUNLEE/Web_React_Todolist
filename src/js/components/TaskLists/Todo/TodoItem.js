import React, { Component } from "react";
import styled from "styled-components";

import EditItem from "./EditItem";
import TomoTimerList from "../../tomo/TomoTimerList";

import tomato_small_color from "../../../../assets/icons/tomato_small_color.png";
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
  visibility: ${(props) => (props.Invisible ? "hidden" : "visible")};
  transition:none;
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
  transform: "rotate(90deg)",
};

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };

    this.onEditClick = this.onEditClick.bind(this);
    this.setIsEditing = this.setIsEditing.bind(this);
    this._renderTomoIcon = this._renderTomoIcon.bind(this);
  }

  render() {
    const { idx, todo, selectedIdx,saveTask, archiveTask } = this.props;

    if (this.state.isEditing && selectedIdx == idx) {
      return (
        <div>
          <_Item
            onClick={() => {
              this.onEditClick(idx);
            }}
          >
            <_IconWrapper>
              {this._renderTomoIcon()}
            </_IconWrapper>
            <_Center>
              <_TaskName>{todo.task}</_TaskName>
              <TomoTimerList todo={todo} left={true} />
            </_Center>
            <_IconWrapper>
              <_EditIcon src={edit} alt="" style={editicon_active} />
            </_IconWrapper>
          </_Item>
          <EditItem
            setIsEditing={this.setIsEditing}
            isEditing={this.state.isEditing}
            todo={todo}
            idx={idx}
            saveTask={saveTask}
            archiveTask={archiveTask}
          ></EditItem>
        </div>
      );
    }

    return (
      <div>
        <_Item
          onClick={() => {
            this.onEditClick(idx);
          }}
        >
          <_IconWrapper>
            {this._renderTomoIcon()}
          </_IconWrapper>
          <_Center>
            <_TaskName>{todo.task}</_TaskName>
            <TomoTimerList todo={todo} left={true} />
          </_Center>
          <_IconWrapper>
            <_EditIcon src={edit} alt="" />
          </_IconWrapper>
        </_Item>
      </div>
    );
  }

  onEditClick(idx) {
    this.setState({
      isEditing: !this.state.isEditing,
      editTomo: this.props.todo.estimateTomo,
    });
    this.props.setSelectedIdx(idx);
  }

  setIsEditing() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  _renderTomoIcon() {
    if (this.props.selectedIdx == this.props.idx) {
      return <_TomoIcon src={tomato_small_color} alt="" />;
    } else {
      return <_TomoIcon Invisible src={tomato_small_color} alt="" />;
    }
  }
}

export default TodoItem;
