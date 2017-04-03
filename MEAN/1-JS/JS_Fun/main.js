// console.log("Welcome To SwiftNation!!!")

// var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];

// for (var i=0; i< x.length; i++){
//   console.log(x[i]);
// }

// for (var someValue in x){
// if (x.hasOwnProperty(someValue)) {
//     console.log(x[someValue]);
//   }
// }

// x.push(100);
//
// // console.log(x);
//
// x.push(["hello", "world", "JavaScript is Fun"]);
//
// console.log(x);

// x.push(["hello", "world", "JavaScript is Fun"])
// //
// console.log(x);

// Finding the sum
// var sum = 0;
//
// for (var x=1; x<501; x++){
//   sum += x;
// }
//
// console.log(sum);

// Finding the  min
// var x = [1, 5, 90, 25, -3, 0];
//
// var min = x[0];
//
// for(var i=0; i<x.length; i++){
//   if(x[i] < min){
//     min = x[i];
//   }
//   console.log(min);
// }

// Finding and printing avge
 // var arr = [1, 5, 90, 25, -3, 0];
 //
 // var sum = 0;
 //
 // for (var i = 0; i < arr.length; i++) {
 //   sum += arr[i];
 // }
 //
 // var avge = sum/arr.length;
 // console.log(avge);

// Go over the object and print key-value pairs
 var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'San Jose'
}

for (var someValue in newNinja){
if (newNinja.hasOwnProperty(someValue)) {
    console.log(someValue, newNinja[someValue]);
  }
}
