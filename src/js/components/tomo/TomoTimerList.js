import React, { Component } from "react";
import styled from "styled-components";

// style
const _Wrapper = styled.div`
  display: flex;
  height: 8px;
  margin-top: ${(props) => (props.left == false ? "10px" : "5px")};
  justify-content: ${(props) => (props.left == false ? "center" : "start")};
`;
const _Svg = styled.svg`
  width: ${(props) => (props.left == false ? "14px" : "10px")};
  height: ${(props) => (props.left == false ? "14px" : "10px")};
  & circle {
    stroke: #ea5548;
    stroke-width: ${(props) => (props.left == false ? "2px" : "1px")};
    fill: none;
  }
  margin-right: ${(props) => (props.left == false ? "10px" : "6px")};
`;

class TomoTimerList extends Component {
  constructor(props) {
    super(props);

    this._renderItems = this._renderItems.bind(this);
  }

  render() {
    const { left } = this.props;
    return <_Wrapper left={left}>{this._renderItems(left)}</_Wrapper>;
  }

  _renderItems(left) {
    const estimateTomo = this.props.todo.estimateTomo;

    let list = [];
    for (let i = 0; i < estimateTomo; i++) {
      if (left) {
        list.push(
          <_Svg key={i} left={left}>
            <circle cx="5" cy="5" r="4"></circle>
          </_Svg>
        );
      } else {
        list.push(
          <_Svg key={i} left={left}>
            <circle cx="7" cy="7" r="5"></circle>
          </_Svg>
        );
      }
    }
    return list;
  }
}

export default TomoTimerList;
