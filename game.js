// Scores
let humanScore = 0;
let computerScore = 0;
// let gameRounds = 0;

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
    let answer = prompt("Choose 'Rock', 'Paper' or 'Scissors' to play the game! (5 Rounds)").toLowerCase();
    return answer;
}

// console.log(getHumanChoice());

// Play round & outcomes code
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        //++gameRounds;
        console.log(`It's a TIE! You both chose ${humanChoice}, better luck next round!`);  
        console.log(`You (${humanScore}) - Computer (${computerScore})`)

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        //++gameRounds;
        ++humanScore;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`)
        console.log(`You WON!, ${humanChoice} beats ${computerChoice}!`)
        console.log(`You (${humanScore}) - Computer (${computerScore})`)

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        //++gameRounds;
        ++computerScore;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`)
        console.log(`Unforunately you lost, ${computerChoice} beats ${humanChoice}!`)
        console.log(`You (${humanScore}) - Computer (${computerScore})`)

    } else if (humanChoice === "rock" && computerChoice === "paper") {
        //++gameRounds;
        ++computerScore;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`)
        console.log(`Unforunately you lost, ${computerChoice} beats ${humanChoice}!`)
        console.log(`You (${humanScore}) - Computer (${computerScore})`)

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        //++gameRounds;
        ++humanScore;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`)
        console.log(`You WON!, ${humanChoice} beats ${computerChoice}!`)
        console.log(`You (${humanScore}) - Computer (${computerScore})`)

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        //++gameRounds;
        ++humanScore;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`)
        console.log(`You WON!, ${humanChoice} beats ${computerChoice}!`)
        console.log(`You (${humanScore}) - Computer (${computerScore})`)
        
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        //++gameRounds;
        ++computerScore;
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}!`)
        console.log(`Unforunately you lost, ${computerChoice} beats ${humanChoice}!`)
        console.log(`You (${humanScore}) - Computer (${computerScore})`)
    }
}

// function to make only 5 rounds and decide the winner/loser based on score
function playGame() {
        // for (let i = 0; gameRounds < 5; ++i) {
        // Below is a better/simpler and cleaner version for the loop, rather than using the one above and adding ++gameRounds for each if statement (outcome)
        for (let gameRounds = 0; gameRounds < 5; ++gameRounds) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
            playRound(humanSelection, computerSelection);
    } 

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game woohoo!");
        console.log(`Final Score: You (${humanScore}) vs Computer (${computerScore})`);
    } else if (computerScore > humanScore) {
        console.log("Oh!! You lost the game :( Better luck next time!");
        console.log(`Final Score: You (${humanScore}) vs Computer (${computerScore})`);
    } else { 
        console.log("Game is over and it's a TIE!");
        console.log(`Final Score: You (${humanScore}) vs Computer (${computerScore})`);
    }
}

// runs the game

playGame();

