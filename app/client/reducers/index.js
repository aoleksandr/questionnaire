import {combineReducers} from 'redux';
import stacks from './stackReducer';

const rootReducer = combineReducers({
    stacks
});

export default rootReducer;