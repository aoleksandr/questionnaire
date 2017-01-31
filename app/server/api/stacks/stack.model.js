let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let Stack = new mongoose.Schema({
    title: String,
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
});

module.exports = mongoose.model('Stack', Stack);