//refrence type->arrays,objects,functions

//Two types of memory -stack and heap

//all refrence types are created in heap but refrence/pointer  to that memory is stored in stack 

//OBJECT--> Collection of key value pairs
// Value copying(Reference)

let person1 = {
    name : "Mayank",
    age : "21",
    isRunning : true
}

let person2 = person1;//shallow copy

person2.name = "Aditya"

console.log(person1.name);    // Aditya

console.log(person2.name);   // Aditya

let obj={
    name1:"Pranjal",
    "aka name":"Martian",
    age:20,
    height:"6ft 5inch",
    greet: function(){
        console.log("copy delta!!")
    }
}
console.log(obj)
obj.greet();

console.log(typeof(obj))

//Arrays-->collection of item

let arr=[1,2,3,4,5,"Martian",true]

let brr=new Array(1,2,"Martian");
console.log(brr);

//zero-based indexing
console.log(brr[2]);

//<---------Built-in Methods----------->

brr.push("Pranjal");
console.log(brr) //   [ 1, 2, 'Martian', 'Pranjal' ]
brr.pop();
console.log(brr) //   [ 1, 2, 'Martian' ]

brr.shift() // leftmost element removed
console.log(brr); // [ 2, 'Martian' ]

brr.unshift("Pranjal") // add element to leftmost side
console.log(brr);

brr.push(23,29,221)
console.log(brr);  //[ 'Pranjal', 2, 'Martian', 23, 23, 221 ]

console.log(brr.slice(0,3)); //[ 'Pranjal', 2, 'Martian' ]



const fruits = ['apple', 'orange'];

// Inserting 'banana' at index 1 and keeping deleteCount=0
fruits.splice(1, 0, 'banana');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// Inserting 'pineapple' at index 0 and delete 2 elements from index 0
fruits.splice(0,2,'pineapple') //['pineapple','orange'] apple and banana will be deleted because we have to delete 2 items starting from index 0
console.log(fruits);

//<---------Map---------->

let array=[1,2,3,4,5,6];

let newArr=array.map((num,index)=>{   //we will store it in new array after manipulating original arr nothing happens to original array 
    return num**2;
})

console.log(newArr);
console.log(array);

//<--------Filter Methods---------->


// filter() method returns a new array with elements that satisfy the condition specified in the callback function.


let array2=[1,2,3,4,5,6];
let evenArr=array2.filter((num)=>{   
    if(num%2===0){
        return true;
    }else{
        return false;
    }
})
console.log(evenArr);
console.log(array2);
//  Function to test each element of the array. It should return true to keep the element, or false otherwise.

let intArr=array2.filter((num)=>{   
    if(typeof(num)=="number"){
        return true;
    }else{
        return false;
    }
})

console.log(intArr);


//<-------Reduce Method---------->

let ans=array2.reduce((acc,curr)=>{
    return acc+curr;
},0); //initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array will be used as the initial value, and iteration starts from the second element.

console.log(ans);

//<-----sort method-------->
let array3=[4,3,2,1];
let ans2=array3.sort();
console.log(ans2);
ans2.push(5);
//index of any element

console.log(array3.indexOf(5));
console.log(ans2.indexOf(5));
//find 

//forEach and forloop

let arr5=[1,3,5,7,9]; //traditional loop
for(let i=0;i<arr5.length;i++){
    console.log(arr5[i]);
}

arr5.forEach((element,index)=> { //forEach loop 
    console.log(arr5[index]*element);
});

//forIn  (objects)

const person = {
  name: 'Mayank',
  age: 21,
  city: 'Delhi'
};

for (const key in person) {
  console.log(key + ": " + person[key])
}

console.log(person.age);
console.log(person.name)
/* Output :
name: Mayank
age: 21
city: Delhi
*/

//forOf (arrays and strings)

let arr6=[10,20,30,40]

for(let num of arr6){
    console.log(num); 
}

