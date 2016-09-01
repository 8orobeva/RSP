/**
 * Created by User on 01.09.2016.
 */
var userChoice = prompt("Do you choose rock, paper or scissors?");
console.log(userChoice);
document.getElementById("User-choice").innerHTML = userChoice;

var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
document.getElementById("Computer-choice").innerHTML = computerChoice;

var compare = function(userChoice, computerChoice){
    if (userChoice === computerChoice){
        alert("The result is a tie!");
    }
    else if (userChoice === "rock"){
        if (computerChoice === "paper"){
            alert("paper wins");
        }
        else {
            alert("rock wins");
        }
    }
    else if (userChoice === "paper"){
        if (computerChoice === "scissors"){
            alert("scissors wins");
        }
        else {
            alert("paper wins");
        }
    }
    else if (userChoice === "scissors"){
        if (computerChoice === "paper"){
            alert("scissors wins");
        }
        else {
            alert("rock wins");
        }
    }
    else{
        alert("Your choice isn't correct")
    }
};
compare(userChoice, computerChoice);

//What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that?
//What if players in the game could also choose Rope in this game?
//In this version, if both players make the same choice, the game returns a tie.
//What if the game didn't end there but instead asked both players for new choices?