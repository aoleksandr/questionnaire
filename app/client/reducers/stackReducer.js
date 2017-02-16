import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_STACK:
            return [...state, Object.assign({}, action.stack)] ;
        case types.LOAD_STACKS_SUCCESS:
            return action.stacks;
        default:
            return state;
    }
}