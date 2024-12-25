const express = require("express");
const { string } = require("joi");
const app = express();


const port = 9090;

app.get("/", (req, res) =>{
    for (let i = 2; i <= 100; i++) { // Start from 2 (the smallest prime number)
        let isPrime = true;
    
        for (let j = 2; j < i; j++) { // Check divisors from 2 to one less than the number
            if (i % j === 0) { // If divisible, it's not a prime number
                isPrime = false;
                break; // Exit the loop early for efficiency
            }
        }
    
        if (isPrime) {
            console.log(i); // Print the number if it is prime
        }
    }
    
//     let data = [1, 2, 3, 4, 5, 5, 6, 6];
//    for( let i = 0; i>5; i++){
    
//    }
//   console.log(newData);
   

    // res.send("Hello World");
    // console.log("1234");

    
});

app.listen(port, () =>{
    console.log(`server is running on ${port}`);
    
});



// if( color === "red"){
//     console.log("Stop");
// }if (color === "yellow"){
//     console.log("Warning");
// }if(color === "green"){
//     console.log("You Can go");
// };

str = "apple";
