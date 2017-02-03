
function daysUntilMyBirthday(counter){

  while (counter > 0) {
  console.log("You have ",counter, "days left");
      if(counter === 30){
        console.log("You're still too young to drive. Sorry!");
      }else if(counter < 30){
        console.log("You're nearing your legal driving age. Yay!");
      }else if(counter < 5){
        console.log("Get Excited bro. You're about to get your driving license soon")
      }
   counter--;
}
  console.log("HAPPY BIRTHDAY!!!");
}
