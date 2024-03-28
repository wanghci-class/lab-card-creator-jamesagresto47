let cards = JSON.parse(localStorage.getItem("cards"))
const cardList = document.getElementById("card-list")
const cardTemplate = document.getElementById("card-template")

for (let i = 0; i < cards.length; i++) {
    const card = cards[i]
    const cardView = cardTemplate.content.cloneNode(true)

    let titleText = cardView.querySelector(".title-text")
    titleText.textContent = card.title
    
    let subtitleText = cardView.querySelector(".subtitle-text")
    subtitleText.textContent = card.subtitle
    
    let toText = cardView.querySelector(".to-text")
    toText.textContent = card.to

    let fromText = cardView.querySelector(".from-text")
    fromText.textContent = card.from
    
    let messageText = cardView.querySelector(".message-text")
    messageText.textContent = card.message
    
    let deleteButton = cardView.querySelector(".delete-btn")
    deleteButton.addEventListener("click", () => {
        cards.splice(i, 1)
        localStorage.setItem("cards", JSON.stringify(cards))
        location.reload()
    })

    function updateCard() {
        card.title = titleText.textContent
        card.subtitle = subtitleText.textContent
        card.to = toText.textContent
        card.from = fromText.textContent
        card.message = messageText.textContent

        localStorage.setItem("cards", JSON.stringify(cards))
    }

    titleText.addEventListener("input", updateCard)
    subtitleText.addEventListener("input", updateCard)
    toText.addEventListener("input", updateCard)
    fromText.addEventListener("input", updateCard)
    messageText.addEventListener("input", updateCard)

    cardList.appendChild(cardView)
}