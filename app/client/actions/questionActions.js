import * as types from './actionTypes';
import ApiProvider from '../api/ApiProvider';
import {beginAjaxCall} from './ajaxActions';

export function loadQuestions() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return ApiProvider.fetchQuestions().then(questions => {
            dispatch({
                type: types.LOAD_QUESTIONS_SUCCESS,
                questions
            });
        });
    };
}

export function createQuestion(stackId) {
    return function (dispatch) {
        return ApiProvider.addQuestion(stackId).then(({data}) => {
            dispatch({
                type: types.CREATE_QUESTION_SUCCESS,
                question: data
            });
        });
    };
}

export function updateQuestion(questionId, data) {
    return function (dispatch) {
        return ApiProvider.updateQuestion(questionId, data).then(({data}) => {
            dispatch({
                type: types.UPDATE_QUESTION_SUCCESS,
                question: data 
            });
        });
    };
}

export function removeQuestion(questionId) {
    return function (dispatch) {
        return ApiProvider.removeQuestion(questionId).then(() => {
            dispatch({
                type: types.REMOVE_QUESTION_SUCCESS,
                id: questionId 
            });
        });
    };
}