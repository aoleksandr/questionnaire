const router = require('express').Router();
const Stack = require('./stack.model');

router.get('/', (req, res) => {
    Stack.find().then(stacks => {
        res.json(stacks);
    });
});

router.post('/', (req, res) => {
    Stack.create(req.body).then(stack => {
        res.json({
            status:'ok',
            data: stack
        });
    });
});

router.delete('/:stackId', (req, res) => {
    Stack.findOne({_id: req.params.stackId}).then(stack => {
        stack.remove().then(() => {
            res.json({status: 'ok'});
        });
    });

});

router.get('/:stackId', (req, res) => {
    Stack.findOne({_id: req.params.stackId}).then(stack => {
        res.json(stack);
    });
});

module.exports = router;