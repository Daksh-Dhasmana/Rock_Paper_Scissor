function playRound(huma, comp) {
    if (huma === comp) return 0;
    if (huma > comp) return 1;
    if (huma < comp) return -1;
}

function getHumanChoice() {
    let hum = prompt("Enter Paper, Scissor, or Rock:");
    if (hum === "Paper") return 0;
    if (hum === "Scissor") return 1;
    if (hum === "Rock") return 2;
}

function getComputerChoice() {
    // This returns 0, 1, or 2 to match the human choices
    return Math.floor(Math.random() * 3);
}

let humsc = 0;
let compsc = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        // We get new choices every round inside the loop
        let huma = getHumanChoice();
        let comp = getComputerChoice();
        
        let res = playRound(huma, comp);
        
        if (res === 1) {
            humsc++;
            console.log("You won this round!");
        } else if (res === -1) {
            compsc++;
            console.log("Computer won this round!");
        } else {
            console.log("It's a tie!");
        }
    }
}

playGame();

console.log("Player's Score: " + humsc);
console.log("Computer's Score: " + compsc);