"use strict";






// var name = prompt("Enter your name:");
//
// function sayHello(name){
//     return ("Hello, " + name + "!");
// }

//alert(sayHello(name));







// var helloMessage = sayHello(name);
// console.log(helloMessage);









// var myName = name;
// console.log(sayHello(myName));
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random



// var random = Math.floor((Math.random() * 3) + 1);
//









// function isTwo(random){
//     if (random === 2){
//         return isTwo=true;
//     }
//     else{
//         return isTwo=false;
//     }
// }
//
// console.log(isTwo(random));








// var tipPercent=prompt("What percent do you want to tip?");
// tipPercent = Number(tipPercent);
// tipPercent = tipPercent / 100;
// tipPercent = tipPercent.toFixed(2);
//
// var totalBill=prompt("How much is the bill?");
// totalBill = Number(totalBill);
//
// function calculateTip(tipPercent, totalBill) {
//     return ("You should tip $" +(tipPercent * totalBill));
// }
//
// console.log(calculateTip(tipPercent, totalBill));







// alert(calculateTip(tipPercent, totalBill));






var originalPrice = prompt("How much is the original price?");
originalPrice= Number(originalPrice).toFixed(2);
console.log("Original price is $" + originalPrice);

var discount = prompt("What percentage discount are you applying?");
discount = Number(discount);
discount = (discount / 100).toFixed(2);
console.log("Discount applied is: " + discount);

function applyDiscount(discount, originalPrice){
    return (originalPrice - (originalPrice * discount)).toFixed(2);
}

console.log ("Final price is $" + applyDiscount(discount, originalPrice));
alert("Your final price will be $" + applyDiscount(discount, originalPrice));