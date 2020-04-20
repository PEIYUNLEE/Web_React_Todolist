import React, { Component } from "react";
import styled from "styled-components";

import TomoTimerList from "../tomo/TomoTimerList";

import completeIcon from "../../../assets/icons/complete.png";
import startIcon from "../../../assets/icons/start_gray.png";
import pauseIcon from "../../../assets/icons/pause_gray.png";
import resetIcon from "../../../assets/icons/reset_gray.png";

// style
const _Wrapper = styled.div`
  background-color: #eaeaea;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const _H2 = styled.h2`
  color: #333333;
  text-align: center;
`;
const _Center = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const _Bottom = styled.div`
  display: flex;
  justify-content: center;
`;

const _CompleteBtn = styled.button`
  height: 17px;
  margin-top: 50px;
  border: none;
  outline: none;
  background-color: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const _Footer = styled.footer`
  height: 17px;
  margin-top: 50px;
`;
const _H1 = styled.h1`
  font-size: 10px;
  letter-spacing: 1.5px;
  color: #333333;
  font-weight: 300;
  text-align: center;
`;

const _H5 = styled.h5`
  font-size: 14px;
  letter-spacing: 1.4px;
  color: #333333;
  font-weight: 300;
  margin-left: 5px;
  font-weight: 700;
`;
const _SVG = styled.svg`
  width: 300px;
  height: 300px;
`;
const _TEXT = styled.text`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 4px;
`;
const _TimerBtn = styled.button`
  height: 50px;
  border: none;
  border-radius: 25px;
  outline: none;
  background-color: #fcfcfc;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const _TimerBtnWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

class DoTask extends Component {
  render() {
    const { todo,idx } = this.props;
    return (
      <_Wrapper>
        <div>
          <_H2>{todo.task}</_H2>
          <TomoTimerList todo={todo} left={false} />
        </div>
        <_Center>
          <_SVG>
            <circle
              r="125"
              cx="150"
              cy="150"
              fill="#fcfcfc"
              stroke="#ACACAC"
              strokeWidth="50"
            ></circle>
            <circle
              r="125"
              cx="150"
              cy="150"
              fill="transparent"
              stroke="#EA5548"
              strokeWidth="50"
            ></circle>
            <_TEXT
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              06:25
            </_TEXT>
          </_SVG>
          <_TimerBtnWrapper>
            <_TimerBtn>
              <img src={startIcon} alt="" />
            </_TimerBtn>
            <_TimerBtn>
              <img src={pauseIcon} alt="" />
            </_TimerBtn>
            <_TimerBtn>
              <img src={resetIcon} alt="" />
            </_TimerBtn>
          </_TimerBtnWrapper>
        </_Center>
        <_Bottom>
          <_CompleteBtn
            onClick={() => {
              this.props.completeTask(idx);
            }}
          >
            <img src={completeIcon} alt="" />
            <_H5>TASK COMPLETE</_H5>
          </_CompleteBtn>
        </_Bottom>
        <_Footer>
          <_H1>PODOMORO</_H1>
        </_Footer>
      </_Wrapper>
    );
  }
}
export default DoTask;
