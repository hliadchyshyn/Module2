function Deck(n) {
    this.amount = n;
    let deckTemplate = new Array(n).fill('');
    const amounts = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'].reverse();
    const suits = ['s', 'c', 'd', 'h'];
    deckTemplate = deckTemplate.map((item, index) => amounts[index % (n / 4)] + suits[parseInt(index / (n / 4))]);
    // for (let i = 0; i < n; i++){
    // let card = amounts[i%(n/4)]+suits[parseInt(i/(n/4))];
    //     deck.push(card);
    // }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let deck = [...deckTemplate];
    this.shuffle = () => {
        let deckTemp = [...deck];
        deck = [];
        while (deckTemp.length) {
            deck.push(deckTemp.splice(getRandomInt(0, deckTemp.length),1)[0]);
        }
        return 'shuffle succeeded';
    };

    this.takeOne = () => deck.shift();
    this.getDeck = () => deck;


}

const testDeck = new Deck(36);
console.log(testDeck);
// console.log(testDeck.takeOne());
console.log(testDeck.shuffle());
console.log(testDeck.getDeck());

