// let todo = [];

// let req = prompt("Please enter the request");


// while(true) {
//     if(req === "quit"){
//         console.log("quitting app");
//         break;
//     }

//     if(req === "list"){
//         console.log("-----------------------");
//         for(let i = 0; i<todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("-----------------------");
//     }else if(req === "add"){
//         let task = prompt("Please enter the task you want to add");
//         todo.push(task);
//         console.log("Task Added");
//     }else if( req === "delete"){
//         let idx = prompt("Please enter the task you want to delete");
//         todo.splice(idx, 1);
//         console.log("Task deleted");
//     } else{
//         console.log("Wrong Task");
//     };
//      req = prompt("Please enter the request");

// };



// guessing game


// const max = prompt("Enter the max number");

// const random = (Math.floor(Math.random() *max) +1 );

// let guess  = prompt("Guess the number");

// while(true){
//     if(guess === "quit"){
//         console.log("User quiting");
//         break;
//     };

//     if(guess == random){
//         console.log("You are right!,  Congrats!! random number was ",  random);
//         break;
//     } else if(random < guess){
//         guess = prompt("Your number is too high");
        
//     }else {
//         guess = prompt("Your number is too low");
        
//     };
// };