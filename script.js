let choices = document.querySelectorAll('.choices'),
    score = document.querySelector('#score'),
    modal = document.querySelector('.modal'),
    result = document.querySelector('#result'),
    restrat = document.querySelector('#restart'),
    player = 0,
    computer = 0,
    draw = 0;

// Play game
function playGame(event) {
    restrat.style.display = 'inline-block'
    const playerChoices = event.target.id
    const computerChoice = getComputerChoices()
    const winner = getWinner(playerChoices, computerChoice)
    showWinner(winner, computerChoice)
}


// Get computer choices
function getComputerChoices() {
    const random = Math.random()
    if (random < 0.34) return 'rock'
    if (random <= 0.67) return 'paper'
    return 'scissors'
}


// Get winner
function getWinner(p, c) {
    if (p===c) return 'draw'
    if (p === 'rock') return c === 'paper' ? 'computer': 'player'
    if (p === 'paper') return c === 'scissors' ? 'computer': 'player'
    if (p === 'scissors') return c === 'rock' ? 'computer': 'player'
    
}

// Show Winner 
function showWinner(winner, getComputerChoice) {
    if (winner === 'player') {
        player++
        result.innerHTML = `
        <h1 class="text-win">You win</h1>
        <i class="fas fa-hand-${getComputerChoice} fa-10x"></i>
        <p>Computer Chose: <strong>${getComputerChoice.charAt(0).toUpperCase() + getComputerChoice.slice(1)}</strong></p>
        `
    }
    else if (winner === 'computer') {
        computer++
        result.innerHTML = `
        <h1 class="text-lose">You lose</h1>
        <i class="fas fa-hand-${getComputerChoice} fa-10x"></i>
        <p>Computer Chose: <strong>${getComputerChoice.charAt(0).toUpperCase() + getComputerChoice.slice(1)}</strong></p>
        `
    } else {
        draw++
        result.innerHTML = `
        <h1>It's A Draw</h1>
        <i class="fas fa-hand-${getComputerChoice} fa-10x"></i>
        <p>Computer Chose: <strong>${getComputerChoice.charAt(0).toUpperCase() + getComputerChoice.slice(1)}</strong></p>
        `
    }

    score.innerHTML = `
    <p> Player: ${player}</p>
    <p> Draw: ${draw}</p>
    <p> Computer: ${computer}</p>
    `
    modal.style.display = 'block'
}

// Restrat game
function restratGame() {
    player = 0
    computer = 0
    draw = 0
    score.innerHTML = `
    <p> Player: ${player}</p>
    <p> Draw: ${draw}</p>
    <p> Computer: ${computer}</p>
    `
}

// Clear Modal
function clearModal(event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

// event Listener

choices.forEach(choice => choice.addEventListener('click', playGame))
window.addEventListener('click', clearModal)
restrat.addEventListener('click', restratGame)