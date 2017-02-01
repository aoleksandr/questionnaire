import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/AppComponent';
import StacksPage from './components/stacks/StacksPage';
import QuizPage from './components/quiz/QuizPage';
import QuestionsPage from './components/questions/QuestionsPage';
import NotFoundPage from './components/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={StacksPage} />
        <Route path="stack/:stackId" component={QuestionsPage} />
        <Route path="quiz/:stackId" component={QuizPage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);