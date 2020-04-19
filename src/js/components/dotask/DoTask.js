import React, { Component } from "react";
import styled from "styled-components";

import TomoTimerList from "../tomo/TomoTimerList";
// style
const _Wrapper = styled.div`
  background-color: #eaeaea;
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;
const _H2 = styled.h2`
  color: #333333;
  text-align: center;
`;
const _Top = styled.div`
  border: 1px solid red;
`;
const _Center = styled.div`
  border: 1px solid red;
  height: 400px;
  margin-top: 50px;
`;
const _Bottom = styled.div`
  border: 1px solid red;
  height: 17px;
  margin-top: 50px;
`;
const _Footer = styled.footer`
  border: 1px solid red;
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

class DoTask extends Component {
  render() {
    const { todo } = this.props;
    return (
      <_Wrapper>
        <_Top>
          <_H2>My First Task</_H2>
          <TomoTimerList todo={todo} left={false} />
        </_Top>
        <_Center></_Center>
        <_Bottom></_Bottom>
        <_Footer>
          <_H1>PODOMORO</_H1>
        </_Footer>
      </_Wrapper>
    );
  }
}
export default DoTask;
