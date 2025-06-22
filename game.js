/* Plan 
Get user input choice rock paper or scissors
Start game and start round 1 of 5
Generate 3 computer choices
If user input wins computer choice end round 1 with a winning msg and increment the winner
Go to round 2,3,4 and 5
Display the winning msg for winner of game
*/

// Game Scores
let playerScore = 0;
let computerScore = 0;


let getHumanChoice = prompt("Choose 'Rock', 'Paper' or 'Scissors' to play the game!", );


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    
    if (random === 0) {
        return "Paper";
    } else if (random === 1) {
        return "Rock";
    } else {
        return "Scissors";
    }
}
    console.log(getComputerChoice());
