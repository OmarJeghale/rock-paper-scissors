// Main function to play the game
function playGame() {

    // Welcome message
    console.log("Welcome to Rock Paper Scissors! Let's play 5 rounds.")

    // Get a random computer choice
    function getComputerChoice() {
        let random = Math.random()

        if (random <= 0.33) {
            return 'rock'
        } else if (random <= 0.66) {
            return 'paper'
        } else {
            return 'scissors'
        }
    }

    // Get the human choice
    function getHumanChoice() {
        let user_input = prompt("Enter 'rock', 'paper', or 'scissors'")
        return user_input.toLowerCase()
    }

    // Variables to count the score
    let humanScore = 0
    let computerScore = 0

    // Play a round
    function playRound (humanChoice, computerChoice) {

        // Log the choices of each player
        console.log(`You chose: ${humanChoice}`)
        console.log(`Computer chose: ${computerChoice}`)

        // Handle case of a tie
        if (humanChoice == computerChoice) {
            console.log("It's a tie!")
        } else if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
                    (humanChoice === 'paper' && computerChoice === 'rock') || 
                    (humanChoice === 'scissors' && computerChoice === 'paper')) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
            humanScore++
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
    }
    
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)
        console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`)
        console.log('--------------------------------')
    }
    
    // Declare the winner
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`)
    if (humanScore > computerScore) {
        console.log('You won the game! :D')
    } else if (computerScore > humanScore) {
        console.log('You lost the game! :(')
    } else {
        console.log("It's a draw! :p")
    }
}

// Give the user 7 seconds before the game starts
setTimeout(() => {
    playGame();
}, 7000);