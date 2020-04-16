import React, { Component } from "react";

import TomoItem from "./TomoItem";

class TomoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estimateTomo: 0,
    };
    this.tomoChecked = this.tomoChecked.bind(this);
  }

  render() {
    return (
      <div>
        <TomoItem
          number="1"
          estimateTomo={this.state.estimateTomo}
          tomoChecked={this.tomoChecked}
        />
        <TomoItem
          number="2"
          estimateTomo={this.state.estimateTomo}
          tomoChecked={this.tomoChecked}
        />
        <TomoItem
          number="3"
          estimateTomo={this.state.estimateTomo}
          tomoChecked={this.tomoChecked}
        />
        <div>{"tomo："+this.state.estimateTomo}</div>
      </div>
    );
  }

  tomoChecked(number) {
      this.setState({
        estimateTomo: number,
      });
  }
}

export default TomoList;
