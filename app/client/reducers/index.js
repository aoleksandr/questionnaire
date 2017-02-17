import {combineReducers} from 'redux';
import stacks from './stackReducer';
import questions from './questionReducer';

const rootReducer = combineReducers({
    stacks,
    questions
});

export default rootReducer;