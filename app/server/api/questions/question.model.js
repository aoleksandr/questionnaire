let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let Question = new mongoose.Schema({
    title: String,
    progress: Number
});

module.exports = mongoose.model('Question', Question);