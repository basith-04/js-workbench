let cards = []
let sum = 0
let alive = true
let blackJack = false
let player = {
    name: "basith", chips: 100
}
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent=player.name+" :"+player.chips

let message = "Start the game "

function getCard() {
    let card = Math.floor(Math.random() * 13) + 1
    if (card === 1)
        return 11
    else if (card > 10)
        return 10
    else
        return card
}
function startGame() {
    console.log("heyy")
    cards.length = 0
    sum = 0
    alive = true
    blackJack = false
    cards[0] = getCard()
    cards[1] = getCard()
    sum = cards[0] + cards[1]
    rendergame()

}

function rendergame() {
    cardsEl.textContent = "Cards:"
    sumEl.textContent = "Sum: " + sum
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum == 21) {
        message = "you got a black jack"
        blackJack = true

    }
    else if (sum < 21)
        message = "take a new card"
    else {

        message = "sorry you lose"
        alive = false
    }
    messageEl.textContent = message


}
function newCard() {
    if (alive && !blackJack) {
        let newel = getCard()
        cards.push(newel)
        sum += newel
        rendergame()

    }
}
