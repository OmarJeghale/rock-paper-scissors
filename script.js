let random = Math.random()
function getComputerChoice() {

    if (random >= 0 && random <= 0.33) {
        return 'rock'
    }

    if (random > 0.33 && random <= 0.66) {
        return 'paper'
    }

    if (random > 0.66 && random <= 1) {
        return 'scissors'
    }
}