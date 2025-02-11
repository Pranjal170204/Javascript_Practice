// the async/await syntax provides a more concise and readable way to work with Promises, making asynchronous code appear synchronous.

async function getData(){ //async function always return promise
    setTimeout(()=>{
        console.log("I am inside set timeout Block")

    },2000)
}
getData()

console.log(2)



//fetch api


async function getData1(){
    //get req
    let resp= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(await resp.json());

}

getData1()


// scenario:
//prepare api endpoint->sync
// await //fetchd data -->async
//print->sync



//await:-->

// The await keyword can only be used inside an async function. 
// It pauses the execution of the function until the Promise is resolved, then returns the resolved value. 
// If the Promise is rejected, it throws an error.

async function fetchData3() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
  
      const otherResponse = await fetch('https://api.example.com/other-data');
      const otherData = await otherResponse.json();
      console.log(otherData);
    } catch (error) {
      console.error('Error:', error);  // Handles any errors in one place
    }
  }
  
  fetchData3();


//   If a Promise inside an async function is rejected and you don't handle it with try...catch, 
// the async function will also return a rejected Promise.

async function fetchData() {
    const response = await fetch('https://invalid-url.com');  // This will reject
    const data = await response.json();
    return data;
  }
  
  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error("Fetch error:", error.message));//Fetch error: Failed to fetch --output
  

//When you use try...catch inside an async function, any errors that occur within the try block are caught, 
// and the function completes without rejecting the Promise (unless you manually re-throw the error).

async function safeFunction() {
    try {
      const response = await fetch('https://invalid-url.com');  // This will throw an error
      const data = await response.json();
      return data;  // Won't reach here
    } catch (error) {
      console.error('Caught inside async function:', error.message);
      return { error: 'Handled error internally' };  // Returning a resolved value
    }
  }
  
  safeFunction()
    .then(result => console.log('Result:', result))  // This will run
    .catch(error => console.error('Caught outside:', error.message));  // This won't run
//   The .catch() outside does not run because the Promise isn't rejected.


//if you want the error to propagate outside the function, you can re-throw it inside the catch block.

async function riskyFunction() {
    try {
      const response = await fetch('https://invalid-url.com');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Caught inside, but re-throwing:', error.message);
      throw error;  // This rethrows the error, causing the Promise to reject
    }
  }
  
  riskyFunction()
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Caught outside:', error.message));  // This will run



    
//     Summary
// If you use try...catch inside an async function and handle the error properly, the Promise will not reject outside.
// If you re-throw the error inside the catch block, the Promise will reject, and you can catch it outside.
// If you don't use try...catch, any error will cause the Promise to reject automatically, and you must handle it outside.