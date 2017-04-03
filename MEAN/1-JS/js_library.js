console.log("ready");

var _ = {
  map: function(arr, iteratee) {
    //code here;
    for (var i = 0; i < arr.length; i++) {
      arr[i] = iteratee(arr[i]);
    }
    return arr;
  },
  reduce: function(arr, callback, memo) {
    // code here;

    if (!memo){
      memo = arr[0];
    }
    for (var i = memo; i < arr.length; i++){
       memo = callback(arr[i], memo); 
    }
    return memo;
  },
  find: function(arr, callback) {
    // code here;
    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
  },
  filter: function(arr, unicorn) {
    // code here;
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
      if (unicorn(arr[i])){
       temp.push(arr[i]);
     }
    }
    return temp;
  },
  reject: function(arr, callback) {
    // code here;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
         newArr.push(arr[i]);
      }
    }
    return newArr;
  },
}

// let double = _.map([2,3,5], function(number){ return number + 5});
// console.log(double);

let sum = _.reduce([5,3,7,4], function(valueInArray, memo){ return valueInArray + memo}, 1);
console.log(sum);

let search = _.find([3,8,1,9], function(param){ return param === 20});
console.log(search);

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);

var notOdd = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 1; });
console.log(notOdd);
