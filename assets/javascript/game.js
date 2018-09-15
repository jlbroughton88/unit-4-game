//Pseudo Code for Crystal Collector
var randomResult;
var loss;
var winCount;
var randomValueArray = [];

// Loop that makes divs that can be used for buttons
// 4 crystals
for (var i = 0; i < 4; i++) {
    var randomValue = Math.floor(Math.random() * 20)
    var crystal = $("<div>")
        crystal.attr("class", "crystal");
    console.log(randomValue);


    $("#crystalGroup").append(crystal);
}

$( ".crystal" ).click(function() {
    alert( "This crystal is worth " + randomValueArray[i] );

    for(var i = 0; i < randomValueArray.length; i++) {
    randomValueArray[i] = randomValue
    "crystal" === randomValue
    }
  });


// A game with 4 crystals
// Every crystal needs to have a random number
// A new random number should be generate every single time we win or lose
    // When clicking any crystal, it should be adding with the previous until it equals the randomly generated score
    // If it is greater than the random result, then we lose and end the game
    // If it is equal, then we increment a win counter  
