//Get 1 to 255
function num() {
  var ar = [];
  for (var i = 1; i <= 255; i++) {
    ar.push(i);
  }
  console.log(ar);
  return ar;
}
num();
//Get even 1000
function even() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}
even();
//Sum odd 5000
function odd() {
  var sum = 0;
  for (var i = 1; i <= 5000; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}
odd();

// Iterate an array
function iterate() {
  var sum = 0;
  var ar = [];
  for (var i = 1; i < ar.length; i++) {
    sum += ar[i];
  }
  return ar;
}
iterate();
//Find max
function max() {
  var ar = [];
  var max = ar[0];
  for (var i = 1; i < ar.length; i++) {
    if (ar[i] > ar[0]) {
      max = ar[i];
    }

    return max;
  }
}
max();
// Find average
function average() {
  var sum = 0;
  var avg = 0;
  var ar = [];
  for (var i = 0; i < ar.length; i++) {
    sum += ar[i];
    avg = sum / ar.length;
  }
  console.log(avg);
  return avg;
}
average();
//Array odd
function odd() {
  var ar = [];
  for (var i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      ar.push(i);
    }
  }
  console.log(ar[i]);
  return ar;
}
odd();
//Greater than Y


function Greater(ar, y) {
    var counter = 0;
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] > y) {
      counter++;
    }
  }
  return counter;
}
Greater();
//Squares

function square(ar) {
  for (var i = 0; i < ar.length; i++) {
    ar[i] = ar[i] * ar[i];
  }
  return ar;
}
square();

//Negatives
function negative(ar) {
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] < 0) {
      ar[i] = 0;
    }
  }
  return ar;
}
negative();

//Max/Min/Avg
function op(ar) {
  var max = ar[0];
  for (var i = 1; i < ar.length; i++) {
    if (ar[i] > ar[0]) {
      max = ar[i];
    }
  }
  var min = ar[0]
    for (var i = 1; i <ar.length ; i++) {
 
    if (ar[i]> ar[0])
    {
        min= ar[i];
    }

 }
 var sum = 0;
  var avg = 0;
  var ar = [];
  for (var i = 0; i < ar.length; i++) {
    sum += ar[i];
    avg = sum / ar.length;
  }
  arr[0] = max;
  arr[1] = min;
  arr[2] = avg;

  while(arr.length>3)
  {
      arr.pop();
  }
  return arr;
}
op();

//Swap Values

function swap(ar){
    var temp = ar[0];
    ar[0]= ar[ar.length-1];
    ar[ar.length-1]= temp;
    return ar ;
}
swap();
//Number to String
function string (ar) {
    for (var i = 0; i < ar.length; i++) {
      if (ar[i] < 0) 
      {
        ar[i] ='Dojo';
      }
    }
    return ar;
  }
  string();