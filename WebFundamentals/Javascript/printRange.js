//Two ways to do this:

var printRange = function(start, end = 0, amountToSkip){

  if(amountToSkip == null || amountToSkip == 0){
    amountToSkip = 1;
  }

  if(!end){
    end = start;
    start = 0;
  }

  for(var i=start; i<end; i+=amountToSkip){
    console.log(i);
  }
}

// 2.
// var printRange = function(start, end = 0, amountToSkip = 1){
//       if(end === null || end === 0){
//       printRange(0, start);
//     }
//
//   for(var i=start; i<end; i+=amountToSkip){
//     console.log(i);
//   }
// }
