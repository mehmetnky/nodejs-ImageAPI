var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
    url:{
        type:String,
        required:'Please enter an URL'
    }
},{versionKey: false });

module.exports = mongoose.model('Images', ImageSchema);