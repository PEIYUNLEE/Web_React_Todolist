import React, { Component } from "react";
import TomoList from "./tomo/TomoList";
import styled from "styled-components";

// style
const _H3 = styled.h3`
  color: #fcfcfc;
  letter-spacing: 2px;
  font-weight: 900;
  font-size: 20px;
`;
const _H4 = styled.h4`
  color: #acacac;
  margin: 25px 0px;
  font-size: 14px;
  letter-spacing: 0.7px;
  font-weight: 700;
`;
const _Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #414141;
  margin:25px 0px;
`;
const _Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-color: #fcfcfc;
  border: none;
  outline: none;
  padding: 15px;
  font-size: 16px;
  letter-spacing: 0.8px;
  font-weight: 400;
  color: #333333;

  &:hover {
    box-shadow: 0 0 0 0.0625rem #ea5548;
  }
  &:focus {
    box-shadow: inset 0 0 0 0.125rem #ea5548;
  }
`;
const _Button = styled.button`
  width: 100%;
  background-color: #ea5548;
  border-radius: 30px;
  outline: none;
  border: none;
  height: 50px;
  color: #fcfcfc;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 1.4px;
  margin-top: 50px;
  cursor: pointer;
`;

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estimateTomo: 0,
    };
    this.onAddClick = this.onAddClick.bind(this);
    this.setEstimateTomo = this.setEstimateTomo.bind(this);
  }

  render() {
    return (
      <div>
        <_H3>ADD NEW TASK</_H3>
        <_Line></_Line>
        <_H4>TASK TITLE</_H4>
        <_Input type="text" ref="addInput" placeholder="My Second Task" />
        <_H4>ESTIMATED TOMOTO</_H4>
        <TomoList
          listtype={"add"}
          estimateTomo={this.state.estimateTomo}
          setEstimateTomo={this.setEstimateTomo}
        />
        <_Button onClick={this.onAddClick}>ADD TASK</_Button>
      </div>
    );
  }

  onAddClick() {
    const addInput = this.refs.addInput;
    this.props.addTask(addInput.value, this.state.estimateTomo);
    addInput.value = "";
    this.setState({
      estimateTomo: 0,
    });
  }

  setEstimateTomo(number) {
    this.setState({
      estimateTomo: number,
    });
  }
}

export default TodoAdd;
