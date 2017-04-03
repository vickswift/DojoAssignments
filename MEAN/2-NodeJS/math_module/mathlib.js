module.exports = function (){
  return {
    add: function(num1, num2) {
         // add code here
         console.log("The sum is: ", num1 + num2);
    },
    multiply: function(num1, num2) {
         // add code here
         console.log("The product is: ", num1 * num2);
    },
    square: function(num) {
         // add code here
         console.log("The square is: ", num * num);
    },
    random: function(num1, num2) {
         // add code here
         random_num = Math.floor(Math.random()*(num2-num1+1)+num1);
         console.log("Random number between "+ num1 + " and " + num2 + " is: "+ random_num);
      }
  }
};
