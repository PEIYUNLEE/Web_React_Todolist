import React, { Component } from "react";
import styled from "styled-components";

import TomoTimerList from "../../tomo/TomoTimerList";

import complete from "../../../../assets/icons/done.png";
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
const _DoneIcon = styled.img`
  width: 20px;
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

// style
const _Wrapper = styled.div`
  background-color: #414141;
  padding: 0 40px;
`;
const _Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333333;
`;
const _ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const _Button = styled.button`
  background-color: ${(props) => (props.redo ? "#ea5548" : "#606060")};
  border-radius: 30px;
  outline: none;
  border: none;
  width: ${(props) => (props.redo ? "250px" : "100px")};
  height: 40px;
  color: #fcfcfc;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 1.4px;
  margin: 10px 0 15px;
`;

//style
const expandicon_active = {
  transform: "rotate(90deg)",
};

class DoneItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };

    this.onExpandClick = this.onExpandClick.bind(this);
  }

  render() {
    const { idx, todo, archiveTask, redoTask } = this.props;

    if (this.state.isExpanded) {
      return (
        <div>
          <_Item onClick={this.onExpandClick}>
            <_IconWrapper>
              <_DoneIcon src={complete} alt="" />
            </_IconWrapper>
            <_Center>
              <_TaskName>{todo.task}</_TaskName>
              <TomoTimerList todo={todo} left={true}/>
            </_Center>
            <_IconWrapper>
              <_EditIcon src={edit} alt="" style={expandicon_active} />
            </_IconWrapper>
          </_Item>
          <_Wrapper>
            <_Line></_Line>
            <_ButtonWrapper>
              <_Button
                onClick={() => {
                  archiveTask(idx);
                }}
              >
                ARCHIVE
              </_Button>
              <_Button
                redo
                onClick={() => {
                  redoTask(idx);
                }}
              >
                REDO
              </_Button>
            </_ButtonWrapper>
          </_Wrapper>
        </div>
      );
    }

    return (
      <div>
        <_Item onClick={this.onExpandClick}>
          <_IconWrapper>
            <_DoneIcon src={complete} alt="" />
          </_IconWrapper>
          <_Center>
            <_TaskName>{todo.task}</_TaskName>
            <TomoTimerList todo={todo} left={true}/>
          </_Center>
          <_IconWrapper>
            <_EditIcon src={edit} alt="" />
          </_IconWrapper>
        </_Item>
      </div>
    );
  }

  onExpandClick() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }
}

export default DoneItem;
