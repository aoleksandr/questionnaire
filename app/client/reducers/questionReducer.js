import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.questions, action) {
    switch (action.type) {
        case types.LOAD_QUESTIONS_SUCCESS:
            return action.questions;
        case types.CREATE_QUESTION_SUCCESS:
            return [...state, Object.assign({}, action.question)];
        case types.UPDATE_QUESTION_SUCCESS:
            return state.map(question => question._id === action.question._id ? action.question : question);
        case types.REMOVE_QUESTION_SUCCESS:
            return state.filter(question => question._id !== action.id);
        case types.REMOVE_STACK_SUCCESS:
            return state.filter(question => question.stack !== action.id);
        default:
            return state;
    }
}