import React, { Component } from "react";
import DoneItem from "./DoneItem";

class DoneList extends Component {
  constructor(props) {
    super(props);

    this._renderItems = this._renderItems.bind(this);
  }

  render() {
    return <div>{this._renderItems()}</div>;
  }

  _renderItems() {
    const { todos, archiveTask, redoTask } = this.props;

    let list = [];
    todos.forEach((todo, idx) => {
      if (todo.isCompleted) {
        list.push(
          <DoneItem
            key={idx}
            idx={idx}
            todo={todo}
            archiveTask={archiveTask}
            redoTask={redoTask}
          />
        );
      }
    });
    return list;
  }
}

export default DoneList;
