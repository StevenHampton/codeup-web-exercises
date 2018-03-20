"use strict";

// function identity() {
//
// }


// var num = prompt("please enter a number to see if it's odd");
// num = Number(num);
//
// function isOdd(num) {
//     if((num%2) === 1){
//         return isOdd=true;
//     }
//     else{
//         return isOdd=false;
//     }
// }
// console.log(num + " is a odd number: " + isOdd(num));


// var num = prompt("please enter a number to see if it's even");
// num = Number(num);
//
// function isEven(num) {
//     if((num%2) === 0){
//         return isEven=true;
//     }
//     else{
//         return isEven=false;
//     }
// }
// console.log(num + " is a even number: " + isEven(num));


// var num = prompt("Enter a number to see if its positive");
// num = Number(num);
//
// function isPositive(num) {
//     if(num > 0){
//         return isPositive=true;
//     }
//     else{
//         return isPositive=false;
//     }
// }
//  console.log(num + " is a positive number: " + isPositive(num));


// var num = prompt("Enter a number to see what one less than it is.");
// num = Number(num);
//
// function decrement(num){
//     return (num-1);
// }
// console.log(decrement(num));


// var sentence = prompt("Type something in and i'll tell you if it has spaces");
// function hasSpaces(sentence){
//     if(sentence.indexOf(" ") !== -1) {
//         return hasSpaces = true;
//     }
//     else {
//         return hasSpaces = false;
//     }
// }
// console.log("Your sentence contains spaces: " + hasSpaces(sentence));

// var num = prompt("Enter a number and i'll tell you if it's 5.");
// num = Number(num);
// function isFive(num) {
//     if(num === 5){
//         return isFive = true;
//     }
//     else {
//         return isFive = false;
//     }
// }
// console.log(num + " = 5: " + isFive(num));


// var num = prompt("Enter a number and I will square it!");
// num = Number(num);
// function square(num){
//     return (num * num);
// }
// console.log(num + " squared equals " + square(num));


// var num = prompt("Enter a number and I will cube it!");
// num = Number(num);
// function cube(num){
//     return (num * num * num);
// }
// console.log(num + " cubed equals " + cube(num));


// var num = prompt("Enter a number and I will halve it!");
// num = Number(num);
// function half(num){
//     return (num / 2);
// }
// console.log(num + " halved equals " + half(num));


// var num = prompt("Enter a number and I will double it!");
// num = Number(num);
// function double(num){
//     return (num * 2);
// }
// console.log(num + " doubled equals " + double(num));

var username = prompt("Enter a username.");
var password = prompt("Enter in a password.");
function isValidPassword(password, username){
    if((password.length > 4)) {
        if ((password.substring(username) === -1 )){
            if (password.length <= 20) {
                return true;
            }
    else {
        return false;
    }
}
console.log("Your password is valid: " + isValidPassword(password, username));