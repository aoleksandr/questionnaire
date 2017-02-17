import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
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