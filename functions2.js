function greet(){
    console.log("How are you!")
}

function greetMe(greet,firstName){ //passing function as an argument 
    console.log("Hello "+firstName)
    greet();
}

greetMe(greet,"Pranjal")

//returning Function

 function solve(num){
    return function(num2){
        return num*num2;
    }
 }

 let ans=solve(5)
 console.log(ans(6)); 

 //functions in array

 const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a**b;
    },function(a,b){
        return a*b;
    }
 ]
 let add=arr[0]; 
 console.log(add(5,5));

 //functions in obj

 const obj={
    a:10,
    b:23,
    Height:"800 m",
    greet: function(num){
        return (num*num);
    }
 }
 console.log(obj.greet(10));