import React, { Component } from "react";

import TomoItem from "./TomoItem";

class TomoList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   estimateTomo: 0,
    // };
    // this.tomoChecked = this.tomoChecked.bind(this);
  }

  render() {
    const { estimateTomo } = this.props;
    const setEstimateTomo = this.props.setEstimateTomo;
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
        <div>{"tomo：" + estimateTomo}</div>
      </div>
    );
  }

//   tomoChecked(number) {
//     //   this.setState({
//     //     estimateTomo: number,
//     //   });
//     this.props.setEstimateTomo(number);
//   }
}

export default TomoList;
