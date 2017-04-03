console.log('routes');

// Require path
var path = require('path');
//Require/import the friends.js from controller folder.
var friendsController = require('./../controllers/friends.js');

module.exports = function(app){
  app.get('/friends', friendsController.index);
  app.get('/friends/:id', friendsController.show);
  app.post('/friends', friendsController.create);
  app.put('/friends/:id', friendsController.update);
  app.delete('/friends/:id', friendsController.delete);
};
