(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;




    planetsArray = planetsString.split('|');

    console.log(planetsArray);




    var brPlanetsString = planetsArray.join("<br>");
    console.log(brPlanetsString);


    console.log('<ul><li>' + planetsArray.join('</li><li>') + '</li></ul>');
    document.write('<ul><li>' + planetsArray.join('</li><li>') + '</li></ul>');
})();
