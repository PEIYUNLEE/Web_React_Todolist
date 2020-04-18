import React, { Component } from "react";
import styled from "styled-components";

import tomato_small_gray from "../../../assets/icons/tomato_small_gray.png";
import tomato_small_color from "../../../assets/icons/tomato_small_color.png";

// style
const _Tomo = styled.img`
  width: ${props=>(props.estimateTomo == 0) ? "auto" : "20px"};
  &:hover{
    cursor: pointer;
  }
`;

class TomoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { estimateTomo, number, setEstimateTomo } = this.props;
    if (estimateTomo >= number) {
      return (
        <_Tomo src={tomato_small_color} estimateTomo={estimateTomo}
          id={"tomo" + number}
          onClick={() => {
            setEstimateTomo(number);
          }}
        />
      );
    }

    return (
      <_Tomo src={tomato_small_gray} estimateTomo={estimateTomo}
        id={"tomo" + number}
        onClick={() => {
          setEstimateTomo(number);
        }}
      />
    );
  }
}

export default TomoItem;
