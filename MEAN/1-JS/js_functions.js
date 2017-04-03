// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!');
//  Give it the name runningLogger.
//
//  Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result.
//  Give it the name multiplyByTen. Invoke it, passing it the argument
//
//  5. Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
//
//  Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful),
// invoke the argument. Nothing is returned.
//
// Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions,
// console.log the value that each, when invoked, returns.
//
// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds,
// and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.)
// The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.


// Basic Function 1
// function runningLogger() {
//   console.log('I am running');
// }

// Basic Function 2
// function multiplyByTen(num1) {
//   var product = num1 * 10;
//   return product;
// }
// var prdt = multiplyByTen(5)
// console.log(prdt);

// Basic Function 3
function stringReturnOne() {
  return ("Hello Vic Swift")
}

function stringReturnTwo() {
  return ("This is VicNation")
}

function caller(param) {
  if (typeof(param)=='function'){
    param();
  }
//
// }
// caller(stringReturnOne)

// Basic Function #4
// function myDoubleConsoleLog(param1,param2){
//   if (typeof(param1) == 'function' && typeof(param2) == 'function'){
//     console.log(param1(), param2());
//   }
// }
// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

// Basic Fuction #5
// more interesting, we hope!
function caller2(param){
  console.log('starting...');
  setTimeout(function(){
    if (typeof(param)==='function'){
      // notice the passed parameters...
      param(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log('ending');
  return "interesting";
}

console.log(caller2(myDoubleConsoleLog));
