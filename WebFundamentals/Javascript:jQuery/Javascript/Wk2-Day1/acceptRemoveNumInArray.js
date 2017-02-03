var a = [1,"2","John",3,"Mavis",5];

var arrayAcceptingOnlyNums = function(arr){

  var newArr=[];

  for(var i=0; i<arr.length; i++){
    if(typeof(arr[i]) === "number"){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(arrayAcceptingOnlyNums(a));

// #2) We do not need a return in function below:

var removeArray = function(arr){

  for(var i=0; i<arr.length; i++){
    if(typeof(arr[i]) === "number"){
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(removeArray(a));
