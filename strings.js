let name1=`Martian 

game`
console.log(name1);

let name2=new String("Martian Stellar")
console.log(name2);

//concatenate 

let op1="Martian "
let op2="Stellar"

console.log(op1+op2)

console.log(`${op1}${op2}`) //back-ticks

//length

console.log(op1.length)

//case
console.log(op1.toUpperCase())
console.log(op1.toLowerCase())

//substring Methods
let str="Yo Yo Bruh!"

console.log(str.substring(2,5)); //  [2,5)

let sentence="How are u doing !!"

let words=sentence.split(' ')
console.log(words);// here words is an array


let sentence2="How are  u doing \"BROO\"!!" //in case u need double/single inverted in string
console.log(sentence2)

let sentence3="How \\are \\u \\doing \\!!";
let words2=sentence3.split('\\');  //treat \ as normal char instead of special char 
console.log(words2);

console.log(words2.join(""));