import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadStacks} from './actions/stackActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './style.scss';

const store = configureStore();
store.dispatch(loadStacks());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, 
    document.getElementById('app')
);