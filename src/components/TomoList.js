import React, { Component } from "react";

import TomoItem from "./TomoItem";

class TomoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estimateTomo:props.estimateTomo
    };

    this.setEstimateTomo = this.setEstimateTomo.bind(this);
  }

  render() {
    const { estimateTomo } = this.props;
    // const setEstimateTomo = this.props.setEstimateTomo;
    return (
      <div>
        <TomoItem
          number="1"
          estimateTomo={estimateTomo}
          setEstimateTomo={this.setEstimateTomo}
        />
        <TomoItem
          number="2"
          estimateTomo={estimateTomo}
          setEstimateTomo={this.setEstimateTomo}
        />
        <TomoItem
          number="3"
          estimateTomo={estimateTomo}
          setEstimateTomo={this.setEstimateTomo}
        />
      </div>
    );
  }

  setEstimateTomo(number){
    this.props.setEstimateTomo(number)
    this.setState({
      estimateTomo:number
    })
  }

}

export default TomoList;
