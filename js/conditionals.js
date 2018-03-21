"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

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

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

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

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */



/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
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

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
