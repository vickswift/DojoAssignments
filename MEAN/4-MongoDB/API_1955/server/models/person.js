// require mongoose
var mongoose = require('mongoose');

// Mongoose automatically looks for the plural version lower first letter cap of your model Animal, so a Animal model in Mongoose looks for 'animals' in Mongo.
var PersonSchema = new mongoose.Schema({
 name: {type: String, required: true},
})
var Person = mongoose.model('Person', PersonSchema);
