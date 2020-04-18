import React, { Component } from "react";
import styled from "styled-components";

import TomoItem from "./TomoItem";

// style
const _Wrapper = styled.div`
  display:flex;
  justify-content:space-between;
`;

class TomoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const estimateTomo  = this.props.estimateTomo;
     const {setEstimateTomo} = this.props;
    return (
      <_Wrapper>
        <TomoItem
          number={1}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          number={2}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          number={3}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          number={4}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          number={5}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          number={6}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          number={7}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          number={8}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          number={9}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          number={10}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
      </_Wrapper>
    );
  }

}

export default TomoList;
