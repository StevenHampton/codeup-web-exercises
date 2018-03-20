"use strict";

// var LittleMermaid = prompt("How many days are you renting The Little Mermaid?");
// LittleMermaid = Number(LittleMermaid);
// var BrotherBear = prompt("How many days are you renting Brother Bear");
// BrotherBear = Number(BrotherBear);
// var Hercules= prompt("How many days are you renting Hercules?");
// Hercules = Number(Hercules);
// var Totalcost = LittleMermaid + BrotherBear + Hercules;
// Totalcost = Totalcost * 3;
// alert("Your total price will be $" + Totalcost);
//
//
// var googleHours = prompt("How many hours have you worked at Google this week?");
// var googleTotal = Number(googleHours) * 400;
// var amazonHours = prompt("How many hours have you worked at Amazon this week?");
// var amazonTotal = Number(amazonHours) * 400;
// var facebookHours = prompt("How many hours have you worked at Facebook this week?");
// var facebookTotal = Number(facebookHours) * 400;
// var totalRevinue = facebookTotal + amazonTotal + googleTotal;
// alert("Your total salary this week is $" + totalRevinue);

// var classFull = confirm("Is the class full?");
// var classConflict = confirm("Is this time free on your current schedule?");
//
// var canEnroll = classFull === true && classConflict ===true;
// if (canEnroll === true) {
//     alert("You can enroll");
// }
// Else{
//     alert("You cannot enroll");
// }





var member = confirm("Are you a premium member?");

if(member === true){
    alert("You qualify for the offer!")
}

else{
    var items = prompt("How many items are you buying today?");
    items = Number(items);
        if(items >=2){
            alert("You qualify for the offer");
        }
        else{
            alert("Sorry you do not qualify for the offer today");
        }
}
