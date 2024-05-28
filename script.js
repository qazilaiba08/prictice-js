
// let weight = +prompt("Enter your weight");
// let time = +prompt("Enter your time");

// if(!(weight > 300 || time < 6)) {
//      alert("Come to our tryout!");
//      }
//      else {
//      alert("Come to our cookout!");
//     }
    
// let x = 4;
// let y = 8;
// let a = 16;
// let b = 20;
// let c= 34;
// let d = 40;

// if ((x === y || a === b) && c === d) {
    
//     console.log("Correct");
// } else {
   
//     console.log("Incorrect");
// }

// let temperature = 15;
// let isSunny = true;

// if(temperature > 10){
//   console.log("It's hot outside!");

//   if(isSunny){
//       console.log("Don't forget to wear sunscreen.");
//   }
//   else{
//     console.log("You might still want to wear sunscreen.");
//   }
// }
// else{
//     console.log("its a normal day!");
// }

// let age = 18;
// let weight = 78;
//  if(age > 17){
//     if(weight > 45){
// console.log("Your are in range");
// } 
// else{
//     console.log("You are out of range");

// }
// }
// else { 
//         console.log("Have a Good weight");
// }

// let signal = prompt("input a color road traffic signal");

// if (signal === "red") {
//     alert("stop traffic");
// }
// else if(signal === "yellow"){
//     alert("ready to go");
// }
// else if(signal === "green"){
//     alert("move on");
// }
// else{
//     alert("other");
// }

// chap Arrays



let string = ["pakistan","labnana","afghnastan"];
console.log(string[2].length);

let num = [1,2,3,4,5,6,7,8,9];
console.log(num);

let mixedArray = ["laiba",true,78,"pakistan",35];
mixedArray.push("thailand")
console.log(mixedArray);

//to string ... integers convert to string
let integer = ["ball",34, true,"bar"];
console.log(integer.toString());

// unshift ... start to add 
let grent = ["pakistan","europ","dubai","labnan"];
grent.unshift("suadia arbia");
console.log(grent);

//shift ... start to remove
let Grent = ["pakistan","europ","dubai","labnan"];
Grent.shift(1);
console.log(Grent);

//slice ... kahi sa bhi add or remove or changes krwata ha

let fruits = ["banana","mango",'apple',"graps",'watermellon'];
console.log(fruits.slice(3));

//splice ....

let  Fruits = ["banana","mango",'apple',"graps",'watermellon'];
console.log(Fruits.splice(2));