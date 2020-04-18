import * as types from '../constants/ActionTypes';

// action creator
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

export function unarchiveTask(idx){
    return {
        type: types.UNARCHIVE_TASK,
        idx,
    };
}

