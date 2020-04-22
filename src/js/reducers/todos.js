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
          doneTomo: action.doneTomo,
          timerType: action.timerType, //BREAK
          timer: action.timer,
          timerState: action.timerState,
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
          doneTomo: 0,
          timerState: "DO", //BREAK
          timer: [25, 0, "25:00"],
          timerState: "PAUSE",
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
          timerState: "PAUSE",
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
    case types.SET_TIMER:
      return [
        ...state.slice(0, action.idx),
        Object.assign({}, state[action.idx], {
          timer: action.timer,
        }),
        ...state.slice(action.idx + 1),
      ];
      break;
    case types.SET_TIMERTYPE:
      return [
        ...state.slice(0, action.idx),
        Object.assign({}, state[action.idx], {
          timerType: action.timerType,
        }),
        ...state.slice(action.idx + 1),
      ];
      break;
    case types.SET_TIMERSTATE:
      return [
        ...state.slice(0, action.idx),
        Object.assign({}, state[action.idx], {
          timerState: !timerState
        }),
        ...state.slice(action.idx + 1),
      ];
      break;
    default:
      return state;
      break;
  }
}

// case types.UNARCHIVE_TASK:
//   return [
//     ...state.slice(0, action.idx),
//     Object.assign({}, state[action.idx], {
//       isArchived: false,
//     }),
//     ...state.slice(action.idx + 1),
//   ];
//   break;
