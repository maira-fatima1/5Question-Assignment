#! /usr/bin/env node
import inquirer from "inquirer";

Question:1
//Write a jawascript function that accepts a string as a  parameter and counts the 
//the number of vowels within the string.

function countVowels(anyName : string){
let vowelCount=0;
 for(let val of anyName) {

 if(val == "a" || val == "e" ||  val == "i" || val =="o" || val == "u"){
vowelCount++; }
 }
 console.log(`Number of vowels in your string = ${vowelCount}`)}
 countVowels("aeiouAEIOU")

Question:2
// Write a jawascript function that accepts a number as a parameter and check whether 
 // it is prime or not using  recursion.

function checkPrime(number:number){

  for (let i = 2; i <number; i++){

if(number % i  == 0)
  {
   return `The ${number} is not prime number`;
  }
else
   { return `The ${number}is prime number`}
}
}
console.log("checkPrime(20)")

Question:3
//Write a jawascript function to find the first not repeated chracter.

function firstNotRepeatedChracter(string:string){
  let array=[]
    for(let val of string)
      {
      if(string.indexOf(val) === string.lastIndexOf(val))
        {
          array.push(val)
      }
    }
  return array;
}
console.log(firstNotRepeatedChracter("abcgdhyrtehkfhtrtdbvxjsh"))

Question:4
//Write a function that returns the square of a number,

function square (a:number, b:number): number {
  return a ** b;
}
console.log(square(100,5))

Question:5
// Function displayMessage () prints "Hello World"
// string using console.log() function.

let printvalue = ()=>{
  console.log("Hello World");
}
printvalue();