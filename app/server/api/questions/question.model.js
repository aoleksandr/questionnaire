let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let Question = new mongoose.Schema({
    title: String,
    progress: Number,
    stack: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stack'
    }
});

module.exports = mongoose.model('Question', Question);