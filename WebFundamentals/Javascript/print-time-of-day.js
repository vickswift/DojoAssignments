var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

function myFunction(HOUR, MINUTE, PERIOD){
  if(MINUTE <= 30){
    if (PERIOD === "AM" || PERIOD === "am"){
    console.log("It's ", HOUR,":",MINUTE,PERIOD,"just after the hour in the morning.");
    }
  }else if(MINUTE < 60){
    if(PERIOD === "PM" || PERIOD === "pm"){
    console.log("It's ", HOUR,":",MINUTE,PERIOD,"almost the next hour in the evening.");
    }
  }
}

console.log(myFunction(6, 0, "am"));

// There are so many edge cases for this assignment that will break the code above.
//To optimize the code above, we could make the variable 'period' into a
//ternary operator and ensure hour is in a 24hr UTC format or you could create
//a new function convertTo24Hr() instead.
//(i.e. var PERIOD = HOUR < 12 ? "AM":"PM").
//With this, we could simplify myFunction to be 'function myFunction(HOUR, MINUTE)
// and pass into it, hour and minutes values as arguements and will output the
// correct time of day. I chose not to go there because this is JS basics and we
// havent treated those topics yet. And so I keep it as that.
