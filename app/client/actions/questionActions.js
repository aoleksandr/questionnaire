import * as types from './actionTypes';
import ApiProvider from '../api/ApiProvider';

export function createStack(stack) {
    return {
        type: types.CREATE_STACK,
        stack
    };
}

function loadStacksSuccess(stacks) {
    return {
        type: types.LOAD_STACKS_SUCCESS,
        stacks
    };
}