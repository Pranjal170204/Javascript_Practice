var age1=25;

if(true){
    console.log(age1);
}

// var is function scoped

function  solve(){
    var age=23;

}

console.log(age);
//age is not defined

//redeclaration and re initialisation is possible

//let is Blocked-scoped

{
let a=10;
}
console.log(a);//not defined
//redeclaration is not possible using let 

