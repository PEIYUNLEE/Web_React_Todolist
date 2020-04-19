import React, { Component } from "react";
import styled from "styled-components";

import TomoList from "../../tomo/TomoList";

// style
const _Wrapper = styled.form`
  background-color: #414141;
  padding: 0 40px;
`;

const _H4 = styled.h4`
  color: #acacac;
  margin: 10px 0px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.6px;
`;
const _Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333333;
`;
const _Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #fcfcfc;
  border: none;
  outline: none;
  padding: 12px 15px;
  font-size: 16px;
  letter-spacing: 0.8px;
  font-weight: 400;
  color: #333333;
  margin: 5px 0;

  &:hover {
    box-shadow: 0 0 0 0.0625rem #ea5548;
  }
  &:focus {
    box-shadow: inset 0 0 0 0.125rem #ea5548;
  }
`;
const _ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const _Button = styled.button`
  background-color: ${(props) => (props.save ? "#ea5548" : "#606060")};
  border-radius: 30px;
  outline: none;
  border: none;
  width: ${(props) => (props.save ? "250px" : "100px")};
  height: 40px;
  color: #fcfcfc;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 1.4px;
  margin: 15px 0 20px;
`;

class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editTomo: props.todo.estimateTomo,
    };

    this.onSaveClick = this.onSaveClick.bind(this);
    this.setEstimateTomo = this.setEstimateTomo.bind(this);
  }

  render() {
    const { todo, archiveTask,isEditing,setIsEditing } = this.props;
    const idx = this.props.idx;

    if(isEditing){
      return (
        <_Wrapper>
          <_Line></_Line>
          <_H4>TASK TITLE</_H4>
          <_Input
            type="text"
            data-idx={idx}
            defaultValue={todo.task}
            ref="editInput"
          />
          <_H4>ESTIMATED TOMOTO</_H4>
          <TomoList
            listtype={"edit"}
            estimateTomo={this.state.editTomo}
            setEstimateTomo={this.setEstimateTomo}
          />
          {/* <div>{todo.isCompleted + ""}</div> */}
          <_ButtonWrapper>
            <_Button
              onClick={() => {
                archiveTask(idx);
                setIsEditing();
              }}
            >
              ARCHIVE
            </_Button>
            <_Button save onClick={this.onSaveClick}>
              SAVE
            </_Button>
            {/* <button
                  onClick={() => {
                    this.props.completeTask(idx);
                  }}
                >
                  Complete
                </button> */}
          </_ButtonWrapper>
        </_Wrapper>
      );
    }

    return (
      <div></div>
    )
  }

  onSaveClick() {
    const editinput = this.refs.editInput;
    const editTomo = this.state.editTomo;
    console.log(+editinput.getAttribute("data-idx"))
    this.props.saveTask(
      +editinput.getAttribute("data-idx"),
      editinput.value,
      editTomo
    ); // + 把字串轉成數值
    this.setState({ editTomo: 0 });
    this.props.setIsEditing();
  }
  setEstimateTomo(number) {
    this.setState({
      editTomo: number,
    });
  }
}

export default EditItem;
