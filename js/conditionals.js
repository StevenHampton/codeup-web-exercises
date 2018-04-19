"use strict";



// var choice = confirm("Would you like to enter a number?");
// function isEven(num){
//     if (num % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function add100(num){
//     return num + 100;
// }
// function isPos(num){
//     if (num < 0){
//         return "This number is negative";
//     }
//     else if (num > 0){
//         return "This number is positive";
//     }
//     else{
//         return "This number is zero";
//     }
// }
// if (choice){
//   var num = prompt("Choose a number.");
//   num = Number(num);
//
//       if(isNaN(num)){
//           alert("That is not a number!!")
//       }
//       else{
//           if (isEven(num)){
//               alert("Your number is even.");
//           }
//           else {
//               alert("Your number is odd.");
//           }
//           alert("Your number plus 100 is " + add100(num));
//           alert(isPos(num));
//      }
// }
// else{
//     alert("I didn't want you to pick a number anyways!");
// }

/* ########################################################################## */


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)


// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// var choose = prompt("Please choose a color");
// choose = choose.toLowerCase();
// function analyzeColor(choose) {
//     switch(choose){
//         case 'red':
//             return "Red is the color of roses.";
//             break;
//             case 'orange':
//            return "Orange is the color of oranges.";
//             break;
//         case 'yellow':
//             return "Yellow is the color of Lemons.";
//             break;
//         case 'green':
//             return "Green is the color of grass.";
//             break;
//         case 'blue':
//             return "Blue is the color of the sky.";
//             break;
//         default:
//             return "I don't know anything about " + choose;
//             break;
//
//     }
// }
// alert(analyzeColor(choose));



/* ########################################################################## */


var totalNum = prompt("Enter how much your total is today.");
totalNum = Number(totalNum);
// var luckyNum = prompt("Enter your lucky number between 0 and 4");
var luckyNumber = Math.floor(Math.random() * 6);

function calculateTotal(luckyNumber, totalNum){
    switch (luckyNumber){
        case 0:
            return "$" + totalNum + " is your total today.";
            break;
        case 1:
            return "$" + (totalNum-(totalNum *.10)) + " is your total today.";
            break;
        case 2:
            return "$" + (totalNum-(totalNum *.25)) + " is your total today.";
            break;
        case 3:
            return "$" + (totalNum-(totalNum *.35)) + " is your total today.";
            break;
        case 4:
            return "Today your items are free!!!!";
            break;
        default:
            return "That was not a choice in lucky numbers, you will be charged the normal price of $" + totalNum;
            break;
    }
}

alert (calculateTotal(luckyNumber, totalNum));


// Generate a random number between 0 and 6
