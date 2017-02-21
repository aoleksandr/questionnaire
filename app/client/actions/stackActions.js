import * as types from './actionTypes';
import ApiProvider from '../api/ApiProvider';
import {beginAjaxCall} from './ajaxActions';

export function loadStacks() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return ApiProvider.fetchStacks().then(stacks => {
            dispatch({
                type: types.LOAD_STACKS_SUCCESS,
                stacks
            });
        }).catch(error => {
            throw (error);
        });
    };
}

export function createStack(title) {
    return function (dispatch) {
        return ApiProvider.addStack(title).then(({data}) => {
            dispatch({
                type: types.CREATE_STACK_SUCCESS,
                stack: data
            });
        }).catch(error => {
            throw (error);
        });
    };
}

export function removeStack(id) {
    return function (dispatch) {
        return ApiProvider.removeStack(id).then(() => {
            dispatch({
                type: types.REMOVE_STACK_SUCCESS,
                id
            });
        }).catch(error => {
            throw (error);
        });
    };
}