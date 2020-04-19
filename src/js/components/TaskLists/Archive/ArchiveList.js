// import React, { Component } from "react";
// import ArchiveItem from "./ArchiveItem";

// class ArchiveList extends Component {
//   constructor(props) {
//     super(props);
//     this._renderItems = this._renderItems.bind(this);
//   }

//   render() {
//     return <div>{this._renderItems()}</div>;
//   }

//   _renderItems() {
//     const { todos, unarchiveTask } = this.props;

//     let list = [];
//     todos.forEach((todo, idx) => {
//       if (todo.isArchived) {
//         list.push(
//           <ArchiveItem
//             key={idx}
//             idx={idx}
//             todo={todo}
//             unarchiveTask={unarchiveTask}
//           />
//         );
//       }
//     });
//     return list;
//   }
// }

// export default ArchiveList;
