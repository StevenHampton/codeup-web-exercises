"use strict";
const wait = function(number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number) {
                resolve();
            } else {
                reject();
            }
        }, number);
    });
};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

fetch('https://api.github.com/users/stevenhampton/events', {headers: {'Authorization': 'token KEY'}})
    .then((response) => response.json())
    .then((events) => events[0])
    .then((user) => user.created_at)
    .then ((date) => console.log(date));
