import * as types from '../constants/ActionTypes';

// action creator
// export function initialTask(task,estimateTomo,isCompleted){
//     return {
//         type: types.INITIAL_TASK,
//         task,
//         estimateTomo,
//         isCompleted
//     };
// }

export function addTask(task,estimateTomo){
    return {
        type: types.ADD_TASK,
        task,
        estimateTomo,
    };
}

export function editTask(idx, task,estimateTomo){
    return {
        type: types.EDIT_TASK,
        idx,
        task,
        estimateTomo,
    };
}

export function completeTask(idx){
    return {
        type: types.COMPLETE_TASK,
        idx,
    };
}

export function redoTask(idx){
    return {
        type: types.REDO_TASK,
        idx,
    };
}

export function archiveTask(idx){
    return {
        type: types.ARCHIVE_TASK,
        idx,
    };
}

export function setTimer(idx,timer){
    return {
        type: types.SET_TIMER,
        idx,
        timer
    };
}

export function setTimerType(idx,timerType){
    return {
        type: types.SET_TIMERTYPE,
        idx,
        timerType
    };
}

export function setTimerState(idx){
    return {
        type: types.SET_TIMERTYPE,
        idx,
    };
}

// export function unarchiveTask(idx){
//     return {
//         type: types.UNARCHIVE_TASK,
//         idx,
//     };
// }

