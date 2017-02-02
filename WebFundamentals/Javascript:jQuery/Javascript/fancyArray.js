var x = [ 'James', 'Jill', 'Jane', 'Jack' ];

var fancyArray = function (arr, passSymbol, reverse = false){
//   if (!reverse) {var reverse = false;}

  if(reverse){
   for (var k = 0; k < arr.length; k++){
     //when I do arr.length/2, I only get two printed out.
     //Should it not be all the four?? like #2 below::
            var temp = arr[k];
            arr[k] = arr[arr.length-(1+k)];
            arr[arr.length-(1+k)] = temp;
         console.log(k +" "+passSymbol +" " + arr[k]);
      }
  }else {
    for(var i=0; i<arr.length; i++){
    console.log(i +" "+passSymbol +" " + arr[i]);
  }
 }
}


console.log(fancyArray(x, "~~>", true));

// #2) Single array reversal function.
// var a = [1,2,3,4,5];
// var a = [ 'James', 'Jill', 'Jane', 'Jack' ];
//
//
//         for (var k = 0; k < a.length/2; k++){
//             var temp = a[k];
//             a[k] = a[a.length-(1+k)];
//             a[a.length-(1+k)] = temp;
//
//           }
//
// console.log(a);
