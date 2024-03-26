const previewButton = document.getElementById('preview-button')
const saveButton = document.getElementById('save-button')

const toField = document.getElementById('to-input')
const fromField = document.getElementById('from-input')
const titleField = document.getElementById('title-input')
const subtitleField = document.getElementById('subtitle-input')
const messageField = document.getElementById('message-input')

const titleText = document.querySelector('.title-text')
const subtitleText = document.querySelector('.subtitle-text')
const toText = document.querySelector('.to-text')
const fromText = document.querySelector('.from-text')
const messageText = document.querySelector('.message-text')

previewButton.addEventListener('click', () => {
  titleText.innerHTML = titleField.value;
  subtitleText.innerHTML = subtitleField.value;
  toText.innerHTML = toField.value;
  fromText.innerHTML = fromField.value;
  messageText.innerHTML = messageField.value;
});

saveButton.addEventListener('click', () => {
  const cards = localStorage.getItem('cards')
  var cardObjects = [];
  if (cards) {
    cardObjects = JSON.parse(cards)
  }

  const newCard = {
    to: toField.value,
    from: fromField.value,
    title: titleField.value,
    subtitle: subtitleField.value,
    message: messageField.value
  };

  cardObjects[cardObjects.length] = newCard
  localStorage.setItem('cards', JSON.stringify(cardObjects))
})