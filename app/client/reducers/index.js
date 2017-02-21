import {combineReducers} from 'redux';
import stacks from './stackReducer';
import questions from './questionReducer';
import ajaxCalls from './ajaxReducer';

const rootReducer = combineReducers({
    stacks,
    questions,
    ajaxCalls
});

export default rootReducer;