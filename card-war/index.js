let deckId
const newDeckBtn=document.getElementById("new-deck")
const drawCardsBtn=document.getElementById("draw-cards")
function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            deckId = data.deck_id
        })
}

newDeckBtn.addEventListener("click", handleClick)
drawCardsBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            render(data)
           
        })
})
function render(data){
     document.getElementById("cards").innerHTML = `
                <img src=${data.cards[0].image} class="card" />
                <img src=${data.cards[1].image} class="card" />
            `
}
