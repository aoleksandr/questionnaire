const routes = require('express').Router();

let id = 10;

let stacks = [{
    title: 'Stack 1',
    id: 1
}, {
    title: 'Stack 2',
    id: 2
}];

let questions = [{
    title: 'What is JS',
    progress: 5,
    id: 1
}, {
    title: 'What is ReactJs',
    progress: 3,
    id: 3
}];

routes.get('/stacks', (req, res) => {
    res.json(stacks);
});

routes.get('/stacks/:stackId', (req, res) => {
    let response = stacks.find(stack => stack.id === parseInt(req.params.stackId, 10));
    response.questions = questions;
    res.json(response);
});

routes.post('/questions', (req, res) => {
    id++;
    res.json({
        status: 'ok',
        data: {
            id: id,
            title: '',
            progress: 0
        }
    });
});

routes.delete('/questions/:questionId', (req, res) => {
    res.json({
        status: 'ok'
    });
});

routes.get('/', function (req, res) {
    res.send('hello api');
});

routes.get('*', function (req, res) {
    res.status(404).send('Not found');
});



module.exports = routes;