const routes = require('express').Router();

routes.get('*', function(req, res) {
    res.send('hello api again');
});

module.exports = routes; 