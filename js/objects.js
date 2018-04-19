(function() {
    "use strict";




    var person = {
            firstName: "Steven",
            lastName: "Hampton",
            sayHello: function () {
                return("Hello from " + this.firstName + " " + this.lastName + "!");
            }
    };





    console.log(person.sayHello());



    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shoppers) {
        if (shoppers.amount >= 200){
            var discount = (shoppers.amount * .12).toFixed(2);
            return console.log(shoppers.name + " spent $" + shoppers.amount +" and will receive a discount of $" + discount + " bringing your total to $" + (shoppers.amount- discount).toFixed(2));
        }
        else {
            return console.log(shoppers.name + " spent $" + shoppers.amount + " but you needed to spend $" + (200-shoppers.amount) + " more to receive a discount, your total as of right now is $" + shoppers.amount);
        }

        }

    );


    var books = [
        // {
        //     title: "The Handmaid's Tale",
        //     author: {
        //         firstName: "Margaret" ,
        //         lastName: "Atwood"
        //     }
        // },
        // {
        //     title: "2666",
        //     author: {
        //         firstName: "Roberto" ,
        //         lastName: "Bolaño"
        //     }
        // },
        // {
        //     title: "Desert Solitaire",
        //     author: {
        //         firstName: "Edward" ,
        //         lastName: "Abbey"
        //     }
        // },
        // {
        //     title: "Geek Love",
        //     author: {
        //         firstName: "Katherine" ,
        //         lastName: "Dunn"
        //     }
        // },
        // {
        //     title: "To Kill A Mockingbird",
        //     author: {
        //         firstName: "Harper" ,
        //         lastName: "Lee"
        //     }
        // }

    ];





    // books.forEach(function(book, index){
    //     console.log("Book #" +(index+1));
    //     console.log("Title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //     console.log("---")
    // });



    var addAnother = true;
    while (addAnother === true) {
        var con = confirm("Would you like to add another book");
        if (con === true){
            addAnother = true;
            function createBook(){
                var booktitle =prompt("Enter the title of the book");
                var aFirstName= prompt("Enter the Author's first name");
                var aLastName= prompt("Enter the Author's last name");
                return {
                    title: booktitle,
                    author: {
                        firstName: aFirstName,
                        lastName: aLastName
                    }
                }
            }
            books.push(createBook());
        }
        else {
            addAnother = false;
        }

    }




    books.forEach(function(book, index){
        console.log("Book #" +(index+1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---")
    });

})();
