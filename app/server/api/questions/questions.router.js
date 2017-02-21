const router = require('express').Router();
const Question = require('./question.model');
const Stack = require('../stacks/stack.model');

router.get('/', (req, res) => {
    setTimeout(function () {
        Question.find().then(questions => {
            res.json(questions);
        });
    }, 1000);
});

router.post('/', (req, res) => {
    Question.create({
        title: '',
        progress: 0,
        stack: req.body.stackId
    }).then(question => {
        Stack.update({
            _id: req.body.stackId
        }, {
            $push: {
                questions: question._id
            }
        }).then(() => {
            res.json({
                status: 'ok',
                data: question
            });
        });
    });
});

router.put('/:questionId', (req, res) => {
    Question.findOneAndUpdate({
        _id: req.params.questionId
    }, req.body, {
        new: true
    }).then(question => {
        res.json({
            status: 'ok',
            data: question
        });
    });
});

router.delete('/:questionId', (req, res) => {
    Question.findOne({
        _id: req.params.questionId
    }).then(question => {
        question.remove().then(() => {
            res.json({
                status: 'ok'
            });
        });
    });
});

module.exports = router;