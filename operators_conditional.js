//Arithmetic operators--> Unary &  Binary

//-->Binary
console.log(2+3.43);
console.log(2*4.5)
console.log(1.5/4.5)

console.log(3.54%3);
console.log(3**3)

//-->Unary
let a=0;
let b=a++;// first assign 0 to b then increment a value to 1
let c=++a;// first increment value from 1 to 2 then assign 2 to c
console.log(b);
console.log(c);
console.log(a++);//post-increment
console.log(++a);//pre-increment

//Assignment operators
let d;
d=10
d += 10;
console.log(d);

//Comparison operators

console.log(10>=5)//true;
console.log(10<=0.34)//false;

//->strict equality and loose equality


let x = "10";
console.log(typeof(x));        // string

let y = 10;
console.log(typeof(y));         // number

console.log(x == y);            // true

console.log(x === y);           // false


//Ternary operator

let myAge = 21;

(myAge >= 18) ? (console.log("Can Drive")) : (console.log("Cannot Drive")); // Output : Cannot Drive


//Logical operator

//-->AND operator
//--> OR operator
//--> NOT operator

let alert1 = true;
let alert2 = false;
let alert3 = true;

console.log(alert1 && alert2);    // false
console.log(alert2 && alert3);    // false
console.log(alert1 && alert3);    // true

let num1 = 0;
let num2 = 1;
let num3 = 1;

console.log(num1 && num2);    // 0
console.log(num2 && num3);    // 1
console.log(num1 && num3);    // 0
//--->Working with non-booleans
    //->Falsy(undefined,null,0,false,NaN,'')
    //->Truthy(Everything which is not Falsy)
    //->Short-Circuiting
    console.log(false||false||3||"Yoyo");
    console.log(false||false||"Yoyo");


//Bitwise Operator

// -->Bitwise AND (&)
    
let num10 = 5;
// Binary representation of 5 : 0 1 0 1

let num20 = 7;
// Binary representation of 7 : 0 1 1 1

console.log(num10 & num20);         // 5

// -->Bitwise OR (|)

let num11 = 5;
// Binary representation of 5 : 0 1 0 1

let num22 = 8;
// Binary representation of 7 : 1 0 0 0

console.log(num11| num22);         // 13

//-> Bitwise NOT operator


let num12 = 5;// Binary representation of 5 : 0 0 0 0 1 0 1

let num23 = 8;// Binary representation of 7 : 0 0 0 1 0 0 0

let num34 = -8;// Binary representation of -8 : 1 1 1 1 0 0 0
// if MSB is 1 then num is -ve ,then take 1's complement and add 1 to make it 2's complement to get negative number

console.log(~num12);    // -6
console.log(~num23);    // -9
console.log(~num34);    // 7

//--> Bitwise XOR operator

let num15 = 5;// Binary representation of 5 : 0 0 0 0 1 0 1

let num25 = 8;// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(num15 ^ num25);     // 13

// Left Shift (<<)


let num16 = 5;// Binary representation of 5 : 0 0 0 0 1 0 1

let num26 = 8;// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(num16 << 3);     // 40 , 5 gets multipied by 2^3
console.log(num26 << 2);     // 32 , 8 gets multiplied by 2^2

// Right Shift (>>)

let num17 = 5;// Binary representation of 5 : 0 0 0 0 1 0 1

let num27 = 8;// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(num17 >> 3);     // 0
console.log(num27 >> 2);     // 2



// CONDITIONALS

//if-else
let weight = 65;

if (weight > 70) {
    console.log("You are Overweight");
} else if (weight > 50 && weight <= 70) {
    console.log("You are Fit");
} else {
    console.log("You are Underweight");
}// Output : "You are Fit"

