$(document).ready(function(){

$('.images').each(function(){
    for(var i=1; i<=151; i++){
      $(this).append('<img id=' + i + ' src="http://pokeapi.co/media/img/' + i + '.png" alt="pokemon_img">');
      $("img").css(
        {"width":"150px", "height":"150px"});
      $("img").css("border", "3px solid red");
    }
});

$("img").on("click", function(){
    var x = ($(this).attr('id'));

    $.get("http://pokeapi.co/api/v1/pokemon/" + x, function(res) {

      var html_str_name = "";
      var html_str_types = "";
      var html_str_height = "";
      var html_str_weight = "";

      //name
      html_str_name += "<h4>Name</h4>";
      html_str_name += "<p>";

      //type
      html_str_types += "<h4>Types</h4>";
      html_str_types += "<ul>";

      //height
      html_str_height += "<h4>Height</h4>";
      html_str_height += "<p>";


      //Weight
      html_str_weight += "<h4>Weight</h4>";
      html_str_weight += "<p>";

      for(var i = 0; i < res.types.length; i++) {
          html_str_types += "<li>" + res.types[i].name + "</li>";
      }
      html_str_types += "</ul>";

      html_str_name += res.name + "</p>";
      html_str_height += res.height + "</p>";
      html_str_weight += res.weight + "</p>";

      $("#selected-pokemon-name").html(html_str_name);
      $("#selected-pokemon-type").html(html_str_types);
      $("#selected-pokemon-height").html(html_str_height);
      $("#selected-pokemon-weight").html(html_str_weight);

      $("#pokedex-image").html('<img src="http://pokeapi.co/media/img/' + x + '.png" ">');
    }, "json");

  });

});
