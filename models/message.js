/**
 * Created by neelkrishna on 8/9/16.
 */
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    content: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Message', schema);