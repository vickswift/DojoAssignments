module.exports = function Route(app){

  // root route to render the index.ejs view
  app.get('/', function(req, res) {
   res.render("index");
  })
  // post route for adding a data from a survey
  	app.post('/result', function(req, res) {
  		// submitted_info = {
  			req.session.name= req.body.name;
  			req.session.dojo_location= req.body.dojo_location;
  			req.session.fave_language= req.body.fave_language;
  			req.session.comment= req.body.comment;
  		// };
     res.redirect('/success');

  	});

  app.get('/success', function(request, response){
    results_info = {
      name: request.session.name,
      dojo_location: request.session.dojo_location,
      favorite_language: request.session.fave_language,
      comment: request.session.comment,
    }
    response.render("results", {user_data: results_info})
  });

}
