import * as types from "../constants/ActionTypes";


export default function todos(state = [], action) {
  switch (action.type) {
    case types.INITIAL_TASK:
      return [
        ...state,
        {
          task: action.task,
          isCompleted: action.isCompleted,
          estimateTomo: action.estimateTomo,
          // isArchived: action.isArchived,
        },
      ];
      break;
    case types.ADD_TASK:
      return [
        ...state,
        {
          task: action.task,
          isCompleted: false,
          estimateTomo: action.estimateTomo,
          // isArchived: false,
        },
      ];
      break;
    case types.EDIT_TASK:
      return [
        ...state.slice(0, action.idx),
        Object.assign({}, state[action.idx], {
          task: action.task,
          estimateTomo: action.estimateTomo,
        }),
        ...state.slice(action.idx + 1),
      ];
      break;
    case types.COMPLETE_TASK:
      return [
        ...state.slice(0, action.idx),
        Object.assign({}, state[action.idx], {
          isCompleted: true,
        }),
        ...state.slice(action.idx + 1),
      ];
    case types.REDO_TASK:
      return [
        ...state.slice(0, action.idx),
        Object.assign({}, state[action.idx], {
          isCompleted: false,
        }),
        ...state.slice(action.idx + 1),
      ];
      break;
    case types.ARCHIVE_TASK:
      return [
        ...state.slice(0, action.idx),
        // Object.assign({}, state[action.idx], {
        //   isArchived: true,
        // }),
        ...state.slice(action.idx + 1),
      ];
      break;
    // case types.UNARCHIVE_TASK:
    //   return [
    //     ...state.slice(0, action.idx),
    //     Object.assign({}, state[action.idx], {
    //       isArchived: false,
    //     }),
    //     ...state.slice(action.idx + 1),
    //   ];
    //   break;
    default:
      return state;
      break;
  }
}
