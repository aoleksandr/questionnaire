import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_QUESTIONS_SUCCESS:
            return action.questions;
        case types.CREATE_QUESTION_SUCCESS:
            return [...state, Object.assign({}, action.question)];
        case types.UPDATE_QUESTION_SUCCESS:
            return state.map(question => question._id === action.question._id ? Object.assign(question, action.question) : question);
        case types.REMOVE_STACK_SUCCESS:
            return state.filter(question => question.stack !== action.id);
        default:
            return state;
    }
}