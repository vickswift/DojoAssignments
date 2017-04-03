module.exports = function Route(app){

  // Require the Mongoose Module
  var mongoose = require('mongoose');

  // Use native promises
  // mongoose.Promise = global.Promise;

  // Mongoose automatically looks for the plural version of your model name, so a Dog model in Mongoose looks for 'dogs' in Mongo.
  var AnimalSchema = new mongoose.Schema({
   name: {type: String, required: true},
   description: {type: String, required: true},
   color: {type: String, required: true}
  })
  mongoose.model('Animal', AnimalSchema); // We are setting this Schema in our Models as 'User'
  var Animal = mongoose.model('Animal') // We are retrieving this Schema from our Models, named 'User'


  // Routes
  // Root Request
  app.get('/', function(req, res) {
      // This is where we will retrieve the animals from the database and include them in the view page we will be rendering.
      Animal.find({}, function(err, fetched_animals) {
        if (err) {
          console.log("Unable to fetch animal!!");
        }else{
          console.log("Successfully fetched animal(s):", fetched_animals);
          res.render('index', {animals: fetched_animals});
        }
      });
  })

  app.get('/animals/new', function(req, res) {
      res.render('create')
  })

  // Show
  app.get('/animals/:id', function(req, res) {
    Animal.find({ _id: req.params.id }, function(err, response) {
      if (err) {
        console.log(err);
      }
      res.render('display_more_info', { animal: response[0] });
    });
  })

  // Edit
  app.get('/animals/edit/:id', function(req, res) {
    Animal.find({ _id: req.params.id }, function(err, response) {
      if (err) {
        console.log(err);
      }
      res.render('edit', { animal: response[0] });
    });
  })



  // When the user presses the submit button on index.ejs it should send a post request to '/users'.  In
  //  this route we should add the user to the database and then redirect to the root route (index view).
  app.post('/animals', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new Animal with the name and description corresponding to those from req.body
    var animal = new Animal({name: req.body.inputName, description: req.body.inputDescription, color: req.body.inputColor});
    // Try to save that new animal to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    animal.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added an animal!');
        res.redirect('/');
      }
    });
  })

//Update
  app.post('/animals/:id', function(req, res) {
    Animal.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) {
        console.log("Unable to Update animal",err);
      }
      res.redirect('/');
    });

  })

//Delete
  app.get('/animals/destroy/:id', function(req, res) {
    Animal.remove({ _id: req.params.id }, function(err, result){
      if (err) {
        console.log("Unable to remove animal",err);
      }
      res.redirect('/');
    });

  })

}
