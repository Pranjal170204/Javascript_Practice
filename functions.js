function name1(){
    console.log("copy delta");
}

name1(); //function call

//parameterized

function work(num){ // num is parameter
    console.log(num*4);
}

work(2); // 2 is an argument


//return functions

function getSum(a,b,c){
    let sum=a+b+c;
    return sum;
    //unreachable code
    

}
let ans=getSum(1,2,4)
console.log(ans)

console.log(greet("John")); // Output: Hello, John!  due to hoisting
function greet(name) {
    return `Hello, ${name}!`;
}

//Function expression

const getMul=function(num1,num2){
    return num1/num2;
}
console.log(getMul(1,0))




//Arrow function
const arrow1=(e)=>{
    return e**e;
}

console.log(arrow1(5));

