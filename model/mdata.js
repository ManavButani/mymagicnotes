var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MagicNotes', {useNewUrlParser: true, useUnifiedTopology: true});
var con = mongoose.connection;

var datamodelSchema =  new mongoose.Schema({
    title: String,
    note : String,
});

var datamodelModel = mongoose.model('datamodel',datamodelSchema);
module.exports = datamodelModel;