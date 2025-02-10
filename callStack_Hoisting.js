name1("Pranjal") //function Hoisting

function name1(finalName){
    console.log(finalName);
}

console.log(age); //undefined because only declaration move on to the top of scope
var age=13;


console.log(num);//Cannot access 'num' before initialization 
let num=24;//same for const


//using function expression

sayHello(); //ReferenceError: Cannot access 'sayHello' before initialization
let sayHello=function(){
    console.log("Hi there")
}


//Class dosn't allow hoisting


//Function call stack-It is a DS which stores elements in LIFO order

//Function-first class citizen

