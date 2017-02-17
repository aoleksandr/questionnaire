let mongoose = require('mongoose');
mongoose.Promise = global.Promise;


let Stack = new mongoose.Schema({
    title: String
});

Stack.pre('remove', function (next) {
    this.model('Question').remove({
        stack: this._id
    }).then(()=> {
        next();
    });
});

module.exports = mongoose.model('Stack', Stack);