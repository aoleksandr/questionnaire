import * as types from '../actions/actionTypes';
import initialState from './initialState';

// function actionTypeEndsInSuccess(actionType) {
//     return !!actionType.match(/_SUCCESS$/);
// }

export default function ajaxReducer(state = initialState.ajaxCalls, action) {
    if (action.type === types.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if ([types.LOAD_QUESTIONS_SUCCESS, types.LOAD_STACKS_SUCCESS].includes(action.type)) {
        return state - 1;
    }

    return state;
}