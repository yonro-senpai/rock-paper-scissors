let getComputerChoice = () => {
    const randInt = Math.floor(Math.random() * 3);
    if (randInt === 0) {
        return "Rock"
    } else if (randInt === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
};

let getHumanChoice = () => prompt('Enter "Rock", "Paper" or "Scissors"');

function playGame() {
    let humanScore = 0;
    let computerScore = 0; 

    let playRound = (humanChoice, computerChoice) => {
        let human = humanChoice.toLowerCase(); 
        let computer = computerChoice.toLowerCase();
        if (human === "rock") {
            if (computer === "rock") {
                console.log("It's a tie! Both of us choice 'Rock' ")
            } else if (computer === "paper") {
                computerScore = computerScore + 1;
                console.log("You Lose! Paper beats Rock")
            } else {
                humanScore = humanScore + 1;
                console.log("You Win! Rock beats Scissors")
            }
            console.log("Human score: " + humanScore + "   Computer's score: " + computerScore)
        } else if (human === "paper") {
            if (computer === "paper") {
                console.log("It's a tie! Both of us choice 'Paper' ")
            } else if (computer === "scissors") {
                computerScore = computerScore + 1;
                console.log("You Lose! Scissors beats Paper")
            } else {
                humanScore = humanScore + 1;
                console.log("You Win! Paper beats Rock")
            }
            console.log("Human score: " + humanScore + "   Computer's score: " + computerScore)
        } else if (human === "scissors") {
            if (computer === "scissors") {
                console.log("It's a tie! Both of us choice 'Scissors' ")
            } else if (computer === "rock") {
                computerScore = computerScore + 1;
                console.log("You Lose! Rock beats Scissors")
            } else {
                humanScore = humanScore + 1;
                console.log("You Win! Scissors beats Paper")
            }
            console.log("Human score: " + humanScore + "   Computer's score: " + computerScore)
        }
    }

    let round = 1;
    while (round <= 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("Your Choice " + humanSelection + ", Computer's Choice " + computerSelection)
        playRound(humanSelection, computerSelection);
        round = round + 1;
    }
    console.log("Final Scores are here!")
    if (humanScore === computerScore) {
        console.log("It's a tie! Both scored " + computerScore);
    } else if (humanScore > computerScore) {
        console.log("You Win! You beat Computer by " + (humanScore - computerScore) + " point")
    } else {
        console.log("Better Luck Next time, You Lose! Computer beats you by " + (computerScore - humanScore) + " point")

    }
}

playGame()