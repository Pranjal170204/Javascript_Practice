class human{
    //properties
    age=20;
    #wt=80; //private
    ht;
    //constructor
    constructor(newHeight,newWeight,newAge){
         this.age=newAge
         this.ht=newHeight
         this.#wt=newWeight
    }

    //behaviour

    #walking(val){
        console.log("I can walk!",this.#wt,val);

    }
    get fetchWeight(){
        return this.#wt;   //getter
    }
    get fetchWalk(){
        return this.#walking
    }
    set modifyWeight(wt2){
        this.#wt=wt2    //setter  
    }
}

let obj=new human(6,80,20);
console.log(obj.age)
// obj.walking(); //private function
obj.fetchWalk(10)
// obj.modifyWeight=99;
console.log(obj.fetchWeight);

// default parameter 

function sayName(myName="Martian" ,lname=myName.toUpperCase()){
    console.log("My name is: ",myName,lname)
}

sayName();

//we can insert arrays and object as default parameter

function info(val={age:21,ht:6,wt:80},info1=[2,3,4,5,6],info2="Pranjal"){
    console.log(val);
    console.log(info1);
    console.log(info2);
}
info(1,2,undefined); //incase of undefined argument default parameter will be considered

//function as default parameter

function getAge(){
    return 200;
}

function utility(name="Martian",age=getAge()){
      console.log(name,age);
}
utility();

