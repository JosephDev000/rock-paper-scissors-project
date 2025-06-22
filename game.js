/* Plan 
Get user input choice rock paper or scissors
Start game and start round 1 of 5
Generate 3 computer choices
If user input wins computer choice end round 1 with a winning msg and increment the winner
Go to round 2,3,4 and 5
Display the winning msg for winner of game
*/

// Scores
let humanScore = 0;
let computerScore = 0;

// Get & randomize computer choice

function getComputerChoice () {
    let randomChoice = Math.floor(Math.random() * 3)

     if (randomChoice === 0) {
        return "paper"
     } else if (randomChoice === 1) {
        return "rock"
     } else {
        return "scissors"
     }

}

 // Get human choice from prompt
function getHumanChoice() {
    let answer = prompt("Choose 'Rock', 'Paper' or 'Scissors' to play the game!").toLowerCase();
    return answer;
}

// console.log(getHumanChoice());

// Play round code
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a TIE! You both chose ${humanChoice}, better luck next round!`);  
        console.log(`You (${humanScore}) - Computer (${computerScore})`)

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`)
        console.log(`You WON!, ${humanChoice} beats ${computerChoice}!`)
        console.log(`You (${humanScore}) - Computer (${computerScore})`)

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        ++computerScore;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`)
        console.log(`Unforunately you lost, ${computerChoice} beats ${humanChoice}!`)
        console.log(`You (${humanScore}) - Computer (${computerScore})`)

    } else if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`)
        console.log(`Unforunately you lost, ${computerChoice} beats ${humanChoice}!`)
        console.log(`You (${humanScore}) - Computer (${computerScore})`)

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        ++humanScore;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`)
        console.log(`You WON!, ${humanChoice} beats ${computerChoice}!`)
        console.log(`You (${humanScore}) - Computer (${computerScore})`)

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`)
        console.log(`You WON!, ${humanChoice} beats ${computerChoice}!`)
        console.log(`You (${humanScore}) - Computer (${computerScore})`)
        
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        ++computerScore;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`)
        console.log(`Unforunately you lost, ${computerChoice} beats ${humanChoice}!`)
        console.log(`You (${humanScore}) - Computer (${computerScore})`)
}
}

function playGame() {
        for (let i = 0; humanScore < 5 && computerScore < 5;  ++i) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
            playRound(humanSelection, computerSelection);
    } 

    if (humanScore === 5) {
        console.log("Congratulations! You won the game woohoo!");
        console.log(`Final Score: You (${humanScore}) vs Computer (${computerScore})`);
    } else if (computerScore === 5) {
        console.log("Oh!! You lost the game :( Better luck next time!");
        console.log(`Final Score: You (${humanScore}) vs Computer (${computerScore})`);
    }
}

playGame();

