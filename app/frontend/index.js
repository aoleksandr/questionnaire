import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './style.scss';

render(
    <Router history={browserHistory} routes={routes} />, 
    document.getElementById('app')
);