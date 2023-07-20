const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      //1. change the classname of the card
      card.className = 'card turned';

      // 2. get the name of that card
      const cardName = card.getAttribute('data-card-name');

      // 3. we add it to the array so we can store it to compare it later
      memoryGame.pickedCards.push(cardName);

      const allTurnedCards = document.querySelectorAll('.turned');
      const pairsClickedSpan = document.getElementById("pairs-clicked");
      const pairsGuessedSpan = document.getElementById("pairs-guessed")

      const turnBackNoneBlockedCards = () => {
        allTurnedCards.forEach((turnedCard) => {
          if (!turnedCard.classList.contains('blocked')) {
            turnedCard.classList.remove('turned');
          }
        })
      }
      const blockTurnedCards = () => {
        allTurnedCards.forEach((turnedCard) => {
          turnedCard.classList.add('blocked')
        })
      }
      
      const updateScore = () => {
        pairsClickedSpan.innerHTML = memoryGame.pairsClicked;
        pairsGuessedSpan.innerHTML = memoryGame.pairsGuessed;
      }
      

      if (memoryGame.pickedCards.length === 2) {
        
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
          blockTurnedCards()
        } else {
          setTimeout(turnBackNoneBlockedCards, 500)
        }
        memoryGame.pickedCards = [];
        updateScore()
      }

      console.log(memoryGame);
      // TO-DO: write some code here
      console.log(`Card clicked: ${card}`);
    });
  });
});

