module.exports = function Route(app){

  // Require the Mongoose Module
  var mongoose = require('mongoose');

  //Require/import the animals.js from controller folder.
  var peopleController = require('./../controllers/people.js');

// *********************** Routes ***************************
  // Root Request
  app.get('/', function(req, res) {
    res.json({key:'value'})
  });

  //Create new Person
  app.get('/people', peopleController.getEverybody);
  app.post('/people', peopleController.createPerson);
  app.get('/people/:id', peopleController.showPersonInfo);



//   // Display Animal info
//   app.get('/animals/:id', function(request, response) {
//     peopleController.showAnimalInfo(request, response);
//   });
//
//   // Edit animal info
//   app.get('/animals/edit/:id', function(req, res) {
//     peopleController.editAnimalInfo(req, res);
//   });
//
//   //Post new message to db and redirect info to root route
//   app.post('/animals', function(request, response) {
//     peopleController.postNewMessage(request, response);
//   });
//
// //Update animal info
//   app.post('/animals/:id', function(req, res) {
//     peopleController.updateAnimalInfo(req, res);
//   });
//
// //Delete animal
//   app.get('/animals/destroy/:id', function(req, res) {
//     peopleController.deleteAnimalInfo(req, res);
//   });

}
