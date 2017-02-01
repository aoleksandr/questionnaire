let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let Question = new mongoose.Schema({
    title: String,
    progress: Number
});

Question.pre('remove', function(next) {
    this.model('Stack').update(
        { questions: this._id }, 
        { $pull: 
            { questions: this._id } 
        })
    .then(() => {
        next();
    });
});

module.exports = mongoose.model('Question', Question);