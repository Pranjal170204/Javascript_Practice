

//setTimeOut
function greet(name,val) {
  console.log("Hello, " + name + "!"+val);
}

setTimeout(greet, 1000, "Alice",90); // Call greet with "Alice" after 1 second


const timeoutId = setTimeout(() => {
    console.log("This message won't be displayed");
}, 500);

clearTimeout(timeoutId); // Cancel the scheduled timeout

//promise-->A Promise is an object representing the eventual completion or failure of an asynchronous operation, and its resulting value. 
// It allows us to write asynchronous code in a more sequential and readable manner.

let firstPromise=new Promise((resolve,reject)=>{
    setTimeout(function (){
        console.log("My name is Martian")
        resolve("Fullfilled");
        console.log(firstPromise)
    },2000);
    

})
console.log(firstPromise)



let promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(!!success){
        resolve("Promise fulfilled")
    }else{
        reject("Promise rejected!");
    }
})

promise1.then((message)=>{ //chaining promises
    console.log("Then ka msg is "+message);
    return "Promise fulfilled second message";
}).then(m=>{
    console.log(m);
    return 22;
    
}).catch(error=>{
    console.log("Error: "+error)
    
}).finally(m1=>{
    console.log("gonna run anyways")
})
    

