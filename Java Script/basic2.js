//Biggie Size
function big(ar) {
    for (var i = 0; i < ar.length; i++) {
      if (ar[i] >0) 
      {
        ar[i] ="Big";
      }
    }
    return ar;
  }
  big();

  //Print Low, Return High
 function lowhigh (arr)
 {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return min;
    return max;
  }
  lowhigh();
//Print One, Return Another
function re (ar)
{
    for (var i = 1; i < ar.length; i++) 
    {
        console.log (ar[i]);
    }
    for (var i = 0; i < ar.length; i++) 
   if (ar[i] % 2 !== 0)
    {
        console.log(ar);
       break;

        }
        console.log(ar);
           return ar[i];
    }
    re();
     //Double Vision 
function double (ar)
{  var ar=[1,2,3];
    var newar=[];
    for ( var i =0 ; i<ar.length ; i++ )
    {

 newar.push(ar[i] * 2);

    }
    return newar;
} 
double();

//Count Positives
function positive (arr)
{
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        counter++;
      }
    }
    arr[arr.length - 1] = counter;
    return arr;
  }

positive();

//Evens and Odds
function evenodd (arr) 
{
    var evenCounter = 0;
    var oddCounter = 0;
    for (var i = 0; i < arr.length; i++) 
    {
      if (arr[i] % 2 == 0) 
      {
        evenCounter++;
        oddCounter=0;
      }
      if (arr[i] % 2 == 1) 
      {
        oddCounter++;
        evenCounter=0;
      }
      if(evenCounter ==3)
      {
          console.log("Even more so!");
          evenCounter = 0;
      }
      if(oddCounter ==3)
      {
          console.log("That's odd!");
          oddCounter = 0;
      }
    }
}
evenodd();
//Increment the Seconds 
 function inc ( arr)
 {
     for ( var i =0; i<arr.length ; i++)
     {
         if ( i %2 !==0)
         {
             arr[i]=arr[i]+1;
      
          }
          console.log(arr[i]);
     }
     return arr;
 }
 inc();

 //Previous Lengths
 function string (arr)
 {
for (var i =0 ; i<arr.length;i++){


    if ( typeof (arr[i] == "string" && arr[i-1] == "string"))
    {

    
   
            arr[i] = arr[i - 1].length;
    }
}

          return arr;
       
 }
 string();
 //Add Seven
  function add (ar)
  { var newar=[];
      for (var i =0 ; i< ar.length; i++)
      {
          ar[i]= ar[i]+7;
          newar.push(ar[i]);

      }
      return newar;
  }
  add();
  //Reverse Array 
  function reverse (ar)
  {
      return ar.reverse();
  }
 //Outlook: Negative
function neg (arr)
 var newArr = [1,-2,-3];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.push(arr[i]);
    } else {
      newArr.push(arr[i] * -1);
    }
  }

//Always Hungry
function Hungry (ar)
{
var counter = 0;

for ( var i = 0; i<ar.length; i++)
{
    if ( ar[i] == "food")
    {
        console.log("yummy");
              counter ++;
     }

    if ( counter == 0)
    {
        console.log("I'm Hungry");
    }
}
}
//Swap Toward the Center 
function swapTowardsTheCenter(arr) {
    var len = arr.length;
    var idx = 0;
    var lastIdx = arr.length - 1;
    while (idx <= len / 2 && lastIdx >= len / 2) {
      var temp = arr[idx];
      arr[idx] = arr[lastIdx];
      arr[lastIdx] = temp;
      idx = idx + 2;
      lastIdx = lastIdx - 2;
    }
    return arr;
  }


//Scale the Array
function scale(arr, num) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * num;
    }
    return arr;
  }