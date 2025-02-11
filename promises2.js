let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"First");
})
let promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"Secons");
})
let promise3=new Promise((resolve,reject)=>{
    setTimeout(reject,2000,"Third rejected");
})

//promise.ALL

Promise.all([promise1,promise2,promise3]).then(v=>{
    console.log(v);
}).catch(e=>{
    console.error(e);
})
