import { CardInterface, DeckInterface } from '../types';

export default class Deck {

    cards: Array<CardInterface>

    constructor() {
        this.cards = this.create();
    }

    create(): Array<CardInterface> {
        let tempDeck: Array<CardInterface> = [];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const suits = ['H', 'D', 'C', 'S'];

        // In a single deck, there is exactly one card of any given rank in any given suit
        ranks.forEach((rank) => {
            suits.forEach((suit) => {
                tempDeck.push({rank: rank, suit:suit})
            })
        });

        return tempDeck;
    }

    // remove a card from the deck
    draw() {
        const card = this.cards.pop();
        return card;
    }

    // we dont want the user to be able to call shuffleArray directly
    shuffle(){}
}