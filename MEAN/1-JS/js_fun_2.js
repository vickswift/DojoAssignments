// function sumXY(x, y) {
//     var sum = 0;
//     for (var i = x; i < y + 1; i++) {
//         sum += i;
//     }
//     return sum;
// }
//
// function findMin(arr) {
//     if (arr) {
//         var min = arr[0];
//         for (var i = 1; i < arr.length; i++) {
//             if (arr[i] < min) {
//                 min = arr[i];
//             }
//         }
//         return min;
//     }
// }
//
// function findAvg(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
//
// // Anonymous functions assigned to variables.
//
// var sumXY = function(x, y) {
//     var sum = 0;
//     for (var i = x; i < y + 1; i++) {
//         sum += i;
//     }
//     return sum;
// };
//
// var findAvg = function(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// };
//
// var findMin = function(arr) {
//     if (arr) {
//         var min = arr[0];
//         for (var i = 1; i < arr.length; i++) {
//             if (arr[i] < min) {
//                 min = arr[i];
//             }
//         }
//         return min;
//     }
// };
//
//
// //Rewrite these as methods of an object
// var myObject = {
//     sumXY: function(x, y) {
//         var sum = 0;
//         for (var i = x; i < y + 1; i++) {
//             sum += i;
//         }
//         return sum;
//     }, //end sumXY
//     findAvg: function(arr) {
//         var sum = 0;
//         for (var i = 0; i < arr.length; i++) {
//             sum += arr[i];
//         }
//         return sum / arr.length;
//     }, //end findAvg
//     findMin: function findMin(arr) {
//         if (arr) {
//             var min = arr[0];
//             for (var i = 1; i < arr.length; i++) {
//                 if (arr[i] < min) {
//                     min = arr[i];
//                 }
//             }
//             return min;
//         }
//     }
// }


var person = {
  name: "Victor Swift",
  distance_traveled: 0,
  say_name: function() {
            console.log(person.name);
          },
  say_something: function(param) {
            console.log(`${person.name} says: ${param}`);
          },
  walk: function() {
            console.log(person.name + " is walking");
            person['distance_traveled'] += 3;
            return person;
          },
  run: function() {
            console.log(person.name +" is running");
            person.distance_traveled += 10;
            return person;
          },
  crawl: function() {
            console.log(person.name + " is crawling");
             person.distance_traveled += 1;
             return person;  // This could've also been 'return this;'
          },
}


person.walk().run().crawl();
console.log(person.distance_traveled);
