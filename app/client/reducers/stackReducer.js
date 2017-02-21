import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.stacks, action) {
    switch (action.type) {
        case types.LOAD_STACKS_SUCCESS:
            return action.stacks;
        case types.CREATE_STACK_SUCCESS:
            return [...state, Object.assign({}, action.stack)];
        case types.REMOVE_STACK_SUCCESS:
            return state.filter(stack => stack._id !== action.id);
        default:
            return state;
    }
}