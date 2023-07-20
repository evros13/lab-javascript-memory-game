class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }

  shuffleCards() {

    if (this.cards === undefined) {
      return undefined
    }

    else {
    for (let i = 0; i < this.cards.length; i++) {

      let temporaryCard = this.cards[i];  
      let randomIndex = Math.floor(Math.random() * this.cards.length)
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryCard;
    }
    return this.cards
  }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked = this.pairsClicked + 1
    
    if (card1 === card2) {
      this.pairsGuessed = this.pairsGuessed + 1
      return true
    }
    
    else {
      return false
    }
  }
  
  checkIfFinished() {
    let pairs = this.cards.length / 2
 
    if (this.pairsGuessed === pairs) {
      return true
    }
    else {
      return false
    }
  }
}
