document.addEventListener('DOMContentLoaded', ()=>{

//card options
const cardArray = [
  {
    name: '1',
    img: 'images/1.png'
  },
  {
    name: '1',
    img: 'images/1.png'
  },
  {
    name: '2',
    img: 'images/2.png'
  },
  {
    name: '2',
    img: 'images/2.png'
  },
  {
    name: '3',
    img: 'images/3.png'
  },
   {
    name: '3',
    img: 'images/3.png'
  },
   {
    name: '4',
    img: 'images/4.png'
  },
  {
    name: '4',
    img: 'images/4.png'
  },{
    name: '5',
    img: 'images/5.png'
  },
  {
    name: '5',
    img: 'images/5.png'
  }, {
    name: '6',
    img: 'images/6.png'
  },
  {
    name: '6',
    img: 'images/6.png'
  },
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardChosen = []
var cardChosenId = []
var cardsWon = []

//creating gameBoard

function createBoard(){
  for (let i = 0; i < cardArray.length; i++){
    var card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card);
  }
} 

createBoard();


// check for matches

function checkForMatch(){
  var cards = document.querySelectorAll('img')
  const optionOneId = cardChosenId[0]
  const optionTwoId = cardChosenId[1]
  if (cardChosenId[0] === cardChosenId[1]){
    alert("you have found a match!")
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cardsWon.push(cardChosen)
  }else{
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert("sorry babe try again")
  }
  cardChosen = []
  cardChosenId = []
  resultDisplay.textContent = cardsWon.length
  if(cardsWon.length === cardArray.length/2){
    resultDisplay.textContent = "CONGRATS"
  }
 
}

//flip your card

function flipCard(){
  var cardId = this.getAttribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  cardChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardChosen.length ===2){
    setTimeout(checkForMatch, 500)
  }
}


})
