import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/AppComponent';
import StacksPage from './components/stacks/StacksPage';
import QuizPage from './components/quiz/QuizPage';
import QuestionsPage from './components/questions/QuestionsPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={StacksPage} />
        <Route path="stack" component={QuestionsPage} />
        <Route path="play" component={QuizPage} />
    </Route>
);