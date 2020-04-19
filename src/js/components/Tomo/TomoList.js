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
     const {setEstimateTomo,listtype} = this.props;
    return (
      <_Wrapper>
        <TomoItem
          listtype={listtype}
          number={1}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          listtype={listtype}
          number={2}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          listtype={listtype}
          number={3}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          listtype={listtype}
          number={4}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          listtype={listtype}
          number={5}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          listtype={listtype}
          number={6}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          listtype={listtype}
          number={7}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          listtype={listtype}
          number={8}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          listtype={listtype}
          number={9}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          listtype={listtype}
          number={10}
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
      </_Wrapper>
    );
  }

}

export default TomoList;
