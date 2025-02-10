var a=10//global scope

//function scoped

function sayHell(){
    var name1="Pranjal"
    console.log(name1);
}
//console.log(name1);     //not defined because var is function scoped
sayHell();

//block scoped
{
    var a=12;
    let b=12;
    const c=0;

}
console.log(a); //will log
console.log(b);
console.log(c); // block-scoped therefore not defined for let and const

//temporal dead zone
