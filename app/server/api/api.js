const routes = require('express').Router();
const Stack = require('./stacks/stack.model');
const Question = require('./questions/question.model');

// stacks

routes.get('/stacks', (req, res) => {
    Stack.find().then(stacks => {
        res.json(stacks);
    });
});

routes.get('/stacks/:stackId', (req, res) => {
    Stack.findOne({_id: req.params.stackId}).populate('questions').then(stack => {
        res.json(stack);
    });
});

// questions

routes.post('/questions', (req, res) => {
    Question.create({title: '', progress: 0}).then(question => {
        Stack.update({_id: req.body.stackId}, {$push: {questions: question._id}}).then(()=> {
            res.json({status: 'ok', data: question});
        });
    });
});

routes.put('/questions/:questionId', (req, res) => {
    Question.findOneAndUpdate({_id: req.params.questionId}, req.body).then(() => {
        res.json({
            status: 'ok'
        });
    });
});

routes.delete('/questions/:questionId', (req, res) => {
    Question.findOne({_id:req.params.questionId}).then(question => {
        question.remove().then(()=> {
            res.json({status:'ok'});
        });
    });
});

routes.get('/', function (req, res) {
    res.send('hello api');
});

routes.get('*', function (req, res) {
    res.status(404).send('Not found');
});



module.exports = routes;