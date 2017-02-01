const router = require('express').Router();
const Stack = require('./stack.model');

router.get('/', (req, res) => {
    Stack.find().then(stacks => {
        res.json(stacks);
    });
});

router.get('/:stackId', (req, res) => {
    Stack.findOne({_id: req.params.stackId}).populate('questions').then(stack => {
        res.json(stack);
    });
});

module.exports = router;