var mongoose = require("mongoose");
var Person = mongoose.model('Person');

module.exports = {
  // This is where we will retrieve the animals from the database and include them in the view page we will be rendering.
 getEverybody: function(req, res) {
   Person.find({}, function(err, fetched_person) {
     if (err) {
       res.json(err);
       return;
     }else{
       console.log("Successfully fetched people(s):", fetched_person);
       res.json(fetched_person)
      //  res.render('index', {animals: fetched_animals});
     }
   })
  },
   //Create new animal
   createPerson: function(request, response) {
     var person = new Person(req.body);
     person.save(function(err, aPerson) {
       if (err) {
         res.json(err);
         return;
       }
       res.json(aPerson);
     });
   },
   //Show/Display person info
   showPersonInfo: function(req, res) {
     Person.findOne({ _id: req.params.id }, function(err, data) {
       if (err) {
         res.json(err);
         return;
       }
       res.json(data);
     });
   }
  //  //Edit: Takes you to edit page where you can edit animal info
  //  editAnimalInfo: function(req, res) {
  //    Animal.find({ _id: req.params.id }, function(err, response) {
  //      if (err) {
  //        console.log(err);
  //      }
  //      res.render('edit', { animal: response[0] });
  //    });
  //   },
  //   //Update animal
  //   updateAnimalInfo: function(req, res) {
  //     Animal.update({ _id: req.params.id }, req.body, function(err, result){
  //       if (err) {
  //         console.log("Unable to Update animal",err);
  //       }
  //       res.redirect('/');
  //     });
  //   },
  //   //Delete animal info
  //   deleteAnimalInfo: function(req, res) {
  //     Animal.remove({ _id: req.params.id }, function(err, result){
  //       if (err) {
  //         console.log("Unable to remove animal",err);
  //       }
  //       res.redirect('/');
  //     });
  //   },
  //   //Post new message to db and redirect info to root route
  //   postNewMessage: function(req, res) {
  //     console.log("POST DATA", req.body);
  //     // create a new Animal with the name and description corresponding to those from req.body
  //     var animal = new Animal({name: req.body.inputName, description: req.body.inputDescription, color: req.body.inputColor});
  //     // Try to save that new animal to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  //     animal.save(function(err) {
  //       // if there is an error console.log that something went wrong!
  //       if(err) {
  //         console.log('something went wrong');
  //       } else { // else console.log that we did well and then redirect to the root route
  //         console.log('successfully added an animal!');
  //         res.redirect('/');
  //       }
  //     });
  //   }
}
