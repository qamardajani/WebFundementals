function greeting(){
        return "Hello";
        console.log("World");
    }
    var word = greeting();
    console.log(word);

     /* T-diagram : 
     var : Hello 
     result : Hello 
     */


     function add(num1, num2){
            console.log("Summing Numbers!");
            console.log("num1 is: " + num1);
            console.log("num2 is: " + num2);
            var sum = num1 + num2;
            return sum;
        }
        var result1 = add(3,5);
        var result2 = add(4,7);
        console.log(result1);
        console.log(result2);
         

        /*
        T-diagram :
        result1 : summing Numbers! , num1 is 3 , num2 is 5 
        result2 : summing Numbers! , num2 is 4 , num2 is 7 
        return : 8 , 11 
        result of the function  : summing Numbers! , num1 is 3 , num2 is 5 , summing Numbers! , num2 is 4 , num2 is 7 
        ,8 , 11 

        */

        function highFive(num){
                for(var i=0; i<num; i++){
                    if(i == 5){
                        console.log("High Five!");
                    }
                    else{
                        console.log(i);
                    }
                }
            } 
           // there is no value to print 