
function fewBillion(penny, daysToReceiveReward = 30){
var arr = [];

for(var i=1; i<=daysToReceiveReward; i++){

    if(i === 1){
      arr.push(penny);
    }else{
      penny = penny + penny; 
      arr.push(penny);
    }
 }
return arr;
}

//
//Q) How much was the reward after 30 days?
// Answer: The servant will be rewarded $5368709.12

// Q)How many days would it take the servant to make $10,000?
// Answer: 21

// How about 1 billion?
// Answer: 38

// In JavaScript, there is a value Infinity, how many days until the servant has infinite money?
// Answer: 1033
