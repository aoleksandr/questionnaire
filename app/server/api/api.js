const router = require('express').Router();
const questionsRouter = require('./questions/questions.router.js');
const stacksRouter = require('./stacks/stacks.router.js');

router.use('/stacks', stacksRouter);
router.use('/questions', questionsRouter);

router.get('/', function (req, res) {
    res.send('hello api');
});

router.get('*', function (req, res) {
    res.status(404).send('Not found');
});



module.exports = router;