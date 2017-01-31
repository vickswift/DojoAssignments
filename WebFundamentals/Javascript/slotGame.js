var winningGame = function(quarters){

var winningNum = 7;

for (var i=quarters; i>= 0; --i){

      var randomNumCoins = Math.floor(Math.random() * 100);

        if(winningNum === randomNumCoins){
            var money =  (Math.floor(Math.random() * 51)+50);
            // console.log(money + quarters);
            return (money + quarters);

      }

   }
  return 0;
}


console.log(winningGame(49));
