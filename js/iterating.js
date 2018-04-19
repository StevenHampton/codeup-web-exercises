(function(){
    "use strict";




    var names = ["John", "Eric", "Ray", "Diana"];




    console.log(names.length);




    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);





    function showName(name){
        console.log(name);
    }
    var i;
    for (i = 0; i < names.length; i++){
    showName(names[i]);
    }



    // names.forEach(function(name)){
    //     console.log(name);
    // }
    //
    // names.forEach(showName);
    //



})();
