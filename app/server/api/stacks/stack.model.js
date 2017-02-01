let mongoose = require('mongoose');
mongoose.Promise = global.Promise;


let Stack = new mongoose.Schema({
    title: String,
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
});

Stack.pre('remove', function (next) {
    this.model('Question').remove({
        _id: {
            $in: this.questions
        }
    }).then(()=> {
        next();
    });
});

module.exports = mongoose.model('Stack', Stack);