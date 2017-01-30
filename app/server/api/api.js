const routes = require('express').Router();

routes.get('/stacks', (req, res) => {
    res.json([{
        title: 'Stack 1',
        id: 1
    }, {
        title: 'Stack 2',
        id: 2
    }]);
});

routes.get('/stacks/:stackId', (req, res) => {
    res.json([{
        title: 'What is JS',
        progress: 5,
        id: 1
    }, {
        title: 'What is ReactJs',
        progress: 3,
        id: 3
    }]);
});

routes.get('/', function (req, res) {
    res.send('hello api');
});

routes.get('*', function (req, res) {
    res.status(404).send('Not found');
});



module.exports = routes;