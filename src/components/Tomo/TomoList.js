import React, { Component } from "react";

import TomoItem from "./TomoItem";

class TomoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const estimateTomo  = this.props.estimateTomo;
     const {setEstimateTomo} = this.props;
    return (
      <div>
        <TomoItem
          number="1"
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          number="2"
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <TomoItem
          number="3"
          estimateTomo={estimateTomo}
          setEstimateTomo={setEstimateTomo}
        />
        <div>{"Tomo："+estimateTomo}</div>
      </div>
    );
  }

}

export default TomoList;
