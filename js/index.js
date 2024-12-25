
// let str = "aaaa";

// if((str.length > 3) && (str[0] === "a") ){
//     console.log("Good String");
// }else{
//     console.log("bad String");
    
// }


// let name = prompt("Enter You name");
// console.log(name);


// console.log(str.);



// let months = ["january", "july", "march", "august"];


// // months.shift();
// // months.shift();
// // months.unshift("june");
// // months.unshift("july");

// months.splice(0, 2, "july", "june");
// console.log(months);



// let tic = [["x", null, "o"], [null, "x", null], ["o", null, "x"]];
// tic[0][1] = "o";
// // tic.splice(0[1], 1, ["x", "o", "o"]);
// console.log(tic);

// let num = [1, 2, 3, 4, 5, 5, 6, 6];
// let uniqueNum = [];
// // let uniqueNum = [...new Set(num)];
// for (let i = 0; i < num.length; i++){
//     if(!uniqueNum.includes(num[i])){
//         uniqueNum.push(num[i]);
//     }
// }

// console.log(uniqueNum);


// for(let i= 1; i<=15; i++){
//     if( (i%2) !== 0){
//         console.log(i);
//     }
// };


// for(let i=15; i>= 1; i--){
//     if((i % 2) !== 0){
//         console.log(i);
//     };
// };

// for(let i = 2; i<= 10; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// };


// for(let i = 10; i>=2; i--){
//     if(i%2===0){
//         console.log(i);
        
//     }
// }
 

// for(let i = 5;  i<=50; i= i+5){
//     console.log(i);
// }

// let n = prompt("Enter the Number");
// n= parseInt(n);

// for(let i =n; i<=n*10; i = i+n){
//     console.log(i);
// };


// for(let i = 1; i<=3; i++){
//     for(let j = 1; j<=3; j++){
//         console.log(j);
//     }
// }

// let i = 1;

// while(i<=5){
//     console.log(i);
//     i++;
// };


// let i = 0;

// while(i<=20){
//     console.log(i);
//     i++;
// };


// let favMovie = "avatar";

// let guess = prompt("Enter Movie Name");

// while((guess != favMovie) && (guess != "quit")){
//     guess=  prompt("Wrong Guess It Again");
   
// };


// if(guess == favMovie){
//     console.log("Congrats!!!");
// }else{
//     console.log("You Loose");
    
// }


// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(let fruit of fruits){
//     console.log(fruit);
// };

// for(let i = 0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
    
// }

// let heros = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];


// for(list of heros){
//     for(hero of list){
//         console.log(hero);
//     };
// };

// for(let i = 0; i< heros.length; i++){
//     for(let j = 0; j<heros[i].length; j++){
//         console.log(heros[i][j]);
//     };
// };

// let students = [["aman", 95], ["shradha", 96], ["karan", 100]];

// for(let i = 0; i<students.length; i++){
//     for(let j = 0; j<students[i].length; j++){
//         console.log(students[i][j]);
//     }
// };

// let randomNum =  (Math.floor(Math.random() *100) + 1);
// console.log(randomNum);

//  rollDice = () => {
//     console.log(Math.floor(Math.random() *6) +1)
// };

// rollDice();


// const sum = (a, b) =>{
//     console.log(a+b);
// };

// sum(2, 3);

// console.log("Hi There");
// setTimeout( () =>{
//     console.log("Apna College");
    
// }, 4000)

// console.log("Welcome to");


// let square = (n) =>{
//     console.log(n*n);
// };


// square(3);



// let num = [1, 2, 3, 4];

// let double = num.map((el) =>{
//     return el * el
// });


// console.log(double);


// let arr = [1,3,5,7,880,9,0,66];

// let max = -1;

// for(let i= 0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i]
//     };
// };

// console.log(max);

// let res = arr.reduce((max, el)=>{
//     if(el> max){
//         return el;
//     }else{
//         return max;
//     };
// });

// console.log(res);


let arr = [20, 30, 40, 50, 4];

// let res= arr.every((el) => el%10 == 0 );

// console.log(res);


let ans = arr.reduce((min, el) =>{
    if(min< el){
        return min;
    }else{
        return el;
    };
});

console.log(ans);


