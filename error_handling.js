//compile time error
//-->syntax error

//runtime error
//-->refrence error

// Error handling

try {
    console.log(x)
    console.log("try catch ends here")
} catch (error) {
    //define what u want to do with error
    // console.log("error inside catch block");
    // console.error(error);

    throw new Error("First declare variable x") //custom error 

}
finally{
    console.log("I will run everytime")
}//will always run 





